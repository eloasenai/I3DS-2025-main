import "./footer.css";

const Footer = (props) => {
  return (
    <footer>
        <p>
            Feito com ❤️ por <a href={props.DEVLink} target="_blank">{props.DEVName}</a>
        </p>
    </footer>
   
  )
}

export default Footer