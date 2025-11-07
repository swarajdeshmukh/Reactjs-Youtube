import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('')
  const [discription, setDiscription] = useState('')
  const [task, setTask] = useState([])

  

  const submitHandler = (e) =>{
    e.preventDefault();

    const copyTask = [...task];
    
    copyTask.push({title, discription})
    setTask(copyTask)

    console.log(task)

    console.log("submited...")
    setTitle('')
    setDiscription('')
  }

  const deletTask = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask);
  }


  return (
    <div className="main">
      <div className="left">
        <div>
          <h1>Add Task</h1>
        </div>
        
        <div className="form-div">
          <form onSubmit={(e)=>{
              submitHandler(e)
          }}
          >
            <input 
            type="text" 
            placeholder="Enter Task Title"
            value={title}
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
            />
            <textarea 
            rows={3}
            placeholder="Enter Task details"
            value={discription}
            onChange={(e)=>{
              setDiscription(e.target.value)
            }}
            ></textarea>
            <button>Add Task</button>
          </form>
        </div>


      </div>

      <div className="right">
        <div className="right-heading">
          <h1>📝Your Recent Task</h1>
        </div>
  
          <div className="task-div">

            {task.map((elem, idx)=>{
              return <div key={idx} className="task">
                <h3>🎯{elem.title}</h3>
                <p>{elem.discription}</p>

                <button onClick={() =>{
                  deletTask(idx)
                }}>🗑️ Delete</button>

              </div>
            })}
            
            
          </div>

          
       

      </div>
    </div>
  );
};

export default App;
