

    import React from "react";
    import "./CreateTask.css";
    
    export const CreateTask = () => {
      return (
      
        <form className="taskcontainer">
        <div className="taskheader"> <h1>New Task</h1></div>
         
        <div className="taskform">
        
        

        <div className="taskFirst-Half">

        
        <div>
            <label className="task">Task Id</label>
           
        <input className="tasktext" placeholder="enter task id" type="text"/>
        </div>
        <br/>
          <div>
          <label className="task">Task Created By</label>
           
          <input className="tasktext" placeholder="enter created id" type="text"/>
           </div>
           <br/>
           <div>
            <label className="task">Task Actual Start Date</label>
            
        <input className="tasktext" placeholder="enter actual start date" type="text"/>
        </div>
        <br/>
            <div>
               <label className="task">Task Comments</label>
           
             <input className="tasktext" placeholder="enter comments" type="text"/>
                   </div>
                   <br/>
                   <button className="taskbutton"> Create </button>
                 

    
                     
                      </div>
                      <div className="taskSecond-Half"> 
                     
                      <div>
            <label className="task">Task Name</label>
            
        <input className="tasktext" placeholder="enter task name" type="text"/>
        </div>
        <br/>
          <div>
          <label className="task">Assigned To</label>
           
          <input className="tasktext" placeholder="enter assigned to" type="text"/>
           </div>
           <br/>
           <div>
            <label className="task">Task Actual End Date</label>
            
        <input className="tasktext" placeholder="enter actual end date" type="text"/>
        </div>
             <br/>
            <div>
               <label className="task">Task Status</label>
           
           <select className="tasktext" name="active" id="active">
           <option value="None">None</option>
             <option value="yes">Yes</option>
               <option value="no">No</option>
             </select>
                   </div>

                      </div>
                     
             </div>

             
             </form>

      );
    };
  
export default CreateTask;