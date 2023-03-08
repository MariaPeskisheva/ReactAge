import styles from "../styles/userlist.css"
import UserTable from "../components/Usertable.js"

const Userlist = () => {
  return (
    <div className={styles.userlist}>
      <h1>Ages</h1>
      <UserTable/>
    </div>
  )
}


export default Userlist