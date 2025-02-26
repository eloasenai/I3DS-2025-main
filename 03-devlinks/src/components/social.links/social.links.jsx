import styles from "./social.links.module.css";

const socialLinks = ({Link, icon}) => {
  return (
    <a href={Link}>
      <ion-icon name={icon}></ion-icon>
      </a>
  )
}

export default socialLinks
