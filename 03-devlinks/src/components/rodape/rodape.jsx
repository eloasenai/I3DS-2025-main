
import style from "./rodape.module.css";

const Rodape = ({children}) => {
  return (
    <footer>
        <a>
            Feito com 💕por <a href='https://github.com'>{children}</a>
        </a>
    </footer>
  )
}

export default Rodape;
