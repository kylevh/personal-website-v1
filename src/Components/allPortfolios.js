import port1 from '../img/portImages/maya-1.jpg';
import port2 from '../img/portImages/port1.jpg';
import port3 from '../img/portImages/port2.jpg';
import port4 from '../img/portImages/port3.jpg';
import port6 from '../img/portImages/port5.jpg';
import port7 from '../img/portImages/port6.jpg';
import corpseboundIMG from '../img/portImages/portfolio1.png';
import pokepokeIMG from '../img/portImages/portfolio2.png';
import simplytasks from '../img/portImages/portfolio3.png';
import Courseeval from '../img/portImages/portfolio4.png';
import portfoliwebsite from '../img/portImages/portfolio5.png';

const portfolios = [
    {
        id: 1,
        category: 'Animation',
        link1: 'github.com/kylevh/CorpseBound',
        link2: 'kylevh.itch.io/corpsebound',
        icon1: 'G',
        icon2: 'Y',
        image: corpseboundIMG,
        title: 'CorpseBound - 2D Video Game',
        desc: 'This is the description stuff ya know'
    },
    {
        id: 2,
        category: 'Python',
        link2: 'ozp-games.itch.io/pokepoke',
        icon2: 'G',
        image: pokepokeIMG,
        title: 'PokePoke - 2D Video Game',
        desc: 'Find out which poke flavor is best in this local multi-player fighting game!'
    },
    {
        id: 3,
        category: 'Animation',
        link2: 'simplytasks.herokuapp.com',
        icon2: 'Y',
        image: simplytasks,
        title: 'SimplyTasks',
        desc: `A simple website for your simple tasks`
    },
    {
        id: 4,
        category: 'Javascript',
        link1: 'github.com/bailey-marie-schuler/UWB-Spring-2021-Hackathon',
        link2: 'devpost.com/software/university-of-washington-course-evaluation-catalog',
        icon1: 'G',
        icon2: 'Y',
        image: Courseeval,
        title: 'Course Evaluation Catalog',
        desc: 'A catalog for students to easily access previous evaluations of any college course'
    },
    {
        id: 5,
        category: 'React Js',
        link1: 'github.com/kylevh/personal-website-v1',
        icon1: 'G',
        image: portfoliwebsite,
        title: 'Personal Website',
        desc: 'Created using React.js and SASS'
    },
    {
        id: 6,
        category: 'React Js',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port7,
        title: 'Vanilla Javascript Website'
    },
    {
        id: 7,
        category: 'Web',
        link1: 'www.youtube.com',
        link2: 'www.github.com',
        icon1: 'G',
        icon2: 'Y',
        image: port4,
        title: 'Vanilla Javascript Website'
    }
]

export default portfolios;