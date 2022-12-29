
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
   // DATA/STATE:
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
        reminder: false
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
        reminder: false
    },
    {
        id: 5,
        text: `Find a will to live`,
        day: `Feb 8th at 1:10am`,
        reminder: false
    }
  ])
  const [showAddTask, setShowAddTask ] = useState(false)

 // METHODS: 
    // Delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
    // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log('toggling', id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

    // AddNew
  const addTask = (task) => {
    // console.log('adding', task)
    const id = Math.floor(Math.random() * 1000) + 1, newTask = {...task, id}
    setTasks([...tasks, newTask])
  }

// TEMPLATE: 
  return (
    <div className="container">
      <Header title="Task Trakah" toggleShowAddTask={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { // Shorthand for ternary:
        showAddTask && <AddTask onAdd={addTask} />
      }
      { tasks.length > 0 ? 
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}  /> : 
          'There are no tasks to show. Add one to get started!'
      }
    </div>
  );
} 

export default App;
 