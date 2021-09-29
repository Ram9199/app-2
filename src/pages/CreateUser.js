import React from "react";
import "./CreateUser.css";

export const CreateUser = () => {
  return (
    
    <div>
    <div className="userheader"> <h1>New User</h1></div>
     
    <div className="userform">
    
    

    <div className="userFirst-Half">

    
    <div>
        <label className="user">User Id</label>
       
    <input className="usertext" placeholder="enter task id" type="text"/>
    </div>
    <br/>
      <div>
      <label className="user">Email Id</label>
       
      <input className="usertext" placeholder="enter email id" type="text"/>
       </div>
       <br/>
       <div>
        <label className="user">Select Role</label>
        
        <select className="usertext" name="Role" id="role">
        <option value="None">None</option>
         <option value="Admin">Admin</option>
           <option value="Manager">Manager</option>
           <option value="TeamMember">TeamMember</option>
         </select>
    </div>
    <br/>
        
               
               <button className="userbutton"> Create </button>
             


                 
                  </div>
                  <div className="userSecond-Half"> 
                 
                  <div>
        <label className="user">User Name</label>
        
    <input className="usertext" placeholder="enter User name" type="text"/>
    </div>
    <br/>
      <div>
      <label className="user">Password</label>
       
      <input className="usertext" placeholder="enter password" type="password"/>
       </div>
       <br/>
       
        <div>
           <label className="user">User Status</label>
       
       <select className="usertext" name="active" id="active">
       <option value="None">None</option>
         <option value="yes">Yes</option>
           <option value="no">No</option>
         </select>
               </div>

                  </div>
            


                 
         </div>

         
         </div>
  );
};
  
export const ServicesOne = () => {
  return (
    <div className="services">
      <h1>GeeksforGeeks Service1</h1>
    </div>
  );
};
  
export const ServicesTwo = () => {
  return (
    <div className="services">
      <h1>GeeksforGeeks Service2</h1>
    </div>
  );
};
  
export const ServicesThree = () => {
  return (
    <div className="services">
      <h1>GeeksforGeeks Service3</h1>
    </div>
  );
};


