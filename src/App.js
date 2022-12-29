
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
   // DATA/STATE:
  const [ tasks, setTasks ] = useState([])
  const [showAddTask, setShowAddTask ] = useState(false)

 // METHODS: 
    // Get data from API:
useEffect(() => {
  const getTasks = async () => {
    const tasksFromSever = await fetchTasks()
    setTasks(tasksFromSever)
  }
  getTasks()
}, [] // dependency array
)

// fetch data from API
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5002/tasks'),
        data = await res.json()

        // console.log('data', data)
        return data
}

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
 