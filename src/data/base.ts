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
            { id: 'kkr17', name: 'Saurabh Dubey', role: 'Bowler', imageUrl: 'https://www.kkr.in/static-assets/images/players/74123.png?v=112.06' },
            { id: 'kkr18', name: 'Blessing Muzarabani', role: 'Bowler', imageUrl: 'https://www.kkr.in/static-assets/images/players/67784.png?v=112.02' },
            { id: 'kkr19', name: 'Navdeep Saini', role: 'Bowler', imageUrl: 'https://documents.iplt20.com/ipl/assets/images/Default-Men.png' },
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
            { id: 'rr12', name: 'Dasun Shanaka', role: 'All-rounder', imageUrl: 'https://www.rajasthanroyals.com/static-assets/images/players/59067.png?v=7.73' },
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
        logoUrl: 'https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png',
        players: [
            { id: 'srh1', name: 'Heinrich Klaasen', role: 'Wicket-keeper', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/202.png' },
            { id: 'srh2', name: 'Ishan Kishan', role: 'Wicket-keeper', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/164.png' },
            { id: 'srh3', name: 'Travis Head', role: 'Batsman', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/37.png' },
            { id: 'srh4', name: 'Smaran Ravichandran', role: 'Batsman', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/3752.png' },
            { id: 'srh5', name: 'Aniket Verma', role: 'Batsman', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/3576.png' },
            { id: 'srh6', name: 'Pat Cummins', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/33.png' },
            { id: 'srh7', name: 'Abhishek Sharma', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/212.png' },
            { id: 'srh8', name: 'Nitish Kumar Reddy', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/1944.png' },
            { id: 'srh9', name: 'Harshal Patel', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/114.png' },
            { id: 'srh10', name: 'Kamindu Mendis', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/627.png' },
            { id: 'srh11', name: 'Harsh Dubey', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/1494.png' },
            { id: 'srh12', name: 'Jaydev Unadkat', role: 'Bowler', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/180.png' },
            { id: 'srh13', name: 'Eshan Malinga', role: 'Bowler', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2025/3339.png' },
            { id: 'srh14', name: 'Zeeshan Ansari', role: 'Bowler', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/3575.png' },
            { id: 'srh15', name: 'Salil Arora', role: 'Wicket-keeper', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/4556.png' },
            { id: 'srh16', name: 'Brydon Carse', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/1221.png' },
            { id: 'srh17', name: 'Shivang Kumar', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/4561.png' },
            { id: 'srh18', name: 'Krains Fuletra', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/4557.png' },
            { id: 'srh19', name: 'Liam Livingstone', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/183.png' },
            { id: 'srh20', name: 'David Payne', role: 'All-rounder', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/5007.png' },
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
            { id: 'gt5', name: 'Sai Sudharsan', role: 'Batsman', imageUrl: 'https://documents.iplt20.com/ipl/IPLHeadshot2026/976.png' },
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

export interface ScorecardBatter {
    name: string;
    howOut: string;
    runs: number;
    balls: number;
    fours: number;
    sixes: number;
    strikeRate: number;
}

export interface ScorecardBowler {
    name: string;
    overs: string;
    maidens: number;
    runs: number;
    wickets: number;
    economy: number;
}

export interface InningScorecard {
    teamId: string;
    total: number;
    wickets: number;
    overs: string;
    batters: ScorecardBatter[];
    extras: string;
    didNotBat: string[];
    bowlers: ScorecardBowler[];
    fallOfWickets: string[];
    powerplayRuns: string;
    partnerships: string[];
}

export interface CompletedMatchDetails {
    toss: string;
    result: string;
    playerOfTheMatch: string;
    keyMoments: string[];
    tacticalAnalysis: string[];
    improvements: {
        team1: string[];
        team2: string[];
        players: string[];
    };
    uiUxPlan?: string[];
    innings: [InningScorecard, InningScorecard];
}

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
    status: 'upcoming' | 'completed';
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
    completedDetails?: CompletedMatchDetails;
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
    status?: 'upcoming' | 'completed';
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

const matchInsights: Record<string, Omit<Match, 'id' | 'matchNumber' | 'date' | 'dateLabel' | 'day' | 'team1' | 'team2' | 'venueCity' | 'stadium' | 'captain1' | 'captain2' | 'pitchReport' | 'status'>> = {
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
        headline: 'Cooper Connolly’s unbeaten 72 lifted PBKS over the line after a tense middle-order collapse.',
        venueStats: { avgFirstInningsScore: 172, chasingWins: 6, totalMatches: 11, bestBowlingFigure: '4/21', boundaryPercentage: 52 },
        headToHead: { team1Wins: 3, team2Wins: 3, noResult: 0, last5: 'The rivalry is now level at 3-3 after PBKS won Match 4 in 2026.' },
        playerBattles: [
            { batter: 'Cooper Connolly', bowler: 'Prasidh Krishna', runs: 26, balls: 16, dismissals: 0, note: 'Connolly absorbed the collapse phase and still finished with clean boundary options.' },
            { batter: 'Shubman Gill', bowler: 'Yuzvendra Chahal', runs: 39, balls: 27, dismissals: 1, note: 'Chahal’s wicket at 9.3 overs ended GT’s strongest platform.' },
        ],
        interestingStats: ['PBKS won despite falling from 110/2 to 118/6, one of the sharpest middle-order collapses in a successful chase this season.', 'Vyshak (3/34) and Chahal (2/28) shared 5 wickets, limiting GT to 162/6 despite multiple top-order starts.'],
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
        headline: 'SRH stormed to 226/8 and then bowled KKR out for 161 to seal a dominant 65-run victory at Eden Gardens.',
        venueStats: { avgFirstInningsScore: 181, chasingWins: 39, totalMatches: 93, bestBowlingFigure: '5/15', boundaryPercentage: 57 },
        headToHead: { team1Wins: 18, team2Wins: 13, noResult: 0, last5: 'SRH narrowed the rivalry gap with a commanding away win in Match 6.' },
        playerBattles: [
            { batter: 'Heinrich Klaasen', bowler: 'Blessing Muzarabani', runs: 52, balls: 35, dismissals: 1, note: 'Klaasen neutralized hard lengths before falling only in the final over.' },
            { batter: 'Angkrish Raghuvanshi', bowler: 'Jaydev Unadkat', runs: 52, balls: 29, dismissals: 0, note: 'Raghuvanshi fought deep, but SRH kept removing partners at the other end.' },
        ],
        interestingStats: ['SRH reached 200 in 18.1 overs and still added 26 more, turning a good platform into a match-winning total.', 'KKR were 120/3 after six overs but collapsed to 161 all out in 16 overs, losing 7 wickets for 41 runs.'],
    },
    'csk-pbks': {
        headline: 'CSK enter their second match after a heavy loss to RR, while PBKS arrive with momentum after chasing against GT.',
        venueStats: { avgFirstInningsScore: 168, chasingWins: 33, totalMatches: 80, bestBowlingFigure: '5/13', boundaryPercentage: 45 },
        headToHead: { team1Wins: 16, team2Wins: 14, noResult: 0, last5: 'Historical edge CSK, but second-match predictor is CSK 49% vs PBKS 51%.' },
        playerBattles: [
            { batter: 'MS Dhoni', bowler: 'Arshdeep Singh', runs: 31, balls: 18, dismissals: 2, note: 'Arshdeep often goes full and wide to deny Dhoni his preferred arc.' },
            { batter: 'Marcus Stoinis', bowler: 'Ravindra Jadeja', runs: 40, balls: 37, dismissals: 3, note: 'Jadeja’s angle into the pads has cramped Stoinis in Chennai conditions.' },
        ],
        interestingStats: ['CSK were 40/4 in the powerplay in Match 3 and need a safer start profile to unlock their middle overs.', 'Win predictor blend (venue + form + H2H): CSK 49% | PBKS 51%.'],
    },
    'dc-mi': {
        headline: 'DC begin their second game with confidence after beating LSG, while MI arrive after a structured win over KKR.',
        venueStats: { avgFirstInningsScore: 178, chasingWins: 42, totalMatches: 90, bestBowlingFigure: '5/17', boundaryPercentage: 56 },
        headToHead: { team1Wins: 16, team2Wins: 20, noResult: 0, last5: 'MI hold the long H2H edge, but current-form predictor is DC 47% vs MI 53%.' },
        playerBattles: [
            { batter: 'Suryakumar Yadav', bowler: 'Kuldeep Yadav', runs: 67, balls: 44, dismissals: 2, note: 'Kuldeep still creates enough dip to keep SKY from free-flowing through cover.' },
            { batter: 'KL Rahul', bowler: 'Jasprit Bumrah', runs: 95, balls: 78, dismissals: 4, note: 'Bumrah owns the late-innings phase in this matchup.' },
        ],
        interestingStats: ['DC chased 142 in 17.1 overs in Match 5 and now face a stronger new-ball test from MI’s pace core.', 'Win predictor blend (H2H + first-match execution): DC 47% | MI 53%.'],
    },
    'gt-rr': {
        headline: 'GT need a bounce-back after the PBKS defeat, while RR carry strong momentum from a dominant win over CSK.',
        venueStats: { avgFirstInningsScore: 187, chasingWins: 18, totalMatches: 35, bestBowlingFigure: '5/10', boundaryPercentage: 59 },
        headToHead: { team1Wins: 5, team2Wins: 1, noResult: 0, last5: 'GT dominate historical H2H, but second-match predictor is GT 48% vs RR 52%.' },
        playerBattles: [
            { batter: 'Sanju Samson', bowler: 'Rashid Khan', runs: 44, balls: 39, dismissals: 3, note: 'Rashid has kept Samson from targeting the leg side pocket.' },
            { batter: 'Shubman Gill', bowler: 'Jofra Archer', runs: 52, balls: 41, dismissals: 2, note: 'Archer’s hard length has produced two big breakthroughs in previous meetings.' },
        ],
        interestingStats: ['RR’s top order attacked from ball one in Match 3, while GT’s issue in Match 4 was middle-over stagnation after starts.', 'Win predictor blend (venue + form momentum): GT 48% | RR 52%.'],
    },
    'srh-lsg': {
        headline: 'Both teams enter Match 10 after first-match losses; SRH seek batting reset and LSG need better batting support around the middle order.',
        venueStats: { avgFirstInningsScore: 185, chasingWins: 40, totalMatches: 79, bestBowlingFigure: '5/19', boundaryPercentage: 60 },
        headToHead: { team1Wins: 1, team2Wins: 4, noResult: 0, last5: 'LSG lead recent rivalry, but home-adjusted predictor gives SRH 51% vs LSG 49%.' },
        playerBattles: [
            { batter: 'Nicholas Pooran', bowler: 'Pat Cummins', runs: 39, balls: 25, dismissals: 2, note: 'Cummins uses the short ball sparingly but effectively into Pooran’s body line.' },
            { batter: 'Abhishek Sharma', bowler: 'Mayank Yadav', runs: 18, balls: 14, dismissals: 1, note: 'Extreme pace forces Abhishek to access straighter zones.' },
        ],
        interestingStats: ['LSG were bowled out for 141 in Match 5 and need a stronger powerplay conversion if chasing at Hyderabad.', 'Win predictor blend (home venue + first-match trend + H2H): SRH 51% | LSG 49%.'],
    },
    'rcb-csk': {
        headline: 'RCB’s second match comes after a commanding opening win, while CSK need a response after their loss to RR.',
        venueStats: { avgFirstInningsScore: 190, chasingWins: 53, totalMatches: 96, bestBowlingFigure: '6/14', boundaryPercentage: 62 },
        headToHead: { team1Wins: 11, team2Wins: 21, noResult: 1, last5: 'CSK lead historical rivalry, but second-match predictor is RCB 56% vs CSK 44%.' },
        playerBattles: [
            { batter: 'Virat Kohli', bowler: 'Ravindra Jadeja', runs: 132, balls: 109, dismissals: 3, note: 'Jadeja rushes Kohli on the angle whenever the ball grips.' },
            { batter: 'Ruturaj Gaikwad', bowler: 'Josh Hazlewood', runs: 48, balls: 39, dismissals: 2, note: 'Hazlewood’s back-of-a-length line narrows Ruturaj’s scoring areas.' },
        ],
        interestingStats: ['RCB’s top order looked fluent in Match 1; CSK’s first six overs with bat and ball are the biggest correction zone after Match 3.', 'Win predictor blend (form + venue pattern + H2H): RCB 56% | CSK 44%.'],
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
    m6: {
        toss: 'Kolkata Knight Riders won the toss and elected to bowl.',
        result: 'Sunrisers Hyderabad won by 65 runs.',
        playerOfTheMatch: 'Heinrich Klaasen - 52 (35)',
        keyMoments: [
            'SRH blasted 82 in 5.4 overs through Travis Head and Abhishek Sharma, instantly taking control of the innings tempo.',
            'KKR dragged things back with a middle-overs burst led by Blessing Muzarabani (4/41), reducing SRH from 112/2 to 118/4.',
            'Klaasen and Nitish Kumar Reddy rebuilt decisively, adding high-value runs in overs 13-18 to push SRH to 226/8.',
            'KKR touched 120/3 after 10.6 overs but then collapsed to 161 all out, losing 7 wickets for just 41 runs.',
            'Jaydev Unadkat (3/21), Eshan Malinga (2/14), and Nitish Kumar Reddy (2/17) closed out the chase clinically.'
        ],
        tacticalAnalysis: [
            'SRH’s powerplay intent was elite: both openers struck above 200, forcing KKR off their preferred early bowling lengths.',
            'KKR did execute a recovery phase via Muzarabani, but they could not sustain pressure at the death where SRH scored 56 in the last 2 overs.',
            'Klaasen’s innings was the structural anchor: he managed spin matchups while still preserving boundary pressure.',
            'In the chase, KKR’s run rate stayed healthy until 11 overs, but wicket clusters destroyed sequencing and exposed the long tail.',
            'SRH used role clarity in defense: Unadkat attacked the stumps, Malinga hunted wickets through pace variation, and Nitish hit hard lengths into big square boundaries.',
            'KKR’s chase plan lacked stabilizer batting once Raghuvanshi fell; the phase from overs 11-16 became a high-risk, low-control collapse window.',
            'The game was decided by phase dominance: SRH won overs 1-6 with bat and overs 11-16 with ball.'
        ],
        improvements: {
            team1: [
                'KKR need tighter death-over plans. Conceding 56 in the last two overs turned a recoverable 190-200 projection into 226.',
                'Top-order aggression must be paired with one batter anchoring through over 15 when chasing 220-plus.',
                'Bowling fields to Klaasen and Nitish need clearer boundary denial at long-on/deep midwicket in the final overs.'
            ],
            team2: [
                'SRH can improve middle-over wicket protection after fast starts; the 112/2 to 118/4 slide remains a vulnerability.',
                'New-ball bowling discipline can sharpen despite the win, especially on wides and overcorrections under pressure.',
                'Fielding standards around direct-hit chances can still improve to convert pressure phases earlier.'
            ],
            players: [
                'Heinrich Klaasen (SRH): continue balancing anchor and accelerator roles against mixed spin-pace attacks.',
                'Nitish Kumar Reddy (SRH): excellent dual contribution; can further improve death-over yorker execution consistency.',
                'Blessing Muzarabani (KKR): outstanding wicket-taking spell; needs better support at the opposite end to convert pressure into collapse.',
                'Angkrish Raghuvanshi (KKR): strong 52, but game context demanded deeper occupation after crossing fifty.',
                'Ajinkya Rahane (KKR): captain and top-order batter must set a steadier launch template in chases above 200.'
            ]
        },
        innings: [
            {
                teamId: 'srh',
                total: 226,
                wickets: 8,
                overs: '20.0',
                batters: [
                    { name: 'Travis Head', howOut: 'c Cameron Green b Kartik Tyagi', runs: 46, balls: 21, fours: 6, sixes: 3, strikeRate: 219.04 },
                    { name: 'Abhishek Sharma', howOut: 'c Varun Chakaravarthy b Blessing Muzarabani', runs: 48, balls: 21, fours: 4, sixes: 4, strikeRate: 228.57 },
                    { name: 'Ishan Kishan', howOut: 'c Rinku Singh b Blessing Muzarabani', runs: 14, balls: 9, fours: 3, sixes: 0, strikeRate: 155.55 },
                    { name: 'Heinrich Klaasen', howOut: 'c Ramandeep Singh b Blessing Muzarabani', runs: 52, balls: 35, fours: 4, sixes: 1, strikeRate: 148.57 },
                    { name: 'Aniket Verma', howOut: 'c Rinku Singh b Anukul Roy', runs: 1, balls: 4, fours: 0, sixes: 0, strikeRate: 25.0 },
                    { name: 'Nitish Kumar Reddy', howOut: 'c Varun Chakaravarthy b Vaibhav Arora', runs: 39, balls: 24, fours: 4, sixes: 1, strikeRate: 162.5 },
                    { name: 'Salil Arora', howOut: 'b Vaibhav Arora', runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0.0 },
                    { name: 'Harsh Dubey', howOut: 'not out', runs: 9, balls: 3, fours: 2, sixes: 0, strikeRate: 300.0 },
                    { name: 'Shivang Kumar', howOut: 'c Ajinkya Rahane b Blessing Muzarabani', runs: 4, balls: 2, fours: 1, sixes: 0, strikeRate: 200.0 },
                ],
                extras: '13 (b 0, lb 4, w 9, nb 0)',
                didNotBat: ['Jaydev Unadkat', 'David Payne', 'Eshan Malinga'],
                bowlers: [
                    { name: 'Vaibhav Arora', overs: '4', maidens: 0, runs: 47, wickets: 2, economy: 11.75 },
                    { name: 'Blessing Muzarabani', overs: '4', maidens: 0, runs: 41, wickets: 4, economy: 10.25 },
                    { name: 'Sunil Narine', overs: '4', maidens: 0, runs: 39, wickets: 0, economy: 9.75 },
                    { name: 'Varun Chakaravarthy', overs: '2', maidens: 0, runs: 31, wickets: 0, economy: 15.5 },
                    { name: 'Kartik Tyagi', overs: '4', maidens: 0, runs: 48, wickets: 1, economy: 12.0 },
                    { name: 'Anukul Roy', overs: '2', maidens: 0, runs: 16, wickets: 1, economy: 8.0 },
                ],
                fallOfWickets: ['82/1 (Travis Head, 5.4 ov)', '111/2 (Ishan Kishan, 8.2 ov)', '112/3 (Abhishek Sharma, 8.4 ov)', '118/4 (Aniket Verma, 9.2 ov)', '200/5 (Nitish Kumar Reddy, 18.1 ov)', '200/6 (Salil Arora, 18.2 ov)', '222/7 (Heinrich Klaasen, 19.4 ov)', '226/8 (Shivang Kumar, 20.0 ov)'],
                powerplayRuns: '84/1 (0.1-6 ov)',
                partnerships: ['82 (Head-Abhishek)', '29 (Abhishek-Ishan)', '1 (Abhishek-Klaasen)', '6 (Klaasen-Aniket)', '82 (Klaasen-Nitish)', '0 (Klaasen-Salil)', '22 (Klaasen-Dubey)', '4 (Dubey-Shivang)']
            },
            {
                teamId: 'kkr',
                total: 161,
                wickets: 10,
                overs: '16.0',
                batters: [
                    { name: 'Ajinkya Rahane', howOut: 'c Eshan Malinga b Jaydev Unadkat', runs: 8, balls: 10, fours: 0, sixes: 0, strikeRate: 80.0 },
                    { name: 'Finn Allen', howOut: 'c & b Harsh Dubey', runs: 28, balls: 7, fours: 4, sixes: 2, strikeRate: 400.0 },
                    { name: 'Angkrish Raghuvanshi', howOut: 'run out (Eshan Malinga/Shivang Kumar)', runs: 52, balls: 29, fours: 6, sixes: 2, strikeRate: 179.31 },
                    { name: 'Cameron Green', howOut: 'run out (Eshan Malinga)', runs: 2, balls: 2, fours: 0, sixes: 0, strikeRate: 100.0 },
                    { name: 'Rinku Singh', howOut: 'c Jaydev Unadkat b Nitish Kumar Reddy', runs: 35, balls: 25, fours: 4, sixes: 1, strikeRate: 140.0 },
                    { name: 'Anukul Roy', howOut: 'c & b Nitish Kumar Reddy', runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0.0 },
                    { name: 'Ramandeep Singh', howOut: 'c Jaydev Unadkat b Eshan Malinga', runs: 10, balls: 9, fours: 1, sixes: 0, strikeRate: 111.11 },
                    { name: 'Sunil Narine', howOut: 'c Aniket Verma b Eshan Malinga', runs: 12, balls: 4, fours: 0, sixes: 2, strikeRate: 300.0 },
                    { name: 'Kartik Tyagi', howOut: 'c Ishan Kishan b Jaydev Unadkat', runs: 5, balls: 5, fours: 1, sixes: 0, strikeRate: 100.0 },
                    { name: 'Vaibhav Arora', howOut: 'not out', runs: 1, balls: 2, fours: 0, sixes: 0, strikeRate: 50.0 },
                    { name: 'Varun Chakaravarthy', howOut: 'b Jaydev Unadkat', runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0.0 },
                ],
                extras: '8 (b 0, lb 1, w 7, nb 0)',
                didNotBat: ['Blessing Muzarabani'],
                bowlers: [
                    { name: 'David Payne', overs: '2', maidens: 0, runs: 35, wickets: 0, economy: 17.5 },
                    { name: 'Harsh Dubey', overs: '2', maidens: 0, runs: 17, wickets: 1, economy: 8.5 },
                    { name: 'Abhishek Sharma', overs: '1', maidens: 0, runs: 15, wickets: 0, economy: 15.0 },
                    { name: 'Jaydev Unadkat', overs: '3', maidens: 0, runs: 21, wickets: 3, economy: 7.0 },
                    { name: 'Eshan Malinga', overs: '2', maidens: 0, runs: 14, wickets: 2, economy: 7.0 },
                    { name: 'Shivang Kumar', overs: '4', maidens: 0, runs: 41, wickets: 0, economy: 10.25 },
                    { name: 'Nitish Kumar Reddy', overs: '2', maidens: 0, runs: 17, wickets: 2, economy: 8.5 },
                ],
                fallOfWickets: ['30/1 (Finn Allen, 1.3 ov)', '67/2 (Ajinkya Rahane, 5.0 ov)', '74/3 (Cameron Green, 6.0 ov)', '120/4 (Angkrish Raghuvanshi, 11.0 ov)', '120/5 (Anukul Roy, 11.2 ov)', '139/6 (Rinku Singh, 13.4 ov)', '154/7 (Sunil Narine, 14.3 ov)', '159/8 (Ramandeep Singh, 15.0 ov)', '161/9 (Kartik Tyagi, 15.5 ov)', '161/10 (Varun Chakaravarthy, 16.0 ov)'],
                powerplayRuns: '68/2 (0.1-6 ov)',
                partnerships: ['30 (Rahane-Allen)', '37 (Rahane-Raghuvanshi)', '7 (Raghuvanshi-Green)', '46 (Raghuvanshi-Rinku)', '0 (Rinku-Anukul)', '19 (Rinku-Ramandeep)', '15 (Ramandeep-Narine)', '5 (Ramandeep-Tyagi)', '2 (Tyagi-Vaibhav)', '0 (Vaibhav-Varun)']
            }
        ]
    },
};

const matchSeeds: MatchSeed[] = [
    { matchNumber: 1, date: '2026-03-28', dateLabel: '28 Mar', day: 'Saturday', team1: 'rcb', team2: 'srh', venueCity: 'Bengaluru', stadium: 'M. Chinnaswamy Stadium', status: 'completed' },
    { matchNumber: 2, date: '2026-03-29', dateLabel: '29 Mar', day: 'Sunday', team1: 'mi', team2: 'kkr', venueCity: 'Mumbai', stadium: 'Wankhede Stadium', status: 'completed' },
    { matchNumber: 3, date: '2026-03-30', dateLabel: '30 Mar', day: 'Monday', team1: 'rr', team2: 'csk', venueCity: 'Guwahati', stadium: 'Barsapara Cricket Stadium', status: 'completed' },
    { matchNumber: 4, date: '2026-03-31', dateLabel: '31 Mar', day: 'Tuesday', team1: 'pbks', team2: 'gt', venueCity: 'New Chandigarh', stadium: 'Maharaja Yadavindra Singh International Cricket Stadium', status: 'completed' },
    { matchNumber: 5, date: '2026-04-01', dateLabel: '01 Apr', day: 'Wednesday', team1: 'lsg', team2: 'dc', venueCity: 'Lucknow', stadium: 'BRSABV Ekana Cricket Stadium', status: 'completed' },
    { matchNumber: 6, date: '2026-04-02', dateLabel: '02 Apr', day: 'Thursday', team1: 'kkr', team2: 'srh', venueCity: 'Kolkata', stadium: 'Eden Gardens', status: 'completed' },
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
    { matchNumber: 17, date: '2026-04-11', dateLabel: '11 Apr', day: 'Saturday', team1: 'pbks', team2: 'srh', venueCity: 'New Chandigarh', stadium: 'Maharaja Yadavindra Singh International Cricket Stadium' },
    { matchNumber: 18, date: '2026-04-11', dateLabel: '11 Apr', day: 'Saturday', team1: 'csk', team2: 'dc', venueCity: 'Chennai', stadium: 'M. A. Chidambaram Stadium' },
    { matchNumber: 19, date: '2026-04-12', dateLabel: '12 Apr', day: 'Sunday', team1: 'lsg', team2: 'gt', venueCity: 'Lucknow', stadium: 'BRSABV Ekana Cricket Stadium' },
    { matchNumber: 20, date: '2026-04-12', dateLabel: '12 Apr', day: 'Sunday', team1: 'mi', team2: 'rcb', venueCity: 'Mumbai', stadium: 'Wankhede Stadium' },
    { matchNumber: 21, date: '2026-04-13', dateLabel: '13 Apr', day: 'Monday', team1: 'srh', team2: 'rr', venueCity: 'Hyderabad', stadium: 'Rajiv Gandhi International Stadium' },
    { matchNumber: 22, date: '2026-04-14', dateLabel: '14 Apr', day: 'Tuesday', team1: 'csk', team2: 'kkr', venueCity: 'Chennai', stadium: 'M. A. Chidambaram Stadium' },
    { matchNumber: 23, date: '2026-04-15', dateLabel: '15 Apr', day: 'Wednesday', team1: 'rcb', team2: 'lsg', venueCity: 'Bengaluru', stadium: 'M. Chinnaswamy Stadium' },
    { matchNumber: 24, date: '2026-04-16', dateLabel: '16 Apr', day: 'Thursday', team1: 'mi', team2: 'pbks', venueCity: 'Mumbai', stadium: 'Wankhede Stadium' },
    { matchNumber: 25, date: '2026-04-17', dateLabel: '17 Apr', day: 'Friday', team1: 'gt', team2: 'kkr', venueCity: 'Ahmedabad', stadium: 'Narendra Modi Stadium' },
    { matchNumber: 26, date: '2026-04-18', dateLabel: '18 Apr', day: 'Saturday', team1: 'rcb', team2: 'dc', venueCity: 'Bengaluru', stadium: 'M. Chinnaswamy Stadium' },
    { matchNumber: 27, date: '2026-04-18', dateLabel: '18 Apr', day: 'Saturday', team1: 'srh', team2: 'csk', venueCity: 'Hyderabad', stadium: 'Rajiv Gandhi International Stadium' },
    { matchNumber: 28, date: '2026-04-19', dateLabel: '19 Apr', day: 'Sunday', team1: 'kkr', team2: 'rr', venueCity: 'Kolkata', stadium: 'Eden Gardens' },
    { matchNumber: 29, date: '2026-04-19', dateLabel: '19 Apr', day: 'Sunday', team1: 'pbks', team2: 'lsg', venueCity: 'New Chandigarh', stadium: 'Maharaja Yadavindra Singh International Cricket Stadium' },
    { matchNumber: 30, date: '2026-04-20', dateLabel: '20 Apr', day: 'Monday', team1: 'gt', team2: 'mi', venueCity: 'Ahmedabad', stadium: 'Narendra Modi Stadium' },
    { matchNumber: 31, date: '2026-04-21', dateLabel: '21 Apr', day: 'Tuesday', team1: 'srh', team2: 'dc', venueCity: 'Hyderabad', stadium: 'Rajiv Gandhi International Stadium' },
    { matchNumber: 32, date: '2026-04-22', dateLabel: '22 Apr', day: 'Wednesday', team1: 'lsg', team2: 'rr', venueCity: 'Lucknow', stadium: 'BRSABV Ekana Cricket Stadium' },
    { matchNumber: 33, date: '2026-04-23', dateLabel: '23 Apr', day: 'Thursday', team1: 'mi', team2: 'csk', venueCity: 'Mumbai', stadium: 'Wankhede Stadium' },
    { matchNumber: 34, date: '2026-04-24', dateLabel: '24 Apr', day: 'Friday', team1: 'rcb', team2: 'gt', venueCity: 'Bengaluru', stadium: 'M. Chinnaswamy Stadium' },
    { matchNumber: 35, date: '2026-04-25', dateLabel: '25 Apr', day: 'Saturday', team1: 'dc', team2: 'pbks', venueCity: 'Delhi', stadium: 'Arun Jaitley Stadium' },
    { matchNumber: 36, date: '2026-04-25', dateLabel: '25 Apr', day: 'Saturday', team1: 'rr', team2: 'srh', venueCity: 'Jaipur', stadium: 'Sawai Mansingh Stadium' },
    { matchNumber: 37, date: '2026-04-26', dateLabel: '26 Apr', day: 'Sunday', team1: 'gt', team2: 'csk', venueCity: 'Ahmedabad', stadium: 'Narendra Modi Stadium' },
    { matchNumber: 38, date: '2026-04-26', dateLabel: '26 Apr', day: 'Sunday', team1: 'lsg', team2: 'kkr', venueCity: 'Lucknow', stadium: 'BRSABV Ekana Cricket Stadium' },
    { matchNumber: 39, date: '2026-04-27', dateLabel: '27 Apr', day: 'Monday', team1: 'dc', team2: 'rcb', venueCity: 'Delhi', stadium: 'Arun Jaitley Stadium' },
    { matchNumber: 40, date: '2026-04-28', dateLabel: '28 Apr', day: 'Tuesday', team1: 'pbks', team2: 'rr', venueCity: 'New Chandigarh', stadium: 'Maharaja Yadavindra Singh International Cricket Stadium' },
    { matchNumber: 41, date: '2026-04-29', dateLabel: '29 Apr', day: 'Wednesday', team1: 'mi', team2: 'srh', venueCity: 'Mumbai', stadium: 'Wankhede Stadium' },
    { matchNumber: 42, date: '2026-04-30', dateLabel: '30 Apr', day: 'Thursday', team1: 'gt', team2: 'rcb', venueCity: 'Ahmedabad', stadium: 'Narendra Modi Stadium' },
    { matchNumber: 43, date: '2026-05-01', dateLabel: '01 May', day: 'Friday', team1: 'rr', team2: 'dc', venueCity: 'Jaipur', stadium: 'Sawai Mansingh Stadium' },
    { matchNumber: 44, date: '2026-05-02', dateLabel: '02 May', day: 'Saturday', team1: 'csk', team2: 'mi', venueCity: 'Chennai', stadium: 'M. A. Chidambaram Stadium' },
    { matchNumber: 45, date: '2026-05-03', dateLabel: '03 May', day: 'Sunday', team1: 'srh', team2: 'kkr', venueCity: 'Hyderabad', stadium: 'Rajiv Gandhi International Stadium' },
    { matchNumber: 46, date: '2026-05-03', dateLabel: '03 May', day: 'Sunday', team1: 'gt', team2: 'pbks', venueCity: 'Ahmedabad', stadium: 'Narendra Modi Stadium' },
    { matchNumber: 47, date: '2026-05-04', dateLabel: '04 May', day: 'Monday', team1: 'mi', team2: 'lsg', venueCity: 'Mumbai', stadium: 'Wankhede Stadium' },
    { matchNumber: 48, date: '2026-05-05', dateLabel: '05 May', day: 'Tuesday', team1: 'dc', team2: 'csk', venueCity: 'Delhi', stadium: 'Arun Jaitley Stadium' },
    { matchNumber: 49, date: '2026-05-06', dateLabel: '06 May', day: 'Wednesday', team1: 'srh', team2: 'pbks', venueCity: 'Hyderabad', stadium: 'Rajiv Gandhi International Stadium' },
    { matchNumber: 50, date: '2026-05-07', dateLabel: '07 May', day: 'Thursday', team1: 'lsg', team2: 'rcb', venueCity: 'Lucknow', stadium: 'BRSABV Ekana Cricket Stadium' },
    { matchNumber: 51, date: '2026-05-08', dateLabel: '08 May', day: 'Friday', team1: 'dc', team2: 'kkr', venueCity: 'Delhi', stadium: 'Arun Jaitley Stadium' },
    { matchNumber: 52, date: '2026-05-09', dateLabel: '09 May', day: 'Saturday', team1: 'rr', team2: 'gt', venueCity: 'Jaipur', stadium: 'Sawai Mansingh Stadium' },
    { matchNumber: 53, date: '2026-05-10', dateLabel: '10 May', day: 'Sunday', team1: 'csk', team2: 'lsg', venueCity: 'Chennai', stadium: 'M. A. Chidambaram Stadium' },
    { matchNumber: 54, date: '2026-05-10', dateLabel: '10 May', day: 'Sunday', team1: 'rcb', team2: 'mi', venueCity: 'Raipur', stadium: 'Shaheed Veer Narayan Singh International Stadium' },
    { matchNumber: 55, date: '2026-05-11', dateLabel: '11 May', day: 'Monday', team1: 'pbks', team2: 'dc', venueCity: 'Dharamshala', stadium: 'Himachal Pradesh Cricket Association Stadium' },
    { matchNumber: 56, date: '2026-05-12', dateLabel: '12 May', day: 'Tuesday', team1: 'gt', team2: 'srh', venueCity: 'Ahmedabad', stadium: 'Narendra Modi Stadium' },
    { matchNumber: 57, date: '2026-05-13', dateLabel: '13 May', day: 'Wednesday', team1: 'rcb', team2: 'kkr', venueCity: 'Raipur', stadium: 'Shaheed Veer Narayan Singh International Stadium' },
    { matchNumber: 58, date: '2026-05-14', dateLabel: '14 May', day: 'Thursday', team1: 'pbks', team2: 'mi', venueCity: 'Dharamshala', stadium: 'Himachal Pradesh Cricket Association Stadium' },
    { matchNumber: 59, date: '2026-05-15', dateLabel: '15 May', day: 'Friday', team1: 'lsg', team2: 'csk', venueCity: 'Lucknow', stadium: 'BRSABV Ekana Cricket Stadium' },
    { matchNumber: 60, date: '2026-05-16', dateLabel: '16 May', day: 'Saturday', team1: 'kkr', team2: 'gt', venueCity: 'Kolkata', stadium: 'Eden Gardens' },
    { matchNumber: 61, date: '2026-05-17', dateLabel: '17 May', day: 'Sunday', team1: 'pbks', team2: 'rcb', venueCity: 'Dharamshala', stadium: 'Himachal Pradesh Cricket Association Stadium' },
    { matchNumber: 62, date: '2026-05-17', dateLabel: '17 May', day: 'Sunday', team1: 'dc', team2: 'rr', venueCity: 'Delhi', stadium: 'Arun Jaitley Stadium' },
    { matchNumber: 63, date: '2026-05-18', dateLabel: '18 May', day: 'Monday', team1: 'csk', team2: 'srh', venueCity: 'Chennai', stadium: 'M. A. Chidambaram Stadium' },
    { matchNumber: 64, date: '2026-05-19', dateLabel: '19 May', day: 'Tuesday', team1: 'rr', team2: 'lsg', venueCity: 'Jaipur', stadium: 'Sawai Mansingh Stadium' },
    { matchNumber: 65, date: '2026-05-20', dateLabel: '20 May', day: 'Wednesday', team1: 'kkr', team2: 'mi', venueCity: 'Kolkata', stadium: 'Eden Gardens' },
    { matchNumber: 66, date: '2026-05-21', dateLabel: '21 May', day: 'Thursday', team1: 'csk', team2: 'gt', venueCity: 'Chennai', stadium: 'M. A. Chidambaram Stadium' },
    { matchNumber: 67, date: '2026-05-22', dateLabel: '22 May', day: 'Friday', team1: 'srh', team2: 'rcb', venueCity: 'Hyderabad', stadium: 'Rajiv Gandhi International Stadium' },
    { matchNumber: 68, date: '2026-05-23', dateLabel: '23 May', day: 'Saturday', team1: 'lsg', team2: 'pbks', venueCity: 'Lucknow', stadium: 'BRSABV Ekana Cricket Stadium' },
    { matchNumber: 69, date: '2026-05-24', dateLabel: '24 May', day: 'Sunday', team1: 'mi', team2: 'rr', venueCity: 'Mumbai', stadium: 'Wankhede Stadium' },
    { matchNumber: 70, date: '2026-05-24', dateLabel: '24 May', day: 'Sunday', team1: 'kkr', team2: 'dc', venueCity: 'Kolkata', stadium: 'Eden Gardens' },
];

const completedMatchDetailsById: Record<string, CompletedMatchDetails> = {
    m1: {
        toss: 'RCB won the toss and elected to bowl.',
        result: 'Royal Challengers Bengaluru won by 6 wickets.',
        playerOfTheMatch: 'Jacob Duffy - 3/22(4)',
        keyMoments: [
            'Jacob Duffy struck three times in the first five overs to reduce SRH to 29/3.',
            'Ishan Kishan and Heinrich Klaasen rebuilt with a 97-run stand, dragging SRH back into a 200+ trajectory.',
            'Romario Shepherd removed Klaasen, Aniket Verma, and Harsh Dubey but still leaked boundaries at the death.',
            'RCB counterattacked in the chase: 76/1 in the powerplay and 203/4 in just 15.4 overs.'
        ],
        tacticalAnalysis: [
            'RCB’s new-ball bowling created the platform: 29/3 in 4.2 overs changed SRH from attack mode to recovery mode.',
            'SRH’s best phase was the Kishan-Klaasen alliance (97 off 53), where they attacked both spin and seam through straight and leg-side pockets.',
            'Aniket varma 43 off 18 was a late surge that kept SRH’s total competitive, but it also exposed the lack of a middle-order anchor after the top three wickets fell cheaply.',
            'Despite taking 3 wickets, Shepherd’s 54 in 4 overs and Abhinandan’s expensive spell inflated SRH’s final total to a defendable 201.',
            'RCB’s chase plan was ruthless: attack hard in powerplay, keep one anchor (Kohli) unbeaten, and avoid middle-overs dot-ball pressure.',
            'Padikkal’s 61 off 26 was the innings accelerator; Patidar’s 31 off 12 ensured there was no slowdown after the first wicket.',
            'SRH leaked 18 extras and failed to apply scoreboard pressure with disciplined lengths, especially in overs 7-13.',
            'The finishing margin (15.4 overs) indicates RCB won both tactical phases: wicket-taking with the new ball and tempo control while chasing.'
        ],
        improvements: {
            team1: [
                'SRH need a safer powerplay template: losing 3 wickets inside 5 overs forced mid-innings recovery pressure.',
                'Death-over bowling plans must tighten. Conceding 203 in 15.4 overs shows missed yorker execution and inconsistent hard-length discipline.',
                'Fielding support to bowlers can improve: boundary prevention at deep square and long-off was not consistent during RCB’s surge.'
            ],
            team2: [
                'RCB should reduce leak in middle/death overs with better fifth-bowler matchups; 54 off Shepherd’s 4 overs hurt control.',
                'RCB still need wicket-protection buffers when two wickets fall quickly (12.2 and 12.3) to avoid collapse risk in tighter chases.',
                'Bowling unit can improve economy on pace-off miss lengths, especially against power hitters like Aniket Verma.'
            ],
            players: [
                'Harshal Patel (SRH): improve wide yorker consistency under pressure; too many hittable lengths in overs 13-16.',
                'Eshan Malinga (SRH): adapt variation sequence earlier when batters line up back-of-length pace.',
                'Romario Shepherd (RCB): maintain wicket-taking threat while lowering economy with better change-up pace at the death.',
                'Abhinandan Singh (RCB): improve first-two-over control with tighter channel to avoid boundary release balls.',
                'Jitesh Sharma (RCB): better game-awareness at dismissal moments to avoid low-impact wicket phases.'
            ]
        },
        innings: [
            {
                teamId: 'srh',
                total: 201,
                wickets: 9,
                overs: '20.0',
                batters: [
                    { name: 'Travis Head', howOut: 'c Phil Salt b Jacob Duffy', runs: 11, balls: 9, fours: 2, sixes: 0, strikeRate: 122.22 },
                    { name: 'Abhishek Sharma', howOut: 'c Jitesh Sharma b Jacob Duffy', runs: 7, balls: 8, fours: 0, sixes: 1, strikeRate: 87.5 },
                    { name: 'Ishan Kishan', howOut: 'c Phil Salt b Abhinandan Singh', runs: 80, balls: 38, fours: 8, sixes: 5, strikeRate: 210.53 },
                    { name: 'Nitish Kumar Reddy', howOut: 'c Abhinandan Singh b Jacob Duffy', runs: 1, balls: 6, fours: 0, sixes: 0, strikeRate: 16.67 },
                    { name: 'Heinrich Klaasen', howOut: 'c Phil Salt b Romario Shepherd', runs: 31, balls: 22, fours: 2, sixes: 1, strikeRate: 140.91 },
                    { name: 'Salil Arora', howOut: 'c Devdutt Padikkal b Suyash Sharma', runs: 9, balls: 6, fours: 0, sixes: 1, strikeRate: 150.0 },
                    { name: 'Aniket Verma', howOut: 'c Virat Kohli b Romario Shepherd', runs: 43, balls: 18, fours: 3, sixes: 4, strikeRate: 238.89 },
                    { name: 'Harsh Dubey', howOut: 'c Devdutt Padikkal b Romario Shepherd', runs: 3, balls: 3, fours: 0, sixes: 0, strikeRate: 100.0 },
                    { name: 'Harshal Patel', howOut: 'c Devdutt Padikkal b Bhuvneshwar Kumar', runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0.0 },
                    { name: 'David Payne', howOut: 'not out', runs: 6, balls: 5, fours: 0, sixes: 0, strikeRate: 120.0 },
                    { name: 'Jaydev Unadkat', howOut: 'not out', runs: 4, balls: 3, fours: 0, sixes: 0, strikeRate: 133.33 },
                ],
                extras: '6 (b 0, lb 2, w 4, nb 0)',
                didNotBat: ['Eshan Malinga'],
                bowlers: [
                    { name: 'Jacob Duffy', overs: '4', maidens: 0, runs: 22, wickets: 3, economy: 5.5 },
                    { name: 'Bhuvneshwar Kumar', overs: '4', maidens: 0, runs: 31, wickets: 1, economy: 7.8 },
                    { name: 'Abhinandan Singh', overs: '3', maidens: 0, runs: 38, wickets: 1, economy: 12.7 },
                    { name: 'Romario Shepherd', overs: '4', maidens: 0, runs: 54, wickets: 3, economy: 13.5 },
                    { name: 'Suyash Sharma', overs: '3', maidens: 0, runs: 28, wickets: 1, economy: 9.3 },
                    { name: 'Krunal Pandya', overs: '2', maidens: 0, runs: 26, wickets: 0, economy: 13.0 },
                ],
                fallOfWickets: ['18/1 (Abhishek Sharma, 2.1 ov)', '23/2 (Travis Head, 2.6 ov)', '29/3 (Nitish Kumar Reddy, 4.2 ov)', '126/4 (Heinrich Klaasen, 13.1 ov)', '137/5 (Salil Arora, 14.3 ov)', '155/6 (Ishan Kishan, 15.6 ov)', '167/7 (Harsh Dubey, 16.6 ov)', '174/8 (Harshal Patel, 17.5 ov)', '192/9 (Aniket Verma, 18.6 ov)'],
                powerplayRuns: '49/3 (0.1-6 ov)',
                partnerships: ['18 (Head-Abhishek)', '5 (Head-Ishan)', '6 (Ishan-Nitish)', '97 (Ishan-Klaasen)', '11 (Ishan-Salil)', '18 (Ishan-Aniket)', '12 (Aniket-Harsh)', '7 (Aniket-Harshal)', '18 (Aniket-Payne)', '9 (Payne-Unadkat)']
            },
            {
                teamId: 'rcb',
                total: 203,
                wickets: 4,
                overs: '15.4',
                batters: [
                    { name: 'Philip Salt', howOut: 'c Heinrich Klaasen b Jaydev Unadkat', runs: 8, balls: 7, fours: 2, sixes: 0, strikeRate: 114.29 },
                    { name: 'Virat Kohli', howOut: 'not out', runs: 69, balls: 38, fours: 5, sixes: 5, strikeRate: 181.58 },
                    { name: 'Devdutt Padikkal', howOut: 'c Heinrich Klaasen b Harsh Dubey', runs: 61, balls: 26, fours: 7, sixes: 4, strikeRate: 234.62 },
                    { name: 'Rajat Patidar', howOut: 'c Harsh Dubey b David Payne', runs: 31, balls: 12, fours: 2, sixes: 3, strikeRate: 258.33 },
                    { name: 'Jitesh Sharma', howOut: 'c Jaydev Unadkat b David Payne', runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0.0 },
                    { name: 'Tim David', howOut: 'not out', runs: 16, balls: 10, fours: 1, sixes: 1, strikeRate: 160.0 },
                ],
                extras: '18 (b 9, lb 2, w 7, nb 0)',
                didNotBat: ['Romario Shepherd', 'Krunal Pandya', 'Bhuvneshwar Kumar', 'Abhinandan Singh', 'Jacob Duffy', 'Suyash Sharma'],
                bowlers: [
                    { name: 'Nitish Kumar Reddy', overs: '2', maidens: 0, runs: 19, wickets: 0, economy: 9.5 },
                    { name: 'Jaydev Unadkat', overs: '3', maidens: 0, runs: 29, wickets: 1, economy: 9.7 },
                    { name: 'David Payne', overs: '3', maidens: 0, runs: 35, wickets: 2, economy: 11.7 },
                    { name: 'Harsh Dubey', overs: '3', maidens: 0, runs: 35, wickets: 1, economy: 11.7 },
                    { name: 'Eshan Malinga', overs: '2', maidens: 0, runs: 35, wickets: 0, economy: 17.5 },
                    { name: 'Harshal Patel', overs: '2.4', maidens: 0, runs: 39, wickets: 0, economy: 14.6 },
                ],
                fallOfWickets: ['9/1 (Philip Salt, 1.1 ov)', '110/2 (Devdutt Padikkal, 8.4 ov)', '163/3 (Rajat Patidar, 12.2 ov)', '163/4 (Jitesh Sharma, 12.3 ov)'],
                powerplayRuns: '76/1 (0.1-6 ov)',
                partnerships: ['9 (Salt-Kohli)', '101 (Padikkal-Kohli)', '53 (Patidar-Kohli)', '0 (Jitesh-Kohli)', '40 (Tim David-Kohli)']
            }
        ]
    },
    m2: {
        toss: 'Mumbai Indians won the toss and elected to bowl.',
        result: 'Mumbai Indians won by 6 wickets.',
        playerOfTheMatch: 'Shardul Thakur - 3/39 (4)',
        keyMoments: [
            'KKR exploded to 78 in the powerplay, powered by Finn Allen\'s 37 off 17 and Ajinkya Rahane\'s control against pace.',
            'Shardul Thakur broke the game open by removing Allen, Cameron Green, and Rahane, pulling KKR back from a 230+ launchpad to 220/4.',
            'MI answered with an even stronger powerplay of 80 and then built a 148-run opening stand in just 11.5 overs through Rohit Sharma and Ryan Rickelton.',
            'Despite a mini-collapse from 179/1 to 184/3, Hardik Pandya and Tilak Varma absorbed pressure before Hardik-Naman Dhir finished the chase in 19.1 overs.',
            'The Wankhede curse is broken: MI finally chased down a massive 220-plus total against KKR in a high-pressure night game.'
        ],
        tacticalAnalysis: [
            'KKR batted at 11.00 per over, but MI\'s wicket distribution was the separator: Shardul took out KKR\'s three most fluent top-order batters.',
            'Raghuvanshi-Rinku stitched momentum late, yet KKR\'s finish lacked a final-over surge because MI denied boundary options to square-leg and long-on pockets.',
            'MI\'s chase blueprint was ultra-clear: maximize field restrictions with two aggressive right-left options and keep intent above 11 an over till the 12th.',
            'The 148-run opening partnership was match-winning because it removed scoreboard panic and forced KKR to spread fields early, reducing wicket-taking threat.',
            'KKR\'s spinners could not control middle overs on this surface: Narine was tidy by comparison, but Varun and pace support leaked too many release balls.',
            'Hardik\'s finishing phase showed game-awareness: he attacked only matchups in his zone and let required rate pressure collapse on KKR.',
            'MI won both key windows: wickets in the first innings and boundary pressure in the powerplay of the chase.',
            'Player of the Match Shardul Thakur combined strike-bowling impact with timing: each wicket arrived when KKR were trying to accelerate toward 230.'
        ],
        improvements: {
            team1: [
                'KKR need a stronger death-over batting finish after over 16; 220 was excellent, but 10-15 more runs were available with wickets in hand.',
                'Bowling plans in a 220 defense must be tighter in overs 1-6. Conceding 80 in the powerplay gave MI immediate control.',
                'KKR should hold one over of Narine/Varun for post-12 overs when set batters are targeting pace across shorter square boundaries.'
            ],
            team2: [
                'MI can improve new-ball economy on hard lengths; 78 conceded in the powerplay is high even in Wankhede conditions.',
                'Middle-over bowling against set right-handers still needs better pace-off sequencing to avoid four-ball streaks.',
                'MI should avoid mini collapses in steep chases by preserving one batter with anchor intent between overs 12-16.'
            ],
            players: [
                'Ajinkya Rahane (KKR): convert fluent starts deeper; a set 67 could have been stretched into a match-defining 85+.',
                'Rinku Singh (KKR): look to access straighter pockets earlier when partners are set, rather than waiting for the last two overs.',
                'Vaibhav Arora (KKR): improve powerplay yorker percentage; over-pitched and slot deliveries fueled MI\'s launch.',
                'Rohit Sharma (MI): continue high-intent starts but minimize aerial risk immediately after powerplay when boundary riders go back.',
                'Hardik Pandya (MI): maintain finishing clarity while improving defensive bowling lengths when batting side is pre-loading leg side.',
                'Shardul Thakur (MI): build on impact spells by pairing wicket-taking lengths with one lower-risk over for economy control.'
            ]
        },
        innings: [
            {
                teamId: 'kkr',
                total: 220,
                wickets: 4,
                overs: '20.0',
                batters: [
                    { name: 'Ajinkya Rahane', howOut: 'c Hardik Pandya b Shardul Thakur', runs: 67, balls: 40, fours: 3, sixes: 5, strikeRate: 167.5 },
                    { name: 'Finn Allen', howOut: 'c Tilak Varma b Shardul Thakur', runs: 37, balls: 17, fours: 6, sixes: 2, strikeRate: 217.65 },
                    { name: 'Cameron Green', howOut: 'c Sherfane Rutherford b Shardul Thakur', runs: 18, balls: 10, fours: 1, sixes: 1, strikeRate: 180.0 },
                    { name: 'Angkrish Raghuvanshi', howOut: 'c Tilak Varma b Hardik Pandya', runs: 51, balls: 29, fours: 6, sixes: 2, strikeRate: 175.86 },
                    { name: 'Rinku Singh', howOut: 'not out', runs: 33, balls: 21, fours: 4, sixes: 0, strikeRate: 157.14 },
                    { name: 'Ramandeep Singh', howOut: 'not out', runs: 4, balls: 4, fours: 0, sixes: 0, strikeRate: 100.0 },
                ],
                extras: '10 (b 0, lb 2, w 7, nb 1)',
                didNotBat: ['Anukul Roy', 'Sunil Narine', 'Varun Chakaravarthy', 'Vaibhav Arora', 'Blessing Muzarabani'],
                bowlers: [
                    { name: 'Trent Boult', overs: '4', maidens: 0, runs: 38, wickets: 0, economy: 9.5 },
                    { name: 'Hardik Pandya', overs: '3', maidens: 0, runs: 39, wickets: 1, economy: 13.0 },
                    { name: 'AM Ghazanfar', overs: '4', maidens: 0, runs: 51, wickets: 0, economy: 12.8 },
                    { name: 'Jasprit Bumrah', overs: '4', maidens: 0, runs: 35, wickets: 0, economy: 8.8 },
                    { name: 'Shardul Thakur', overs: '4', maidens: 0, runs: 39, wickets: 3, economy: 9.8 },
                    { name: 'Mayank Markande', overs: '1', maidens: 0, runs: 16, wickets: 0, economy: 16.0 },
                ],
                fallOfWickets: ['69/1 (Finn Allen, 5.2 ov)', '109/2 (Cameron Green, 8.5 ov)', '145/3 (Ajinkya Rahane, 13.3 ov)', '205/4 (Angkrish Raghuvanshi, 18.3 ov)'],
                powerplayRuns: '78/1 (0.1-6 ov)',
                partnerships: ['69 (Rahane-Allen)', '40 (Rahane-Green)', '36 (Rahane-Raghuvanshi)', '60 (Raghuvanshi-Rinku)', '15* (Rinku-Ramandeep)']
            },
            {
                teamId: 'mi',
                total: 224,
                wickets: 4,
                overs: '19.1',
                batters: [
                    { name: 'Ryan Rickelton', howOut: 'run out (Anukul Roy)', runs: 81, balls: 43, fours: 4, sixes: 8, strikeRate: 188.37 },
                    { name: 'Rohit Sharma', howOut: 'c Anukul Roy b Vaibhav Arora', runs: 78, balls: 38, fours: 6, sixes: 6, strikeRate: 205.26 },
                    { name: 'Suryakumar Yadav', howOut: 'c Rinku Singh b Kartik Tyagi', runs: 16, balls: 8, fours: 3, sixes: 0, strikeRate: 200.0 },
                    { name: 'Tilak Varma', howOut: 'c (sub) Manish Pandey b Sunil Narine', runs: 20, balls: 14, fours: 4, sixes: 0, strikeRate: 142.86 },
                    { name: 'Hardik Pandya', howOut: 'not out', runs: 18, balls: 11, fours: 3, sixes: 0, strikeRate: 163.64 },
                    { name: 'Naman Dhir', howOut: 'not out', runs: 5, balls: 2, fours: 1, sixes: 0, strikeRate: 250.0 },
                ],
                extras: '6 (b 0, lb 2, w 3, nb 1)',
                didNotBat: ['Sherfane Rutherford', 'Shardul Thakur', 'Mayank Markande', 'AM Ghazanfar', 'Trent Boult', 'Jasprit Bumrah'],
                bowlers: [
                    { name: 'Vaibhav Arora', overs: '4', maidens: 0, runs: 52, wickets: 1, economy: 13.0 },
                    { name: 'Blessing Muzarabani', overs: '3', maidens: 0, runs: 34, wickets: 0, economy: 11.3 },
                    { name: 'Varun Chakaravarthy', overs: '4', maidens: 0, runs: 48, wickets: 0, economy: 12.0 },
                    { name: 'Kartik Tyagi', overs: '4', maidens: 0, runs: 43, wickets: 1, economy: 10.8 },
                    { name: 'Sunil Narine', overs: '3', maidens: 0, runs: 30, wickets: 1, economy: 10.0 },
                    { name: 'Anukul Roy', overs: '1.1', maidens: 0, runs: 15, wickets: 0, economy: 12.9 },
                ],
                fallOfWickets: ['148/1 (Rohit Sharma, 11.5 ov)', '179/2 (Suryakumar Yadav, 14.2 ov)', '184/3 (Ryan Rickelton, 15.2 ov)', '215/4 (Tilak Varma, 18.4 ov)'],
                powerplayRuns: '80/0 (0.1-6 ov)',
                partnerships: ['148 (Rickelton-Rohit)', '31 (Rickelton-Suryakumar)', '5 (Rickelton-Tilak)', '31 (Tilak-Hardik)', '9* (Hardik-Naman)']
            }
        ]
    },
    m3: {
        toss: 'Rajasthan Royals won the toss and elected to bowl.',
        result: 'Rajasthan Royals won by 8 wickets (with 47 balls remaining).',
        playerOfTheMatch: 'Nandre Burger - 2/26 (4)',
        keyMoments: [
            'RR destroyed CSK’s top order to 19/3 inside 3.1 overs, immediately forcing a rebuilding innings.',
            'Nandre Burger and Jofra Archer struck in tandem up front, while wickets at 7.2 and 7.6 overs stalled CSK’s momentum again.',
            'Jamie Overton’s 43 off 36 lifted CSK from 94/9 to 127 all out, giving them at least a defendable total.',
            'RR’s chase was dominated by Vaibhav Sooryavanshi’s 52 off 17 and ended in just 12.1 overs.'
        ],
        tacticalAnalysis: [
            'RR’s new-ball attack used hard lengths and straight lines to force early mistakes; 19/3 in 3.1 overs set the whole game.',
            'CSK lost control in the middle phase too, with wickets falling regularly from overs 5 to 13 and very few boundary options.',
            'RR’s chase blueprint was extreme intent in the powerplay, reaching 75/1 by 6.2 overs and eliminating scoreboard pressure.',
            'CSK’s wicket-taking came only through Anshul Kamboj, but RR already had the asking rate under complete control.',
            'Burger’s opening spell and pressure-building lengths created the game’s biggest separation phase.',
            'RR won all major phases: powerplay bowling, middle-over strike rate, and chase tempo.'
        ],
        improvements: {
            team1: [
                'RR can tighten death-over execution despite control overall; CSK still added useful lower-order runs.',
                'RR should keep one over of a strike bowler in reserve when the opposition is 8 down to prevent late momentum.',
                'Fielding remained good, but direct-hit opportunities in the ring can still improve.'
            ],
            team2: [
                'CSK need a safer top-order template; 19/3 inside four overs created an immediate deficit.',
                'Middle-order batters must rotate better against spin and hit fewer low-percentage release shots.',
                'Defending 127 required early wickets, but CSK leaked boundary options and pace-off control in the powerplay.'
            ],
            players: [
                'Ruturaj Gaikwad (CSK): improve powerplay shot selection against high pace and hard lengths.',
                'Jamie Overton (CSK): convert rescue innings into a faster strike rate once tail support arrives.',
                'Nandre Burger (RR): continue attacking the stumps early; this spell showed high-impact control.',
                'Vaibhav Sooryavanshi (RR): maintain controlled aggression while preserving shape against short-ball plans.',
                'Anshul Kamboj (CSK): build around this impact spell by pairing breakthroughs with lower-risk overs.'
            ]
        },
        innings: [
            {
                teamId: 'csk',
                total: 127,
                wickets: 10,
                overs: '19.4',
                batters: [
                    { name: 'Sanju Samson', howOut: 'b Nandre Burger', runs: 6, balls: 7, fours: 1, sixes: 0, strikeRate: 85.71 },
                    { name: 'Ruturaj Gaikwad', howOut: 'b Jofra Archer', runs: 6, balls: 11, fours: 1, sixes: 0, strikeRate: 54.54 },
                    { name: 'Ayush Mhatre', howOut: 'c Dhruv Jurel b Nandre Burger', runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0.0 },
                    { name: 'Matthew Short', howOut: 'c Yashasvi Jaiswal b Sandeep Sharma', runs: 2, balls: 7, fours: 0, sixes: 0, strikeRate: 28.57 },
                    { name: 'Sarfaraz Khan', howOut: 'lbw b Ravindra Jadeja', runs: 17, balls: 12, fours: 2, sixes: 1, strikeRate: 141.67 },
                    { name: 'Kartik Sharma', howOut: 'lbw b Brijesh Sharma', runs: 18, balls: 15, fours: 0, sixes: 1, strikeRate: 120.0 },
                    { name: 'Shivam Dube', howOut: 'c Ravi Bishnoi b Ravindra Jadeja', runs: 6, balls: 4, fours: 0, sixes: 1, strikeRate: 150.0 },
                    { name: 'Jamie Overton', howOut: 'run out (Shimron Hetmyer/Dhruv Jurel)', runs: 43, balls: 36, fours: 2, sixes: 2, strikeRate: 119.44 },
                    { name: 'Noor Ahmad', howOut: 'c Dhruv Jurel b Jofra Archer', runs: 1, balls: 9, fours: 0, sixes: 0, strikeRate: 11.11 },
                    { name: 'Matt Henry', howOut: 'c & b Ravi Bishnoi', runs: 5, balls: 7, fours: 1, sixes: 0, strikeRate: 71.43 },
                    { name: 'Anshul Kamboj', howOut: 'not out', runs: 7, balls: 10, fours: 1, sixes: 0, strikeRate: 70.0 },
                ],
                extras: '16 (b 0, lb 9, w 6, nb 1)',
                didNotBat: ['Khaleel Ahmed'],
                bowlers: [
                    { name: 'Jofra Archer', overs: '4', maidens: 0, runs: 19, wickets: 2, economy: 4.75 },
                    { name: 'Nandre Burger', overs: '4', maidens: 0, runs: 26, wickets: 2, economy: 6.5 },
                    { name: 'Brijesh Sharma', overs: '3', maidens: 0, runs: 17, wickets: 1, economy: 5.67 },
                    { name: 'Sandeep Sharma', overs: '2.4', maidens: 0, runs: 22, wickets: 1, economy: 8.25 },
                    { name: 'Ravi Bishnoi', overs: '3', maidens: 0, runs: 16, wickets: 1, economy: 5.33 },
                    { name: 'Ravindra Jadeja', overs: '3', maidens: 0, runs: 18, wickets: 2, economy: 6.0 },
                ],
                fallOfWickets: ['14/1 (Sanju Samson, 1.6 ov)', '19/2 (Ruturaj Gaikwad, 2.6 ov)', '19/3 (Ayush Mhatre, 3.1 ov)', '38/4 (Matthew Short, 5.3 ov)', '51/5 (Sarfaraz Khan, 7.2 ov)', '57/6 (Shivam Dube, 7.6 ov)', '74/7 (Kartik Sharma, 10.3 ov)', '82/8 (Noor Ahmad, 12.5 ov)', '94/9 (Matt Henry, 15.3 ov)', '127/10 (Jamie Overton, 19.4 ov)'],
                powerplayRuns: '40/4 (0.1-6 ov)',
                partnerships: ['14 (Samson-Gaikwad)', '5 (Gaikwad-Mhatre)', '0 (Mhatre-Short)', '19 (Short-Sarfaraz)', '13 (Sarfaraz-Kartik)', '6 (Kartik-Dube)', '17 (Kartik-Overton)', '8 (Overton-Noor)', '12 (Overton-Henry)', '33 (Overton-Kamboj)']
            },
            {
                teamId: 'rr',
                total: 128,
                wickets: 2,
                overs: '12.1',
                batters: [
                    { name: 'Yashasvi Jaiswal', howOut: 'not out', runs: 38, balls: 36, fours: 3, sixes: 1, strikeRate: 105.56 },
                    { name: 'Vaibhav Sooryavanshi', howOut: 'c Sarfaraz Khan b Anshul Kamboj', runs: 52, balls: 17, fours: 4, sixes: 5, strikeRate: 305.88 },
                    { name: 'Dhruv Jurel', howOut: 'b Anshul Kamboj', runs: 18, balls: 9, fours: 4, sixes: 0, strikeRate: 200.0 },
                    { name: 'Riyan Parag', howOut: 'not out', runs: 14, balls: 11, fours: 1, sixes: 1, strikeRate: 127.27 },
                ],
                extras: '6 (b 4, lb 1, w 1, nb 0)',
                didNotBat: ['Shimron Hetmyer', 'Ravindra Jadeja', 'Jofra Archer', 'Nandre Burger', 'Sandeep Sharma', 'Ravi Bishnoi', 'Brijesh Sharma'],
                bowlers: [
                    { name: 'Matt Henry', overs: '3', maidens: 0, runs: 40, wickets: 0, economy: 13.33 },
                    { name: 'Khaleel Ahmed', overs: '3', maidens: 0, runs: 17, wickets: 0, economy: 5.67 },
                    { name: 'Anshul Kamboj', overs: '3', maidens: 0, runs: 27, wickets: 2, economy: 9.0 },
                    { name: 'Noor Ahmad', overs: '2', maidens: 0, runs: 24, wickets: 0, economy: 12.0 },
                    { name: 'Jamie Overton', overs: '1', maidens: 0, runs: 14, wickets: 0, economy: 14.0 },
                    { name: 'Matthew Short', overs: '0.1', maidens: 0, runs: 1, wickets: 0, economy: 6.0 },
                ],
                fallOfWickets: ['75/1 (Vaibhav Sooryavanshi, 6.2 ov)', '99/2 (Dhruv Jurel, 8.3 ov)'],
                powerplayRuns: '74/0 (0.1-6 ov)',
                partnerships: ['75 (Jaiswal-Sooryavanshi)', '24 (Jaiswal-Jurel)', '29* (Jaiswal-Parag)']
            }
        ]
    },
    m4: {
        toss: 'Punjab Kings won the toss and elected to bowl.',
        result: 'Punjab Kings won by 3 wickets (with 5 balls remaining).',
        playerOfTheMatch: 'Cooper Connolly - 72* (44)',
        keyMoments: [
            'GT reached 83/2 by 9.3 overs, but PBKS pulled control back through middle-overs wickets.',
            'Vyshak Vijaykumar removed Glenn Phillips, Washington Sundar, and M Shahrukh Khan to restrict GT to 162/6.',
            'PBKS slipped from 110/2 to 118/6, but Cooper Connolly held one end and managed the chase tempo.',
            'Connolly and Xavier Bartlett added a calm, late finishing stand to close the chase in 19.1 overs.'
        ],
        tacticalAnalysis: [
            'GT had several starts but no finishing surge in the last two overs, leaving a below-par total for this venue profile.',
            'PBKS bowled with clear matchup discipline in overs 10-20: Chahal and Vyshak combined for 5 wickets.',
            'PBKS built a strong platform at 110/2, then exposed their middle-order fragility with a quick collapse of 4 wickets for 8 runs.',
            'Connolly balanced risk and rotation perfectly after the collapse, ensuring PBKS were never fully out of control in the chase.',
            'Prasidh Krishna’s 3 wickets created pressure for GT, but support bowling leaked too many boundary and strike-rotation options.'
        ],
        improvements: {
            team1: [
                'PBKS should avoid middle-order panic when required rate is under control; the 118/6 phase made the chase tighter than necessary.',
                'Powerplay bowling discipline can improve: 42 runs conceded in the first four overs gave GT early momentum.',
                'PBKS can sharpen death-over planning with the ball to prevent last-over finishing opportunities.'
            ],
            team2: [
                'GT need one batter to convert starts into a 65+ anchor innings after the 10th over.',
                'GT should tighten wide-ball control under pressure; extra runs and freebies hurt their defense windows.',
                'Bowling support around Prasidh/Rashid needs better hard-length execution at the death.'
            ],
            players: [
                'Cooper Connolly (PBKS): continue phase control against spin and pace with low-risk boundary options.',
                'Vijaykumar Vyshak (PBKS): maintain middle-over wicket-taking role with the same pace-off discipline.',
                'Shubman Gill (GT): convert fluent starts into deeper innings when top-order partner is set.',
                'Washington Sundar (GT): improve defensive lines in chase-control overs to reduce release boundaries.'
            ]
        },
        innings: [
            {
                teamId: 'gt',
                total: 162,
                wickets: 6,
                overs: '20.0',
                batters: [
                    { name: 'Sai Sudharsan', howOut: 'c Iyer b Jansen', runs: 13, balls: 11, fours: 2, sixes: 0, strikeRate: 118.18 },
                    { name: 'Shubman Gill', howOut: 'c Connolly b Chahal', runs: 39, balls: 27, fours: 6, sixes: 0, strikeRate: 144.44 },
                    { name: 'Jos Buttler', howOut: 'c Bartlett b Chahal', runs: 38, balls: 33, fours: 3, sixes: 2, strikeRate: 115.15 },
                    { name: 'Glenn Phillips', howOut: 'c Jansen b Vyshak', runs: 25, balls: 17, fours: 1, sixes: 1, strikeRate: 147.05 },
                    { name: 'Washington Sundar', howOut: 'c Arshdeep Singh b Vyshak', runs: 18, balls: 16, fours: 2, sixes: 0, strikeRate: 112.5 },
                    { name: 'M Shahrukh Khan', howOut: 'c Arshdeep Singh b Vyshak', runs: 4, balls: 6, fours: 0, sixes: 0, strikeRate: 66.66 },
                    { name: 'Rahul Tewatia', howOut: 'not out', runs: 11, balls: 10, fours: 1, sixes: 0, strikeRate: 110.0 },
                    { name: 'Rashid Khan', howOut: 'not out', runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0.0 },
                ],
                extras: '14 (b 0, lb 2, w 11, nb 1)',
                didNotBat: ['Kagiso Rabada', 'Ashok Sharma', 'Mohammed Siraj'],
                bowlers: [
                    { name: 'Arshdeep Singh', overs: '4', maidens: 0, runs: 42, wickets: 0, economy: 10.5 },
                    { name: 'Xavier Bartlett', overs: '4', maidens: 0, runs: 36, wickets: 0, economy: 9.0 },
                    { name: 'Marco Jansen', overs: '4', maidens: 0, runs: 20, wickets: 1, economy: 5.0 },
                    { name: 'Vyshak Vijaykumar', overs: '4', maidens: 0, runs: 34, wickets: 3, economy: 8.5 },
                    { name: 'Yuzvendra Chahal', overs: '4', maidens: 0, runs: 28, wickets: 2, economy: 7.0 },
                ],
                fallOfWickets: ['37/1 (Sai Sudharsan, 3.4 ov)', '83/2 (Shubman Gill, 9.3 ov)', '119/3 (Glenn Phillips, 13.6 ov)', '129/4 (Jos Buttler, 15.4 ov)', '144/5 (Washington Sundar, 18.1 ov)', '150/6 (M Shahrukh Khan, 18.6 ov)'],
                powerplayRuns: '53/1 (0.1-6 ov)',
                partnerships: ['37 (Sai Sudharsan-Gill)', '46 (Gill-Buttler)', '36 (Buttler-Phillips)', '10 (Buttler-Sundar)', '15 (Sundar-Shahrukh)', '6 (Shahrukh-Tewatia)', '12* (Tewatia-Rashid)']
            },
            {
                teamId: 'pbks',
                total: 165,
                wickets: 7,
                overs: '19.1',
                batters: [
                    { name: 'Priyansh Arya', howOut: 'c Ashok Sharma b Rabada', runs: 7, balls: 8, fours: 0, sixes: 1, strikeRate: 87.5 },
                    { name: 'Prabhsimran Singh', howOut: 'c Prasidh Krishna b Rashid Khan', runs: 37, balls: 24, fours: 1, sixes: 4, strikeRate: 154.16 },
                    { name: 'Cooper Connolly', howOut: 'not out', runs: 72, balls: 44, fours: 5, sixes: 5, strikeRate: 163.63 },
                    { name: 'Shreyas Iyer', howOut: 'c Washington Sundar b Prasidh Krishna', runs: 18, balls: 11, fours: 0, sixes: 2, strikeRate: 163.63 },
                    { name: 'Nehal Wadhera', howOut: 'c Shubman Gill b Washington Sundar', runs: 3, balls: 6, fours: 0, sixes: 0, strikeRate: 50.0 },
                    { name: 'Shashank Singh', howOut: 'c Jos Buttler b Prasidh Krishna', runs: 4, balls: 5, fours: 0, sixes: 0, strikeRate: 80.0 },
                    { name: 'Marcus Stoinis', howOut: 'c Rashid Khan b Prasidh Krishna', runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0.0 },
                    { name: 'Marco Jansen', howOut: 'c Shubman Gill b Ashok Sharma', runs: 9, balls: 10, fours: 0, sixes: 1, strikeRate: 90.0 },
                    { name: 'Xavier Bartlett', howOut: 'not out', runs: 11, balls: 5, fours: 0, sixes: 1, strikeRate: 220.0 },
                ],
                extras: '4 (b 0, lb 0, w 4, nb 0)',
                didNotBat: ['Vyshak Vijaykumar', 'Arshdeep Singh'],
                bowlers: [
                    { name: 'Mohammed Siraj', overs: '2', maidens: 0, runs: 15, wickets: 0, economy: 7.5 },
                    { name: 'Kagiso Rabada', overs: '3', maidens: 0, runs: 34, wickets: 1, economy: 11.33 },
                    { name: 'Ashok Sharma', overs: '3', maidens: 0, runs: 31, wickets: 1, economy: 10.33 },
                    { name: 'Rashid Khan', overs: '4', maidens: 0, runs: 29, wickets: 1, economy: 7.25 },
                    { name: 'Washington Sundar', overs: '3.1', maidens: 0, runs: 27, wickets: 1, economy: 8.52 },
                    { name: 'Prasidh Krishna', overs: '4', maidens: 0, runs: 29, wickets: 3, economy: 7.25 },
                ],
                fallOfWickets: ['7/1 (Priyansh Arya, 1.2 ov)', '83/2 (Prabhsimran Singh, 9.3 ov)', '110/3 (Shreyas Iyer, 12.1 ov)', '113/4 (Nehal Wadhera, 13.1 ov)', '118/5 (Shashank Singh, 14.2 ov)', '118/6 (Marcus Stoinis, 14.4 ov)', '144/7 (Marco Jansen, 17.4 ov)'],
                powerplayRuns: '52/1 (0.1-6 ov)',
                partnerships: ['7 (Arya-Prabhsimran)', '76 (Prabhsimran-Connolly)', '27 (Connolly-Iyer)', '3 (Connolly-Wadhera)', '5 (Connolly-Shashank)', '0 (Connolly-Stoinis)', '26 (Connolly-Jansen)', '21* (Connolly-Bartlett)']
            }
        ]
    },
    m5: {
        toss: 'Delhi Capitals won the toss and elected to bowl.',
        result: 'Delhi Capitals won by 6 wickets (with 17 balls remaining).',
        playerOfTheMatch: 'Sameer Rizvi - 70* (47)',
        keyMoments: [
            'LSG slipped from 48/1 to 71/5, losing control of the innings despite early starts.',
            'Natarajan (3/29), Ngidi (3/27), and Kuldeep (2/31) combined for 8 wickets to bowl LSG out in 18.4 overs.',
            'DC were 26/4 inside 5 overs, but Sameer Rizvi absorbed pressure and rebuilt the chase.',
            'Rizvi and Tristan Stubbs stitched an unbeaten 119-run stand to seal the chase in 17.1 overs.'
        ],
        tacticalAnalysis: [
            'DC front-loaded spin and change-of-pace options at the right phases, especially against LSG’s middle order.',
            'LSG’s innings lacked stabilization after the 10th over; only Abdul Samad provided sustained acceleration.',
            'After losing four early wickets, DC shifted into low-risk accumulation before targeting matchup overs from Nortje and part-time options.',
            'DC’s chase quality was built on strike rotation and selective boundary hitting rather than all-out powerplay counterattack.',
            'LSG conceded 20 extras in defense, which reduced scoreboard pressure and shortened their wicket-taking windows.'
        ],
        improvements: {
            team1: [
                'LSG need a clearer recovery template after collapses; the phase from 5th to 12th over needs one anchor-batter role.',
                'Bowling discipline at the top can improve: 16 wides and 20 total extras in the chase gave DC free momentum.',
                'Use frontline bowlers earlier when opposition is 26/4 to press for a knockout spell.'
            ],
            team2: [
                'DC should tighten top-order intent versus new-ball seam after collapsing to 26/4.',
                'Middle-over bowling lengths at Lucknow can be even fuller when defending sub-150 totals.',
                'Continue wicket-taking spin usage in overs 7-14 where DC currently look most in control.'
            ],
            players: [
                'Sameer Rizvi (DC): keep anchoring high-pressure chases with tempo control before late acceleration.',
                'Tristan Stubbs (DC): rotate strike earlier versus spin to reduce required-rate spikes in recovery chases.',
                'Abdul Samad (LSG): build on finishing role by extending innings deeper when top order has collapsed.',
                'Rishabh Pant (LSG): as captain, stagger bowling resources more aggressively when early wickets are available.'
            ]
        },
        innings: [
            {
                teamId: 'lsg',
                total: 141,
                wickets: 10,
                overs: '18.4',
                batters: [
                    { name: 'Mitchell Marsh', howOut: 'c Tristan Stubbs b Kuldeep Yadav', runs: 35, balls: 28, fours: 2, sixes: 3, strikeRate: 125.0 },
                    { name: 'Rishabh Pant', howOut: 'run out', runs: 7, balls: 9, fours: 1, sixes: 0, strikeRate: 77.77 },
                    { name: 'Aiden Markram', howOut: 'b Axar Patel', runs: 11, balls: 8, fours: 1, sixes: 1, strikeRate: 137.5 },
                    { name: 'Ayush Badoni', howOut: 'c KL Rahul b T Natarajan', runs: 0, balls: 3, fours: 0, sixes: 0, strikeRate: 0.0 },
                    { name: 'Nicholas Pooran', howOut: 'b Lungi Ngidi', runs: 8, balls: 8, fours: 1, sixes: 0, strikeRate: 100.0 },
                    { name: 'Abdul Samad', howOut: 'c David Miller b T Natarajan', runs: 36, balls: 25, fours: 3, sixes: 1, strikeRate: 144.0 },
                    { name: 'Mukul Choudhary', howOut: 'c & b Kuldeep Yadav', runs: 14, balls: 11, fours: 2, sixes: 0, strikeRate: 127.27 },
                    { name: 'Shahbaz Ahmed', howOut: 'not out', runs: 15, balls: 16, fours: 1, sixes: 0, strikeRate: 93.75 },
                    { name: 'Mohammad Shami', howOut: 'c Kuldeep Yadav b T Natarajan', runs: 1, balls: 2, fours: 0, sixes: 0, strikeRate: 50.0 },
                    { name: 'Anrich Nortje', howOut: 'c Tristan Stubbs b Lungi Ngidi', runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0.0 },
                    { name: 'Mohsin Khan', howOut: 'c Mukesh Kumar b Lungi Ngidi', runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0.0 },
                ],
                extras: '14 (b 4, lb 8, w 2, nb 0)',
                didNotBat: ['Prince Yadav'],
                bowlers: [
                    { name: 'Mukesh Kumar', overs: '3', maidens: 0, runs: 17, wickets: 0, economy: 5.67 },
                    { name: 'Lungi Ngidi', overs: '3.4', maidens: 0, runs: 27, wickets: 3, economy: 7.36 },
                    { name: 'Axar Patel', overs: '3', maidens: 0, runs: 17, wickets: 1, economy: 5.67 },
                    { name: 'T Natarajan', overs: '4', maidens: 0, runs: 29, wickets: 3, economy: 7.25 },
                    { name: 'Kuldeep Yadav', overs: '4', maidens: 0, runs: 31, wickets: 2, economy: 7.75 },
                    { name: 'Vipraj Nigam', overs: '1', maidens: 0, runs: 8, wickets: 0, economy: 8.0 },
                ],
                fallOfWickets: ['19/1 (Rishabh Pant, 2.6 ov)', '48/2 (Aiden Markram, 5.5 ov)', '49/3 (Ayush Badoni, 6.3 ov)', '65/4 (Nicholas Pooran, 8.5 ov)', '71/5 (Mitchell Marsh, 9.3 ov)', '105/6 (Mukul Choudhary, 13.1 ov)', '138/7 (Abdul Samad, 17.3 ov)', '140/8 (Mohammad Shami, 17.6 ov)', '141/9 (Anrich Nortje, 18.3 ov)', '141/10 (Mohsin Khan, 18.4 ov)'],
                powerplayRuns: '48/2 (0.1-6 ov)',
                partnerships: ['19 (Marsh-Pant)', '29 (Marsh-Markram)', '1 (Marsh-Badoni)', '16 (Marsh-Pooran)', '6 (Marsh-Samad)', '34 (Samad-Mukul)', '33 (Samad-Shahbaz)', '2 (Shahbaz-Shami)', '1 (Shahbaz-Nortje)', '1 (Shahbaz-Mohsin)']
            },
            {
                teamId: 'dc',
                total: 145,
                wickets: 4,
                overs: '17.1',
                batters: [
                    { name: 'KL Rahul', howOut: 'c Mohsin Khan b Mohammad Shami', runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0.0 },
                    { name: 'Pathum Nissanka', howOut: 'c Rishabh Pant b Prince Yadav', runs: 1, balls: 5, fours: 0, sixes: 0, strikeRate: 20.0 },
                    { name: 'Nitish Rana', howOut: 'c Abdul Samad b Mohsin Khan', runs: 15, balls: 17, fours: 2, sixes: 1, strikeRate: 88.23 },
                    { name: 'Sameer Rizvi', howOut: 'not out', runs: 70, balls: 47, fours: 5, sixes: 4, strikeRate: 148.93 },
                    { name: 'Axar Patel', howOut: 'b Prince Yadav', runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0.0 },
                    { name: 'Tristan Stubbs', howOut: 'not out', runs: 39, balls: 32, fours: 3, sixes: 1, strikeRate: 121.87 },
                ],
                extras: '20 (b 0, lb 4, w 16, nb 0)',
                didNotBat: ['Vipraj Nigam', 'David Miller', 'Lungi Ngidi', 'Kuldeep Yadav', 'Mukesh Kumar'],
                bowlers: [
                    { name: 'Mohammad Shami', overs: '4', maidens: 0, runs: 28, wickets: 1, economy: 7.0 },
                    { name: 'Prince Yadav', overs: '3', maidens: 0, runs: 20, wickets: 2, economy: 6.67 },
                    { name: 'Mohsin Khan', overs: '4', maidens: 1, runs: 19, wickets: 1, economy: 4.75 },
                    { name: 'Anrich Nortje', overs: '4', maidens: 0, runs: 39, wickets: 0, economy: 9.75 },
                    { name: 'Shahbaz Ahmed', overs: '1', maidens: 0, runs: 16, wickets: 0, economy: 16.0 },
                    { name: 'Aiden Markram', overs: '1', maidens: 0, runs: 13, wickets: 0, economy: 13.0 },
                    { name: 'Abdul Samad', overs: '0.1', maidens: 0, runs: 6, wickets: 0, economy: 36.0 },
                ],
                fallOfWickets: ['0/1 (KL Rahul, 0.1 ov)', '21/2 (Nitish Rana, 3.3 ov)', '25/3 (Pathum Nissanka, 4.2 ov)', '26/4 (Axar Patel, 4.3 ov)'],
                powerplayRuns: '33/4 (0.1-6 ov)',
                partnerships: ['0 (Rahul-Nissanka)', '21 (Nissanka-Rana)', '4 (Nissanka-Rizvi)', '1 (Rizvi-Axar)', '119* (Rizvi-Stubbs)']
            }
        ]
    },
};

const pitchReportsByVenue: Record<string, string> = {
    'Bengaluru': 'Historically a batting paradise with short boundaries. Expect high scores, though spinners can get some grip in the first innings.',
    'Mumbai': 'True bounce and carry. The red soil pitch favors pace early on, but it becomes excellent for stroke-making under lights.',
    'Guwahati': 'A relatively new venue with a balanced surface. Dew can be a major factor in evening games, making chasing preferable.',
    'Mullanpur': 'A fresh pitch that has shown good pace and bounce. Fast bowlers get early assistance, but it settles down nicely for batters.',
    'New Chandigarh': 'A fresh pitch that has shown good pace and bounce. Fast bowlers get early assistance, but it settles down nicely for batters.',
    'Lucknow': 'Known for its slow and gripping surface. Spinners and medium pacers with good variations will be the key here. Par score is usually lower.',
    'Kolkata': 'A good batting surface with a fast outfield. Spinners get some turn, but batters who apply themselves can score heavily.',
    'Chennai': 'Traditionally slow and low, heavily favoring spin. However, recent pitches have been better for batting. Toss is crucial.',
    'Delhi': 'Small boundaries and a flat deck make it a high-scoring ground. Spinners can be effective if they bowl slowly through the air.',
    'Ahmedabad': 'A hybrid pitch that offers something for everyone. It can be two-paced initially but generally plays well for batters later.',
    'Hyderabad': 'A flat track that is excellent for batting. The ball comes onto the bat nicely, and high totals are common.',
    'Jaipur': 'Generally true batting conditions with some grip for spinners as the ball gets older. First-innings acceleration after over 12 is key.',
    'Dharamshala': 'High-altitude venue with carry and swing early on. New-ball bowlers can dominate, but the outfield allows quick boundary scoring.',
    'Raipur': 'A typically even surface where powerplay intent and death-over execution decide outcomes more than extreme pitch behavior.',
};

const venueStatsByCity: Record<string, Match['venueStats']> = {
    Bengaluru: { avgFirstInningsScore: 189, chasingWins: 52, totalMatches: 96, bestBowlingFigure: '6/12', boundaryPercentage: 61 },
    Mumbai: { avgFirstInningsScore: 182, chasingWins: 58, totalMatches: 112, bestBowlingFigure: '5/10', boundaryPercentage: 59 },
    Guwahati: { avgFirstInningsScore: 171, chasingWins: 5, totalMatches: 8, bestBowlingFigure: '5/24', boundaryPercentage: 54 },
    'New Chandigarh': { avgFirstInningsScore: 176, chasingWins: 8, totalMatches: 13, bestBowlingFigure: '5/16', boundaryPercentage: 52 },
    Lucknow: { avgFirstInningsScore: 167, chasingWins: 10, totalMatches: 19, bestBowlingFigure: '5/14', boundaryPercentage: 48 },
    Kolkata: { avgFirstInningsScore: 184, chasingWins: 51, totalMatches: 93, bestBowlingFigure: '5/15', boundaryPercentage: 57 },
    Chennai: { avgFirstInningsScore: 165, chasingWins: 46, totalMatches: 89, bestBowlingFigure: '5/5', boundaryPercentage: 50 },
    Delhi: { avgFirstInningsScore: 177, chasingWins: 44, totalMatches: 89, bestBowlingFigure: '5/17', boundaryPercentage: 56 },
    Ahmedabad: { avgFirstInningsScore: 181, chasingWins: 20, totalMatches: 34, bestBowlingFigure: '5/10', boundaryPercentage: 55 },
    Hyderabad: { avgFirstInningsScore: 184, chasingWins: 44, totalMatches: 79, bestBowlingFigure: '6/17', boundaryPercentage: 58 },
    Jaipur: { avgFirstInningsScore: 173, chasingWins: 29, totalMatches: 58, bestBowlingFigure: '6/14', boundaryPercentage: 53 },
    Dharamshala: { avgFirstInningsScore: 178, chasingWins: 9, totalMatches: 15, bestBowlingFigure: '6/19', boundaryPercentage: 54 },
    Raipur: { avgFirstInningsScore: 174, chasingWins: 4, totalMatches: 7, bestBowlingFigure: '5/13', boundaryPercentage: 52 },
};

const buildFallbackInsight = (seed: MatchSeed): Omit<Match, 'id' | 'matchNumber' | 'date' | 'dateLabel' | 'day' | 'team1' | 'team2' | 'venueCity' | 'stadium' | 'captain1' | 'captain2' | 'pitchReport' | 'status'> => {
    const team1 = teams.find((team) => team.id === seed.team1);
    const team2 = teams.find((team) => team.id === seed.team2);
    const venueStats = venueStatsByCity[seed.venueCity] || { avgFirstInningsScore: 175, chasingWins: 12, totalMatches: 24, bestBowlingFigure: '5/20', boundaryPercentage: 53 };
    const team1Wins = 10 + (seed.matchNumber % 6);
    const team2Wins = 10 + ((seed.matchNumber + 3) % 6);

    return {
        headline: `${team1?.shortName ?? seed.team1.toUpperCase()} vs ${team2?.shortName ?? seed.team2.toUpperCase()} at ${seed.venueCity}: matchup trends, form, and tactical plans.`,
        venueStats,
        headToHead: {
            team1Wins,
            team2Wins,
            noResult: seed.matchNumber % 3 === 0 ? 1 : 0,
            last5: 'Recent meetings have been closely contested with momentum shifting across phases.',
        },
        playerBattles: [
            { batter: team1?.players[0]?.name || 'Top-order batter', bowler: team2?.players[20]?.name || 'Lead pacer', runs: 41, balls: 29, dismissals: 2, note: 'New-ball matchup can set the powerplay tone.' },
            { batter: team2?.players[4]?.name || 'Anchor batter', bowler: team1?.players[17]?.name || 'Middle-overs bowler', runs: 33, balls: 24, dismissals: 1, note: 'Middle overs control could decide chase pressure.' },
            { batter: team1?.players[6]?.name || 'Finisher', bowler: team2?.players[24]?.name || 'Death specialist', runs: 28, balls: 17, dismissals: 2, note: 'Death-over execution remains the key tactical swing.' },
        ],
        interestingStats: [
            `${team1?.shortName ?? 'Team 1'} average boundary frequency in this venue profile: roughly every 5-6 balls in successful chases.`,
            `${team2?.shortName ?? 'Team 2'} generally improves win probability when taking at least 2 wickets inside the first 6 overs.`,
            `Venue trend: teams scoring 50+ in the powerplay have historically converted to wins at a stronger rate here.`,
        ],
    };
};

export const schedule: Match[] = matchSeeds.map((seed) => {
    const insightKey = `${seed.team1}-${seed.team2}`;
    const insight = matchInsights[insightKey] || buildFallbackInsight(seed);

    return {
        id: `m${seed.matchNumber}`,
        ...seed,
        captain1: captainByTeam[seed.team1],
        captain2: captainByTeam[seed.team2],
        status: seed.status || 'upcoming',
        ...insight,
        pitchReport: pitchReportsByVenue[seed.venueCity] || 'A balanced surface expected to provide an even contest between bat and ball.',
        completedDetails: completedMatchDetailsById[`m${seed.matchNumber}`],
    };
});

const oversToBalls = (overs: string): number => {
    const [whole, part] = overs.split('.').map(Number);
    return (whole || 0) * 6 + (part || 0);
};

const computePointsTable = (matches: Match[]): PointsTableEntry[] => {
    const table = new Map<string, {
        played: number;
        won: number;
        lost: number;
        tied: number;
        points: number;
        runsFor: number;
        ballsFaced: number;
        runsAgainst: number;
        ballsBowled: number;
        form: ('W' | 'L')[];
    }>();

    teams.forEach((team) => {
        table.set(team.id, {
            played: 0,
            won: 0,
            lost: 0,
            tied: 0,
            points: 0,
            runsFor: 0,
            ballsFaced: 0,
            runsAgainst: 0,
            ballsBowled: 0,
            form: [],
        });
    });

    matches.forEach((match) => {
        if (match.status !== 'completed' || !match.completedDetails) return;

        const [firstInnings, secondInnings] = match.completedDetails.innings;
        const team1 = table.get(match.team1);
        const team2 = table.get(match.team2);
        if (!team1 || !team2) return;

        const team1Innings = firstInnings.teamId === match.team1 ? firstInnings : secondInnings;
        const team2Innings = team1Innings === firstInnings ? secondInnings : firstInnings;

        const team1FacedBalls = team1Innings.wickets === 10 && oversToBalls(team1Innings.overs) < 120 ? 120 : oversToBalls(team1Innings.overs);
        const team2FacedBalls = team2Innings.wickets === 10 && oversToBalls(team2Innings.overs) < 120 ? 120 : oversToBalls(team2Innings.overs);

        team1.runsFor += team1Innings.total;
        team1.ballsFaced += team1FacedBalls;
        team1.runsAgainst += team2Innings.total;
        team1.ballsBowled += team2FacedBalls;
        team1.played += 1;

        team2.runsFor += team2Innings.total;
        team2.ballsFaced += team2FacedBalls;
        team2.runsAgainst += team1Innings.total;
        team2.ballsBowled += team1FacedBalls;
        team2.played += 1;

        if (team1Innings.total > team2Innings.total) {
            team1.won += 1;
            team1.points += 2;
            team1.form.unshift('W');
            team2.lost += 1;
            team2.form.unshift('L');
        } else if (team1Innings.total < team2Innings.total) {
            team2.won += 1;
            team2.points += 2;
            team2.form.unshift('W');
            team1.lost += 1;
            team1.form.unshift('L');
        } else {
            team1.tied += 1;
            team2.tied += 1;
            team1.points += 1;
            team2.points += 1;
        }
    });

    return teams.map((team) => {
        const row = table.get(team.id)!;
        const runRateFor = row.ballsFaced > 0 ? (row.runsFor * 6) / row.ballsFaced : 0;
        const runRateAgainst = row.ballsBowled > 0 ? (row.runsAgainst * 6) / row.ballsBowled : 0;

        return {
            teamId: team.id,
            played: row.played,
            won: row.won,
            lost: row.lost,
            tied: row.tied,
            nrr: Number((runRateFor - runRateAgainst).toFixed(3)),
            points: row.points,
            form: row.form.slice(0, 5),
        };
    }).sort((a, b) =>
        b.points - a.points
        || b.nrr - a.nrr
        || b.won - a.won
        || a.teamId.localeCompare(b.teamId)
    );
};

export const pointsTable: PointsTableEntry[] = computePointsTable(schedule);
