import React, { Component } from 'react';
import EmployerService from '../Services/EmployerService';

class ViewAllJobs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employerId: '',
            job: {}
            
        }

        this.changeEmployerIdHandler= this.changeEmployerIdHandler.bind(this);
        this.view = this.view.bind(this);
    }

    view= (e)=>{
        e.preventDefault();
        EmployerService.getAllJobs(this.state.employerId).then( res => {
            this.setState({job: res.data});
        });
    }

    changeEmployerIdHandler=(event)=>{
        this.setState({employerId: event.target.value});
    }

    render() {
        return (
            <div>
               <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Job Details</h3>
                    <div className= "card-body">
                        <div className="row">
                            <label>Employer Id: </label>
                            <input placeholder="Employer Id" name="employerId"
                            className="form-control" value = {this.state.employerId} 
                            onChange = {this.changeEmployerIdHandler} />
                        </div>
                        <div className = "row">
                            <label>Job Title: </label>
                            <div>{this.state.job.title}</div>
                        </div>
                        <div className = "row">
                            <label>Job location: </label>
                            <div>{this.state.job.location}</div>
                        </div>
                        <div className = "row">
                            <label>Job description: </label>
                            <div>{this.state.job.description}</div>
                        </div>
                        <div className = "row">
                            <label>Experience: </label>
                            <div>{this.state.job.experience}</div>
                        </div>
                        <div className = "row">
                            <label>Salary: </label>
                            <div>{this.state.job.salary}</div>
                        </div>
                        <div className = "row">
                            <label>Notice Period: </label>
                            <div>{this.state.job.noticePeriod}</div>
                        </div>
                        <div className = "row">
                            <label>Status: </label>
                            <div>{this.state.job.status}</div>
                        </div>
                        <div className = "row">
                            <label>Email: </label>
                            <div>{this.state.job.email}</div>
                        </div>
                        <div className = "row">
                            <label>Contact Number: </label>
                            <div>{this.state.job.contactNo}</div>
                        </div> <div className = "row">
                            <label>Skill Sets: </label>
                            <div>{this.state.job.skillSet}</div>
                        </div> 
                        
                        <button onClick={this.view}>View</button>
                    </div>
               </div>
            </div>
        );
    }
}


export default ViewAllJobs;
