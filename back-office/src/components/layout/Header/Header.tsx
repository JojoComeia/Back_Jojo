import styles from "./Header.module.css"

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Sistema Admin</h1>
      </div>
    </header>
  )
}

export default Header
