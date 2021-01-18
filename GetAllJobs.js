import React, { Component } from 'react';
import JobSeekerService from '../Services/JobSeekerService';

class GetAllJobs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            job: []
            
        }
        this.applyJob = this.applyJob.bind(this);
        this.favJob = this.favJob.bind(this);
        this.SendAMsg = this.SendAMsg.bind(this); 

    }

    componentDidMount(){
        JobSeekerService.getAllJobs().then( res => {
            this.setState({job: res.data});
        });
    }

    applyJob() {
        this.props.history.push(`/applyJob`);
    }

    favJob() {
        this.props.history.push(`/favJob`);
    }

    SendAMsg(){
        this.props.history.push("/send-MsgToEmployer")
    }

    render() {
        return (
            <div >
                <nav class="navbar navbar-dark bg-primary fixed-top flex-md-nowrap p-1 noshadow">
                    <a class="navbar-brand col-sm-3 col-md-2 mr-8 " href="#">Job Search System</a>
                    <li class="navbar-nav px-3" >
                        <li class="nav-item text nowrap">
                            <a class="nav-link" href="#"><i class="fa fa-user" aria-hidden="true"></i>
                        </a>
                        </li>
                    </li>
                </nav>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2 bg-light d-none d-md-block sidebar">
                            <div className="left-sidebar">
                                <ul class="nav flex-column sidebar-nav">
                                    <li class="nav-item" onClick="SendAMsg">
                                        <a class="nav-link" href="SendMessageToEmployer.js">
                                            Send Message</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
               <div className= "jobSeekerTable">
                    <h3 className = "text-center">Job Details</h3>
                    <div className= "card-body">
                        <div className="row" >
                            <table className="jobseekerDashboard">
                                <thead>
                                    <tr>
                                        <th>Job Title: </th>
                                        <th>Job location: </th>
                                        <th>Job description: </th>
                                        <th>Experience: </th>
                                        <th>Salary: </th>
                                        <th>Notice Period: </th>
                                        <th>Status: </th>
                                        <th>Email: </th>
                                        <th>Contact Number: </th>
                                        <th>Skill Sets: </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.job.map(job=>
                                            <tr key={this.state.job.id}>
                                            <td>{job.title}</td>
                                            <td>{job.location}</td>
                                            <td>{job.description}</td>
                                            <td>{job.experience}</td>
                                            <td>{job.salary}</td>
                                            <td>{job.noticePeriod}</td>
                                            <td>{job.status}</td>
                                            <td>{job.email}</td>
                                            <td>{job.contactNo}</td>
                                            <td>{job.skillSet}</td>
                                            <td><button  onClick={this.applyJob}>Apply</button></td>
                                            <td><button  onClick={this.favJob}>Add To Favourite</button></td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                       

                    </div>
               </div>
            </div>
        );
    }
}


export default GetAllJobs;