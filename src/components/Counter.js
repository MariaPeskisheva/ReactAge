import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getYears, getRest } from "../addition/additioncount"
import styles from "../styles/Counter.module.css"
import { useState, useEffect } from "react"



const Counter = () => {
    const { dob } = useParams()
    const initialRest = getRest(dob)
    const [rest, setRest] = useState(initialRest)

    
  useEffect(() => {
    setTimeout(() => {
      setRest(getRest(dob))
    }, 1000)
   }, [dob, rest])
  

    return  (
      <div className="age">
            <h1>  Your Age </h1>
        <div className={styles.body}>
           <div className={styles.counter}>
           <span className={styles.year}>
             { getYears(dob) }
           </span>
           <span className={styles.rest}>
             {" . "}
             { rest }
           </span>
           <Link to ="/userlist"> <h5>List of Ages </h5></Link>
            </div>
        </div>
      </div>
        
    )
    }

export default Counter