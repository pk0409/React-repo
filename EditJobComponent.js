import React, { Component } from 'react';
import EmployerService from '../Services/EmployerService';
//import EmployerService from '../services/EmployerService';

class EditJobComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id: '',
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
                titleError:"",
                locationError:"",
                descriptionError:"",
                experienceError:"",
                salaryError:"",
                noticePeriodError:"",
                statusError:"",
                emailError:"",
                contactNoError:"",
                skillSetError:""
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
        this.editJob = this.editJob.bind(this);
        this.validate = this.validate.bind(this);
    }   
    
    validate=()=>{
        
        if(this.state.title===""){
            this.setState({titleError: "Title cannot be empty"});
            return false;
        }else if(this.state.title.length<3){
            this.setState({titleError: "Title should have minimum 3 characters"});
            return false;
        }else{
            this.setState({titleError: ""});
        }

        if(this.state.location===""){
            this.setState({locationError: "Location cannot be empty"});
            return false;
        }else if(this.state.location.length<3){
            this.setState({locationError: "Location should have minimum 3 characters"});
            return false;
        }else{
            this.setState({locationError: ""});
        }

        if(this.state.description===""){
            this.setState({descriptionError: "Description cannot be empty"});
            return false;
        }else{
            this.setState({descriptionError: ""});
        }

        if(this.state.experience===""){
            this.setState({experienceError: "Experience cannot be empty"});
            return false;
        }else{
            this.setState({experienceError: ""});
        }

        if(this.state.salary===""){
            this.setState({salaryError: "Salary cannot be empty"});
            return false;
        }else if(this.state.salary.length<5){
            this.setState({salaryError: "Please enter annual salary"});
            return false;
        }else{
            this.setState({salaryError: ""});
        }

        if(this.state.noticePeriod===""){
            this.setState({noticePeriodError: "Notice Period cannot be empty"});
            return false;
        }else{
            this.setState({noticePeriodError: ""});
        }

        if(this.state.status===""){
            this.setState({statusError: "Status cannot be empty"});
            return false;
        }else{
            this.setState({statusError: ""});
        }

        if(this.state.email===""){
            this.setState({emailError: "Email cannot be empty"});
            return false;
        }else if(typeof this.state.email!== "undefined"){
            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.email)) {
            this.setState({emailError: "Please enter valid Email"});
            return false;
        }else{
            this.setState({emailError: ""});
        }
        }else{
            this.setState({emailError: ""});
        }

        if(this.state.contactNo===""){
            this.setState({contactNoError: "Contact Number cannot be empty"});
            return false;
        }else if(this.state.contactNo.length<10){
            this.setState({contactNoError: "Contact Number must have 10 characters"});
            return false;
        }else{
            this.setState({contactNoError: ""});
        }

        if(this.state.skillSet===""){
            this.setState({skillSetError: "skills cannot be empty"});
            return false;
        }else{
            this.setState({skillSetError: ""});
        }

        return true;
    }

    componentDidMount(){
        EmployerService.getAllJobs(this.state.employerId).then((res)=> {
            let job = res.data;
            this.setState({
                title: job.title,
                location: job.location,
                description: job.description,
                experience: job.experience,
                salary: job.salary,
                noticePeriod: job.noticePeriod,
                status: job.status,
                email: job.email,
                contactNo: job.contactNo,
                skillSet: job.skillSet
            })
        })
    }

    editJob = (e)=>{
        e.preventDefault();
        const isValid= this.validate();
        if(isValid){
            let job ={ id: this.state.id, title: this.state.title, location: this.state.location, description: this.state.description,
                experience: this.state.experience, salary: this.state.salary, noticePeriod: this.state.noticePeriod, status: this.state.status,
                email: this.state.email, contactNo: this.state.contactNo, skillSet: this.state.skillSet, employerId: this.state.employerId
            };
            console.log(JSON.stringify(job));
            console.log(job);
            EmployerService.updateJob(job, this.state.id).then((res)=>{
                this.props.history.push("/update-job/" + this.state.id);
            })
            // this.props.history.push("/update-job/" + this.status.job.id);
        }else{
            alert("Invalid input");
        }
    }  
    
    cancel(){
        this.props.history.push('/job');
    }
    
    changeIdHandler = (event) =>{
        this.setState({id: event.target.value});
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
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ==" crossorigin="anonymous" />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <center><div className="header">
                            <h2 className="text-center">Edit Job Details</h2>
                            </div></center>
                            <div className="card-body">
                                <form className="form" id="form">
                                <div className="form-control">
                                    <label>Job Id</label>
                                        <input placeholder="Job Id" name="id"
                                            className="form-control" value = {this.state.id} 
                                            onChange = {this.changeIdHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.titleError}
                                            <small className="form-control error" id="title"></small>
                                            </div>

                                    </div>
                                <div className="form-control">
                                    <label>Job Title</label>
                                        <input placeholder="Job title" name="title"
                                            className="form-control" value = {this.state.title} 
                                            onChange = {this.changeJobTitleHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.titleError}
                                            <small className="form-control error" id="title"></small>
                                            </div>

                                    </div>
                                    <div className="form-control">
                                    <label><i class="fas fa-map-marked-alt"></i></label>
                                        <input placeholder="Job location" name="location"
                                            className="form-control" value = {this.state.location} 
                                            onChange = {this.changeLocationHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.locationError}
                                            <small className="form-control error" id="location"></small>
                                            </div>
                                    </div>
                                    <div className="form-control">
                                    <label>Job Description</label>
                                        <input placeholder="Job description" name="description"
                                            className="form-control" value = {this.state.description} 
                                            onChange = {this.changeDescriptionHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.descriptionError}
                                            <small className="form-control error" id="description"></small>
                                            </div>
                                    </div>
                                    <div className="form-control">
                                    <label>Job Experience</label>
                                        <input placeholder="Job Experience" name="experience"
                                            className="form-control" value = {this.state.experience} 
                                            onChange = {this.changeExperienceHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.experienceError}
                                            <small className="form-control error" id="experience"></small>
                                            </div>
                                    </div>
                                    <div className="form-control">
                                    <label>Salary</label>
                                        <input type="number" placeholder="Job Salary" name="salary"
                                            className="form-control" value = {this.state.salary} 
                                            onChange = {this.changeSalaryHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.salaryError}
                                            <small className="form-control error" id="salary"></small>
                                            </div>
                                    </div>
                                    <div className="form-control">
                                    <label>Notice Period</label>
                                        <input placeholder="Notice Period" name="noticePeriod"
                                            className="form-control" value = {this.state.noticePeriod} 
                                            onChange = {this.changeNoticePeriodHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.noticePeriodError}
                                            <small className="form-control error" id="noticePeriod"></small>
                                            </div>
                                    </div>
                                    <div className="form-control">
                                    <label>Status</label>
                                        <input placeholder="Status" name="status"
                                            className="form-control" value = {this.state.status} 
                                            onChange = {this.changeStatusHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.statusError}
                                            <small className="form-control error" id="status"></small>
                                            </div>
                                    </div>
                                    <div className="form-control">
                                    <label><i class="fas fa-envelope"></i></label>
                                        <input placeholder="Email" name="email"
                                            className="form-control" value = {this.state.email} 
                                            onChange = {this.changeEmailHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.emailError}
                                            <small className="form-control error" id="email"></small>
                                            </div>
                                    </div>
                                   
                                    <div className="form-control">
                                    <label><i class="fas fa-phone"></i></label>
                                        <input placeholder="Contact number" name="contactNo"
                                            className="form-control" value = {this.state.contactNo} 
                                            onChange = {this.changeContactNoHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.contactNoError}
                                            <small className="form-control error" id="contactNo"></small>
                                            </div>
                                    </div>
                                    
                                    <div className="form-control">
                                    <label>Skill Set</label>
                                        <input placeholder="Skill Set" name="skillSet"
                                            className="form-control" value = {this.state.skillSet} 
                                            onChange = {this.changeSkillSetHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.skillSetError}
                                            <small className="form-control error" id="skillSet"></small>
                                            </div>
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.editJob}>Edit</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} >Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}



export default EditJobComponent;