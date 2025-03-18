import "./footer.module.css";

const Footer = (props) => {
  return (
    <footer>
        <p>
            Feito com ❤️ por Eloá franco <a href={props.DEVLink} target="_blank">{props.DEVName}</a>
        </p>
    </footer>
   
  )
}

export default Footer
