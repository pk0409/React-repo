import React, { Component } from 'react';
//new proj made here
//new
class CreateEmployerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            organizationName: '',
            address: '',
            contactNo: '',
            email: '',
            username: '',
            password: ''
        }
        this.changeOrganizationNameHandler = this.changeOrganizationNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeContactNoHandler = this.changeContactNoHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveEmployer = this.saveEmployer.bind(this);
    }

    saveEmployer = (e) => {
        e.preventDefault();
        let employer = {
            id: null, organizationName: this.state.organizationName, address: this.state.address,
            contactNo: this.state.contactNo, email: this.state.email, username: this.state.username,
            password: this.state.password
        };
        // console.log(JSON.stringify(employer));
        console.log(employer);
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
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employer</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">

                                        <input placeholder="Organization Name" name="organizationName"
                                            className="form-control" value={this.state.organizationName}
                                            onChange={this.changeOrganizationNameHandler} />
                                    </div>
                                    <div className="form-group">

                                        <input placeholder="Address" name="address"
                                            className="form-control" value={this.state.address}
                                            onChange={this.changeAddressHandler} />
                                    </div>
                                    <div className="form-group">

                                        <input placeholder="Contact Number" name="contactNo"
                                            className="form-control" value={this.state.contactNo}
                                            onChange={this.changeContactNoHandler} />
                                    </div>
                                    <div className="form-group">

                                        <input placeholder="Email" name="email"
                                            className="form-control" value={this.state.email}
                                            onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">

                                        <input placeholder="Username" name="useraname"
                                            className="form-control" value={this.state.username}
                                            onChange={this.changeUsernameHandler} />
                                    </div>
                                    <div className="form-group">

                                        <input placeholder="Password" name="password"
                                            className="form-control" value={this.state.password}
                                            onChange={this.changePasswordHandler} />
                                    </div>

                                    <div class="searchformfld">
                                        <input type="text" class="candidateName" id="candidateName" name="candidateName" placeholder=" " />
                                        <label for="candidateName">Candidate name</label>
                                    </div>


                                    <button className="btn btn-success" onClick={this.saveEmployer}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
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
