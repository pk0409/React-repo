import React from 'react';
import { Card } from 'react-bootstrap';
import App from '../App';

class EmployerSignIn extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <div class="card-header">
                            <h3> Employer Sign In</h3>
                            <div class="d-flex justify-content-end social_icon">
                            </div>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="email" />

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" />
                                </div>
                                
                                <div class="form-group">
                                    <input type="submit" value="Login" class="btn float-right login_btn" />
                                </div>



                            </form>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}
export default EmployerSignIn;