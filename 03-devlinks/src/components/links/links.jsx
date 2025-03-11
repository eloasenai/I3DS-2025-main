import styles from "./links.module.css";

const links = ({children, link}) => {
  return (
    <li>
      <a href={link}>{children}</a>
    </li>
  )
}

export default links
