import React, { Component } from 'react';
import EmployerService from '../Services/EmployerService';
// import {validate} from './Validate';


class CreateEmployerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            organizationName: '',
            address: '',
            contactNo: '',
            email: '',
            username: '',
            password: '',
            orgNameError: "",
            addressError: "",
            contactError: "",
            emailError: "",
            usernameError: "",
            passwordError: ""
        }
        this.changeOrganizationNameHandler = this.changeOrganizationNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveEmployer = this.saveEmployer.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate=()=>{
        
        const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");
        if(this.state.organizationName===""){
            this.setState({orgNameError: "Organizatiion Name cannot be empty"});
            return false;
        }else if(this.state.organizationName.length<3){
            this.setState({orgNameError: "Organizatiion Name should have minimum 3 characters"});
            return false;
        }else{
            this.setState({orgNameError: ""});
        }

        if(this.state.address===""){
            this.setState({addressError: "Address cannot be empty"});
            return false;
        }else if(this.state.address.length<3){
            this.setState({addressError: "Address should have minimum 3 characters"});
            return false;
        }else{
            this.setState({addressError: ""});
        }

        if(this.state.contactNo===""){
            this.setState({contactError: "Contact Number cannot be empty"});
            return false;
        }else if(this.state.contactNo.length<10){
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

        if(this.state.username===""){
            this.setState({usernameError: "Username cannot be empty"});
            return false;
        }else if(this.state.username.length<8){
            this.setState({usernameError: "Username should have minimum 8 characters"});
            return false;
        }else{
            this.setState({usernameError: ""});
        }

        if(this.state.password===""){
            this.setState({passwordError: "Password cannot be empty"});
            return false;
        }else if(this.state.password.length<8){
            this.setState({passwordError: "Password should have minimum 8 characters"});
            return false;
        }else if(!mediumRegex.test(this.state.password)){
            this.setState({passwordError: "Password must contain minimum 1 uppercase, 1 lowercase and 1 number "})
        }else{
            this.setState({passwordError: ""});
        }
        return true;
    }

    saveEmployer = (e) => {
        e.preventDefault();
        const isValid= this.validate();
        if(isValid){
            let employer = {
                organizationName: this.state.organizationName, address: this.state.address,
                contactNo: this.state.contactNo, email: this.state.email, username: this.state.username,
                password: this.state.password
            };
            console.log(JSON.stringify(employer));
            console.log(employer);
            EmployerService.registerEmployer(employer).then((res) => {
                this.props.history.push("/reg-em");
            });
        }
        else{
            alert("Invalid input");
        }
        
    }

    cancel() {
        this.props.history.push('/employer');
    }

    changeOrganizationNameHandler = (event) => {
        this.setState({ organizationName: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    changeContactNoHandler = (event) => {
        this.setState({ contactNo: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    
    

    
    render() {
        // const {formError} = this.state;
        return (
            
            <div>
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ==" crossorigin="anonymous" />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <center><div className="header">
                            <h2 className="text-center">Add Employer</h2>
                            </div></center>
                            <div className="card-body">
                                <form className="form" id="form">
                                    <div className="form-control">
                                    <label>Organization Name</label>
                                        <input placeholder="Organization Name" name="organizationName"
                                            className="form-control" value={this.state.organizationName}
                                            onChange={this.changeOrganizationNameHandler} autoComplete="off" />
                                            <i class="fas fa-check-circle"></i>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.orgNameError}
                                            <small className="form-control error" id="organizationName"></small>
                                            </div>
                                    </div>
                                    <div className="form-control">
                                    <label><i class="fas fa-map-marked-alt"></i></label>
                                        <input placeholder="Address" name="address"
                                            className="form-control" value={this.state.address}
                                            onChange={this.changeAddressHandler} autoComplete="off"/>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-check-circle"></i>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.addressError}</div>
                                            <small>Invalid Address</small>
                                    </div>
                                    <div className="form-control">
                                    <label><i class="fas fa-phone"></i></label>
                                        <input type="number" placeholder="Contact Number" name="contactNo"
                                            className="form-control" value={this.state.contactNo}
                                            onChange={this.changeContactNoHandler} autoComplete="off"/>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-check-circle"></i>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.contactError}</div>
                                            <small>Invalid Contact Number</small>
                                    </div>
                                    <div className="form-control">
                                    <label><i class="fas fa-envelope"></i></label>
                                        <input type="Email" placeholder="Email" name="email"
                                            className="form-control" value={this.state.email}
                                            onChange={this.changeEmailHandler} autoComplete="off"/>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-check-circle"></i>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.emailError}</div>
                                            <small>Invalid Email</small>
                                    </div>
                                    <div className="form-control">
                                    <label>Username</label>
                                        <input placeholder="Username" name="useraname"
                                            className="form-control" value={this.state.username}
                                            onChange={this.changeUsernameHandler} autoComplete="off"/>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-check-circle"></i>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.usernameError}</div>
                                            <small>Invalid Username</small>
                                    </div>
                                    <div className="form-control">
                                    <label>Password</label>
                                        <input type="Password" placeholder="Password" name="password"
                                            className="form-control" value={this.state.password}
                                            onChange={this.changePasswordHandler} autoComplete="off"/>
                                            <div style={{fontSize: 12, color: "red"}}>
                                            <i class="fas fa-check-circle"></i>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {this.state.passwordError}</div>
                                            <small>Invalid Password</small>
                                    </div>

                                    {/* <div class="searchformfld">
                                        <input type="text" class="candidateName" id="candidateName" name="candidateName" placeholder=" " />
                                        <label for="candidateName">Candidate name</label>
                                        
                                    </div>
 */}
                                    {/* <input type="submit" value="Submit" className="btn" onClick={this.saveEmployer}></input> */}
                                    <button className="btn" onClick={this.saveEmployer}>Save</button>
                                    <button className="btn" onClick={this.cancel.bind(this)} >Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            
        );
    }
}
export default CreateEmployerComponent;
