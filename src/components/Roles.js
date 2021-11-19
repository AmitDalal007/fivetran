import React from 'react'
import { Link } from 'react-router-dom'
import WelcomeHeader2 from './WelcomeHeader2'

const Roles = () => {
    return (
        <>
            <div class="container-fluid _signcont _welcont _rolewbg">
                <div className="sticky-top">
                    <div class="trial-panel trial-progress bg-light">
                        <div class="trial-panel-step count-step active">
                            <div class="trial-panel-title-container">
                                <div class="trial-panel-title">Connect&nbsp;source</div>
                            </div>
                        </div>
                        <div class="trial-panel-separator"></div>
                        <div class="trial-panel-step count-step">
                            <div class="trial-panel-title-container">
                                <div class="trial-panel-title">Connect&nbsp;destination</div>
                            </div>
                        </div>
                        <div class="trial-panel-separator"></div>
                        <div class="trial-panel-step count-step">
                            <div class="trial-panel-title-container">
                                <div class="trial-panel-title">Complete&nbsp;initial&nbsp;sync</div>
                            </div>
                        </div>
                        <div class="trial-panel-step trial-panel-step-right">Your 14-day trial starts once the initial sync is complete
                        </div>
                    </div>
                    <WelcomeHeader2 />
                    <nav class=" bg-light _manavbg">
                        <div class="container d-flex flex-wrap">
                            <ul class="nav me-auto">
                                <li class="nav-item"><Link to="/manageaccount" class="nav-link link-dark px-3" aria-current="page">Destinations</Link></li>
                                <li class="nav-item"><Link to="/users" class="nav-link link-dark px-3">Users</Link></li>
                                <li class="nav-item"><Link to="/roles" class="nav-link link-dark px-3 _manavlink">Roles</Link></li>
                                <li class="nav-item"><Link to="/settings" class="nav-link link-dark px-3">Settings</Link></li>
                                <li class="nav-item"><Link to="/billing" class="nav-link link-dark px-3">Billing</Link></li>
                                <li class="nav-item"><Link to="/usage" class="nav-link link-dark px-3">Usage</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="container-fluid _ussovrf">
                    <div className="container mb-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h2 className="_unih2 _mahed">Roles</h2>
                                <small className="_mastxt">Manage and create custom roles to restrict access in a more granular way. Note, by default, users have read-only access to a destination.</small>
                            </div>
                            <div>
                                <a className="btn btn-primary _unib" href="/" role="button">+ ROLES</a>
                            </div>
                        </div>
                    </div>

                    <div className="container py-5">
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item _brdrn">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button class="accordion-button collapsed _rolhvrbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                        <div className="d-flex row">
                                            <span className="_roltxtw">Admin</span>
                                            <span className="_roltxts">1 User</span>
                                        </div>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Destination</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Setup and edit destination connection
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Members</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Invite or remove users from the destination group.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Browser Upload</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Upload files (in the "Upload" section).
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Logs</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Setup or edit log service connection.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Transformations</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Setup or edit transformations.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Sources</span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked disabled />
                                                    <label class="btn btn-outline-primary _roledis2" for="btnradio1">ALL</label>

                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" disabled />
                                                    <label class="btn btn-outline-primary _roledis3" for="btnradio2">NONE</label>

                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" disabled />
                                                    <label class="btn btn-outline-primary _roledis3" for="btnradio3">SELECTED</label>
                                                </div>
                                                <div className="_rolmarg2 _rolsmtxt">Setup, edit, or remove connectors.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item _brdrn">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button class="accordion-button collapsed _rolhvrbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        <div className="d-flex row">
                                            <span className="_roltxtw">Analyst</span>
                                            <span className="_roltxts">0 Users</span>
                                        </div>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div class="accordion-body">
                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Destination</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis _roldisuc" type="checkbox" value="" id="flexCheckCheckedDisabled" disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Setup and edit destination connection
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Members</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis _roldisuc" type="checkbox" value="" id="flexCheckCheckedDisabled" disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Invite or remove users from the destination group.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Browser Upload</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Upload files (in the "Upload" section).
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Logs</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Setup or edit log service connection.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Transformations</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Setup or edit transformations.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Sources</span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked disabled />
                                                    <label class="btn btn-outline-primary _roledis2" for="btnradio1">ALL</label>

                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" disabled />
                                                    <label class="btn btn-outline-primary _roledis3" for="btnradio2">NONE</label>

                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" disabled />
                                                    <label class="btn btn-outline-primary _roledis3" for="btnradio3">SELECTED</label>
                                                </div>
                                                <div className="_rolmarg2 _rolsmtxt">Setup, edit, or remove connectors.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item _brdrn">
                                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                    <button class="accordion-button collapsed _rolhvrbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        <div className="d-flex row">
                                            <span className="_roltxtw">Uploader</span>
                                            <span className="_roltxts">0 Users</span>
                                        </div>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div class="accordion-body">
                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Destination</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis _roldisuc" type="checkbox" value="" id="flexCheckCheckedDisabled" disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Setup and edit destination connection
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Members</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis _roldisuc" type="checkbox" value="" id="flexCheckCheckedDisabled" disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Invite or remove users from the destination group.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Browser Upload</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Upload files (in the "Upload" section).
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Logs</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis _roldisuc" type="checkbox" value="" id="flexCheckCheckedDisabled" disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Setup or edit log service connection.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Transformations</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis _roldisuc" type="checkbox" value="" id="flexCheckCheckedDisabled" disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Setup or edit transformations.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Sources</span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" disabled />
                                                    <label class="btn btn-outline-primary _roledis3" for="btnradio1">ALL</label>

                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked disabled />
                                                    <label class="btn btn-outline-primary _roledis2" for="btnradio2">NONE</label>

                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" disabled />
                                                    <label class="btn btn-outline-primary _roledis3" for="btnradio3">SELECTED</label>
                                                </div>
                                                <div className="_rolmarg2 _rolsmtxt">Setup, edit, or remove connectors.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item _brdrn">
                                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                    <button class="accordion-button collapsed _rolhvrbtn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                        <div className="d-flex row">
                                            <span className="_roltxtw">Read Only</span>
                                            <span className="_roltxts">0 Users</span>
                                        </div>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                    <div class="accordion-body">
                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Destination</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis _roldisuc" type="checkbox" value="" id="flexCheckCheckedDisabled" disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Setup and edit destination connection
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Members</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis _roldisuc" type="checkbox" value="" id="flexCheckCheckedDisabled" disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Invite or remove users from the destination group.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Browser Upload</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis _roldisuc" type="checkbox" value="" id="flexCheckCheckedDisabled" disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Upload files (in the "Upload" section).
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Logs</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis _roldisuc" type="checkbox" value="" id="flexCheckCheckedDisabled" disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Setup or edit log service connection.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Transformations</span>
                                            </div>
                                            <div class="col-auto">
                                                <input class="form-check-input _roledis _roldisuc" type="checkbox" value="" id="flexCheckCheckedDisabled" disabled />
                                                <label class="form-check-label _rolmarg2" for="flexCheckCheckedDisabled">
                                                    Setup or edit transformations.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="row g-3 align-items-center pt-4">
                                            <div class="col-auto _rolmarg1">
                                                <span class="">Manage Sources</span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" disabled />
                                                    <label class="btn btn-outline-primary _roledis3" for="btnradio1">ALL</label>

                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked disabled />
                                                    <label class="btn btn-outline-primary _roledis2" for="btnradio2">NONE</label>

                                                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" disabled />
                                                    <label class="btn btn-outline-primary _roledis3" for="btnradio3">SELECTED</label>
                                                </div>
                                                <div className="_rolmarg2 _rolsmtxt">Setup, edit, or remove connectors.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roles
