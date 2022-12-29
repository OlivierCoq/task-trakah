
import {useState} from 'react'

const AddTask = ({onAdd}) => {

    // METHODS: 
    const [text, setText] = useState(''),
          [day, setDay] = useState(''),
          [reminder, setReminder] = useState(false),

     onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add task')
            return
        }

            // prop method:
        onAdd({ text, day, reminder })

        // Clear everything out
        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Task Name" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
            <label>Add Day and Time</label>
            <input type="text" placeholder="Day + Time" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label>Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block"  />
    </form>
  )
}

export default AddTask
