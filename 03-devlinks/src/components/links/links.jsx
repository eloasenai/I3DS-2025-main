import styles from "./links.module.css";

const links = ({children}) => {
  return (
    <li>
      <a href="https://google.com">{children}</a>
    </li>
  )
}

export default links
