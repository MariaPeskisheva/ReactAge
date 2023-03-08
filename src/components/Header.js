import PropsTypes from 'prop-types'
import Button from './button'
import DatePick from './DatePick'
import Username from './Form1page'

const Header = ({title}) => {
  const onClick=() => {
    console.log('Click')
  }

  return (
    <header className ='header'>
        <h1>{title}</h1>
        <Username/>
        <DatePick/>
        <Button  color ='grey' onClick={ onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Enter your First Name',
}

Header.propTypes ={
    title: PropsTypes.string.isRequired,
}
export default Header