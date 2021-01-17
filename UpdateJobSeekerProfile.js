import React, { Component } from 'react';
//import JobSeekerService from '../services/JobSeekerService';

class UpdateJobSeekerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
                address:'',
                contact_no:'',
                email:'',
                skill_set:'',
                location:'',
                addressError:"",
                contactError:"",
                emailError:"",
                skillsetError:"",
                locationError:""
        }
        this.changeAddressHandler= this.changeAddressHandler.bind(this);
        this.changeContact_noHandler = this.changeContact_noHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeSkill_setHandler = this.changeSkill_setHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.saveUpdatedJobSeeker = this.saveUpdatedJobSeeker.bind(this);
        this.validate = this.validate.bind(this);
    }     

    validate=()=>{

        if(this.state.address===""){
            this.setState({addressError: "Address cannot be empty"});
            return false;
        }else if(this.state.address.length<3){
            this.setState({addressError: "Address should have minimum 3 characters"});
            return false;
        }else{
            this.setState({addressError: ""});
        }

        if(this.state.contact_no===""){
            this.setState({contactError: "Contact Number cannot be empty"});
            return false;
        }else if(this.state.contact_no.length<10){
            this.setState({contactError: "Contact Number must have 10 characters"});
            return false;
        }else{
            this.setState({contactError: ""});
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

        if(this.state.skill_set===""){
            this.setState({skillsetError: "Skill set cannot be empty"});
            return false;
        }else{
            this.setState({skillsetError: ""});
        }

        if(this.state.location===""){
            this.setState({locationError: "Location preference cannot be empty"});
            return false;
        }else if(this.state.location.length<3){
            this.setState({locationError: "Location preference should have minimum 3 characters"});
            return false;
        }else{
            this.setState({locationError: ""});
        }
        return true;
    }

    saveUpdatedJobSeeker = (e)=>{
        e.preventDefault();
        const isValid= this.validate();
        if(isValid){
            let jobseeker ={ address: this.state.address, contact_no: this.state.contact_no, email: this.state.email, 
                skill_set: this.state.skill_set, location: this.state.location
            };
            console.log(JSON.stringify(jobseeker));
            console.log(jobseeker);
        }else{
            alert("Invalid input");
        }
    }  
    
    cancel(){
        this.props.history.push('/jobseeker');
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

    

    render() {
        return (
            <div>
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ==" crossorigin="anonymous" />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <center><div className="header">
                            <h2 className="text-center">Edit Profile</h2>
                            </div></center>
                            <div className="card-body">
                                <form className="form" id="form">
                                    <div className="form-control">
                                    <label><i class="fas fa-map-marked-alt"></i></label>
                                        <input placeholder="Address" name="address"
                                            className="form-control" value = {this.state.address} 
                                            onChange = {this.changeAddressHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.addressError}
                                            <small className="form-control error" id="address"></small>
                                            </div>
                                    </div>
                                    <div className="form-control">
                                    <label><i class="fas fa-phone"></i></label>
                                        <input placeholder="Contact Number" name="contact_no"
                                            className="form-control" value = {this.state.contact_no} 
                                            onChange = {this.changeContact_noHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.contactError}
                                            <small className="form-control error" id="contact_no"></small>
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
                                    <label>Skills</label>
                                        <input placeholder="Skill Set" name="skill_set"
                                            className="form-control" value = {this.state.skill_set} 
                                            onChange = {this.changeSkill_setHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.skillsetError}
                                            <small className="form-control error" id="skill_set"></small>
                                            </div>
                                    </div>
                                    <div className="form-control">
                                    <label>Preferred Location</label>
                                        <input placeholder="Location" name="location"
                                            className="form-control" value = {this.state.location} 
                                            onChange = {this.changeLocationHandler}/>
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.locationError}
                                            <small className="form-control error" id="location"></small>
                                            </div>
                                    </div>
                                    
                                    <button className = "btn btn-success" onClick = {this.saveUpdatedJobSeeker}>Edit</button>
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



export default UpdateJobSeekerProfile;