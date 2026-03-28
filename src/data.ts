export type Role = 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicket-keeper';

export interface Player {
  id: string;
  name: string;
  role: Role;
  imageUrl: string;
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  color: string;
  gradient: string;
  logoUrl: string;
  players: Player[];
}

const getAvatar = (name: string, bg: string, color: string) =>
    `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=${color}&size=150&bold=true`;

export const teams: Team[] = [
  {
    id: 'csk',
    name: 'Chennai Super Kings',
    shortName: 'CSK',
    color: 'bg-yellow-400',
    gradient: 'from-yellow-400 to-yellow-600',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png',
    players: [
      { id: 'csk1', name: 'Ruturaj Gaikwad', role: 'Batsman', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team4playerImgNoBg_1773207316332.png' },
      { id: 'csk2', name: 'MS Dhoni', role: 'Wicket-keeper', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team1playerImgNoBg_1773206232679.png' },
      { id: 'csk3', name: 'Sanju Samson', role: 'Wicket-keeper', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team50playerImgNoBg_1773207257969.png' },
      { id: 'csk4', name: 'Dewald Brevis', role: 'Batsman', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team46playerImgNoBg_1773208945125.png' },
      { id: 'csk5', name: 'Ayush Mhatre', role: 'Batsman', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team45playerImgNoBg_1773208902161.png' },
      { id: 'csk6', name: 'Kartik Sharma', role: 'Wicket-keeper', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team53playerImgNoBg_1773206702889.png' },
      { id: 'csk7', name: 'Sarfaraz Khan', role: 'Batsman', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team58playerImgNoBg_1773379183176.png' },
      { id: 'csk25', name: 'Shivam Dube', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/211.png' },
      { id: 'csk8', name: 'Anshul Kamboj', role: 'All-rounder', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team43playerImgNoBg_1773209148564.png' },
      { id: 'csk9', name: 'Jamie Overton', role: 'Bowler', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team25playerImgNoBg_1773208844367.png' },
      { id: 'csk10', name: 'Ramakrishna Ghosh', role: 'All-rounder', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team41playerImgNoBg_1773209044035.png' },
      { id: 'csk11', name: 'Prashant Veer', role: 'Bowler', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team59playerImgNoBg_1773207152530.png' },
      { id: 'csk12', name: 'Matthew Short', role: 'Batsman', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team54playerImgNoBg_1773206785917.png' },
      { id: 'csk13', name: 'Aman Khan', role: 'All-rounder', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team52playerImgNoBg_1773206632903.png' },
      { id: 'csk14', name: 'Zak Foulkes', role: 'Bowler', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team57playerImgNoBg_1773206999966.png' },
      { id: 'csk15', name: 'Khaleel Ahmed', role: 'Bowler', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team13playerImgNoBg_1773379207442.png' },
      { id: 'csk16', name: 'Noor Ahmad', role: 'Bowler', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team12playerImgNoBg_1773208221215.png' },
      { id: 'csk17', name: 'Mukesh Choudhary', role: 'Bowler', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team24playerImgNoBg_1773208579668.png' },
      { id: 'csk18', name: 'Nathan Ellis', role: 'Bowler', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team23playerImgNoBg_1773208458976.png' },
      { id: 'csk19', name: 'Shreyas Gopal', role: 'Bowler', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team16playerImgNoBg_1773208515368.png' },
      { id: 'csk20', name: 'Gurjapneet Singh', role: 'Bowler', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team15playerImgNoBg_1773208406237.png' },
      { id: 'csk21', name: 'Akeal Hosein', role: 'All-rounder', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team51playerImgNoBg_1773206570529.png' },
      { id: 'csk22', name: 'Matt Henry', role: 'Bowler', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team55playerImgNoBg_1773206880148.png' },
      { id: 'csk23', name: 'Urvil Patel', role: 'Wicket-keeper', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team49playerImgNoBg_1773208996000.png' },
      { id: 'csk24', name: 'Rahul Chahar', role: 'Bowler', imageUrl: 'https://gallery.chennaisuperkings.com/PROD/TEAM/Team56playerImgNoBg_1773206941099.png' },
    ]
  },
  {
    id: 'mi',
    name: 'Mumbai Indians',
    shortName: 'MI',
    color: 'bg-blue-600',
    gradient: 'from-blue-600 to-blue-800',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png',
    players: [
      { id: 'mi1', name: 'Quinton de Kock', role: 'Wicket-keeper', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/28035.png?v=4.16&w=200' },
      { id: 'mi2', name: 'Robin Minz', role: 'Wicket-keeper', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/95322.png?v=4.16&w=200' },
      { id: 'mi3', name: 'Ryan Rickelton', role: 'Wicket-keeper', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/64941.png?v=4.16&w=200' },
      { id: 'mi4', name: 'Danish Malewar', role: 'Batsman', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/89179.png?v=4.16&w=200' },
      { id: 'mi5', name: 'Rohit Sharma', role: 'Batsman', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/3852.png?v=4.16&w=200' },
      { id: 'mi6', name: 'Sherfane Rutherford', role: 'Batsman', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/67285.png?v=4.16&w=200' },
      { id: 'mi7', name: 'Suryakumar Yadav', role: 'Batsman', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/11803.png?v=4.16&w=200' },
      { id: 'mi8', name: 'Tilak Varma', role: 'Batsman', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/70761.png?v=4.16&w=200' },
      { id: 'mi9', name: 'Hardik Pandya', role: 'All-rounder', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/63751.png?v=4.16&w=200' },
      { id: 'mi10', name: 'Atharva Ankolekar', role: 'All-rounder', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/68585.png?v=4.16&w=200' },
      { id: 'mi11', name: 'Corbin Bosch', role: 'All-rounder', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/63605.png?v=4.16&w=200' },
      { id: 'mi12', name: 'Mayank Rawat', role: 'All-rounder', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/66974.png?v=4.16&w=200' },
      { id: 'mi13', name: 'Mitchell Santner', role: 'All-rounder', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/57903.png?v=4.16&w=200' },
      { id: 'mi14', name: 'Naman Dhir', role: 'All-rounder', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/100353.png?v=4.16&w=200' },
      { id: 'mi15', name: 'Raj Angad Bawa', role: 'All-rounder', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/89168.png?v=4.16&w=200' },
      { id: 'mi16', name: 'Shardul Thakur', role: 'All-rounder', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/63345.png?v=4.16&w=200' },
      { id: 'mi17', name: 'Will Jacks', role: 'All-rounder', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/66927.png?v=4.16&w=200' },
      { id: 'mi18', name: 'AM Ghazanfar', role: 'Bowler', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/96648.png?v=4.16&w=200' },
      { id: 'mi19', name: 'Ashwani Kumar', role: 'Bowler', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/74296.png?v=4.16&w=200' },
      { id: 'mi20', name: 'Deepak Chahar', role: 'Bowler', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/59547.png?v=4.16&w=200' },
      { id: 'mi21', name: 'Jasprit Bumrah', role: 'Bowler', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/63755.png?v=4.16&w=200' },
      { id: 'mi22', name: 'Mayank Markande', role: 'Bowler', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/67126.png?v=4.16&w=200' },
      { id: 'mi23', name: 'Mohammad Izhar', role: 'Bowler', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/137547.png?v=4.16&w=200' },
      { id: 'mi24', name: 'Raghu Sharma', role: 'Bowler', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/67726.png?v=4.16&w=200' },
      { id: 'mi25', name: 'Trent Boult', role: 'Bowler', imageUrl: 'https://www.mumbaiindians.com/static-assets/images/players/large/4338.png?v=4.16&w=200' },
    ]
  },
  {
    id: 'rcb',
    name: 'Royal Challengers Bengaluru',
    shortName: 'RCB',
    color: 'bg-red-600',
    gradient: 'from-red-600 to-red-800',
    logoUrl: 'https://www.royalchallengers.com/themes/custom/rcbbase/images/rcb-logo-new.png',
    players: [
      { id: 'rcb1', name: 'Jitesh Sharma', role: 'Wicket-keeper', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/jitesh%20%281%29.png?itok=vzEgLMOu' },
      { id: 'rcb2', name: 'Jordan Cox', role: 'Wicket-keeper', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-12/Cox.png?itok=Rms_b0T' },
      { id: 'rcb3', name: 'Phil Salt', role: 'Wicket-keeper', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/salt%20%282%29_0.png?itok=ZEsoqmrP' },
      { id: 'rcb4', name: 'Rajat Patidar', role: 'Batsman', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/Rajat%20%281%29_0.png?itok=T3zbHJxN' },
      { id: 'rcb5', name: 'Virat Kohli', role: 'Batsman', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/vk%20%282%29_0.png?itok=Is3MWocj' },
      { id: 'rcb6', name: 'Devdutt Padikkal', role: 'Batsman', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/padikkal%20%281%29.png?itok=3lQ43T7x' },
      { id: 'rcb7', name: 'Tim David', role: 'All-rounder', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/david_0.png?itok=8nRMvk9p' },
      { id: 'rcb8', name: 'Jacob Bethell', role: 'All-rounder', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/bethell_0.png?itok=-SCHRU-4' },
      { id: 'rcb9', name: 'Romario Shepherd', role: 'All-rounder', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/romario.png?itok=juulMN06' },
      { id: 'rcb10', name: 'Krunal Pandya', role: 'All-rounder', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/krunal_0.png?itok=kfuF_oaj' },
      { id: 'rcb11', name: 'Venkatesh Iyer', role: 'All-rounder', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-12/Venky.png?itok=e-Iyfd5k' },
      { id: 'rcb12', name: 'Kanishk Chouhan', role: 'All-rounder', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-12/Kanishk.png?itok=o5lC7zXF' },
      { id: 'rcb13', name: 'Mangesh Yadav', role: 'All-rounder', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-12/Mangesh_.png?itok=BIPjVM3U' },
      { id: 'rcb14', name: 'Satvik Deswal', role: 'All-rounder', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-12/Satvik.png?itok=-TdTTYbm' },
      { id: 'rcb15', name: 'Vicky Ostwal', role: 'All-rounder', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-12/Vicky.png?itok=ld3PMIcL' },
      { id: 'rcb16', name: 'Vihaan Malhotra', role: 'All-rounder', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-12/Vihaan.png?itok=ld9_bl9y' },
      { id: 'rcb17', name: 'Yash Dayal', role: 'Bowler', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/dayal.png?itok=q5MQrKXB' },
      { id: 'rcb18', name: 'Josh Hazlewood', role: 'Bowler', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/hazelwood%20%281%29_0.png?itok=CUVbTBcO' },
      { id: 'rcb19', name: 'Nuwan Thushara', role: 'Bowler', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/nuwan.png?itok=bY1cyFxY' },
      { id: 'rcb20', name: 'Rasikh Dar', role: 'Bowler', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/rasik.png?itok=M4lf95iR' },
      { id: 'rcb21', name: 'Bhuvneshwar Kumar', role: 'Bowler', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/bhuvi%20%282%29.png?itok=_f7OHbIw' },
      { id: 'rcb22', name: 'Suyash Sharma', role: 'Bowler', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/suyash%20%281%29.png?itok=QkPUrpgu' },
      { id: 'rcb23', name: 'Swapnil Singh', role: 'Bowler', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/swapnil%20%281%29_0.png?itok=h_Oia8o-' },
      { id: 'rcb24', name: 'Jacob Duffy', role: 'Bowler', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-12/Duffy.png?itok=JT8Ahn1x' },
      { id: 'rcb25', name: 'Abhinandan Singh', role: 'Bowler', imageUrl: 'https://www.royalchallengers.com/PRRCB01/public/styles/s/public/2025-03/abhi.png?itok=-hhzyLFg' },
    ]
  },
  {
    id: 'kkr',
    name: 'Kolkata Knight Riders',
    shortName: 'KKR',
    color: 'bg-purple-700',
    gradient: 'from-purple-700 to-purple-900',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png',
    players: [
      { id: 'kkr1', name: 'Finn Allen', role: 'Wicket-keeper', imageUrl: 'https://www.kkr.in/static-assets/images/players/66046.png?v=112.02' },
      { id: 'kkr2', name: 'Tejasvi Singh', role: 'Wicket-keeper', imageUrl: 'https://www.kkr.in/static-assets/images/players/126180.png?v=112.02' },
      { id: 'kkr3', name: 'Tim Seifert', role: 'Wicket-keeper', imageUrl: 'https://www.kkr.in/static-assets/images/players/63867.png?v=112.02' },
      { id: 'kkr4', name: 'Ajinkya Rahane', role: 'Batsman', imageUrl: 'https://www.kkr.in/static-assets/images/players/3991.png?v=112.02' },
      { id: 'kkr5', name: 'Angkrish Raghuvanshi', role: 'Batsman', imageUrl: 'https://www.kkr.in/static-assets/images/players/88352.png?v=112.02' },
      { id: 'kkr6', name: 'Cameron Green', role: 'Batsman', imageUrl: 'https://www.kkr.in/static-assets/images/players/66870.png?v=112.02' },
      { id: 'kkr7', name: 'Manish Pandey', role: 'Batsman', imageUrl: 'https://www.kkr.in/static-assets/images/players/4276.png?v=112.02' },
      { id: 'kkr8', name: 'Rahul Tripathi', role: 'Batsman', imageUrl: 'https://www.kkr.in/static-assets/images/players/41229.png?v=112.02' },
      { id: 'kkr9', name: 'Ramandeep Singh', role: 'Batsman', imageUrl: 'https://www.kkr.in/static-assets/images/players/66953.png?v=112.02' },
      { id: 'kkr10', name: 'Rinku Singh', role: 'Batsman', imageUrl: 'https://www.kkr.in/static-assets/images/players/64727.png?v=112.02' },
      { id: 'kkr11', name: 'Anukul Roy', role: 'All-rounder', imageUrl: 'https://www.kkr.in/static-assets/images/players/66983.png?v=112.02' },
      { id: 'kkr12', name: 'Daksh Kamra', role: 'All-rounder', imageUrl: 'https://www.kkr.in/static-assets/images/players/137799.png?v=112.02' },
      { id: 'kkr13', name: 'Rachin Ravindra', role: 'All-rounder', imageUrl: 'https://www.kkr.in/static-assets/images/players/66053.png?v=112.02' },
      { id: 'kkr14', name: 'Rovman Powell', role: 'All-rounder', imageUrl: 'https://www.kkr.in/static-assets/images/players/65291.png?v=112.02' },
      { id: 'kkr15', name: 'Sarthak Ranjan', role: 'All-rounder', imageUrl: 'https://www.kkr.in/static-assets/images/players/65945.png?v=112.02' },
      { id: 'kkr16', name: 'Sunil Narine', role: 'All-rounder', imageUrl: 'https://www.kkr.in/static-assets/images/players/11229.png?v=112.02' },
      { id: 'kkr17', name: 'Akash Deep', role: 'Bowler', imageUrl: 'https://www.kkr.in/static-assets/images/players/71447.png?v=112.02' },
      { id: 'kkr18', name: 'Blessing Muzarabani', role: 'Bowler', imageUrl: 'https://www.kkr.in/static-assets/images/players/67784.png?v=112.02' },
      { id: 'kkr19', name: 'Harshit Rana', role: 'Bowler', imageUrl: 'https://www.kkr.in/static-assets/images/players/93526.png?v=112.02' },
      { id: 'kkr20', name: 'Kartik Tyagi', role: 'Bowler', imageUrl: 'https://www.kkr.in/static-assets/images/players/67735.png?v=112.02' },
      { id: 'kkr21', name: 'Matheesha Pathirana', role: 'Bowler', imageUrl: 'https://www.kkr.in/static-assets/images/players/73830.png?v=112.02' },
      { id: 'kkr22', name: 'Prashant Solanki', role: 'Bowler', imageUrl: 'https://www.kkr.in/static-assets/images/players/72042.png?v=112.02' },
      { id: 'kkr23', name: 'Umran Malik', role: 'Bowler', imageUrl: 'https://www.kkr.in/static-assets/images/players/82969.png?v=112.02' },
      { id: 'kkr24', name: 'Vaibhav Arora', role: 'Bowler', imageUrl: 'https://www.kkr.in/static-assets/images/players/74298.png?v=112.02' },
      { id: 'kkr25', name: 'Varun Chakaravarthy', role: 'Bowler', imageUrl: 'https://www.kkr.in/static-assets/images/players/67469.png?v=112.02' },
    ]
  },
  {
    id: 'dc',
    name: 'Delhi Capitals',
    shortName: 'DC',
    color: 'bg-blue-500',
    gradient: 'from-blue-500 to-red-600',
    logoUrl: 'https://www.delhicapitals.in/static-assets/images/logo.png?v=2.34',
    players: [
      { id: 'dc1', name: 'KL Rahul', role: 'Wicket-keeper', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/60122.png?v=2.19' },
      { id: 'dc2', name: 'Abishek Porel', role: 'Wicket-keeper', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/82442.png?v=2.19' },
      { id: 'dc3', name: 'Ben Duckett', role: 'Wicket-keeper', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/63082.png?v=2.19' },
      { id: 'dc4', name: 'Ashutosh Sharma', role: 'Batsman', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/68176.png?v=2.19' },
      { id: 'dc5', name: 'David Miller', role: 'Batsman', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/5313.png?v=2.19' },
      { id: 'dc6', name: 'Karun Nair', role: 'Batsman', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/62297.png?v=2.19' },
      { id: 'dc7', name: 'Nitish Rana', role: 'Batsman', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/63649.png?v=2.19' },
      { id: 'dc8', name: 'Pathum Nissanka', role: 'Batsman', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/66368.png?v=2.19' },
      { id: 'dc9', name: 'Prithvi Shaw', role: 'Batsman', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/66812.png?v=2.19' },
      { id: 'dc10', name: 'Sahil Parakh', role: 'Batsman', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/114374.png?v=2.19' },
      { id: 'dc11', name: 'Sameer Rizvi', role: 'Batsman', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/71376.png?v=2.19' },
      { id: 'dc12', name: 'Tristan Stubbs', role: 'Batsman', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/74761.png?v=2.19' },
      { id: 'dc13', name: 'Ajay Mandal', role: 'All-rounder', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/66558.png?v=2.19' },
      { id: 'dc14', name: 'Auqib Nabi', role: 'All-rounder', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/70172.png?v=2.19' },
      { id: 'dc15', name: 'Axar Patel', role: 'All-rounder', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/62576.png?v=2.19' },
      { id: 'dc16', name: 'Madhav Tiwari', role: 'All-rounder', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/124649.png?v=2.19' },
      { id: 'dc17', name: 'Tripurana Vijay', role: 'All-rounder', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/90635.png?v=2.19' },
      { id: 'dc18', name: 'Vipraj Nigam', role: 'Bowler', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/88677.png?v=2.19' },
      { id: 'dc19', name: 'Dushmantha Chameera', role: 'Bowler', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/58065.png?v=2.19' },
      { id: 'dc20', name: 'Kuldeep Yadav', role: 'Bowler', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/63187.png?v=2.19' },
      { id: 'dc21', name: 'Kyle Jamieson', role: 'Bowler', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/63865.png?v=2.19' },
      { id: 'dc22', name: 'Lungi Ngidi', role: 'Bowler', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/64225.png?v=2.19' },
      { id: 'dc23', name: 'Mitchell Starc', role: 'Bowler', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/10053.png?v=2.19' },
      { id: 'dc24', name: 'Mukesh Kumar', role: 'Bowler', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/65723.png?v=2.19' },
      { id: 'dc25', name: 'T Natarajan', role: 'Bowler', imageUrl: 'https://www.delhicapitals.in/static-assets/images/players/ipl/65160.png?v=2.19' },
    ]
  },
  {
    id: 'pbks',
    name: 'Punjab Kings',
    shortName: 'PBKS',
    color: 'bg-red-600',
    gradient: 'from-red-600 to-red-800',
    logoUrl: 'https://www.punjabkingsipl.in/static-assets/images/cssimages/svg/pbks-logo.svg?v=7.3',
    players: [
      { id: 'pbks1', name: 'Prabhsimran Singh', role: 'Wicket-keeper', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/70222.png?v=6.43' },
      { id: 'pbks2', name: 'Vishnu Vinod', role: 'Wicket-keeper', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/64783.png?v=6.43' },
      { id: 'pbks3', name: 'Shreyas Iyer', role: 'Batsman', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/63961.png?v=6.43' },
      { id: 'pbks4', name: 'Shashank Singh', role: 'Batsman', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/63520.png?v=6.43' },
      { id: 'pbks5', name: 'Priyansh Arya', role: 'Batsman', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/71366.png?v=6.43' },
      { id: 'pbks6', name: 'Pyla Avinash', role: 'Batsman', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/81901.png?v=6.43' },
      { id: 'pbks7', name: 'Suryansh Shedge', role: 'Batsman', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/71951.png?v=6.43' },
      { id: 'pbks8', name: 'Harnoor Singh', role: 'Batsman', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/89196.png?v=6.43' },
      { id: 'pbks9', name: 'Marcus Stoinis', role: 'All-rounder', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/4311.png?v=6.43' },
      { id: 'pbks10', name: 'Nehal Wadhera', role: 'All-rounder', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/69657.png?v=6.43' },
      { id: 'pbks11', name: 'Marco Jansen', role: 'All-rounder', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/69409.png?v=6.43' },
      { id: 'pbks12', name: 'Azmatullah Omarzai', role: 'All-rounder', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/67516.png?v=6.43' },
      { id: 'pbks13', name: 'Musheer Khan', role: 'All-rounder', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/94786.png?v=6.43' },
      { id: 'pbks14', name: 'Cooper Connolly', role: 'All-rounder', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/74410.png?v=6.43' },
      { id: 'pbks15', name: 'Mitchell Owen', role: 'All-rounder', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/81813.png?v=6.43' },
      { id: 'pbks16', name: 'Harpreet Brar', role: 'Bowler', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/70500.png?v=6.43' },
      { id: 'pbks17', name: 'Arshdeep Singh', role: 'Bowler', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/67905.png?v=6.43' },
      { id: 'pbks18', name: 'Yuzvendra Chahal', role: 'Bowler', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/9844.png?v=6.43' },
      { id: 'pbks19', name: 'Xavier Bartlett', role: 'Bowler', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/66516.png?v=6.43' },
      { id: 'pbks20', name: 'Pravin Dubey', role: 'Bowler', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/63550.png?v=6.43' },
      { id: 'pbks21', name: 'Lockie Ferguson', role: 'Bowler', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/63719.png?v=6.43' },
      { id: 'pbks22', name: 'Yash Thakur', role: 'Bowler', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/66819.png?v=6.43' },
      { id: 'pbks23', name: 'Vyshak Vijaykumar', role: 'Bowler', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/67628.png?v=6.43' },
      { id: 'pbks24', name: 'Ben Dwarshuis', role: 'Bowler', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/64473.png?v=6.43' },
      { id: 'pbks25', name: 'Vishal Nishad', role: 'Bowler', imageUrl: 'https://www.punjabkingsipl.in/static-assets/images/players/126819.png?v=6.43' },
    ]
  },
  {
    id: 'rr',
    name: 'Rajasthan Royals',
    shortName: 'RR',
    color: 'bg-pink-600',
    gradient: 'from-pink-600 to-pink-800',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/500px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png',
    players: [
      { id: 'rr1', name: 'Dhruv Jurel', role: 'Wicket-keeper', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/71370.png?v=7.67' },
      { id: 'rr2', name: 'Donovan Ferreira', role: 'Wicket-keeper', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/23487.png?v=7.67' },
      { id: 'rr3', name: 'Lhuan-dre Pretorius', role: 'Wicket-keeper', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/109249.png?v=7.67' },
      { id: 'rr4', name: 'Ravi Singh', role: 'Wicket-keeper', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/129333.png?v=7.67' },
      { id: 'rr5', name: 'Aman Perala', role: 'Batsman', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/88692.png?v=7.67' },
      { id: 'rr6', name: 'Shimron Hetmyer', role: 'Batsman', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/64861.png?v=7.67' },
      { id: 'rr7', name: 'Shubham Dubey', role: 'Batsman', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/83453.png?v=7.67' },
      { id: 'rr8', name: 'Vaibhav Sooryavanshi', role: 'Batsman', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/114349.png?v=7.67' },
      { id: 'rr9', name: 'Yashasvi Jaiswal', role: 'Batsman', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/69238.png?v=7.67' },
      { id: 'rr10', name: 'Ravindra Jadeja', role: 'All-rounder', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/3850.png?v=7.67' },
      { id: 'rr11', name: 'Riyan Parag', role: 'All-rounder', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/66939.png?v=7.67' },
      { id: 'rr12', name: 'Sam Curran', role: 'All-rounder', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/65584.png?v=7.67' },
      { id: 'rr13', name: 'Adam Milne', role: 'Bowler', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/11933.png?v=7.67' },
      { id: 'rr14', name: 'Brijesh Sharma', role: 'Bowler', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/133689.png?v=7.67' },
      { id: 'rr15', name: 'Jofra Archer', role: 'Bowler', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/64254.png?v=7.67' },
      { id: 'rr16', name: 'Kuldeep Sen', role: 'Bowler', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/70402.png?v=7.67' },
      { id: 'rr17', name: 'Kwena Maphaka', role: 'Bowler', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/90908.png?v=7.67' },
      { id: 'rr18', name: 'Nandre Burger', role: 'Bowler', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/66195.png?v=7.67' },
      { id: 'rr19', name: 'Ravi Bishnoi', role: 'Bowler', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/71288.png?v=7.67' },
      { id: 'rr20', name: 'Sandeep Sharma', role: 'Bowler', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/10116.png?v=7.67' },
      { id: 'rr21', name: 'Sushant Mishra', role: 'Bowler', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/71380.png?v=7.67' },
      { id: 'rr22', name: 'Tushar Deshpande', role: 'Bowler', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/65478.png?v=7.67' },
      { id: 'rr23', name: 'Vignesh Puthur', role: 'Bowler', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/83549.png?v=7.67' },
      { id: 'rr24', name: 'Yash Punja', role: 'Bowler', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/100840.png?v=7.67' },
      { id: 'rr25', name: 'Yudhvir Singh', role: 'Bowler', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/74054.png?v=7.67' },
    ]
  },
  {
    id: 'srh',
    name: 'Sunrisers Hyderabad',
    shortName: 'SRH',
    color: 'bg-orange-500',
    gradient: 'from-orange-500 to-orange-700',
    logoUrl: 'https://www.sunrisershyderabad.in/dist/img/srh-logo.gif',
    players: [
      { id: 'srh1', name: 'Heinrich Klaasen', role: 'Wicket-keeper', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-67e272c72448f3.80440934ov0q8h7s.png' },
      { id: 'srh2', name: 'Ishan Kishan', role: 'Wicket-keeper', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-67e272e22408f2.789469842pzde4v1.png' },
      { id: 'srh3', name: 'Travis Head', role: 'Batsman', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-67e273c8b11655.04180031(pv0c5kb.png' },
      { id: 'srh4', name: 'Smaran Ravichandran', role: 'Batsman', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-6800d5c385cab7.825722274cqebh(f.png' },
      { id: 'srh5', name: 'Aniket Verma', role: 'Batsman', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-67e27259d36f51.19349794jrb$7fqi.png' },
      { id: 'srh6', name: 'Pat Cummins', role: 'All-rounder', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-67e27363799fb0.1862331990i28e$u.png' },
      { id: 'srh7', name: 'Abhishek Sharma', role: 'All-rounder', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-67e27218899da5.817432253hifyrl4.png' },
      { id: 'srh8', name: 'Nitish Kumar Reddy', role: 'All-rounder', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-67e273499dc7d5.933084133ot4cyrf.png' },
      { id: 'srh9', name: 'Harshal Patel', role: 'All-rounder', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-67e272acb507b2.70993615um4)$v1n.png' },
      { id: 'srh10', name: 'Kamindu Mendis', role: 'All-rounder', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-67e27318caaac6.92949795f3v)(w6z.png' },
      { id: 'srh11', name: 'Harsh Dubey', role: 'All-rounder', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-681c9c9f22c4e7.622592224tufm1iw.png' },
      { id: 'srh12', name: 'Jaydev Unadkat', role: 'Bowler', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-67e272f98c68f3.63349484)6p71kcg.png' },
      { id: 'srh13', name: 'Eshan Malinga', role: 'Bowler', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-67e2729406a908.248406980u87x9eh.png' },
      { id: 'srh14', name: 'Zeeshan Ansari', role: 'Bowler', imageUrl: 'https://www.sunrisershyderabad.in/uploads/image/SRH-67fe03297300c7.02410136h$vo(j5z.png' },
        { id: 'srh15', name: 'Salil Arora', role: 'Wicket-keeper', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/4556.png' },
        { id: 'srh16', name: 'Brydon Carse', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/1221.png' },
        { id: 'srh17', name: 'Shivang Kumar', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/4561.png' },
        { id: 'srh18', name: 'Krains Fuletra', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/4557.png' },
        { id: 'srh19', name: 'Liam Livingstone', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/183.png' },
        { id: 'srh20', name: 'David Payne', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/assets/images/Default-Men.png' },
        { id: 'srh21', name: 'Sakib Hussain', role: 'Bowler', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/3104.png' },
        { id: 'srh22', name: 'Onkar Tarmale', role: 'Bowler', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/4560.png' },
        { id: 'srh23', name: 'Amit Kumar', role: 'Bowler', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/4559.png' },
        { id: 'srh24', name: 'Praful Hinge', role: 'Bowler', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/4558.png' }
    ]
  },
  {
    id: 'gt',
    name: 'Gujarat Titans',
    shortName: 'GT',
    color: 'bg-slate-800',
    gradient: 'from-slate-800 to-slate-950',
    logoUrl: 'https://www.gujarattitansipl.com/static-assets/images/cssimages/svg/logo.svg?v=5.13',
    players: [
      { id: 'gt1', name: 'Anuj Rawat', role: 'Wicket-keeper', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/67752.png?v=6.19' },
      { id: 'gt2', name: 'Jos Buttler', role: 'Wicket-keeper', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/9782.png?v=6.19' },
      { id: 'gt3', name: 'Kumar Kushagra', role: 'Wicket-keeper', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/74097.png?v=6.19' },
      { id: 'gt4', name: 'Tom Banton', role: 'Wicket-keeper', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/66923.png?v=6.19' },
      { id: 'gt5', name: 'Sai Sudharsan', role: 'Batsman', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/66435.png?v=6.19' },
      { id: 'gt6', name: 'Shahrukh Khan', role: 'Batsman', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/64721.png?v=6.19' },
      { id: 'gt7', name: 'Shubman Gill', role: 'Batsman', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/66818.png?v=6.19' },
      { id: 'gt8', name: 'Glenn Phillips', role: 'All-rounder', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/65295.png?v=6.19' },
      { id: 'gt9', name: 'Jason Holder', role: 'All-rounder', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/10232.png?v=6.19' },
      { id: 'gt10', name: 'Nishant Sindhu', role: 'All-rounder', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/88873.png?v=6.19' },
      { id: 'gt11', name: 'Rahul Tewatia', role: 'All-rounder', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/64440.png?v=6.19' },
      { id: 'gt12', name: 'Sai Kishore', role: 'All-rounder', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/66438.png?v=6.19' },
      { id: 'gt13', name: 'Washington Sundar', role: 'All-rounder', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/65859.png?v=6.19' },
      { id: 'gt14', name: 'Arshad Khan', role: 'Bowler', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/82839.png?v=6.19' },
      { id: 'gt15', name: 'Ashok Sharma', role: 'Bowler', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/91316.png?v=6.19' },
      { id: 'gt16', name: 'Gurnoor Brar', role: 'Bowler', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/90572.png?v=6.19' },
      { id: 'gt17', name: 'Ishant Sharma', role: 'Bowler', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/3899.png?v=6.19' },
      { id: 'gt18', name: 'Jayant Yadav', role: 'Bowler', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/59611.png?v=6.19' },
      { id: 'gt19', name: 'Kagiso Rabada', role: 'Bowler', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/63611.png?v=6.19' },
      { id: 'gt20', name: 'Luke Wood', role: 'Bowler', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/64498.png?v=6.19' },
      { id: 'gt21', name: 'Manav Suthar', role: 'Bowler', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/71149.png?v=6.19' },
      { id: 'gt22', name: 'Mohammed Siraj', role: 'Bowler', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/65799.png?v=6.19' },
      { id: 'gt23', name: 'Prasidh Krishna', role: 'Bowler', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/65702.png?v=6.19' },
      { id: 'gt24', name: 'Prithvi Raj Yarra', role: 'Bowler', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/67706.png?v=6.19' },
      { id: 'gt25', name: 'Rashid Khan', role: 'Bowler', imageUrl: 'https://www.gujarattitansipl.com/static-assets/images/players/65748.png?v=6.19' }
    ]
  },
  {
    id: 'lsg',
    name: 'Lucknow Super Giants',
    shortName: 'LSG',
    color: 'bg-blue-900',
    gradient: 'from-blue-900 to-blue-950',
    logoUrl: 'https://www.lucknowsupergiants.in/static-assets/images/cssimages/svg/logo.svg?v=7.6',
    players: [
      { id: 'lsg1', name: 'Rishabh Pant', role: 'Wicket-keeper', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/65756.png?v=12.92' },
      { id: 'lsg2', name: 'Nicholas Pooran', role: 'Wicket-keeper', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/63726.png?v=12.92' },
      { id: 'lsg3', name: 'Josh Inglis', role: 'Wicket-keeper', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/65893.png?v=12.92' },
      { id: 'lsg4', name: 'Mukul Choudhary', role: 'Wicket-keeper', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/99128.png?v=12.92' },
      { id: 'lsg5', name: 'Abdul Samad', role: 'Batsman', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/71260.png?v=12.92' },
      { id: 'lsg6', name: 'Aiden Markram', role: 'Batsman', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/64219.png?v=12.92' },
      { id: 'lsg7', name: 'Akshat Raghuwanshi', role: 'Batsman', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/89169.png?v=12.92' },
      { id: 'lsg8', name: 'Himmat Singh', role: 'Batsman', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/65152.png?v=12.92' },
      { id: 'lsg9', name: 'Matthew Breetzke', role: 'Batsman', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/65618.png?v=12.92' },
      { id: 'lsg10', name: 'Mitchell Marsh', role: 'Batsman', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/10094.png?v=12.92' },
      { id: 'lsg11', name: 'Arshin Kulkarni', role: 'All-rounder', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/88542.png?v=12.92' },
      { id: 'lsg12', name: 'Ayush Badoni', role: 'All-rounder', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/69656.png?v=12.92' },
      { id: 'lsg13', name: 'Shahbaz Ahamad', role: 'All-rounder', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/58223.png?v=12.92' },
      { id: 'lsg14', name: 'Wanindu Hasaranga', role: 'All-rounder', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/65027.png?v=12.92' },
      { id: 'lsg15', name: 'Akash Singh', role: 'Bowler', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/70376.png?v=12.92' },
      { id: 'lsg16', name: 'Anrich Nortje', role: 'Bowler', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/63641.png?v=12.92' },
      { id: 'lsg17', name: 'Arjun Tendulkar', role: 'Bowler', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/69659.png?v=12.92' },
      { id: 'lsg18', name: 'Avesh Khan', role: 'Bowler', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/64511.png?v=12.92' },
      { id: 'lsg19', name: 'Digvesh Rathi', role: 'Bowler', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/100574.png?v=12.92' },
      { id: 'lsg20', name: 'M Siddharth', role: 'Bowler', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/67476.png?v=12.92' },
      { id: 'lsg21', name: 'Mayank Yadav', role: 'Bowler', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/90501.png?v=12.92' },
      { id: 'lsg22', name: 'Mohammad Shami', role: 'Bowler', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/28994.png?v=12.92' },
      { id: 'lsg23', name: 'Mohsin Khan', role: 'Bowler', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/68182.png?v=12.92' },
      { id: 'lsg24', name: 'Naman Tiwari', role: 'Bowler', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/88633.png?v=12.92' },
      { id: 'lsg25', name: 'Prince Yadav', role: 'Bowler', imageUrl: 'https://www.lucknowsupergiants.in/static-assets/images/players/100570.png?v=12.92' }
    ]
  }
];

export interface PlayerBattle {
  batter: string;
  bowler: string;
  runs: number;
  balls: number;
  dismissals: number;
  note: string;
}

export interface PointsTableEntry {
  teamId: string;
  played: number;
  won: number;
  lost: number;
  tied: number;
  nrr: number;
  points: number;
  form: ('W' | 'L')[];
}

export const pointsTable: PointsTableEntry[] = [
  { teamId: 'csk', played: 0, won: 0, lost: 0, tied: 0, nrr: 0, points: 0, form: ['W', 'W', 'L', 'W', 'L'] },
  { teamId: 'kkr', played: 0, won: 0, lost: 0, tied: 0, nrr: 0, points: 0, form: ['L', 'W', 'W', 'W', 'W'] },
  { teamId: 'rr', played: 0, won: 0, lost: 0, tied: 0, nrr: 0, points: 0, form: ['W', 'L', 'L', 'W', 'L'] },
  { teamId: 'srh', played: 0, won: 0, lost: 0, tied: 0, nrr: 0, points: 0, form: ['L', 'L', 'W', 'W', 'W'] },
  { teamId: 'rcb', played: 0, won: 0, lost: 0, tied: 0, nrr: 0, points: 0, form: ['W', 'W', 'W', 'W', 'W'] },
  { teamId: 'dc', played: 0, won: 0, lost: 0, tied: 0, nrr: 0, points: 0, form: ['L', 'W', 'L', 'L', 'W'] },
  { teamId: 'lsg', played: 0, won: 0, lost: 0, tied: 0, nrr: 0, points: 0, form: ['W', 'L', 'W', 'L', 'L'] },
  { teamId: 'gt', played: 0, won: 0, lost: 0, tied: 0, nrr: 0, points: 0, form: ['L', 'L', 'L', 'W', 'L'] },
  { teamId: 'pbks', played: 0, won: 0, lost: 0, tied: 0, nrr: 0, points: 0, form: ['W', 'L', 'L', 'L', 'W'] },
  { teamId: 'mi', played: 0, won: 0, lost: 0, tied: 0, nrr: 0, points: 0, form: ['L', 'L', 'W', 'L', 'L'] },
];

export interface Match {
  id: string;
  matchNumber: number;
  date: string;
  dateLabel: string;
  day: string;
  team1: string;
  team2: string;
  venueCity: string;
  stadium: string;
  captain1: string;
  captain2: string;
  headline: string;
  venueStats: {
    avgFirstInningsScore: number;
    chasingWins: number;
    totalMatches: number;
    bestBowlingFigure: string;
    boundaryPercentage: number;
  };
  headToHead: {
    team1Wins: number;
    team2Wins: number;
    noResult: number;
    last5: string;
  };
  playerBattles: PlayerBattle[];
  interestingStats: string[];
  pitchReport: string;
}

type MatchSeed = {
  matchNumber: number;
  date: string;
  dateLabel: string;
  day: string;
  team1: string;
  team2: string;
  venueCity: string;
  stadium: string;
};

const captainByTeam: Record<string, string> = {
  csk: 'Ruturaj Gaikwad',
  mi: 'Hardik Pandya',
  rcb: 'Rajat Patidar',
  kkr: 'Ajinkya Rahane',
  dc: 'Axar Patel',
  pbks: 'Shreyas Iyer',
  rr: 'Riyan Parag',
  gt: 'Shubman Gill',
  srh: 'Ishan Kishan',
  lsg: 'Rishabh Pant',
};

const matchInsights: Record<string, Omit<Match, 'id' | 'matchNumber' | 'date' | 'dateLabel' | 'day' | 'team1' | 'team2' | 'venueCity' | 'stadium' | 'captain1' | 'captain2' | 'pitchReport'>> = {
  'rcb-srh': {
    headline: 'Powerplay fireworks meeting one of the most explosive middle orders in the league.',
    venueStats: { avgFirstInningsScore: 189, chasingWins: 52, totalMatches: 96, bestBowlingFigure: '6/12', boundaryPercentage: 61 },
    headToHead: { team1Wins: 11, team2Wins: 13, noResult: 0, last5: 'SRH lead 3-2 in the last five meetings.' },
    playerBattles: [
      { batter: 'Virat Kohli', bowler: 'Pat Cummins', runs: 72, balls: 49, dismissals: 3, note: 'Cummins attacks the top of off stump and has dismissed Kohli three times in T20s.' },
      { batter: 'Travis Head', bowler: 'Josh Hazlewood', runs: 38, balls: 31, dismissals: 2, note: 'Hazlewood keeps the ball above the bat handle and cramps Head for room.' },
    ],
    interestingStats: ['Chinnaswamy has produced 200-plus totals in 7 of the last 11 IPL innings here.', 'SRH finished with the best six-hitting rate in the previous campaign, while RCB were top three in powerplay run rate.'],
  },
  'mi-kkr': {
    headline: 'A pace-heavy Wankhede clash where death-overs execution usually decides the game.',
    venueStats: { avgFirstInningsScore: 183, chasingWins: 61, totalMatches: 118, bestBowlingFigure: '5/18', boundaryPercentage: 58 },
    headToHead: { team1Wins: 24, team2Wins: 11, noResult: 0, last5: 'MI lead 4-1 across the last five meetings.' },
    playerBattles: [
      { batter: 'Rohit Sharma', bowler: 'Sunil Narine', runs: 124, balls: 103, dismissals: 4, note: 'Narine has consistently slowed Rohit with a hard length into the pitch.' },
      { batter: 'Andre Russell', bowler: 'Jasprit Bumrah', runs: 54, balls: 47, dismissals: 5, note: 'Bumrah’s yorker length has repeatedly won the death-overs duel.' },
    ],
    interestingStats: ['MI score at over 11 runs per over in the final five overs at Wankhede.', 'KKR have won more than 70% of matches when Narine takes a powerplay wicket.'],
  },
  'rr-csk': {
    headline: 'Spin control and middle-over batting depth are likely to shape this Guwahati fixture.',
    venueStats: { avgFirstInningsScore: 177, chasingWins: 5, totalMatches: 9, bestBowlingFigure: '4/17', boundaryPercentage: 54 },
    headToHead: { team1Wins: 14, team2Wins: 16, noResult: 0, last5: 'The last five meetings are tied 2-2 with one washout.' },
    playerBattles: [
      { batter: 'Yashasvi Jaiswal', bowler: 'Noor Ahmad', runs: 28, balls: 24, dismissals: 2, note: 'Noor’s wrong’un has twice broken Jaiswal’s starts in the middle overs.' },
      { batter: 'Shivam Dube', bowler: 'Jofra Archer', runs: 33, balls: 21, dismissals: 2, note: 'Archer’s hard-length pace-on option keeps Dube from lining him up early.' },
    ],
    interestingStats: ['Guwahati games have seen the winning side hit at least 9 sixes in every completed IPL match.', 'CSK concede among the fewest boundaries per over in the middle phase.'],
  },
  'pbks-gt': {
    headline: 'Mullanpur rewards aggressive new-ball hitting but grips enough later for slower balls.',
    venueStats: { avgFirstInningsScore: 172, chasingWins: 6, totalMatches: 11, bestBowlingFigure: '4/21', boundaryPercentage: 52 },
    headToHead: { team1Wins: 2, team2Wins: 3, noResult: 0, last5: 'GT lead the rivalry 3-2 overall.' },
    playerBattles: [
      { batter: 'Shubman Gill', bowler: 'Arshdeep Singh', runs: 45, balls: 34, dismissals: 2, note: 'Arshdeep swings it back in early and keeps Gill honest with the fuller length.' },
      { batter: 'Shreyas Iyer', bowler: 'Rashid Khan', runs: 58, balls: 52, dismissals: 3, note: 'Rashid’s googly has made this a low-risk, low-boundary matchup.' },
    ],
    interestingStats: ['The side winning the powerplay has gone on to win 8 of the first 11 IPL games at Mullanpur.', 'GT have one of the best economy rates in overs 7-15.'],
  },
  'lsg-dc': {
    headline: 'Lucknow usually turns into a tactical chase where strike rotation matters as much as power.',
    venueStats: { avgFirstInningsScore: 166, chasingWins: 8, totalMatches: 16, bestBowlingFigure: '5/14', boundaryPercentage: 47 },
    headToHead: { team1Wins: 3, team2Wins: 2, noResult: 0, last5: 'LSG edge the series 3-2 so far.' },
    playerBattles: [
      { batter: 'Nicholas Pooran', bowler: 'Kuldeep Yadav', runs: 41, balls: 29, dismissals: 2, note: 'Kuldeep is one of the few spinners who attacks Pooran with pace through the air.' },
      { batter: 'KL Rahul', bowler: 'Avesh Khan', runs: 63, balls: 54, dismissals: 3, note: 'Avesh’s wide yorker plan has dismissed Rahul three times in T20 cricket.' },
    ],
    interestingStats: ['Ekana has had one of the lowest boundary percentages among IPL venues.', 'DC’s spin attack becomes more effective when the surface dries under lights.'],
  },
  'kkr-srh': {
    headline: 'Two high-ceiling batting units with enough mystery spin to swing momentum in bursts.',
    venueStats: { avgFirstInningsScore: 181, chasingWins: 39, totalMatches: 93, bestBowlingFigure: '5/15', boundaryPercentage: 57 },
    headToHead: { team1Wins: 19, team2Wins: 9, noResult: 0, last5: 'KKR have won 4 of the last 5 meetings.' },
    playerBattles: [
      { batter: 'Heinrich Klaasen', bowler: 'Varun Chakaravarthy', runs: 29, balls: 27, dismissals: 3, note: 'Varun’s pace changes have regularly forced Klaasen into miscues.' },
      { batter: 'Rinku Singh', bowler: 'Pat Cummins', runs: 36, balls: 23, dismissals: 1, note: 'Cummins attacks Rinku with hard-length pace and keeps the deep square boundary in play.' },
    ],
    interestingStats: ['Eden Gardens has offered the fastest outfield among major IPL venues.', 'Both sides rank near the top for sixes hit between overs 16 and 20.'],
  },
  'csk-pbks': {
    headline: 'Chepauk’s slower surface makes matchup bowling and spin-hitting a major theme.',
    venueStats: { avgFirstInningsScore: 168, chasingWins: 33, totalMatches: 80, bestBowlingFigure: '5/13', boundaryPercentage: 45 },
    headToHead: { team1Wins: 16, team2Wins: 14, noResult: 0, last5: 'CSK lead 3-2 in the last five meetings.' },
    playerBattles: [
      { batter: 'MS Dhoni', bowler: 'Arshdeep Singh', runs: 31, balls: 18, dismissals: 2, note: 'Arshdeep often goes full and wide to deny Dhoni his preferred arc.' },
      { batter: 'Marcus Stoinis', bowler: 'Ravindra Jadeja', runs: 40, balls: 37, dismissals: 3, note: 'Jadeja’s angle into the pads has cramped Stoinis in Chennai conditions.' },
    ],
    interestingStats: ['Chepauk has the lowest six percentage among the established IPL venues.', 'PBKS score quickly in the powerplay but dip more than most teams against spin.'],
  },
  'dc-mi': {
    headline: 'Delhi often turns into a boundary-heavy contest where wicket-taking pace becomes the separator.',
    venueStats: { avgFirstInningsScore: 178, chasingWins: 42, totalMatches: 90, bestBowlingFigure: '5/17', boundaryPercentage: 56 },
    headToHead: { team1Wins: 16, team2Wins: 20, noResult: 0, last5: 'MI lead 3-2 across the last five meetings.' },
    playerBattles: [
      { batter: 'Suryakumar Yadav', bowler: 'Kuldeep Yadav', runs: 67, balls: 44, dismissals: 2, note: 'Kuldeep still creates enough dip to keep SKY from free-flowing through cover.' },
      { batter: 'KL Rahul', bowler: 'Jasprit Bumrah', runs: 95, balls: 78, dismissals: 4, note: 'Bumrah owns the late-innings phase in this matchup.' },
    ],
    interestingStats: ['Arun Jaitley Stadium has one of the highest fours-per-over rates in the tournament.', 'MI’s death bowling record improves sharply when Bumrah bowls two overs at the back end.'],
  },
  'gt-rr': {
    headline: 'Ahmedabad usually rewards range hitting, but wrist-spin can still decide the middle overs.',
    venueStats: { avgFirstInningsScore: 187, chasingWins: 18, totalMatches: 35, bestBowlingFigure: '5/10', boundaryPercentage: 59 },
    headToHead: { team1Wins: 5, team2Wins: 1, noResult: 0, last5: 'GT have won 4 of the last 5 meetings.' },
    playerBattles: [
      { batter: 'Sanju Samson', bowler: 'Rashid Khan', runs: 44, balls: 39, dismissals: 3, note: 'Rashid has kept Samson from targeting the leg side pocket.' },
      { batter: 'Shubman Gill', bowler: 'Jofra Archer', runs: 52, balls: 41, dismissals: 2, note: 'Archer’s hard length has produced two big breakthroughs in previous meetings.' },
    ],
    interestingStats: ['Ahmedabad has produced 180-plus first innings totals in more than half of its IPL matches.', 'GT have historically defended totals well here with their cutters into the surface.'],
  },
  'srh-lsg': {
    headline: 'Hyderabad combines a true surface with late grip, creating a swing between power and spin.',
    venueStats: { avgFirstInningsScore: 185, chasingWins: 40, totalMatches: 79, bestBowlingFigure: '5/19', boundaryPercentage: 60 },
    headToHead: { team1Wins: 1, team2Wins: 4, noResult: 0, last5: 'LSG have won 4 of 5 against SRH.' },
    playerBattles: [
      { batter: 'Nicholas Pooran', bowler: 'Pat Cummins', runs: 39, balls: 25, dismissals: 2, note: 'Cummins uses the short ball sparingly but effectively into Pooran’s body line.' },
      { batter: 'Abhishek Sharma', bowler: 'Mayank Yadav', runs: 18, balls: 14, dismissals: 1, note: 'Extreme pace forces Abhishek to access straighter zones.' },
    ],
    interestingStats: ['SRH have the best boundary percentage at this venue over the last two seasons.', 'LSG’s left-hand heavy batting unit will test SRH’s matchups early.'],
  },
  'rcb-csk': {
    headline: 'Few IPL fixtures carry more noise: stars, spin, and death overs all matter here.',
    venueStats: { avgFirstInningsScore: 190, chasingWins: 53, totalMatches: 96, bestBowlingFigure: '6/14', boundaryPercentage: 62 },
    headToHead: { team1Wins: 11, team2Wins: 21, noResult: 1, last5: 'The last five meetings are split 3-2 in CSK’s favour.' },
    playerBattles: [
      { batter: 'Virat Kohli', bowler: 'Ravindra Jadeja', runs: 132, balls: 109, dismissals: 3, note: 'Jadeja rushes Kohli on the angle whenever the ball grips.' },
      { batter: 'Ruturaj Gaikwad', bowler: 'Josh Hazlewood', runs: 48, balls: 39, dismissals: 2, note: 'Hazlewood’s back-of-a-length line narrows Ruturaj’s scoring areas.' },
    ],
    interestingStats: ['Chinnaswamy games between these sides usually feature more than 25 boundaries.', 'CSK’s spin trio often controls overs 7-14 better than any visiting attack here.'],
  },
  'kkr-pbks': {
    headline: 'An Eden Gardens game where both teams will likely chase sixes and leverage spin in the middle.',
    venueStats: { avgFirstInningsScore: 181, chasingWins: 39, totalMatches: 93, bestBowlingFigure: '5/15', boundaryPercentage: 57 },
    headToHead: { team1Wins: 21, team2Wins: 12, noResult: 0, last5: 'KKR lead 3-2 in the last five.' },
    playerBattles: [
      { batter: 'Andre Russell', bowler: 'Arshdeep Singh', runs: 42, balls: 23, dismissals: 2, note: 'Arshdeep goes full at the toes and has still found a couple of key dismissals.' },
      { batter: 'Shreyas Iyer', bowler: 'Varun Chakaravarthy', runs: 35, balls: 33, dismissals: 2, note: 'Varun’s pace-off leg-spin has kept Iyer from lining up the leg side.' },
    ],
    interestingStats: ['PBKS matches have one of the highest run-rate variances between powerplay and middle overs.', 'KKR’s finishers strike at elite rates when a left-arm seamer bowls fewer than two death overs.'],
  },
  'rr-mi': {
    headline: 'This Guwahati fixture often becomes a battle between boundary hitters and yorker specialists.',
    venueStats: { avgFirstInningsScore: 177, chasingWins: 5, totalMatches: 9, bestBowlingFigure: '4/17', boundaryPercentage: 54 },
    headToHead: { team1Wins: 14, team2Wins: 16, noResult: 1, last5: 'MI lead 3-2 in the last five meetings.' },
    playerBattles: [
      { batter: 'Suryakumar Yadav', bowler: 'Jofra Archer', runs: 61, balls: 41, dismissals: 2, note: 'Archer’s extra bounce can still force miscues even when SKY counters aggressively.' },
      { batter: 'Yashasvi Jaiswal', bowler: 'Jasprit Bumrah', runs: 26, balls: 27, dismissals: 3, note: 'Bumrah has repeatedly won the early over battle with pace and angle.' },
    ],
    interestingStats: ['Guwahati has rewarded teams that maximize the first six overs more than most venues.', 'MI concede fewer than 8.5 an over at the death when Bumrah completes three overs after the 14th.'],
  },
  'dc-gt': {
    headline: 'Delhi versus Gujarat usually becomes a contrast between aggressive intent and control bowling.',
    venueStats: { avgFirstInningsScore: 178, chasingWins: 42, totalMatches: 90, bestBowlingFigure: '5/17', boundaryPercentage: 56 },
    headToHead: { team1Wins: 3, team2Wins: 3, noResult: 0, last5: 'The head-to-head is locked at 3-3.' },
    playerBattles: [
      { batter: 'Shubman Gill', bowler: 'Kuldeep Yadav', runs: 57, balls: 49, dismissals: 2, note: 'Kuldeep’s wrong’un remains one of the few balls that slows Gill’s scoring arc.' },
      { batter: 'KL Rahul', bowler: 'Mohammed Siraj', runs: 88, balls: 67, dismissals: 3, note: 'Siraj has forced Rahul into slower starts with a fifth-stump line.' },
    ],
    interestingStats: ['Delhi has been a strong chasing venue whenever dew arrives in the second innings.', 'GT’s middle-over economy is among the best in the league when Rashid bowls before the 10th over.'],
  },
  'kkr-lsg': {
    headline: 'A spin-rich matchup where wicket preservation against mystery bowling becomes essential.',
    venueStats: { avgFirstInningsScore: 181, chasingWins: 39, totalMatches: 93, bestBowlingFigure: '5/15', boundaryPercentage: 57 },
    headToHead: { team1Wins: 2, team2Wins: 3, noResult: 0, last5: 'LSG narrowly lead the rivalry 3-2.' },
    playerBattles: [
      { batter: 'Nicholas Pooran', bowler: 'Sunil Narine', runs: 31, balls: 28, dismissals: 3, note: 'Narine’s powerplay overs have repeatedly challenged Pooran’s release shots.' },
      { batter: 'Rinku Singh', bowler: 'Avesh Khan', runs: 43, balls: 29, dismissals: 2, note: 'Avesh mixes pace well enough to push Rinku square rather than straight.' },
    ],
    interestingStats: ['Kolkata has rewarded teams with dual-spin attacks who can squeeze overs 7-13.', 'LSG often surge when Pooran survives beyond the 12th over.'],
  },
  'rr-rcb': {
    headline: 'High-profile top orders meet in a venue that rewards batting tempo through the middle overs.',
    venueStats: { avgFirstInningsScore: 177, chasingWins: 5, totalMatches: 9, bestBowlingFigure: '4/17', boundaryPercentage: 54 },
    headToHead: { team1Wins: 14, team2Wins: 15, noResult: 0, last5: 'RCB edge the recent series 3-2.' },
    playerBattles: [
      { batter: 'Virat Kohli', bowler: 'Jofra Archer', runs: 68, balls: 51, dismissals: 4, note: 'Archer’s hard length has produced four T20 dismissals of Kohli.' },
      { batter: 'Sanju Samson', bowler: 'Josh Hazlewood', runs: 47, balls: 34, dismissals: 2, note: 'Hazlewood’s deck-hitting line has made Samson hit against the angle.' },
    ],
    interestingStats: ['The winning side in Guwahati has scored at least 55 in the powerplay in most completed games.', 'RR’s boundary percentage rises sharply whenever Samson bats beyond 12 overs.'],
  },
  'pbks-srh': {
    headline: 'An aggressive matchup where seamers need strong slower balls to stay ahead at Mullanpur.',
    venueStats: { avgFirstInningsScore: 172, chasingWins: 6, totalMatches: 11, bestBowlingFigure: '4/21', boundaryPercentage: 52 },
    headToHead: { team1Wins: 7, team2Wins: 16, noResult: 0, last5: 'SRH lead 4-1 in the last five meetings.' },
    playerBattles: [
      { batter: 'Heinrich Klaasen', bowler: 'Arshdeep Singh', runs: 34, balls: 22, dismissals: 2, note: 'Arshdeep’s angle across the right-hander has still created two key dismissals.' },
      { batter: 'Shreyas Iyer', bowler: 'Pat Cummins', runs: 61, balls: 47, dismissals: 2, note: 'Cummins uses the back-of-a-length cross-seam delivery to stop Iyer freeing his hands.' },
    ],
    interestingStats: ['SRH average among the highest powerplay scores in the league.', 'PBKS often rely on Arshdeep to break opening stands before the sixth over.'],
  },
  'csk-dc': {
    headline: 'Chepauk adds a spin-and-discipline lens to a contest packed with stroke players.',
    venueStats: { avgFirstInningsScore: 168, chasingWins: 33, totalMatches: 80, bestBowlingFigure: '5/13', boundaryPercentage: 45 },
    headToHead: { team1Wins: 19, team2Wins: 11, noResult: 0, last5: 'CSK lead 4-1 across the last five meetings.' },
    playerBattles: [
      { batter: 'KL Rahul', bowler: 'Ravindra Jadeja', runs: 74, balls: 68, dismissals: 3, note: 'Jadeja attacks the stumps and forces Rahul to hit against the turn.' },
      { batter: 'Shivam Dube', bowler: 'Kuldeep Yadav', runs: 30, balls: 26, dismissals: 2, note: 'Kuldeep has broken Dube’s rhythm with pace changes and wider lines.' },
    ],
    interestingStats: ['Chennai has historically favored sides that field two or more spin options.', 'DC’s wicket-taking percentage in the middle overs rises when Kuldeep bowls immediately after the powerplay.'],
  },
  'lsg-gt': {
    headline: 'Expect a tactical, low-margin game where strike rotation could outrank brute force.',
    venueStats: { avgFirstInningsScore: 166, chasingWins: 8, totalMatches: 16, bestBowlingFigure: '5/14', boundaryPercentage: 47 },
    headToHead: { team1Wins: 1, team2Wins: 4, noResult: 0, last5: 'GT have won 4 of the 5 meetings so far.' },
    playerBattles: [
      { batter: 'Shubman Gill', bowler: 'Mayank Yadav', runs: 22, balls: 17, dismissals: 1, note: 'Mayank’s extra pace asks Gill to score straighter than usual.' },
      { batter: 'Nicholas Pooran', bowler: 'Rashid Khan', runs: 51, balls: 42, dismissals: 3, note: 'Rashid’s googly has often checked Pooran’s acceleration late in the innings.' },
    ],
    interestingStats: ['Lucknow has the lowest boundary percentage of the venues in this opening stretch.', 'GT defend totals well when they pick up a wicket inside the first two overs.'],
  },
  'mi-rcb': {
    headline: 'A marquee Wankhede game where top-order intent and death-bowling nerves are both tested.',
    venueStats: { avgFirstInningsScore: 183, chasingWins: 61, totalMatches: 118, bestBowlingFigure: '5/18', boundaryPercentage: 58 },
    headToHead: { team1Wins: 19, team2Wins: 14, noResult: 0, last5: 'MI lead the recent ledger 3-2.' },
    playerBattles: [
      { batter: 'Virat Kohli', bowler: 'Jasprit Bumrah', runs: 140, balls: 114, dismissals: 5, note: 'Bumrah’s change of pace and yorker length have created five IPL dismissals.' },
      { batter: 'Rohit Sharma', bowler: 'Josh Hazlewood', runs: 57, balls: 44, dismissals: 3, note: 'Hazlewood keeps Rohit pinned to a strong off-stump channel.' },
    ],
    interestingStats: ['Wankhede rewards teams that preserve wickets for the last six overs.', 'RCB’s top order usually controls run rate, but MI’s pace attack improves sharply with early wickets.'],
  },
};

const matchSeeds: MatchSeed[] = [
  { matchNumber: 1, date: '2026-03-28', dateLabel: '28 Mar', day: 'Saturday', team1: 'rcb', team2: 'srh', venueCity: 'Bengaluru', stadium: 'M. Chinnaswamy Stadium' },
  { matchNumber: 2, date: '2026-03-29', dateLabel: '29 Mar', day: 'Sunday', team1: 'mi', team2: 'kkr', venueCity: 'Mumbai', stadium: 'Wankhede Stadium' },
  { matchNumber: 3, date: '2026-03-30', dateLabel: '30 Mar', day: 'Monday', team1: 'rr', team2: 'csk', venueCity: 'Guwahati', stadium: 'Barsapara Cricket Stadium' },
  { matchNumber: 4, date: '2026-03-31', dateLabel: '31 Mar', day: 'Tuesday', team1: 'pbks', team2: 'gt', venueCity: 'Mullanpur', stadium: 'Maharaja Yadavindra Singh International Cricket Stadium' },
  { matchNumber: 5, date: '2026-04-01', dateLabel: '01 Apr', day: 'Wednesday', team1: 'lsg', team2: 'dc', venueCity: 'Lucknow', stadium: 'BRSABV Ekana Cricket Stadium' },
  { matchNumber: 6, date: '2026-04-02', dateLabel: '02 Apr', day: 'Thursday', team1: 'kkr', team2: 'srh', venueCity: 'Kolkata', stadium: 'Eden Gardens' },
  { matchNumber: 7, date: '2026-04-03', dateLabel: '03 Apr', day: 'Friday', team1: 'csk', team2: 'pbks', venueCity: 'Chennai', stadium: 'M. A. Chidambaram Stadium' },
  { matchNumber: 8, date: '2026-04-04', dateLabel: '04 Apr', day: 'Saturday', team1: 'dc', team2: 'mi', venueCity: 'Delhi', stadium: 'Arun Jaitley Stadium' },
  { matchNumber: 9, date: '2026-04-04', dateLabel: '04 Apr', day: 'Saturday', team1: 'gt', team2: 'rr', venueCity: 'Ahmedabad', stadium: 'Narendra Modi Stadium' },
  { matchNumber: 10, date: '2026-04-05', dateLabel: '05 Apr', day: 'Sunday', team1: 'srh', team2: 'lsg', venueCity: 'Hyderabad', stadium: 'Rajiv Gandhi International Stadium' },
  { matchNumber: 11, date: '2026-04-05', dateLabel: '05 Apr', day: 'Sunday', team1: 'rcb', team2: 'csk', venueCity: 'Bengaluru', stadium: 'M. Chinnaswamy Stadium' },
  { matchNumber: 12, date: '2026-04-06', dateLabel: '06 Apr', day: 'Monday', team1: 'kkr', team2: 'pbks', venueCity: 'Kolkata', stadium: 'Eden Gardens' },
  { matchNumber: 13, date: '2026-04-07', dateLabel: '07 Apr', day: 'Tuesday', team1: 'rr', team2: 'mi', venueCity: 'Guwahati', stadium: 'Barsapara Cricket Stadium' },
  { matchNumber: 14, date: '2026-04-08', dateLabel: '08 Apr', day: 'Wednesday', team1: 'dc', team2: 'gt', venueCity: 'Delhi', stadium: 'Arun Jaitley Stadium' },
  { matchNumber: 15, date: '2026-04-09', dateLabel: '09 Apr', day: 'Thursday', team1: 'kkr', team2: 'lsg', venueCity: 'Kolkata', stadium: 'Eden Gardens' },
  { matchNumber: 16, date: '2026-04-10', dateLabel: '10 Apr', day: 'Friday', team1: 'rr', team2: 'rcb', venueCity: 'Guwahati', stadium: 'Barsapara Cricket Stadium' },
  { matchNumber: 17, date: '2026-04-11', dateLabel: '11 Apr', day: 'Saturday', team1: 'pbks', team2: 'srh', venueCity: 'Mullanpur', stadium: 'Maharaja Yadavindra Singh International Cricket Stadium' },
  { matchNumber: 18, date: '2026-04-11', dateLabel: '11 Apr', day: 'Saturday', team1: 'csk', team2: 'dc', venueCity: 'Chennai', stadium: 'M. A. Chidambaram Stadium' },
  { matchNumber: 19, date: '2026-04-12', dateLabel: '12 Apr', day: 'Sunday', team1: 'lsg', team2: 'gt', venueCity: 'Lucknow', stadium: 'BRSABV Ekana Cricket Stadium' },
  { matchNumber: 20, date: '2026-04-12', dateLabel: '12 Apr', day: 'Sunday', team1: 'mi', team2: 'rcb', venueCity: 'Mumbai', stadium: 'Wankhede Stadium' },
];

const pitchReportsByVenue: Record<string, string> = {
  'Bengaluru': 'Historically a batting paradise with short boundaries. Expect high scores, though spinners can get some grip in the first innings.',
  'Mumbai': 'True bounce and carry. The red soil pitch favors pace early on, but it becomes excellent for stroke-making under lights.',
  'Guwahati': 'A relatively new venue with a balanced surface. Dew can be a major factor in evening games, making chasing preferable.',
  'Mullanpur': 'A fresh pitch that has shown good pace and bounce. Fast bowlers get early assistance, but it settles down nicely for batters.',
  'Lucknow': 'Known for its slow and gripping surface. Spinners and medium pacers with good variations will be the key here. Par score is usually lower.',
  'Kolkata': 'A good batting surface with a fast outfield. Spinners get some turn, but batters who apply themselves can score heavily.',
  'Chennai': 'Traditionally slow and low, heavily favoring spin. However, recent pitches have been better for batting. Toss is crucial.',
  'Delhi': 'Small boundaries and a flat deck make it a high-scoring ground. Spinners can be effective if they bowl slowly through the air.',
  'Ahmedabad': 'A hybrid pitch that offers something for everyone. It can be two-paced initially but generally plays well for batters later.',
  'Hyderabad': 'A flat track that is excellent for batting. The ball comes onto the bat nicely, and high totals are common.',
};

export const schedule: Match[] = matchSeeds.map((seed) => {
  const insightKey = `${seed.team1}-${seed.team2}`;
  const insight = matchInsights[insightKey];

  return {
    id: `m${seed.matchNumber}`,
    ...seed,
    captain1: captainByTeam[seed.team1],
    captain2: captainByTeam[seed.team2],
    ...insight,
    pitchReport: pitchReportsByVenue[seed.venueCity] || 'A balanced surface expected to provide an even contest between bat and ball.',
  };
});