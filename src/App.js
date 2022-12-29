
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [ tasks, setTasks ] = useState([
    {
        id: 1,
        text: `Doctor's Appointment`,
        day: `Feb 5th at 2:30pm`,
        reminder: true
    },
    {
        id: 2,
        text: `School Meet`,
        day: `Feb 6th at 3:30pm`,
        reminder: true
    },
    {
        id: 3,
        text: `Grocery Shopping`,
        day: `Feb 5th at 3:30pm`,
        reminder: true
    },  
    {
        id: 4,
        text: `Date with Jasmine`,
        day: `Feb 7th at 7:30pm`,
        reminder: true
    },
    {
        id: 5,
        text: `Find a will to live`,
        day: `Feb 8th at 1:10am`,
        reminder: true
    }
  ])

  // Delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title="Task Trakah" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'There are no tasks to show. Add one to get started!'}
    </div>
  );
} 

export default App;
 