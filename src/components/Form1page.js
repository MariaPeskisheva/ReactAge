import '../styles/form1page.css'
import React,{useState} from "react"

function Username() {
    const [firstName, setFirstName]=useState('')
    const[error,setError]=useState(false)

    const handleSubmit=(e)=> {
      e.preventDefault();
      if (firstName.length ==0)
        setError(true)
      }
      if (firstName)
      {
        console.log("First Name: ",firstName)
      }

    return (
      <>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="First Name" onChange={e=>setFirstName(e.target.value)} />
        </div>
        {error&&firstName.length<=0?
        <label>First Name can't be Empty</label>:""
        }
      </form>
      </>
    );
  }
  

export default Username