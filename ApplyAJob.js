import React, { Component } from 'react';
import JobSeekerService from '../Services/JobSeekerService';

class ApplyAJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
                appliedJob_id:'',
                jobId:'',
                jobSeekerId:''
        }
        this.changeJobIdHandler= this.changeJobIdHandler.bind(this);
        this.changeJobSeekerIdHandler= this.changeJobSeekerIdHandler.bind(this);
        this.saveAppliedJob = this.saveAppliedJob.bind(this);
    }     

    saveAppliedJob = (e)=>{
        e.preventDefault();
        let job ={jobId: this.state.jobId, jobSeekerId: this.state.jobSeekerId };
        console.log(JSON.stringify(job));
        JobSeekerService.applyAJob(job).then((res) => {
            this.props.history.push("/applyJob");
        });
        
    }  
    
    cancel(){
        this.props.history.push('/job');
    }

    changeJobIdHandler = (event) =>{
        this.setState({jobId: event.target.value});
    }
    changeJobSeekerIdHandler = (event) =>{
        this.setState({jobSeekerId: event.target.value});
    }

    render() {
        return (
            <div>               
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Post A Job</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group"> 
                                        
                                        <input placeholder="Job Id" name="jobId"
                                            className="form-control" value = {this.state.jobId} 
                                            onChange = {this.changeJobIdHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        
                                        <input placeholder="JobSeeker Id" name="jobSeekerId"
                                            className="form-control" value = {this.state.jobSeekerId} 
                                            onChange = {this.changeJobSeekerIdHandler}/>
                                    </div>
                                   
                                    <button className = "btn btn-success" onClick = {this.saveAppliedJob}>Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}



export default ApplyAJob;