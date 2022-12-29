import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, toggleShowAddTask, showAdd }) => {
  return (
    <div>
      <header className='header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'black':  'green'} text={showAdd ? 'Close':  'Add'} onClick={toggleShowAddTask} />
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
