import './Portfolio.css';
import furniture from './../../Assets/furniture.png'
import Kobri from './../../Assets/kobri.png'
import elis from "./../../Assets/elis-regina.png"
import portimage from "./../../Assets/portfolio.png";
import zuri from "../../Assets/zuri.png"
import reasons from "../../Assets/28-reasons-why.png"


const data = [
  {
    id: 1,
    image: Kobri,
    title: "Kobri",
    github: "https://github.com/dabsmanuel/jari",
    demo: "https://jari-iota.vercel.app",
  },

  {
    id: 2,
    image: reasons,
    title: "28 reasons why",
    github: "https://github.com/dabsmanuel/28-reasons-why-react-app",
    demo: "https://for-sharon.netlify.app",
  },

  {
    id: 3,
    image: zuri,
    title: "A zuri frontend project",
    github: "https://github.com/Barnyvic/Zuri-frontend",
    demo: "https://zuri-frontend.vercel.app",
  },
  {
    id: 4,
    image: portimage,
    title: "My Portfolio",
    github: "https://github.com/dabsmanuel/my-portfolio",
    demo: "https://dabsmanuel.netlify.app",
  },
  {
    id: 5,
    image: furniture,
    title: "A furniture Website from Figma",
    github: "https://github.com/dabsmanuel/furniture-web",
    demo: "https://furnishop-web.netlify.app",
  },
  {
    id: 6,
    image: elis,
    title: "Tribute Page To Elis Regina",
    github: "https://github.com/dabsmanuel/tribute-react",
    demo: "https://elis-regina.netlify.app",
  },
];

export default data;