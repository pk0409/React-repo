import React, { Component } from 'react';
//import EmployerService from '../services/EmployerService';

class CreateJobComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id:'',
                title:'',
                location:'',
                description:'',
                experience:'',
                salary:'',
                noticePeriod:'',
                status:'',
                email:'',
                contactNo:'',
                skillSet:'',
                employerId:'',
        }
        this.changeJobTitleHandler= this.changeJobTitleHandler.bind(this);
        this.changeLocationHandler= this.changeLocationHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeExperienceHandler = this.changeExperienceHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeNoticePeriodHandler = this.changeNoticePeriodHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
        this.changeSkillSetHandler = this.changeSkillSetHandler.bind(this);
        this.saveJob = this.saveJob.bind(this);
    }     

    saveJob = (e)=>{
        e.preventDefault();
        let job ={ id: null, title: this.state.title, location: this.state.location, description: this.state.description,
            experience: this.state.experience, salary: this.state.salary, noticePeriod: this.state.noticePeriod, status: this.state.status,
            email: this.state.email, contactNo: this.state.contactNo, skillSet: this.state.skillSet, employerId: this.state.employerId
        };
        console.log(JSON.stringify(job));
        
    }  
    
    cancel(){
        this.props.history.push('/job');
    }

    changeJobTitleHandler = (event) =>{
        this.setState({title: event.target.value});
    }
    changeLocationHandler = (event) =>{
        this.setState({location: event.target.value});
    }
    changeDescriptionHandler = (event) =>{
        this.setState({description: event.target.value});
    }
    changeExperienceHandler = (event) =>{
        this.setState({experience: event.target.value});
    }
    changeSalaryHandler = (event) =>{
        this.setState({salary: event.target.value});
    }
    changeNoticePeriodHandler = (event) =>{
        this.setState({noticePeriod: event.target.value});
    }
    changeStatusHandler = (event) =>{
        this.setState({status: event.target.value});
    }
    changeEmailHandler = (event) =>{
        this.setState({email: event.target.value});
    } 
    changeContactNoHandler = (event) =>{
        this.setState({contactNo: event.target.value});
    }
    changeSkillSetHandler = (event) =>{
        this.setState({skillSet: event.target.value});
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
                                        
                                        <input placeholder="Job title" name="title"
                                            className="form-control" value = {this.state.title} 
                                            onChange = {this.changeJobTitleHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        
                                        <input placeholder="Job location" name="location"
                                            className="form-control" value = {this.state.location} 
                                            onChange = {this.changeLocationHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        
                                        <input placeholder="Job description" name="description"
                                            className="form-control" value = {this.state.description} 
                                            onChange = {this.changeDescriptionHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        
                                        <input placeholder="Job Salary" name="salary"
                                            className="form-control" value = {this.state.salary} 
                                            onChange = {this.changeSalaryHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                       
                                        <input placeholder="Notice Period" name="noticePeriod"
                                            className="form-control" value = {this.state.noticePeriod} 
                                            onChange = {this.changeNoticePeriodHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        
                                        <input placeholder="Status" name="status"
                                            className="form-control" value = {this.state.status} 
                                            onChange = {this.changeStatusHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        
                                        <input placeholder="Email" name="email"
                                            className="form-control" value = {this.state.email} 
                                            onChange = {this.changeEmailHandler}/>
                                    </div>
                                   
                                    <div className="form-group"> 
                                       
                                        <input placeholder="Contact number" name="contactNo"
                                            className="form-control" value = {this.state.contactNo} 
                                            onChange = {this.changeContactNoHandler}/>
                                    </div>
                                    
                                    <div className="form-group"> 
                                        
                                        <input placeholder="Skill Set" name="skillSet"
                                            className="form-control" value = {this.state.skillSet} 
                                            onChange = {this.changeSkillSetHandler}/>
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.saveJob}>Save</button>
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



export default CreateJobComponent;