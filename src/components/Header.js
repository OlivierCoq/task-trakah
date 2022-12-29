import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, toggleShowAddTask, showAdd }) => {
  const location = useLocation()
  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
        {
          location.pathname === '/' && <Button color={showAdd ? 'black':  'green'} text={showAdd ? 'Close':  'Add'} onClick={toggleShowAddTask} />
        }
      </header>
    </div>
  )
}
 
Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string 
}

//CSS 
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
