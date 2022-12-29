
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

const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5002/tasks/${id}`),
        data = await res.json()
        // console.log('data', data)
        return data
}

    // Delete
  const deleteTask = async (id) => {
      // API:
    await fetch(`http://localhost:5002/tasks/${id}`, { method: 'DELETE'})
      // UI
    setTasks(tasks.filter((task) => task.id !== id))
  }
    // Toggle Reminder
  const toggleReminder = async (id) => {
    // console.log('toggling', id)
    const target_task = await fetchTask(id),
          updateTask = {...target_task, reminder: !target_task.reminder}
    
    const res = await fetch(`http://localhost:5002/tasks/${id}`, {
      method: 'PUT',
      headers: {
          'Content-type': 'application/json'
      },
        body: JSON.stringify(updateTask)
      })
      const data = await res.json()
       
      // UI
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

    // AddNew
  const addTask = async (task) => {
    // console.log('adding', task)
    const res = await fetch('http://localhost:5002/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
      // UI
    // const id = Math.floor(Math.random() * 1000) + 1, newTask = {...task, id}
    // setTasks([...tasks, newTask])
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
 