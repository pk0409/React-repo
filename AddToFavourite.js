import React, { Component } from 'react';
import JobSeekerService from '../Services/JobSeekerService';

class AddToFavourite extends Component {
    constructor(props) {
        super(props);
        this.state = {
                favJob_id:'',
                jobId:'',
                jobSeekerId:''
        }
        this.changeJobIdHandler= this.changeJobIdHandler.bind(this);
        this.changeJobSeekerIdHandler= this.changeJobSeekerIdHandler.bind(this);
        this.saveFavouriteJob = this.saveFavouriteJob.bind(this);
    }     

    saveFavouriteJob = (e)=>{
        e.preventDefault();
        let job ={jobId: this.state.jobId, jobSeekerId: this.state.jobSeekerId };
        console.log(job);
        console.log(JSON.stringify(job));
        JobSeekerService.addToFavourite(job).then((res) => {
            this.props.history.push("/get-jobs");
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
                        <div>
                            <h3 className="text-center">Add To Favourite</h3>
                            <div>
                                <form className="form">
                                    <div className="form-control"> 
                                        
                                        <input placeholder="Job Id" name="jobId"
                                        value = {this.state.jobId} 
                                            onChange = {this.changeJobIdHandler}/>
                                    </div>
                                    <div className="form-control"> 
                                        
                                        <input placeholder="JobSeeker Id" name="jobSeekerId"
                                            value = {this.state.jobSeekerId} 
                                            onChange = {this.changeJobSeekerIdHandler}/>
                                    </div>
                                   
                                    <button className = "btn btn-success" onClick = {this.saveFavouriteJob}>Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}



export default AddToFavourite;
