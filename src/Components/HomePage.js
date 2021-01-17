import React from 'react';
import { Card } from 'react-bootstrap';
import App from '../App';
import{BrowserRouter, Link }from "react-router-dom";
class HomePage extends React.Component {
    render() {
        return (		
<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Jobseeker Sign In</h3>
				<div class="d-flex justify-content-end social_icon">
				</div>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="email"/>
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password"/>
					</div>

					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn"/>
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
                <div class="card-footer">
				<div class="d-flex justify-content-center links">
				 Sign in as<Link to="/EmployerSignIn">Employer</Link> &nbsp; instead..  			
				</div>
                </div>
			</div>
		</div>
	</div>
</div>	
);
}
}
export default HomePage;