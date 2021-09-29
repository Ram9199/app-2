import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

class Completedtable extends React.Component {
    componentDidMount() {
      //initialize datatable
      $(document).ready(function () {
        $("#example").DataTable();
      });
    }
    render() {
      //Datatable HTML
      return (
        <div className="Main">
          <div class="jumbo text-center bg-sky">
            <h3>Completed Tasks</h3>
          </div>
  
          <div className="conner">
            <table id="example" class="display">
              <thead>
                <tr>
                  <th>Task Id</th>
                  <th>Task Description</th>
                  <th>Assigned BY</th>
                  <th>Actual Date</th>
                  <th>Completion date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>update the backend</td>
                  <td>Roopa</td>
                  <td>2021/09/17</td>
                  <td>2021/10/27</td>
                  <td>ongoing</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>work on navistr new requirement</td>
                  <td>Ravi</td>
                  <td>2021/06/12</td>
                  <td>2021/10/27</td>
                  <td>ongoing</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>create a database for c wind </td>
                  <td>Sreekanth</td>
                  <td>2021/08/27</td>
                  <td>2021/09/2</td>
                  <td>ongoing</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>work on customer requirements</td>
                  <td>Roopa</td>
                  <td>2021/07/2</td>
                  <td>2021/12/7</td>
                  <td>ongoing</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>update the Template</td>
                  <td>Ravi</td>
                  <td>2021/08/27</td>
                  <td>2022/02/21</td>
                  <td>ongoing</td>
                </tr>
               
                  
              </tbody>
              {/* <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </tfoot> */}
            </table>
          </div>
        </div>
      );
    }
  }
  export default Completedtable;
