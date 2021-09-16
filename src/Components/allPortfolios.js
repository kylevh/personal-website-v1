import corpseboundIMG from '../img/portImages/portfolio1.png';
import pokepokeIMG from '../img/portImages/portfolio2.png';
import simplytasks from '../img/portImages/portfolio3.png';
import Courseeval from '../img/portImages/portfolio4.png';
import portfoliwebsite from '../img/portImages/portfolio5.png';
import blog1 from '../img/blogs/blog1.png';
import penguin from '../img/blogs/penguin.png';

const portfolios = [
    {
        id: 3,
        category: 'Node.js',
        link2: 'simplytasks.herokuapp.com',
        icon2: 'Y',
        image: simplytasks,
        title: 'SimplyTasks',
        desc: `A web app that helps manage your tasks utilizing MongoDB for storing data and user authentication`,
        categories: ['Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'Bootstrap']
    },
    {
        
        id: 2,
        category: 'Unity',
        link2: 'ozp-games.itch.io/pokepoke',
        icon2: 'G',
        image: pokepokeIMG,
        title: 'PokePoke - 2D Video Game',
        desc: 'A local multiplayer fighting game created with C# and Unity Game Engine',
        categories: ['Unity', 'C#', '2D Graphics']
    },
    {
        id: 5,
        category: 'React.js',
        link1: 'github.com/kylevh/personal-website-v1',
        icon1: 'G',
        image: portfoliwebsite,
        title: 'Personal Website',
        desc: 'My personal website built using React.js',
        categories: ['React.js', 'SCSS', 'HTML', 'JavaScript']
    },
    {
        id: 4,
        category: 'JavaScript',
        link1: 'github.com/bailey-marie-schuler/UWB-Spring-2021-Hackathon',
        link2: 'devpost.com/software/university-of-washington-course-evaluation-catalog',
        icon1: 'G',
        icon2: 'Y',
        image: Courseeval,
        title: 'Course Evaluation Catalog',
        desc: 'A catalog for students to easily access previous evaluations of any college course',
        categories: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 1,
        category: 'Unity',
        link1: 'github.com/kylevh/CorpseBound',
        link2: 'kylevh.itch.io/corpsebound',
        icon1: 'G',
        icon2: 'Y',
        image: corpseboundIMG,
        title: 'CorpseBound - 2D Video Game',
        desc: 'A 2D video game created for the UW Game Dev Fall Game Jam using C# and Unity',
        categories: ['Unity', 'C#', '2D Graphics']
    },
    {
        id: 6,
        category: 'Python',
        link1: 'github.com/kylevh/imsg-autorespond',
        icon1: 'G',
        image: blog1,
        title: 'iMessage Autoresponder',
        desc: `A script that will automatically read and respond to text messages for when you're away`,
        categories: ['Python', 'AppleScript']
    },
    {
        id: 7,
        category: 'Unity',
        link2: 'kylevh.itch.io/penguin-wars',
        icon2: 'Y',
        image: penguin,
        title: 'Penguin Wars - 3D Strategy Game',
        desc: `A 3D Turn-based strategy game developed for the UW Tri-Campus Game Jam 2021`,
        categories: ['Unity', 'C#', '3D']
    }
]

export default portfolios;