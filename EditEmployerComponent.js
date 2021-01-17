import React, { Component } from 'react';

class EditEmployerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            organizationName: '',
            address: '',
            contactNo: '',
            email: '',
            username: '',
            orgNameError: "",
            addressError: "",
            contactError: "",
            emailError: "",
            usernameError: ""
        }
        this.changeOrganizationNameHandler = this.changeOrganizationNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.editEmployer = this.editEmployer.bind(this);
        this.validate = this.validate.bind(this);
    }

    // componentDidMount() {
    //     EmployerService.getEmployeeById(this.state.id).then((res) => {
    //         let employee = res.data;
    //         this.setState({
    //             id: employee.id,
    //             name: employee.name,
    //             hiredate: employee.hiredate,
    //             job: employee.job,
    //             salary: employee.salary
    //         });
    //     });
    // }
    validate=()=>{
        
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

        return true;
    }

    editEmployer = (e) => {
        e.preventDefault();
        const isValid= this.validate();
        if(isValid){
            let employer = {
                organizationName: this.state.organizationName, address: this.state.address,
                contactNo: this.state.contactNo, email: this.state.email, username: this.state.username
            };
            console.log(JSON.stringify(employer));
            console.log(employer);
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

    render() {
        // const {formError} = this.state;
        return (
            
            <div>
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ==" crossorigin="anonymous" />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <center><div className="header">
                            <h2 className="text-center">Edit Employer</h2>
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
                                    

                                    {/* <div class="searchformfld">
                                        <input type="text" class="candidateName" id="candidateName" name="candidateName" placeholder=" " />
                                        <label for="candidateName">Candidate name</label>
                                        
                                    </div>
 */}
                                    {/* <input type="submit" value="Submit" className="btn" onClick={this.saveEmployer}></input> */}
                                    <button className="btn" onClick={this.editEmployer}>Edit</button>
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
export default EditEmployerComponent;
