import './Portfolio.css';
import furniture from './../../Assets/furniture.png'
import equipafrica from './../../Assets/equipafrica.png'
import suites from "./../../Assets/suite.png";
import elis from "./../../Assets/elis-regina.png"
import portimage from "./../../Assets/portfolio.png";
import EquipList from '../../Assets/Screenshot_8.png'


const data = [
  {
    id: 1,
    image: portimage,
    title: "My Portfolio",
    github: "https://github.com/dabsmanuel/official_portfolio",
    demo: "https://dabsmanuel.netlify.app",
  },
  {
    id: 2,
    image: equipafrica,
    title: "Equip Africa",
    github: "https://github.com/barnyvic/equipAfrica",
    demo: "https://equip-africa.vercel.app",
  },
  {
    id: 3,
    image: suites,
    title: "Suites Hotel Design from Figma",
    github: "https://github.com/dabsmanuel/hotel-suites-react-app",
    demo: "https://suiteshotel.netlify.app",
  },
  {
    id: 4,
    image: furniture,
    title: "A furniture Website from Figma",
    github: "https://github.com/dabsmanuel/furniture-web",
    demo: "https://furnishop-web.netlify.app",
  },
  {
    id: 5,
    image: elis,
    title: "Tribute Page To Elis Regina",
    github: "https://github.com/dabsmanuel/tribute-react",
    demo: "https://elis-regina.netlify.app",
  },
  {
    id: 6,
    image: EquipList,
    title: "Equip Africa Waitlist",
    github: "https://github.com/dabsmanuel/EquipAfrica-wait-list",
    demo: "https://equipafrica-waitlist.netlify.app/",
  },
];

export default data;