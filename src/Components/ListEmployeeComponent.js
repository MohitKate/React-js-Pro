import React, { Component } from 'react'
import EmployeeService from '../Service/EmployeeService'

export default class ListEmployeeComponent extends Component {


     constructor(props) {
         super(props)
     
         this.state = {
              employees:[]
         }
     }
     


     

     componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
          });
     }


     editEmployee(id) {
      this.props.history.push(`/add-employee/${id}`);
    }
     



     deleteEmployee(id) {
      EmployeeService.deleteEmployee(id).then((res) => {
        this.setState({
          employees: this.state.employees.filter(
            (employee) => employee.id !== id
          ),
        });
      });
    }


    viewEmployee(id) {
      this.props.history.push(`/view-employee/${id}`);
     
    }

    editEmployee(id) {
      this.props.history.push(`/add-employee/${id}`);
    }

    addEmployee=()=>{

      this.props.history.push(`/add-employee/_mo`);
    }

    
    

    render() {
        return (
            <div>
                  <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button className="btn btn-primary"  onClick={this.addEmployee} >
            {" "}
            Add Employee
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped tablebordered" border="4">
            <thead>
              <tr>
                <th> Employee First Name</th>
                <th> Employee Last Name</th>
                <th> Employee Email Id</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName} </td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button  
                      className="btn btn-info"
                      onClick={() => this.editEmployee(employee.id)}
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
                
            </div>
        )
    }
}
