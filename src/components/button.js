import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = ({color, text, onClick },{formstate: errors,isValid}) => {

  return (
    <button onClick={onClick} style= {{ backgroundColor:color}} 
    className='btn'> {text}
     <Link to="/counter">Proceed</Link>
    </button>
  )
}

Button.defaultProps = {
    color:'steelgrey'
}

Button.propTypes = {
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}
export default Button