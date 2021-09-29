import React from "react";
import { Button, Form, Segment } from 'semantic-ui-react'
import Box from '@mui/material/Box';
import "./CreateRole.css";

const CreateRole = () => {
  return (
      <div>
    <div className="roleheader">
       <h1>Create Role</h1>
       
         </div>
        <div className="roleform">

          <div className="roleset">
            <div>
    <label className="role">Role Id</label>
   <br/>
<input className="roletext" placeholder="enter task id" type="text"/>
</div>

  <div>
  <label className="role">Task Created By</label>
   <br/>
  <input className="roletext" placeholder="enter created id" type="text"/>
   </div>
 </div>
   <button className="rolebutton"> Create </button>
   </div>
          
         
           
           
</div>
  );
};
  
export default CreateRole;


// import React from 'react'

// const FormExampleInverted = () => (
  
// )
// export default FormExampleInverted

// <Segment inverted>
//     <Form inverted>
//       <Form.Group widths='equal'>
//         <Form.Input fluid label='Role Id' placeholder='enter role id' />
//         <Form.Input fluid label='Role Name' placeholder='enter role name' />
       
//       </Form.Group>
//       {/* <Form.Checkbox label='I agree to the Terms and Conditions' /> */}
//       <Button type='submit'>Create Role</Button>
//     </Form>
//   </Segment>