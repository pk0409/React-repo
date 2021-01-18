import React, { Component } from 'react';
//import JobSeekerService from '../services/JobSeekerService';

class RegJobSeeker extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id:'',
                name:'',
                address:'',
                contact_no:'',
                email:'',
                skill_set:'',
                location:'',
                username:'',
                password:''
        }
        this.changeJobSeekerNameHandler= this.changeJobSeekerNameHandler.bind(this);
        this.changeAddressHandler= this.changeAddressHandler.bind(this);
        this.changeContact_noHandler = this.changeContact_noHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeSkill_setHandler = this.changeSkill_setHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveJobSeeker = this.saveJobSeeker.bind(this);
    }     

    saveJobSeeker = (e)=>{
        e.preventDefault();
        let jobseeker ={ id: null, name: this.state.name, address: this.state.address, contact_no: this.state.contact_no, email: this.state.email, 
            skill_set: this.state.skill_set, location: this.state.location, username: this.state.username, password: this.state.password
        };
        console.log(JSON.stringify(jobseeker));
        //EmployeeService.createEmployee(employee).then(res =>{
        //    this.props.history.push('/employees');
        //})
    }  
    
    cancel(){
        this.props.history.push('/jobseeker');
    }

    changeJobSeekerNameHandler = (event) =>{
        this.setState({name: event.target.value});
    }

    changeAddressHandler = (event) =>{
        this.setState({address: event.target.value});
    }

    changeContact_noHandler = (event) =>{
        this.setState({contact_no: event.target.value});
    }

    changeEmailHandler = (event) =>{
        this.setState({email: event.target.value});
    }

    changeSkill_setHandler = (event) =>{
        this.setState({skill_set: event.target.value});
    }

    changeLocationHandler = (event) =>{
        this.setState({location: event.target.value});
    }

    changeUsernameHandler = (event) =>{
        this.setState({username: event.target.value});
    }

    changePasswordHandler = (event) =>{
        this.setState({password: event.target.value});
    }

   

    render() {
        return (
            <div>               
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Job Seeker</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group"> 
                                        <label>Enter Job Seeker's Name</label>
                                        <input placeholder="JobSeeker Name" name="name"
                                            className="form-control" value = {this.state.name} 
                                            onChange = {this.changeJobSeekerNameHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Address</label>
                                        <input placeholder="Address" name="address"
                                            className="form-control" value = {this.state.address} 
                                            onChange = {this.changeAddressHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Contact Number</label>
                                        <input placeholder="Contact Number" name="contact_no"
                                            className="form-control" value = {this.state.contact_no} 
                                            onChange = {this.changeContact_noHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Email ID</label>
                                        <input placeholder="Email" name="email"
                                            className="form-control" value = {this.state.email} 
                                            onChange = {this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Skill Set</label>
                                        <input placeholder="Skill Set" name="skill_set"
                                            className="form-control" value = {this.state.skill_set} 
                                            onChange = {this.changeSkill_setHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Location</label>
                                        <input placeholder="Location" name="location"
                                            className="form-control" value = {this.state.location} 
                                            onChange = {this.changeLocationHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Username</label>
                                        <input placeholder="Username" name="username"
                                            className="form-control" value = {this.state.username} 
                                            onChange = {this.changeUsernameHandler}/>
                                    </div>
                                    <div className="form-group"> 
                                        <label>Enter Password</label>
                                        <input placeholder="Password" name="password"
                                            className="form-control" value = {this.state.password} 
                                            onChange = {this.changePasswordHandler}/>
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.saveJobSeeker}>Save</button>
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



export default RegJobSeeker;