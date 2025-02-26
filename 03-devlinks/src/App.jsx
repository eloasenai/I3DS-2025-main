import "./App.css";
import fotolight from "./img/perfil light.jpg"
import fotodark from "./img/perfil dark.jpg";


import Perfil from "./components/perfil/perfil";
import Switch from "./components/switch/Switch";
import Links from "./components/links/links";
import SocialLinks from "./components/social.links/social.links";
import Rodape from "./components/rodape/rodape";
import {useState} from "react";

const App = () => {
const [isLight, setIsLight] = useState(true);

const troca = () => {
  setIsLight((anterior) => !anterior);
};

  return (
    <div id="App" className={isLight ? "light" : ""}>     
        <Perfil fotoPerfil={fotolight}>@eloaSilva</Perfil>

        <div id="App" className={isDark ? "dark" : ""}>    
        <Perfil fotoPerfil={fotodark}>@eloaSilva</Perfil>

        
        <Switch troca={troca} isLight={isLight} />
        
        <ul>
      <Links Link={"https://github.com/"}>GitHub</Links>
      <Links Link={"https://www.instagram.com/"}>Instagram</Links>
      <Links Link={"https://www.youtube.com/"}>Youtube</Links>
      <Links Link={"https://www.linkedin.com/feed/"}>Linkedin</Links>
        </ul> 

        <div id="socialLinks">
          <SocialLinks 
          Link={"https://github.com/"}
          icon={"logo-github"}
          />
          <SocialLinks
          Link={"https://www.instagram.com/"}
          icon={"logo-instagram"}
          />
          <SocialLinks
          Link={"https://www.youtube.com/"}
          icon={"logo-youtube"}
          />
          <SocialLinks
          Link={"https://www.linkedin.com/feed/"}
          icon={"logo-linkedin"}
          />
        </div>
        <Rodape>eloaSilva</Rodape>
    </div>
  );
};

export default App;
