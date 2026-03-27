import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { teams, Team, Player, schedule, Match, pointsTable } from './data';
import { ChevronLeft, Users, Shield, Zap, Check, X, Trophy, Calendar, MapPin, Info, LayoutList, ListOrdered, Sun, Moon } from 'lucide-react';
import logoLight from '../logo_light_mode.png';
import logoDark from '../logo_dark_mode.png';
import iplHero from '../ipl.jpeg';

type Screen = 'teams' | 'squad' | 'builder' | 'dashboard' | 'schedule' | 'schedule_list' | 'match_details' | 'compare_xi' | 'fantasy_xi' | 'points_table';
type SavedXI = { playing11: Player[]; impactPlayer: Player | null };

const SAVED_XI_KEY = 'ipl-builder-saved-xis';
const FANTASY_XI_KEY = 'ipl-builder-fantasy-xis';

const safeReadStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;

  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
};

const getPlayerImageClass = (playerId: string, baseClassName: string) => `${baseClassName} ${playerId.startsWith('rcb') ? 'scale-[1.55] origin-bottom' : ''}`;

const Navigation = ({
  currentScreen,
  setCurrentScreen,
  isDark,
  onToggleTheme,
  onLogoClick,
  isMobileHeaderVisible
}: {
  currentScreen: Screen,
  setCurrentScreen: (s: Screen) => void,
  isDark: boolean,
  onToggleTheme: () => void,
  onLogoClick: () => void,
  isMobileHeaderVisible: boolean
}) => {
  const navItems = [
    { id: 'schedule', label: 'Matches', icon: Calendar },
    { id: 'points_table', label: 'Standings', icon: ListOrdered },
    { id: 'teams', label: 'Teams', icon: Shield },
  ];
  const showBottomNav = ['schedule', 'schedule_list', 'points_table', 'teams'].includes(currentScreen);

  return (
      <>
        {/* Mobile Top Header */}
        <div className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${currentScreen === 'schedule' ? (isMobileHeaderVisible ? 'translate-y-0' : '-translate-y-full') : 'translate-y-0'}`}>
          <div className={`mx-4 mt-3 rounded-2xl px-4 py-3 backdrop-blur-xl border flex items-center justify-between ${isDark ? 'bg-black/80 border-white/20' : 'bg-white/95 border-black/20 shadow-lg shadow-black/5'}`}>
            <button onClick={onLogoClick} className="flex items-center" aria-label="Go to home">
              <img src={isDark ? logoLight : logoDark} alt="Logo" className="h-16 w-auto object-contain" />
            </button>
            <button onClick={onToggleTheme} className={`p-2 rounded-full border transition-colors ${isDark ? 'border-white/15 text-white hover:bg-white/10' : 'border-black/25 text-black hover:bg-black/5'}`} aria-label="Toggle theme">
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Bottom Nav */}
        <div className={`md:hidden fixed bottom-6 left-6 right-6 z-50 transition-opacity ${showBottomNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className={`backdrop-blur-[40px] border rounded-full overflow-hidden relative shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] ${isDark ? 'bg-white/5 border-white/20' : 'bg-white border-black/20'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="relative flex justify-around items-center h-14 px-1">
              {navItems.map(item => {
                const isActive = currentScreen === item.id;
                return (
                    <button
                        key={item.id}
                        onClick={() => setCurrentScreen(item.id as Screen)}
                        className={`flex flex-col items-center justify-center w-full h-full space-y-0.5 relative transition-colors duration-300 ${isActive ? (isDark ? 'text-white' : 'text-black') : (isDark ? 'text-white/40 hover:text-white/70' : 'text-black/40 hover:text-black/70')}`}
                    >
                      {isActive && (
                          <motion.div
                              layoutId="mobile-nav-pill"
                              className="absolute inset-1 bg-white/10 rounded-full border border-white/25 shadow-[inset_0_1px_4px_rgba(255,255,255,0.2)]"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                      )}
                      <item.icon className={`w-4 h-4 relative z-10 transition-transform duration-300 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]' : ''}`} />
                      <span className="text-[9px] font-bold uppercase tracking-wider relative z-10">{item.label}</span>
                    </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop Top Nav */}
        <div className={`hidden md:block fixed top-0 left-0 right-0 backdrop-blur-xl border-b z-50 ${isDark ? 'bg-[#000000]/95 border-white/20' : 'bg-white/95 border-black/20 shadow-sm'}`}>
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <button className="flex items-center cursor-pointer" onClick={onLogoClick} aria-label="Go to home">
              <img src={isDark ? logoLight : logoDark} alt="Logo" className="h-16 w-auto object-contain" />
            </button>
            <div className="flex items-center gap-1">
              <button onClick={onToggleTheme} className={`mr-2 p-2 rounded-full border transition-colors ${isDark ? 'border-white/15 text-white hover:bg-white/10' : 'border-black/25 text-black hover:bg-black/5'}`} aria-label="Toggle theme">
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              {navItems.map(item => (
                  <button
                      key={item.id}
                      onClick={() => setCurrentScreen(item.id as Screen)}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${currentScreen === item.id ? (isDark ? 'bg-white/10 text-white' : 'bg-black/10 text-black') : (isDark ? 'text-slate-400 hover:text-slate-200 hover:bg-white/5' : 'text-slate-600 hover:text-black hover:bg-black/5')}`}
                  >
                    {item.label}
                  </button>
              ))}
            </div>
          </div>
        </div>
      </>
  );
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('schedule');
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [playing11, setPlaying11] = useState<Player[]>([]);
  const [impactPlayer, setImpactPlayer] = useState<Player | null>(null);
  const [savedXIs, setSavedXIs] = useState<Record<string, SavedXI>>(() => safeReadStorage(SAVED_XI_KEY, {}));
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [fantasyXI, setFantasyXI] = useState<Record<string, Player[]>>(() => safeReadStorage(FANTASY_XI_KEY, {}));
  const [showBuilderRoster, setShowBuilderRoster] = useState(false);
  const [showFantasyRoster, setShowFantasyRoster] = useState(false);
  const [builderReturnScreen, setBuilderReturnScreen] = useState<Screen | null>(null);
  const [expandedTeamId, setExpandedTeamId] = useState<string | null>(null);
  const [isDark, setIsDark] = useState<boolean>(() => safeReadStorage('cricto-theme-dark', true));
  const [isLogoTransitioning, setIsLogoTransitioning] = useState(false);
  const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(true);

  useEffect(() => {
    window.localStorage.setItem(SAVED_XI_KEY, JSON.stringify(savedXIs));
  }, [savedXIs]);

  useEffect(() => {
    window.localStorage.setItem(FANTASY_XI_KEY, JSON.stringify(fantasyXI));
  }, [fantasyXI]);

  useEffect(() => {
    window.localStorage.setItem('cricto-theme-dark', JSON.stringify(isDark));
    document.body.classList.toggle('theme-dark', isDark);
    document.body.classList.toggle('theme-light', !isDark);
  }, [isDark]);

  useEffect(() => {
    if (currentScreen !== 'schedule') {
      setIsMobileHeaderVisible(false);
      return;
    }

    setIsMobileHeaderVisible(true);
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setIsMobileHeaderVisible(currentY < 24 || currentY <= lastY);
      lastY = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [currentScreen]);

  useEffect(() => {
    if (currentScreen !== 'builder') setShowBuilderRoster(false);
    if (currentScreen !== 'fantasy_xi') setShowFantasyRoster(false);
    if (currentScreen !== 'builder' && currentScreen !== 'compare_xi') setBuilderReturnScreen(null);
    if (currentScreen !== 'points_table') setExpandedTeamId(null);
  }, [currentScreen]);

  const builderSummary = useMemo(() => {
    const canAddMore = playing11.length < 11;
    const nextAction = canAddMore
        ? `Select ${11 - playing11.length} more player${playing11.length === 10 ? '' : 's'} for your XI.`
        : impactPlayer
            ? 'Squad complete. Review the balance or open the dashboard.'
            : 'Choose one impact player to finish the squad.';

    return nextAction;
  }, [impactPlayer, playing11.length]);

  const handleTeamSelect = (team: Team, nextScreen: Screen = 'squad', returnScreen: Screen | null = null) => {
    setSelectedTeam(team);
    if (savedXIs[team.id]) {
      setPlaying11(savedXIs[team.id].playing11);
      setImpactPlayer(savedXIs[team.id].impactPlayer);
    } else {
      setPlaying11([]);
      setImpactPlayer(null);
    }
    setBuilderReturnScreen(returnScreen);
    setCurrentScreen(nextScreen);
  };

  const saveCurrentXI = (newPlaying11: Player[], newImpactPlayer: Player | null) => {
    if (selectedTeam) {
      setSavedXIs(prev => ({
        ...prev,
        [selectedTeam.id]: { playing11: newPlaying11, impactPlayer: newImpactPlayer }
      }));
    }
  };

  const handlePlayerToggle = (player: Player) => {
    const isPlaying11 = playing11.some(p => p.id === player.id);
    const isImpact = impactPlayer?.id === player.id;

    let newPlaying11 = [...playing11];
    let newImpactPlayer = impactPlayer;

    if (isPlaying11) {
      newPlaying11 = playing11.filter(p => p.id !== player.id);
    } else if (isImpact) {
      newImpactPlayer = null;
    } else {
      if (playing11.length < 11) {
        newPlaying11 = [...playing11, player];
      } else if (!impactPlayer) {
        newImpactPlayer = player;
      }
    }

    setPlaying11(newPlaying11);
    setImpactPlayer(newImpactPlayer);
    saveCurrentXI(newPlaying11, newImpactPlayer);
  };

  const getPlayerStatus = (player: Player) => {
    if (playing11.some(p => p.id === player.id)) return 'Playing 11';
    if (impactPlayer?.id === player.id) return 'Impact Player';
    return null;
  };

  const handleFantasyPlayerToggle = (matchId: string, player: Player) => {
    const currentXI = fantasyXI[matchId] || [];
    const isSelected = currentXI.some(p => p.id === player.id);

    if (isSelected) {
      setFantasyXI(prev => ({
        ...prev,
        [matchId]: currentXI.filter(p => p.id !== player.id)
      }));
    } else if (currentXI.length < 11) {
      setFantasyXI(prev => ({
        ...prev,
        [matchId]: [...currentXI, player]
      }));
    }
  };

  const triggerLogoHomeAnimation = () => {
    setIsLogoTransitioning(true);
    setTimeout(() => {
      setCurrentScreen('schedule');
      setIsLogoTransitioning(false);
    }, 700);
  };

  return (
      <div className={`min-h-screen font-sans selection:bg-blue-500/30 pb-16 md:pb-0 pt-16 md:pt-16 transition-colors ${isDark ? 'bg-black text-slate-100' : 'bg-white text-slate-900'}`}>
        <Navigation
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
            isDark={isDark}
            onToggleTheme={() => setIsDark(prev => !prev)}
            onLogoClick={triggerLogoHomeAnimation}
            isMobileHeaderVisible={isMobileHeaderVisible}
        />
        {isLogoTransitioning && (
            <div className={`fixed inset-0 z-[70] flex items-center justify-center ${isDark ? 'bg-black' : 'bg-white'}`}>
              <motion.img
                  src={isDark ? logoLight : logoDark}
                  alt="Loading home"
                  initial={{ scale: 0.7, opacity: 0.2, rotate: -20 }}
                  animate={{ scale: [0.7, 1.15, 1], opacity: [0.2, 1, 1], rotate: [-20, 0, 6, 0] }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="h-32 w-auto object-contain"
              />
            </div>
        )}
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          {currentScreen === 'teams' && (
              <motion.div key="teams" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="max-w-6xl mx-auto p-4 sm:p-8">
                <div className="text-center mb-8 sm:mb-16 mt-4 sm:mt-12">
                  <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-3 sm:mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
                    IPL SQUAD BUILDER
                  </h1>
                  <p className="text-blue-200 text-sm sm:text-lg max-w-2xl mx-auto font-medium mb-5 sm:mb-8 px-2">
                    Select your favorite franchise, build your ultimate playing 11, and choose your game-changing impact player.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                  {teams.map((team) => (
                      <motion.button
                          whileHover={{ scale: 1.03, y: -5 }}
                          whileTap={{ scale: 0.98 }}
                          key={team.id}
                          onClick={() => handleTeamSelect(team)}
                          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-left transition-all duration-300 group border border-white/25 shadow-2xl bg-gradient-to-br ${team.gradient}`}
                      >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        <div className="relative z-10">
                          <img src={team.logoUrl} alt={team.shortName} className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 sm:mb-4 drop-shadow-xl" />
                          <h2 className="text-2xl sm:text-4xl font-black mb-1 sm:mb-2 tracking-tight text-white drop-shadow-md">{team.shortName}</h2>
                          <p className="text-white/90 font-bold text-xs sm:text-lg drop-shadow-sm line-clamp-2">{team.name}</p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
                      </motion.button>
                  ))}
                </div>
              </motion.div>
          )}

          {currentScreen === 'squad' && selectedTeam && (
              <motion.div key="squad" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className={`min-h-screen bg-gradient-to-br ${selectedTeam.gradient} p-3 sm:p-8 flex flex-col overflow-y-auto custom-scrollbar relative`}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 flex flex-col flex-1">
                  <header className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-12 max-w-7xl mx-auto w-full">
                    <button onClick={() => setCurrentScreen('teams')} className="w-fit px-3 sm:px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white text-sm sm:text-base font-bold flex items-center gap-2 backdrop-blur-md border border-white/25">
                      <ChevronLeft className="w-5 h-5" /> Back to Teams
                    </button>
                    <div className="flex items-center gap-3 sm:gap-6">
                      <img src={selectedTeam.logoUrl} alt={selectedTeam.shortName} className="w-12 h-12 sm:w-20 sm:h-20 object-contain drop-shadow-2xl" />
                      <div className="text-left">
                        <h2 className="text-xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-lg uppercase leading-tight">{selectedTeam.name}</h2>
                        <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full bg-gradient-to-r ${selectedTeam.gradient} shadow-lg text-[10px] sm:text-sm font-bold text-white uppercase tracking-wider mt-2`}>
                          Full Squad 2026
                        </div>
                      </div>
                    </div>
                    <button onClick={() => setCurrentScreen('builder')} className={`w-fit px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-black transition-all flex items-center gap-2 sm:gap-3 shadow-2xl bg-gradient-to-r ${selectedTeam.gradient} text-white hover:scale-105 border border-white/20 text-sm sm:text-lg`}>
                      Playing XI <ChevronLeft className="w-6 h-6 rotate-180" />
                    </button>
                  </header>

                  <div className="flex-1 max-w-7xl mx-auto w-full pb-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                      {selectedTeam.players.map(player => (
                          <motion.div whileHover={{ y: -5, scale: 1.02 }} key={player.id} className="bg-white/5 backdrop-blur-md border border-white/25 rounded-3xl p-4 sm:p-6 flex flex-col items-center text-center shadow-xl hover:bg-white/10 transition-all group">
                            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4 flex items-end justify-center">
                              <div className={`absolute inset-0 rounded-full p-1 bg-gradient-to-br ${selectedTeam.gradient} shadow-lg group-hover:shadow-2xl transition-all`}>
                                <div className="w-full h-full rounded-full bg-black/40" />
                              </div>
                              <img src={player.imageUrl} alt={player.name} className={getPlayerImageClass(player.id, "w-24 h-28 sm:w-28 sm:h-32 object-contain object-bottom relative z-10")} />
                            </div>
                            <h3 className="text-base sm:text-lg font-black text-white leading-tight mb-1">{player.name}</h3>
                            <span className="text-xs font-bold uppercase tracking-wider text-white/60">{player.role}</span>
                          </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
          )}

          {currentScreen === 'builder' && selectedTeam && (
              <motion.div key="builder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`min-h-screen lg:h-screen flex flex-col overflow-hidden bg-gradient-to-br ${selectedTeam.gradient}`}>
                <header className="flex-none bg-black/30 backdrop-blur-md border-b border-white/25 p-4 flex flex-wrap items-center justify-between gap-3 z-20 shadow-lg">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setCurrentScreen('squad')} className="p-2 hover:bg-black/20 rounded-full transition-colors text-white">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black flex items-center gap-2 text-white drop-shadow-sm">{selectedTeam.name}</h2>
                      <p className="text-sm font-medium text-white/80">{playing11.length}/11 Selected • {impactPlayer ? '1' : '0'}/1 Impact Player</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 ml-auto">
                    <button onClick={() => setShowBuilderRoster(prev => !prev)} className="lg:hidden px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold inline-flex items-center gap-2">
                      <LayoutList className="w-4 h-4" /> {showBuilderRoster ? 'Hide roster' : 'Show roster'}
                    </button>
                    <button disabled={playing11.length < 11} onClick={() => setCurrentScreen(builderReturnScreen === 'compare_xi' ? 'compare_xi' : 'dashboard')} className={`px-5 sm:px-6 py-2.5 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg ${playing11.length === 11 ? 'bg-white text-blue-900 hover:bg-blue-50 hover:scale-105' : 'bg-black/20 text-white/50 cursor-not-allowed'}`}>
                      {builderReturnScreen === 'compare_xi' ? 'Save & Compare' : 'View Dashboard'} <Trophy className="w-5 h-5" />
                    </button>
                  </div>
                </header>

                <div className="bg-black/25 border-b border-white/25 px-4 py-3 text-sm text-white/85 font-medium z-10">
                  {builderSummary}
                </div>

                <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="flex-1 relative p-4 sm:p-6 overflow-y-auto custom-scrollbar z-10 order-2 lg:order-1">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                      <img src={selectedTeam.logoUrl} alt={selectedTeam.name} className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] object-contain" />
                    </div>
                    <div className="max-w-4xl mx-auto relative z-10">
                      <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-emerald-400 uppercase tracking-wider">
                        <Shield className="w-6 h-6" /> Playing 11
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {Array.from({ length: 11 }).map((_, i) => {
                          const player = playing11[i];
                          return (
                              <div key={`slot-${i}`} className={`rounded-2xl border p-4 flex flex-col justify-center min-h-[110px] transition-all ${player ? 'bg-white/10 border-white/20 shadow-xl backdrop-blur-md' : 'bg-black/20 border-white/25 border-dashed text-white/40'}`}>
                                {player ? (
                                    <div className="flex items-center gap-3">
                                      <div className="relative w-12 h-12 flex items-end justify-center shrink-0">
                                        <div className="absolute inset-0 bg-black/40 border-2 border-white/20 rounded-full shadow-md" />
                                        <img src={player.imageUrl} alt={player.name} className={getPlayerImageClass(player.id, "w-12 h-14 object-contain object-bottom relative z-10")} />
                                      </div>
                                      <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1 gap-2">
                                          <span className="font-bold text-white leading-tight">{player.name}</span>
                                          <button onClick={() => handlePlayerToggle(player)} className="text-white/50 hover:text-red-400 transition-colors -mt-1 -mr-1 p-1" aria-label={`Remove ${player.name}`}>
                                            <X className="w-4 h-4" />
                                          </button>
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/30 text-white/80 w-fit">{player.role}</span>
                                      </div>
                                    </div>
                                ) : (
                                    <div className="text-center text-sm font-bold uppercase tracking-wider">Slot {i + 1}</div>
                                )}
                              </div>
                          );
                        })}
                      </div>

                      <div className="rounded-3xl border border-yellow-400/30 bg-yellow-500/10 backdrop-blur-md p-4 sm:p-5 shadow-xl">
                        <div className="flex items-center gap-2 mb-3 text-yellow-300 uppercase tracking-wider text-sm font-black">
                          <Zap className="w-4 h-4" /> Impact Player
                        </div>
                        {impactPlayer ? (
                            <div className="flex items-center gap-3">
                              <div className="relative w-12 h-12 flex items-end justify-center shrink-0">
                                <div className="absolute inset-0 bg-black/40 border-2 border-yellow-400/50 rounded-full shadow-md" />
                                <img src={impactPlayer.imageUrl} alt={impactPlayer.name} className={getPlayerImageClass(impactPlayer.id, "w-12 h-14 object-contain object-bottom relative z-10")} />
                              </div>
                              <div className="flex-1">
                                <div className="font-bold text-white">{impactPlayer.name}</div>
                                <div className="text-xs text-yellow-200/80 uppercase tracking-wider font-bold">{impactPlayer.role}</div>
                              </div>
                              <button onClick={() => handlePlayerToggle(impactPlayer)} className="text-white/60 hover:text-red-400 transition-colors p-1" aria-label={`Remove ${impactPlayer.name} as impact player`}>
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                        ) : (
                            <p className="text-sm text-white/70">Once the playing XI is full, tap one more player from the roster to assign the impact role.</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={`${showBuilderRoster ? 'flex' : 'hidden'} lg:flex lg:w-[400px] bg-black/60 backdrop-blur-xl border-t lg:border-t-0 lg:border-l border-white/25 flex-col z-20 shadow-2xl order-1 lg:order-2 max-h-[45vh] lg:max-h-none`}>
                    <div className="p-5 border-b border-white/25 bg-black/20 sticky top-0">
                      <h3 className="font-black text-lg flex items-center gap-2 text-white uppercase tracking-wider">
                        <Users className="w-5 h-5 text-blue-400" /> Squad Roster
                      </h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                      {selectedTeam.players.map((player) => {
                        const status = getPlayerStatus(player);
                        const isSelected = !!status;
                        const isDisabled = !isSelected && playing11.length === 11 && impactPlayer !== null;

                        return (
                            <button key={player.id} disabled={isDisabled} onClick={() => handlePlayerToggle(player)} className={`w-full text-left p-3 rounded-xl border transition-all flex items-center gap-3 group ${isSelected ? status === 'Playing 11' ? 'bg-white/20 border-white/200 shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'bg-yellow-500/20 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.15)]' : isDisabled ? 'bg-black/20 border-white/20 opacity-40 cursor-not-allowed' : 'bg-white/5 border-white/25 hover:border-white/30 hover:bg-white/10'}`}>
                              <div className="relative w-10 h-10 flex items-end justify-center shrink-0">
                                <div className="absolute inset-0 bg-black/40 border border-white/20 rounded-full" />
                                <img src={player.imageUrl} alt={player.name} className={getPlayerImageClass(player.id, "w-10 h-12 object-contain object-bottom relative z-10")} />
                              </div>
                              <div className="flex-1">
                                <div className={`font-bold ${isSelected ? 'text-white' : 'text-blue-100'}`}>{player.name}</div>
                                <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-300/70 mt-0.5">{player.role}</div>
                              </div>
                              {isSelected && (
                                  <div className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md ${status === 'Playing 11' ? 'bg-white text-black shadow-md' : 'bg-yellow-500 text-blue-950 shadow-md'}`}>
                                    {status === 'Playing 11' ? <Check className="w-3 h-3" /> : 'IP'}
                                  </div>
                              )}
                            </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
          )}

          {currentScreen === 'dashboard' && selectedTeam && (
              <motion.div key="dashboard" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className={`min-h-screen bg-gradient-to-br ${selectedTeam.gradient} p-4 sm:p-8 flex flex-col relative`}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 flex flex-col flex-1">
                  <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-8">
                    <button onClick={() => setCurrentScreen('builder')} className="w-fit px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white font-bold flex items-center gap-2 backdrop-blur-md border border-white/25">
                      <ChevronLeft className="w-5 h-5" /> Edit Squad
                    </button>
                    <div className="text-center">
                      <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2 drop-shadow-lg uppercase">{selectedTeam.name}</h2>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md shadow-lg text-sm font-bold text-white uppercase tracking-wider border border-white/25">Matchday Squad</div>
                    </div>
                    <div className="hidden lg:block w-[140px]" />
                  </header>

                  <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
                    <div className="xl:col-span-2 border-4 border-white/20 rounded-[3rem] p-5 sm:p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[560px] xl:min-h-[700px] shadow-2xl bg-black/20 backdrop-blur-sm">
                      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                        <img src={selectedTeam.logoUrl} alt={selectedTeam.name} className="w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] object-contain" />
                      </div>
                      <div className="absolute inset-4 border-[3px] border-white/20 rounded-[2.5rem]" />
                      <div className="absolute inset-x-[18%] top-[20%] bottom-[20%] border-[3px] border-white/25 rounded-[4rem]" />
                      <div className="absolute left-1/2 top-[25%] bottom-[25%] w-16 sm:w-20 -ml-8 sm:-ml-10 border-[3px] border-white/30 bg-white/5" />

                      <div className="relative z-10 w-full h-full flex flex-col justify-between py-8 gap-8">
                        <div className="flex justify-center gap-4 sm:gap-16 flex-wrap">{playing11.slice(0, 2).map((p) => <div key={p.id}><PlayerNode player={p} /></div>)}</div>
                        <div className="flex justify-center gap-4 sm:gap-10 lg:gap-24 flex-wrap">{playing11.slice(2, 5).map((p) => <div key={p.id}><PlayerNode player={p} /></div>)}</div>
                        <div className="flex justify-center gap-4 sm:gap-10 lg:gap-24 flex-wrap">{playing11.slice(5, 8).map((p) => <div key={p.id}><PlayerNode player={p} /></div>)}</div>
                        <div className="flex justify-center gap-4 sm:gap-16 flex-wrap">{playing11.slice(8, 11).map((p) => <div key={p.id}><PlayerNode player={p} /></div>)}</div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
                        <h3 className="text-2xl font-black mb-6 flex items-center gap-2 text-yellow-400 uppercase tracking-wider"><Zap className="w-6 h-6" /> Impact Player</h3>
                        {impactPlayer ? (
                            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6 text-center relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl" />
                              <div className="relative w-24 h-24 mx-auto mb-4 flex items-end justify-center">
                                <div className="absolute inset-0 bg-black/40 border-4 border-yellow-400 rounded-full shadow-xl" />
                                <img src={impactPlayer.imageUrl} alt={impactPlayer.name} className={getPlayerImageClass(impactPlayer.id, "w-24 h-28 object-contain object-bottom relative z-10")} />
                              </div>
                              <h4 className="text-2xl font-black text-white mb-1 relative z-10">{impactPlayer.name}</h4>
                              <span className="text-xs font-bold uppercase tracking-wider text-yellow-300 relative z-10">{impactPlayer.role}</span>
                            </div>
                        ) : (
                            <div className="text-white/50 text-center py-8 font-bold uppercase tracking-wider">No impact player selected</div>
                        )}
                      </div>

                      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
                        <h3 className="text-2xl font-black mb-6 text-white uppercase tracking-wider">Team Balance</h3>
                        <div className="space-y-5">
                          <BalanceBar label="Batsmen" count={playing11.filter(p => p.role === 'Batsman').length} color="bg-blue-400" />
                          <BalanceBar label="Bowlers" count={playing11.filter(p => p.role === 'Bowler').length} color="bg-red-400" />
                          <BalanceBar label="All-rounders" count={playing11.filter(p => p.role === 'All-rounder').length} color="bg-purple-400" />
                          <BalanceBar label="Wicket-keepers" count={playing11.filter(p => p.role === 'Wicket-keeper').length} color="bg-yellow-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
          )}

          {currentScreen === 'schedule' && (
              <motion.div
                  key="schedule"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-4 sm:p-6 lg:p-8 flex flex-col overflow-y-auto custom-scrollbar max-w-6xl mx-auto w-full"
              >
                {(() => {
                  const today = new Date().toISOString().slice(0, 10);
                  const upcomingMatches = schedule.filter((match) => match.date >= today).slice(0, 3);
                  const featuredMatches = upcomingMatches.length > 0 ? upcomingMatches : schedule.slice(0, 3);

                  return (
                      <div className="space-y-8 pb-12">
                        <section className={`rounded-3xl overflow-hidden border ${isDark ? 'border-white/20 bg-[#0d111a]' : 'border-black/20 bg-slate-50'} shadow-xl`}>
                          <img src={iplHero} alt="IPL" className="w-full h-52 sm:h-72 md:h-80 object-cover" />
                        </section>

                        <section>
                          <div className="flex items-center justify-between mb-4">
                            <h2 className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-black'}`}>Current Matches</h2>
                            <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Scroll right for next cards</p>
                          </div>
                          <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory custom-scrollbar">
                            {featuredMatches.map((match) => {
                              const team1 = teams.find(t => t.id === match.team1);
                              const team2 = teams.find(t => t.id === match.team2);
                              if (!team1 || !team2) return null;

                              return (
                                  <article
                                      key={match.id}
                                      onClick={() => {
                                        setSelectedMatch(match);
                                        setCurrentScreen('match_details');
                                      }}
                                      className={`cursor-pointer min-w-[290px] sm:min-w-[360px] snap-start rounded-2xl border p-4 sm:p-5 shadow-lg transition-transform hover:-translate-y-0.5 relative overflow-hidden ${isDark ? 'bg-[#111827] border-white/20' : 'bg-white border-black/20'}`}
                                  >
                                    <div className="absolute top-0 left-0 right-0 h-1 flex">
                                      <div className={`flex-1 bg-gradient-to-r ${team1.gradient}`} />
                                      <div className={`flex-1 bg-gradient-to-l ${team2.gradient}`} />
                                    </div>
                                    <div className="flex items-center justify-between text-xs font-semibold">
                                      <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>{match.day}</span>
                                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{match.dateLabel}</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                      <div className="flex flex-col items-center gap-2">
                                        <img src={team1.logoUrl} alt={team1.shortName} className="w-12 h-12 object-contain" />
                                        <span className={`font-black text-lg ${isDark ? 'text-white' : 'text-black'}`}>{team1.shortName}</span>
                                      </div>
                                      <span className={`text-lg font-black ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>VS</span>
                                      <div className="flex flex-col items-center gap-2">
                                        <img src={team2.logoUrl} alt={team2.shortName} className="w-12 h-12 object-contain" />
                                        <span className={`font-black text-lg ${isDark ? 'text-white' : 'text-black'}`}>{team2.shortName}</span>
                                      </div>
                                    </div>
                                    <p className={`mt-4 text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{match.stadium}, {match.venueCity}</p>
                                    <button
                                        onClick={(event) => {
                                          event.stopPropagation();
                                          setCurrentScreen('schedule_list');
                                        }}
                                        className={`mt-4 w-full rounded-xl px-3 py-2 text-sm font-bold transition-colors border ${isDark ? 'bg-blue-600 hover:bg-blue-500 text-white border-blue-300/30' : 'bg-slate-900 hover:bg-black text-white border-slate-600/40'}`}
                                    >
                                      Schedule
                                    </button>
                                  </article>
                              );
                            })}
                          </div>
                        </section>

                        <section className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-[#111827] border-white/20' : 'bg-white border-black/20'} shadow-xl`}>
                          <div className={`px-4 sm:px-6 py-4 border-b ${isDark ? 'border-white/20 text-white' : 'border-black/20 text-black'} font-black text-lg`}>
                            Points Table
                          </div>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                              <thead>
                              <tr className={`text-[10px] sm:text-xs uppercase tracking-wider ${isDark ? 'bg-black/30 text-slate-400' : 'bg-slate-100 text-slate-600'}`}>
                                <th className="p-2 sm:p-4 font-bold">Team</th>
                                <th className="p-2 sm:p-4 font-bold text-center">P</th>
                                <th className="p-2 sm:p-4 font-bold text-center">W</th>
                                <th className="p-2 sm:p-4 font-bold text-center">L</th>
                                <th className="p-2 sm:p-4 font-bold text-center">NRR</th>
                                <th className="p-2 sm:p-4 font-bold text-center">Pts</th>
                              </tr>
                              </thead>
                              <tbody>
                              {[...pointsTable].sort((a, b) => b.points - a.points || b.nrr - a.nrr).map((entry) => {
                                const team = teams.find(t => t.id === entry.teamId);
                                if (!team) return null;
                                return (
                                    <tr key={entry.teamId} className={`border-t ${isDark ? 'border-white/25' : 'border-black/20'}`}>
                                      <td className="p-2 sm:p-4">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                          <img src={team.logoUrl} alt={team.shortName} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                                          <span className={`font-bold text-xs sm:text-sm ${isDark ? 'text-white' : 'text-black'}`}>{team.shortName}</span>
                                        </div>
                                      </td>
                                      <td className={`p-2 sm:p-4 text-center text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{entry.played}</td>
                                      <td className={`p-2 sm:p-4 text-center text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{entry.won}</td>
                                      <td className={`p-2 sm:p-4 text-center text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{entry.lost}</td>
                                      <td className={`p-2 sm:p-4 text-center text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{entry.nrr > 0 ? `+${entry.nrr}` : entry.nrr}</td>
                                      <td className={`p-2 sm:p-4 text-center text-sm sm:text-base font-black ${isDark ? 'text-white' : 'text-black'}`}>{entry.points}</td>
                                    </tr>
                                );
                              })}
                              </tbody>
                            </table>
                          </div>
                        </section>
                      </div>
                  );
                })()}
              </motion.div>
          )}
          {currentScreen === 'schedule_list' && (
              <motion.div
                  key="schedule_list"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-4 sm:p-6 lg:p-8 flex flex-col overflow-y-auto custom-scrollbar max-w-5xl mx-auto w-full"
              >
                <div className="mb-5">
                  <button
                      onClick={() => setCurrentScreen('schedule')}
                      className={`px-4 py-2 rounded-full font-bold border shadow-sm ${isDark ? 'bg-slate-800 text-slate-100 border-white/20 hover:bg-slate-700' : 'bg-white text-slate-900 border-black/20 hover:bg-slate-100'}`}
                  >
                    ← Back to Home
                  </button>
                </div>
                <div className="space-y-4 sm:space-y-6 pb-12">
                  {schedule.map((match) => {
                    const team1 = teams.find(t => t.id === match.team1);
                    const team2 = teams.find(t => t.id === match.team2);
                    if (!team1 || !team2) return null;

                    return (
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            onClick={() => {
                              setSelectedMatch(match);
                              setCurrentScreen('match_details');
                            }}
                            key={match.id}
                            className={`w-full text-left transition-colors border rounded-2xl p-4 sm:p-6 shadow-lg flex flex-col gap-4 relative overflow-hidden cursor-pointer group ${isDark ? 'bg-[#151A27] hover:bg-[#1A2133] border-white/20' : 'bg-white hover:bg-slate-50 border-black/20'}`}
                        >
                          <div className="absolute top-0 left-0 right-0 h-1 flex">
                            <div className={`flex-1 bg-gradient-to-r ${team1.gradient}`} />
                            <div className={`flex-1 bg-gradient-to-l ${team2.gradient}`} />
                          </div>
                          <div className={`flex justify-between items-center text-xs sm:text-sm font-medium uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            <span>Match {match.matchNumber} • {match.stadium}, {match.venueCity}</span>
                            <span className={`${isDark ? 'text-slate-300' : 'text-slate-800'} font-bold`}>{match.dateLabel}</span>
                          </div>
                          <div className="flex items-center justify-between py-2 sm:py-4">
                            <div className="flex items-center gap-3 sm:gap-4 flex-1">
                              <img src={team1.logoUrl} alt={team1.shortName} className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-md" />
                              <div className="flex flex-col">
                                <span className={`font-black text-xl sm:text-2xl tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{team1.shortName}</span>
                                <span className={`text-xs hidden sm:block ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{team1.name}</span>
                              </div>
                            </div>
                            <div className="px-4">
                              <div className={`text-lg sm:text-xl font-black italic ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>VS</div>
                            </div>
                            <div className="flex items-center gap-3 sm:gap-4 flex-1 justify-end text-right">
                              <div className="flex flex-col">
                                <span className={`font-black text-xl sm:text-2xl tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{team2.shortName}</span>
                                <span className={`text-xs hidden sm:block ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{team2.name}</span>
                              </div>
                              <img src={team2.logoUrl} alt={team2.shortName} className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-md" />
                            </div>
                          </div>
                          <div className={`pt-4 border-t flex items-start gap-2 ${isDark ? 'border-white/20' : 'border-black/25'}`}>
                            <Info className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                            <div className={`text-sm leading-relaxed font-medium ${isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'} transition-colors`}>{match.headline}</div>
                          </div>
                        </motion.button>
                    );
                  })}
                </div>
              </motion.div>
          )}
          {currentScreen === 'match_details' && selectedMatch && (
              <motion.div
                  key="match_details"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-4 sm:p-6 lg:p-8 flex flex-col overflow-y-auto custom-scrollbar max-w-7xl mx-auto w-full bg-slate-900/95 rounded-3xl text-slate-100"
              >
                {(() => {
                  const team1 = teams.find(t => t.id === selectedMatch.team1);
                  const team2 = teams.find(t => t.id === selectedMatch.team2);
                  if (!team1 || !team2) return null;

                  const captain1Player = team1.players.find(p => p.name === selectedMatch.captain1);
                  const captain2Player = team2.players.find(p => p.name === selectedMatch.captain2);

                  const winShare1 = Math.round((selectedMatch.headToHead.team1Wins / (selectedMatch.headToHead.team1Wins + selectedMatch.headToHead.team2Wins || 1)) * 100);
                  const winShare2 = 100 - winShare1;
                  const chaseRate = Math.round((selectedMatch.venueStats.chasingWins / selectedMatch.venueStats.totalMatches) * 100);

                  return (
                      <div className="space-y-6">
                        {/* Header Actions */}
                        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <button
                              onClick={() => setCurrentScreen('schedule')}
                              className="w-fit px-4 py-2 bg-[#151A27] hover:bg-[#1A2133] rounded-full transition-colors text-slate-300 font-bold flex items-center gap-2 border border-white/20 shadow-md"
                          >
                            <ChevronLeft className="w-5 h-5" /> Back
                          </button>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <button
                                onClick={() => setCurrentScreen('compare_xi')}
                                className="flex-1 sm:flex-none px-4 py-2 bg-[#151A27] hover:bg-[#1A2133] rounded-full transition-colors text-slate-300 font-bold flex items-center justify-center gap-2 border border-white/20 shadow-md text-sm sm:text-base"
                            >
                              <Users className="w-4 h-4 sm:w-5 sm:h-5" /> Compare XI
                            </button>
                            <button
                                onClick={() => setCurrentScreen('fantasy_xi')}
                                className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-full transition-colors text-white font-bold flex items-center justify-center gap-2 shadow-md shadow-blue-900/20 text-sm sm:text-base"
                            >
                              <Trophy className="w-4 h-4 sm:w-5 sm:h-5" /> Fantasy XI
                            </button>
                          </div>
                        </header>

                        {/* Match Hero Card */}
                        <section className="rounded-3xl border border-white/20 bg-[#151A27] overflow-hidden shadow-2xl relative">
                          {/* Top Info Bar */}
                          <div className="bg-[#0B0F19]/50 px-4 py-3 border-b border-white/20 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-slate-400 font-medium tracking-wider uppercase gap-2 text-center sm:text-left">
                            <span>Match {selectedMatch.matchNumber} • {selectedMatch.stadium}, {selectedMatch.venueCity}</span>
                            <span className="text-slate-300 font-bold">{selectedMatch.dateLabel} • {selectedMatch.day}</span>
                          </div>

                          {/* Teams VS Section */}
                          <div className="grid grid-cols-[1fr_auto_1fr] items-stretch min-h-[200px] sm:min-h-[280px]">
                            {/* Team 1 */}
                            <div className="relative p-4 sm:p-8 flex flex-col items-center justify-center text-center overflow-hidden group">
                              <div className={`absolute inset-0 bg-gradient-to-br ${team1.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                              {captain1Player && (
                                  <div className="absolute -left-4 sm:left-0 bottom-0 opacity-20 sm:opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-50">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#151A27] via-transparent to-transparent z-10" />
                                    <img src={captain1Player.imageUrl} alt={captain1Player.name} className={getPlayerImageClass(captain1Player.id, "w-32 h-40 sm:w-56 sm:h-64 object-contain object-bottom grayscale-[0.5]")} />
                                  </div>
                              )}
                              <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-4">
                                <img src={team1.logoUrl} alt={team1.shortName} className="w-16 h-16 sm:w-24 sm:h-24 object-contain drop-shadow-2xl" />
                                <div>
                                  <div className="text-2xl sm:text-4xl font-black text-white tracking-tight">{team1.shortName}</div>
                                  <div className="text-xs sm:text-sm text-slate-400 font-medium hidden sm:block">{team1.name}</div>
                                </div>
                                <div className="mt-1 sm:mt-2 px-3 py-1 bg-black/40 rounded-full border border-white/20 text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
                                  C: {selectedMatch.captain1}
                                </div>
                              </div>
                            </div>

                            {/* VS Divider */}
                            <div className="flex flex-col items-center justify-center px-2 sm:px-6 relative z-20">
                              <div className="w-px h-12 sm:h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                              <div className="my-3 sm:my-4 text-xl sm:text-3xl font-black italic text-slate-600">VS</div>
                              <div className="w-px h-12 sm:h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                            </div>

                            {/* Team 2 */}
                            <div className="relative p-4 sm:p-8 flex flex-col items-center justify-center text-center overflow-hidden group">
                              <div className={`absolute inset-0 bg-gradient-to-bl ${team2.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                              {captain2Player && (
                                  <div className="absolute -right-4 sm:right-0 bottom-0 opacity-20 sm:opacity-40 pointer-events-none transition-opacity duration-500 group-hover:opacity-50">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#151A27] via-transparent to-transparent z-10" />
                                    <img src={captain2Player.imageUrl} alt={captain2Player.name} className={getPlayerImageClass(captain2Player.id, "w-32 h-40 sm:w-56 sm:h-64 object-contain object-bottom grayscale-[0.5]")} />
                                  </div>
                              )}
                              <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-4">
                                <img src={team2.logoUrl} alt={team2.shortName} className="w-16 h-16 sm:w-24 sm:h-24 object-contain drop-shadow-2xl" />
                                <div>
                                  <div className="text-2xl sm:text-4xl font-black text-white tracking-tight">{team2.shortName}</div>
                                  <div className="text-xs sm:text-sm text-slate-400 font-medium hidden sm:block">{team2.name}</div>
                                </div>
                                <div className="mt-1 sm:mt-2 px-3 py-1 bg-black/40 rounded-full border border-white/20 text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
                                  C: {selectedMatch.captain2}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Bottom Headline */}
                          <div className="bg-[#0B0F19]/50 px-4 sm:px-8 py-4 border-t border-white/20 text-center">
                            <p className="text-sm sm:text-base text-slate-300 font-medium">{selectedMatch.headline}</p>
                          </div>
                        </section>

                        {/* Stats Grid */}
                        <section className="grid gap-4 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                          <div className="grid gap-4 sm:gap-6">
                            {/* Win Predictor & Pitch Report */}
                            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                              <div className="rounded-3xl border border-white/20 bg-[#151A27] p-5 sm:p-6 shadow-lg flex flex-col justify-center">
                                <h3 className="text-lg sm:text-xl font-black text-white mb-1">Win Predictor</h3>
                                <p className="text-xs text-slate-400 mb-4">Based on historical head-to-head and venue performance.</p>
                                <div className="flex items-center justify-between mb-2 text-sm font-bold">
                                  <span className="text-white">{team1.shortName} <span className="text-slate-400 font-medium">({winShare1}%)</span></span>
                                  <span className="text-white"><span className="text-slate-400 font-medium">({winShare2}%)</span> {team2.shortName}</span>
                                </div>
                                <div className="h-2.5 w-full bg-[#0B0F19] rounded-full overflow-hidden flex border border-white/20">
                                  <div className={`h-full bg-gradient-to-r ${team1.gradient}`} style={{ width: `${winShare1}%` }} />
                                  <div className={`h-full bg-gradient-to-l ${team2.gradient}`} style={{ width: `${winShare2}%` }} />
                                </div>
                              </div>
                              <div className="rounded-3xl border border-white/20 bg-[#151A27] p-5 sm:p-6 shadow-lg flex flex-col justify-center">
                                <h3 className="text-lg sm:text-xl font-black text-white mb-2 flex items-center gap-2"><MapPin className="w-5 h-5 text-blue-400" /> Pitch Report</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">{selectedMatch.pitchReport}</p>
                              </div>
                            </div>

                            {/* Venue Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                              <StatCard label="Avg 1st Innings" value={`${selectedMatch.venueStats.avgFirstInningsScore}`} note="Venue scoring trend" />
                              <StatCard label="Chasing Success" value={`${chaseRate}%`} note={`${selectedMatch.venueStats.chasingWins}/${selectedMatch.venueStats.totalMatches} won batting 2nd`} />
                              <StatCard label="Best Bowling" value={selectedMatch.venueStats.bestBowlingFigure} note={`${selectedMatch.venueStats.boundaryPercentage}% boundary rate`} />
                            </div>

                            {/* Head to Head */}
                            <div className="rounded-3xl border border-white/20 bg-[#151A27] p-5 sm:p-6 shadow-lg">
                              <div className="flex items-center justify-between gap-4 mb-5">
                                <div>
                                  <h3 className="text-xl font-black text-white">Head-to-head</h3>
                                  <p className="text-sm text-slate-400">How the rivalry stacks up overall.</p>
                                </div>
                                <div className="text-xs sm:text-sm font-bold text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/20 hidden sm:block">{selectedMatch.headToHead.last5}</div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="rounded-2xl bg-[#0B0F19] border border-white/20 p-4 text-center sm:text-left">
                                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-1">{team1.shortName}</div>
                                  <div className="text-3xl sm:text-4xl font-black text-white">{selectedMatch.headToHead.team1Wins} <span className="text-sm text-slate-500 font-medium">wins</span></div>
                                </div>
                                <div className="rounded-2xl bg-[#0B0F19] border border-white/20 p-4 text-center sm:text-right">
                                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500 font-black mb-1">{team2.shortName}</div>
                                  <div className="text-3xl sm:text-4xl font-black text-white"><span className="text-sm text-slate-500 font-medium">wins</span> {selectedMatch.headToHead.team2Wins}</div>
                                </div>
                              </div>
                              <div className="flex justify-between text-xs text-slate-500 font-semibold px-1">
                                <span>{team1.shortName} {winShare1}%</span>
                                <span>Draws: {selectedMatch.headToHead.noResult}</span>
                                <span>{team2.shortName} {winShare2}%</span>
                              </div>
                            </div>

                            {/* Matchup Battles */}
                            <div className="rounded-3xl border border-white/20 bg-[#151A27] p-5 sm:p-6 shadow-lg">
                              <h3 className="text-xl font-black text-white mb-1">Key Matchups</h3>
                              <p className="text-sm text-slate-400 mb-5">Opponent-specific contests that could decide momentum.</p>
                              <div className="grid gap-4 sm:grid-cols-2">
                                {selectedMatch.playerBattles.map((battle) => (
                                    <div key={`${battle.batter}-${battle.bowler}`} className="rounded-2xl border border-white/20 bg-[#0B0F19] p-4 sm:p-5">
                                      <div className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-black mb-2">Player vs Player</div>
                                      <div className="text-lg font-black text-white mb-2 leading-tight">{battle.batter} <span className="text-slate-500 text-sm font-medium italic mx-1">vs</span> {battle.bowler}</div>
                                      <div className="flex flex-wrap gap-2 mb-3 text-[10px] sm:text-xs font-bold">
                                        <span className="px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/20">{battle.runs} runs</span>
                                        <span className="px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/20">{battle.balls} balls</span>
                                        <span className="px-2 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20">{battle.dismissals} outs</span>
                                      </div>
                                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{battle.note}</p>
                                    </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div className="rounded-3xl border border-white/25 bg-white/5 p-6 shadow-xl">
                              <h3 className="text-2xl font-black text-white mb-4">Interesting stats</h3>
                              <div className="space-y-3">
                                {selectedMatch.interestingStats.map((stat) => (
                                    <div key={stat} className="rounded-2xl bg-slate-950/60 border border-white/25 p-4 text-sm text-white/75 leading-relaxed">
                                      {stat}
                                    </div>
                                ))}
                              </div>
                            </div>

                            <div className="rounded-3xl border border-white/25 bg-white/5 p-6 shadow-xl">
                              <h3 className="text-2xl font-black text-white mb-4">Quick read</h3>
                              <div className="space-y-4 text-sm text-white/70">
                                <div className="rounded-2xl bg-slate-950/60 border border-white/25 p-4">
                                  <div className="text-xs uppercase tracking-[0.25em] text-yellow-300 font-black mb-2">Venue trend</div>
                                  Teams chasing have won {selectedMatch.venueStats.chasingWins} of {selectedMatch.venueStats.totalMatches} IPL matches here.
                                </div>
                                <div className="rounded-2xl bg-slate-950/60 border border-white/25 p-4">
                                  <div className="text-xs uppercase tracking-[0.25em] text-yellow-300 font-black mb-2">Boundary profile</div>
                                  About {selectedMatch.venueStats.boundaryPercentage}% of scoring shots here come from boundaries, so defensive lengths matter.
                                </div>
                                <div className="rounded-2xl bg-slate-950/60 border border-white/25 p-4">
                                  <div className="text-xs uppercase tracking-[0.25em] text-yellow-300 font-black mb-2">Rivalry form</div>
                                  {selectedMatch.headToHead.last5}
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                  );
                })()}
              </motion.div>
          )}
          {currentScreen === 'compare_xi' && selectedMatch && (
              <motion.div
                  key="compare_xi"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-h-screen flex flex-col overflow-hidden bg-slate-900 text-slate-100"
              >
                {(() => {
                  const team1 = teams.find(t => t.id === selectedMatch.team1);
                  const team2 = teams.find(t => t.id === selectedMatch.team2);
                  if (!team1 || !team2) return null;

                  const team1XI = savedXIs[team1.id];
                  const team2XI = savedXIs[team2.id];

                  return (
                      <>
                        <header className="flex-none bg-black/40 backdrop-blur-md border-b border-white/25 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 z-50">
                          <button
                              onClick={() => setCurrentScreen('match_details')}
                              className="w-full sm:w-auto px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white font-bold flex items-center justify-center gap-2 backdrop-blur-md border border-white/25"
                          >
                            <ChevronLeft className="w-5 h-5" /> Back
                          </button>
                          <h2 className="text-xl sm:text-3xl font-black text-white uppercase tracking-wider flex items-center gap-2 sm:gap-4 text-center">
                            <img src={team1.logoUrl} alt={team1.shortName} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                            <span className="hidden sm:inline">Compare Playing XI</span>
                            <span className="sm:hidden">Compare XI</span>
                            <img src={team2.logoUrl} alt={team2.shortName} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                          </h2>
                          <div className="hidden sm:block w-[100px]" />
                        </header>

                        <div className="flex-1 flex flex-col md:flex-row relative">
                          {/* VS Divider */}
                          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-30 hidden md:block" />
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex w-16 h-16 bg-black/80 backdrop-blur-xl rounded-full items-center justify-center border-2 border-white/25 shadow-2xl">
                            <span className="text-xl font-black text-white italic">VS</span>
                          </div>

                          {/* Team 1 Side */}
                          <div className={`flex-1 relative overflow-y-auto custom-scrollbar p-4 sm:p-8 bg-gradient-to-br ${team1.gradient}`}>
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="relative z-20 max-w-md mx-auto">
                              <div className="flex items-center gap-4 mb-8">
                                <img src={team1.logoUrl} alt={team1.shortName} className="w-16 h-16 object-contain drop-shadow-xl" />
                                <h3 className="text-3xl font-black text-white drop-shadow-md uppercase">{team1.name}</h3>
                              </div>

                              {team1XI && team1XI.playing11.length === 11 ? (
                                  <div className="space-y-4">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                                      <h4 className="text-emerald-400 font-black uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <Shield className="w-5 h-5" /> Playing 11
                                      </h4>
                                      <div className="space-y-2">
                                        {team1XI.playing11.map((player, idx) => (
                                            <div key={player.id} className="flex items-center gap-3 bg-black/20 p-2 rounded-xl border border-white/20">
                                              <div className="w-6 text-center text-white/40 font-bold text-sm">{idx + 1}</div>
                                              <div className="relative w-10 h-10 flex items-end justify-center shrink-0">
                                                <div className="absolute inset-0 bg-black/40 border border-white/20 rounded-full" />
                                                <img src={player.imageUrl} alt={player.name} className={getPlayerImageClass(player.id, "w-10 h-12 object-contain object-bottom relative z-10")} />
                                              </div>
                                              <div className="flex-1">
                                                <div className="font-bold text-white text-sm">{player.name}</div>
                                                <div className="text-[10px] text-white/60 uppercase tracking-wider font-bold">{player.role}</div>
                                              </div>
                                            </div>
                                        ))}
                                      </div>
                                    </div>

                                    {team1XI.impactPlayer && (
                                        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-6 border border-yellow-500/30 shadow-xl">
                                          <h4 className="text-yellow-400 font-black uppercase tracking-wider mb-4 flex items-center gap-2">
                                            <Zap className="w-5 h-5" /> Impact Player
                                          </h4>
                                          <div className="flex items-center gap-3 bg-black/20 p-2 rounded-xl border border-yellow-500/20">
                                            <div className="relative w-12 h-12 flex items-end justify-center shrink-0">
                                              <div className="absolute inset-0 bg-black/40 border-2 border-yellow-400/50 rounded-full" />
                                              <img src={team1XI.impactPlayer.imageUrl} alt={team1XI.impactPlayer.name} className={getPlayerImageClass(team1XI.impactPlayer.id, "w-12 h-14 object-contain object-bottom relative z-10")} />
                                            </div>
                                            <div>
                                              <div className="font-bold text-white">{team1XI.impactPlayer.name}</div>
                                              <div className="text-[10px] text-yellow-300 uppercase tracking-wider font-bold">{team1XI.impactPlayer.role}</div>
                                            </div>
                                          </div>
                                        </div>
                                    )}
                                  </div>
                              ) : (
                                  <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 text-center border border-white/25">
                                    <Users className="w-16 h-16 text-white/20 mx-auto mb-4" />
                                    <h4 className="text-xl font-bold text-white mb-2">No Squad Saved</h4>
                                    <p className="text-white/60 mb-6">Build a playing 11 for {team1.shortName} to compare.</p>
                                    <button
                                        onClick={() => {
                                          handleTeamSelect(team1, 'builder', 'compare_xi');
                                        }}
                                        className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                      Build Squad
                                    </button>
                                  </div>
                              )}
                            </div>
                          </div>

                          {/* Team 2 Side */}
                          <div className={`flex-1 relative overflow-y-auto custom-scrollbar p-4 sm:p-8 bg-gradient-to-bl ${team2.gradient}`}>
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="relative z-20 max-w-md mx-auto">
                              <div className="flex items-center gap-4 mb-8 justify-end">
                                <h3 className="text-3xl font-black text-white drop-shadow-md uppercase text-right">{team2.name}</h3>
                                <img src={team2.logoUrl} alt={team2.shortName} className="w-16 h-16 object-contain drop-shadow-xl" />
                              </div>

                              {team2XI && team2XI.playing11.length === 11 ? (
                                  <div className="space-y-4">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                                      <h4 className="text-emerald-400 font-black uppercase tracking-wider mb-4 flex items-center gap-2 justify-end">
                                        Playing 11 <Shield className="w-5 h-5" />
                                      </h4>
                                      <div className="space-y-2">
                                        {team2XI.playing11.map((player, idx) => (
                                            <div key={player.id} className="flex items-center gap-3 bg-black/20 p-2 rounded-xl border border-white/20 flex-row-reverse text-right">
                                              <div className="w-6 text-center text-white/40 font-bold text-sm">{idx + 1}</div>
                                              <div className="relative w-10 h-10 flex items-end justify-center shrink-0">
                                                <div className="absolute inset-0 bg-black/40 border border-white/20 rounded-full" />
                                                <img src={player.imageUrl} alt={player.name} className={getPlayerImageClass(player.id, "w-10 h-12 object-contain object-bottom relative z-10")} />
                                              </div>
                                              <div className="flex-1">
                                                <div className="font-bold text-white text-sm">{player.name}</div>
                                                <div className="text-[10px] text-white/60 uppercase tracking-wider font-bold">{player.role}</div>
                                              </div>
                                            </div>
                                        ))}
                                      </div>
                                    </div>

                                    {team2XI.impactPlayer && (
                                        <div className="bg-gradient-to-l from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-6 border border-yellow-500/30 shadow-xl">
                                          <h4 className="text-yellow-400 font-black uppercase tracking-wider mb-4 flex items-center gap-2 justify-end">
                                            Impact Player <Zap className="w-5 h-5" />
                                          </h4>
                                          <div className="flex items-center gap-3 bg-black/20 p-2 rounded-xl border border-yellow-500/20 flex-row-reverse text-right">
                                            <div className="relative w-12 h-12 flex items-end justify-center shrink-0">
                                              <div className="absolute inset-0 bg-black/40 border-2 border-yellow-400/50 rounded-full" />
                                              <img src={team2XI.impactPlayer.imageUrl} alt={team2XI.impactPlayer.name} className={getPlayerImageClass(team2XI.impactPlayer.id, "w-12 h-14 object-contain object-bottom relative z-10")} />
                                            </div>
                                            <div>
                                              <div className="font-bold text-white">{team2XI.impactPlayer.name}</div>
                                              <div className="text-[10px] text-yellow-300 uppercase tracking-wider font-bold">{team2XI.impactPlayer.role}</div>
                                            </div>
                                          </div>
                                        </div>
                                    )}
                                  </div>
                              ) : (
                                  <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 text-center border border-white/25">
                                    <Users className="w-16 h-16 text-white/20 mx-auto mb-4" />
                                    <h4 className="text-xl font-bold text-white mb-2">No Squad Saved</h4>
                                    <p className="text-white/60 mb-6">Build a playing 11 for {team2.shortName} to compare.</p>
                                    <button
                                        onClick={() => {
                                          handleTeamSelect(team2, 'builder', 'compare_xi');
                                        }}
                                        className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                      Build Squad
                                    </button>
                                  </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                  );
                })()}
              </motion.div>
          )}
          {currentScreen === 'fantasy_xi' && selectedMatch && (
              <motion.div
                  key="fantasy_xi"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="min-h-screen flex flex-col overflow-hidden bg-slate-900 relative text-slate-100"
              >
                {(() => {
                  const team1 = teams.find(t => t.id === selectedMatch.team1);
                  const team2 = teams.find(t => t.id === selectedMatch.team2);
                  if (!team1 || !team2) return null;

                  const currentXI = fantasyXI[selectedMatch.id] || [];
                  const allPlayers = [...team1.players, ...team2.players];

                  return (
                      <>
                        <div className="absolute inset-0 flex">
                          <div className={`flex-1 bg-gradient-to-br ${team1.gradient} opacity-30`} />
                          <div className={`flex-1 bg-gradient-to-bl ${team2.gradient} opacity-30`} />
                        </div>
                        <div className="absolute inset-0 bg-black/40" />

                        <header className="flex-none bg-black/40 backdrop-blur-md border-b border-white/25 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 z-50">
                          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
                            <div className="flex items-center gap-3">
                              <button
                                  onClick={() => setCurrentScreen('match_details')}
                                  className="p-2 hover:bg-black/20 rounded-full transition-colors text-white"
                              >
                                <ChevronLeft className="w-6 h-6" />
                              </button>
                              <div>
                                <h2 className="text-xl sm:text-2xl font-black flex items-center gap-2 text-white drop-shadow-sm">
                                  Fantasy XI
                                </h2>
                                <p className="text-xs sm:text-sm font-medium text-white/80">
                                  {currentXI.length}/11 Selected
                                </p>
                              </div>
                            </div>
                            <button
                                onClick={() => setShowFantasyRoster(prev => !prev)}
                                className="lg:hidden px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold inline-flex items-center gap-2 text-xs sm:text-sm"
                            >
                              <LayoutList className="w-4 h-4" /> {showFantasyRoster ? 'Hide' : 'Roster'}
                            </button>
                          </div>
                          <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
                            <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full border border-white/25">
                              <img src={team1.logoUrl} alt={team1.shortName} className="w-6 h-6 object-contain" />
                              <span className="text-white font-bold">{currentXI.filter(p => team1.players.some(t1p => t1p.id === p.id)).length}</span>
                              <span className="text-white/40 mx-2">|</span>
                              <span className="text-white font-bold">{currentXI.filter(p => team2.players.some(t2p => t2p.id === p.id)).length}</span>
                              <img src={team2.logoUrl} alt={team2.shortName} className="w-6 h-6 object-contain" />
                            </div>
                          </div>
                        </header>

                        <div className="flex-1 flex overflow-hidden relative z-10">
                          {/* Left Board - The Pitch */}
                          <div className="flex-1 relative p-6 overflow-y-auto custom-scrollbar">
                            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 to-teal-900/40 opacity-50" />

                            <div className="max-w-4xl mx-auto relative z-10">
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                {Array.from({ length: 11 }).map((_, i) => {
                                  const player = currentXI[i];
                                  return (
                                      <div
                                          key={`slot-${i}`}
                                          className={`rounded-2xl border p-4 flex flex-col justify-center min-h-[110px] transition-all ${
                                              player
                                                  ? 'bg-white/10 border-white/20 shadow-xl backdrop-blur-md'
                                                  : 'bg-black/20 border-white/25 border-dashed text-white/40'
                                          }`}
                                      >
                                        {player ? (
                                            <div className="flex items-center gap-3">
                                              <div className="relative w-12 h-12 flex items-end justify-center shrink-0">
                                                <div className="absolute inset-0 bg-black/40 border-2 border-white/20 rounded-full shadow-md" />
                                                <img src={player.imageUrl} alt={player.name} className={getPlayerImageClass(player.id, "w-12 h-14 object-contain object-bottom relative z-10")} />
                                              </div>
                                              <div className="flex-1">
                                                <div className="flex justify-between items-start mb-1">
                                                  <span className="font-bold text-white leading-tight">{player.name}</span>
                                                  <button
                                                      onClick={() => handleFantasyPlayerToggle(selectedMatch.id, player)}
                                                      className="text-white/50 hover:text-red-400 transition-colors -mt-1 -mr-1 p-1"
                                                  >
                                                    <X className="w-4 h-4" />
                                                  </button>
                                                </div>
                                                <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/30 text-white/80 w-fit">
                                          {player.role}
                                        </span>
                                                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-white/60 w-fit">
                                          {team1.players.some(p => p.id === player.id) ? team1.shortName : team2.shortName}
                                        </span>
                                                </div>
                                              </div>
                                            </div>
                                        ) : (
                                            <div className="text-center text-sm font-bold uppercase tracking-wider">Slot {i + 1}</div>
                                        )}
                                      </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>

                          {/* Right Sidebar - Players List */}
                          <div className={`${showFantasyRoster ? 'flex' : 'hidden'} lg:flex lg:w-[400px] bg-black/60 backdrop-blur-xl border-t lg:border-t-0 lg:border-l border-white/25 flex-col z-20 shadow-2xl max-h-[45vh] lg:max-h-none`}>
                            <div className="p-5 border-b border-white/25 bg-black/20 sticky top-0 flex gap-2">
                              <div className="flex-1 text-center py-2 bg-white/10 rounded-lg font-bold text-white text-sm">
                                {team1.shortName}
                              </div>
                              <div className="flex-1 text-center py-2 bg-white/10 rounded-lg font-bold text-white text-sm">
                                {team2.shortName}
                              </div>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                              {allPlayers.map((player) => {
                                const isSelected = currentXI.some(p => p.id === player.id);
                                const isDisabled = !isSelected && currentXI.length === 11;
                                const isTeam1 = team1.players.some(p => p.id === player.id);

                                return (
                                    <button
                                        key={player.id}
                                        disabled={isDisabled}
                                        onClick={() => handleFantasyPlayerToggle(selectedMatch.id, player)}
                                        className={`w-full text-left p-3 rounded-xl border transition-all flex items-center gap-3 group ${
                                            isSelected
                                                ? 'bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                                                : isDisabled
                                                    ? 'bg-black/20 border-white/20 opacity-40 cursor-not-allowed'
                                                    : 'bg-white/5 border-white/25 hover:border-white/30 hover:bg-white/10'
                                        }`}
                                    >
                                      <div className="relative w-10 h-10 flex items-end justify-center shrink-0">
                                        <div className="absolute inset-0 bg-black/40 border border-white/20 rounded-full" />
                                        <img src={player.imageUrl} alt={player.name} className={getPlayerImageClass(player.id, "w-10 h-12 object-contain object-bottom relative z-10")} />
                                      </div>
                                      <div className="flex-1">
                                        <div className={`font-bold flex items-center gap-2 ${isSelected ? 'text-white' : 'text-blue-100'}`}>
                                          {player.name}
                                          <span className={`text-[9px] px-1.5 py-0.5 rounded-sm ${isTeam1 ? team1.color : team2.color} text-white`}>
                                    {isTeam1 ? team1.shortName : team2.shortName}
                                  </span>
                                        </div>
                                        <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-300/70 mt-0.5">{player.role}</div>
                                      </div>
                                      {isSelected && (
                                          <div className="text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md bg-emerald-500 text-white shadow-md">
                                            <Check className="w-3 h-3" />
                                          </div>
                                      )}
                                    </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </>
                  );
                })()}
              </motion.div>
          )}

          {currentScreen === 'points_table' && (
              <motion.div
                  key="points_table"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-4 sm:p-6 lg:p-8 flex flex-col overflow-y-auto custom-scrollbar max-w-5xl mx-auto w-full"
              >
                <div className="max-w-5xl mx-auto w-full">
                  <div className="bg-[#151A27] rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                        <tr className="bg-[#0B0F19] border-b border-white/20 text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider">
                          <th className="p-2 sm:p-4 font-bold">Team</th>
                          <th className="p-2 sm:p-4 font-bold text-center">P</th>
                          <th className="p-2 sm:p-4 font-bold text-center">W</th>
                          <th className="p-2 sm:p-4 font-bold text-center">L</th>
                          <th className="p-2 sm:p-4 font-bold text-center hidden sm:table-cell">T</th>
                          <th className="p-2 sm:p-4 font-bold text-center">NRR</th>
                          <th className="p-2 sm:p-4 font-bold text-center text-blue-400">Pts</th>
                          <th className="p-2 sm:p-4 font-bold text-center hidden md:table-cell">Form</th>
                        </tr>
                        </thead>
                        <tbody>
                        {pointsTable.sort((a, b) => b.points - a.points || b.nrr - a.nrr).map((entry, index) => {
                          const team = teams.find(t => t.id === entry.teamId);
                          if (!team) return null;
                          const isExpanded = expandedTeamId === team.id;
                          const teamMatches = schedule.filter(m => m.team1 === team.id || m.team2 === team.id);

                          return (
                              <React.Fragment key={entry.teamId}>
                                <tr
                                    onClick={() => setExpandedTeamId(isExpanded ? null : team.id)}
                                    className={`border-b border-white/20 hover:bg-white/5 transition-colors cursor-pointer ${index < 4 ? 'bg-blue-500/5' : ''}`}
                                >
                                  <td className="p-2 sm:p-4">
                                    <div className="flex items-center gap-1 sm:gap-3">
                                      <div className={`w-4 sm:w-6 text-center font-bold text-xs sm:text-base ${index < 4 ? 'text-blue-400' : 'text-slate-500'}`}>{index + 1}</div>
                                      <img src={team.logoUrl} alt={team.shortName} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                                      <span className="font-bold text-white hidden sm:inline text-sm sm:text-base">{team.name}</span>
                                      <span className="font-bold text-white sm:hidden text-xs">{team.shortName}</span>
                                      <ChevronLeft className={`w-3 h-3 sm:w-4 sm:h-4 text-slate-500 transition-transform ml-1 ${isExpanded ? '-rotate-90' : 'rotate-180'}`} />
                                    </div>
                                  </td>
                                  <td className="p-2 sm:p-4 text-center text-slate-300 text-xs sm:text-base">{entry.played}</td>
                                  <td className="p-2 sm:p-4 text-center text-slate-300 text-xs sm:text-base">{entry.won}</td>
                                  <td className="p-2 sm:p-4 text-center text-slate-300 text-xs sm:text-base">{entry.lost}</td>
                                  <td className="p-2 sm:p-4 text-center text-slate-300 hidden sm:table-cell text-xs sm:text-base">{entry.tied}</td>
                                  <td className="p-2 sm:p-4 text-center text-slate-400 font-mono text-[10px] sm:text-sm">{entry.nrr > 0 ? `+${entry.nrr}` : entry.nrr}</td>
                                  <td className="p-2 sm:p-4 text-center text-white font-black text-sm sm:text-lg">{entry.points}</td>
                                  <td className="p-2 sm:p-4 hidden md:table-cell">
                                    <div className="flex items-center justify-center gap-1">
                                      {entry.form.map((result, i) => (
                                          <span key={i} className={`w-4 h-4 sm:w-5 sm:h-5 rounded flex items-center justify-center text-[8px] sm:text-[10px] font-bold ${result === 'W' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                                        {result}
                                      </span>
                                      ))}
                                    </div>
                                  </td>
                                </tr>
                                {isExpanded && (
                                    <tr className="bg-black/20 border-b border-white/20">
                                      <td colSpan={8} className="p-0">
                                        <div className="p-3 sm:p-6 space-y-3">
                                          <h4 className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 sm:mb-3">Team Matches</h4>
                                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                                            {teamMatches.map(match => {
                                              const oppTeamId = match.team1 === team.id ? match.team2 : match.team1;
                                              const oppTeam = teams.find(t => t.id === oppTeamId);
                                              return (
                                                  <div
                                                      key={match.id}
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedMatch(match);
                                                        setCurrentScreen('match_details');
                                                      }}
                                                      className="flex items-center justify-between p-2 sm:p-3 rounded-xl bg-[#151A27] border border-white/20 hover:bg-[#1A2133] cursor-pointer transition-colors"
                                                  >
                                                    <div className="flex flex-col">
                                                      <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold">{match.dateLabel}</span>
                                                      <span className="text-[11px] sm:text-xs text-white font-medium">vs {oppTeam?.shortName}</span>
                                                    </div>
                                                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600 rotate-180" />
                                                  </div>
                                              );
                                            })}
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                )}
                              </React.Fragment>
                          );
                        })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
}

function PlayerNode({ player }: { player: Player }) {
  return (
      <div className="flex flex-col items-center group cursor-pointer">
        <div className="relative w-16 h-16 flex items-end justify-center">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-md group-hover:bg-white/40 transition-all" />
          <div className="absolute inset-0 bg-black/40 border-4 border-white rounded-full shadow-xl" />
          <img
              src={player.imageUrl}
              alt={player.name}
              className={getPlayerImageClass(player.id, "w-16 h-20 object-contain object-bottom relative z-10 group-hover:scale-110 transition-transform duration-300")}
          />
        </div>
        <div className="bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-lg border border-white/20 text-center mt-3 shadow-xl">
          <div className="text-sm font-black text-white whitespace-nowrap">{player.name}</div>
          <div className="text-[9px] text-white/70 uppercase tracking-widest font-bold mt-0.5">{player.role}</div>
        </div>
      </div>
  );
}


function StatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
      <div className="rounded-2xl border border-white/25 bg-white/5 p-5 shadow-xl">
        <div className="text-xs uppercase tracking-[0.3em] text-white/50 font-black mb-2">{label}</div>
        <div className="text-3xl font-black text-white mb-1">{value}</div>
        <div className="text-sm text-white/60 leading-relaxed">{note}</div>
      </div>
  );
}

function BalanceBar({ label, count, color }: { label: string, count: number, color: string }) {
  const percentage = (count / 11) * 100;
  return (
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-white/80 font-bold uppercase tracking-wider text-xs">{label}</span>
          <span className="font-black text-white">{count}</span>
        </div>
        <div className="h-3 bg-black/40 rounded-full overflow-hidden border border-white/25 shadow-inner">
          <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              className={`h-full ${color} shadow-[0_0_10px_currentColor]`}
          />
        </div>
      </div>
  );
}
