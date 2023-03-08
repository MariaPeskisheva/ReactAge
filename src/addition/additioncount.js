export const isDateValid = (dateString) => {
    if (!dateString) return false
    
    const currTime = getCurrDate()
    if (dateString <= currTime) {
      return true
    }
    else {
      return false
    }
  }
  
  export const getCurrDate = () => {
    const currTime = new Date(Date.now())
    let year = currTime.getFullYear().toString()
    let month = "0" + (currTime.getMonth() + 1)
    let date = "0" + currTime.getDate()
  
    return `${year}-${month.substring(month.length - 2)}-${date.substring(date.length - 2)}`
  }
  
  export const getYears = (dob) => {
    console.log(dob)
    
    const formattedDob = new Date(dob)
    console.log(formattedDob)
    
    const dobYear = formattedDob.getFullYear()
    console.log(dobYear)
    
    const currTime = new Date(Date.now())
    const currYear = currTime.getFullYear()
  
    return (currYear - dobYear)
  }
  
  export const getRest = (dob) => {
    const currTime = new Date(Date.now())
    const currYear = currTime.getFullYear()
    
    let thisYearDob = new Date(dob)
    thisYearDob.setFullYear(currYear)
    
    let nextYearDob = new Date(dob)
    nextYearDob.setFullYear(currYear + 1)
  
    return Math.floor((currTime - thisYearDob) / (nextYearDob - thisYearDob) * 10**8)
  }