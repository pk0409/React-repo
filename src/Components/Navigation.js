import React from 'react';
import App from '../App';
class Navigation extends React.Component {
    render() {
        return (
            <div className="container">
                <nav class="navbar navbar-dark bg-primary fixed-top flex-md-nowrap p-1 noshadow">
                    <a class="navbar-brand col-sm-3 col-md-2 mr-8 " href="#">Job Search System</a>
                    <input type="text" class="form-control form-control-primary w-100"
                        placeholder="Search...." />
                    <li class="navbar-nav px-3" >
                        <li class="nav-item text nowrap">
                            <a class="nav-link" href="#">Logout</a>
                        </li>
                    </li>
                </nav>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2 bg-light d-none d-md-block sidebar">
                            <div className="left-sidebar">
                                <ul class="nav flex-column sidebar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">
                                            <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                    d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" />
                                            </svg>Edit your details</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                    d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" />
                                            </svg>Apply a job</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                    d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" />
                                            </svg>Add to favorites</a>
                                    </li>
                                    <li class="dropdown">
                                            <a class="dropdown-toggle" href="#" data-toggle="dropdown" tabindex="-1">
                                                <svg class="bi bi-chevron-right" width="16" height="16" viewBox="0 0 20 20" fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
                                                        d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" />
                                                </svg>Search Jobs</a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Search by location</a></li>
                                                    <li><a href="#">Search by designation</a></li>
                                                    <li><a href="#">Search by Organization name</a></li>
                                                    <li><a href="#">Search by skill set</a></li>
                                                </ul>
                                            </li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;