import React from 'react'
import { Link } from 'react-router-dom'
import WelcomeHeader2 from './WelcomeHeader2'

const Billing = () => {
    return (
        <>
            <div class="container-fluid _signcont _bilcont">
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
                                <li class="nav-item"><Link to="/roles" class="nav-link link-dark px-3">Roles</Link></li>
                                <li class="nav-item"><Link to="/settings" class="nav-link link-dark px-3">Settings</Link></li>
                                <li class="nav-item"><Link to="/billing" class="nav-link link-dark px-3 _manavlink">Billing</Link></li>
                                <li class="nav-item"><Link to="/usage" class="nav-link link-dark px-3">Usage</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="container-fluid _ussovrf">
                    <div className="container py-5">
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="23" fill="currentColor" class="bi bi-info-circle-fill _biliclr" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                        </svg> This page will be available after you complete your first sync.</p>
                    </div>

                    <div className="container pt-4 pb-4 border-bottom">
                        <div class="row row-cols-1 row-cols-md-5 g-3 pb-5">
                            <div class="col">
                                <div class="card _bilcrd">
                                    <div class="card-body">
                                        <h5 class="card-title _bilwtxt">Starter</h5>
                                        <p class="card-text">$1.00 per credit</p>
                                        <div className="_bilecont _unictc d-flex align-items-center">

                                        </div>

                                        <p className="card-text _bilbg">What's included:</p>

                                        <p className="card-text border-bottom pb-2">1 hour minimum sync frequency</p>
                                        <p className="card-text border-bottom pb-2">150+ fully-managed connectors</p>
                                        <p className="card-text border-bottom pb-2">24/7 global support</p>
                                        <p className="card-text border-bottom pb-2">Analytic-ready schemas</p>
                                        <p className="card-text border-bottom pb-2">14-days of free use for all new connectors</p>
                                        <p className="card-text border-bottom pb-2">Integrated Fivetran Transformations</p>
                                        <p className="card-text border-bottom pb-2">SSO</p>
                                        <p className="card-text border-bottom pb-2">SOC 2 Type II and ISO 27001 Certifications</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card _bilcrd">
                                    <div class="card-body">
                                        <h5 class="card-title _bilwtxt">Standard</h5>
                                        <p class="card-text">$1.50 per credit</p>
                                        <div className="_bilecont _unictc d-flex align-items-center">

                                        </div>

                                        <p className="card-text _bilbg">All features in Starter, plus:</p>

                                        <p className="card-text border-bottom pb-2">15-minute minimum sync frequency</p>
                                        <p className="card-text border-bottom pb-2">Fully-managed database connectors</p>
                                        <p className="card-text border-bottom pb-2">Access to Fivetran's REST API</p>
                                        <p className="card-text border-bottom pb-2">SLA for system uptime</p>
                                        <p className="card-text border-bottom pb-2">SSH tunnels for encryption</p>
                                        <p className="card-text border-bottom pb-2">Reverse SSH tunnels <br /> (annual contract only)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card _bilcrd">
                                    <div class="card-body">
                                        <h5 class="card-title _bilwtxt">Enterprise</h5>
                                        <p class="card-text">$2.00 per credit</p>
                                        <div className="_bilecont _unictc d-flex align-items-center">

                                        </div>

                                        <p className="card-text _bilbg">All features in Standard, plus:</p>

                                        <p className="card-text border-bottom pb-2">5-minute minimum sync frequency</p>
                                        <p className="card-text border-bottom pb-2">Streaming logging to external tools</p>
                                        <p className="card-text border-bottom pb-2">SLA for data delivery</p>
                                        <p className="card-text border-bottom pb-2">SLA for 1-hr support response</p>
                                        <p className="card-text border-bottom pb-2">User permissioning for custom controls</p>
                                        <p className="card-text border-bottom pb-2">VPN tunnels for advanced security (annual contract only)</p>
                                        <p className="card-text border-bottom pb-2">Support for multiple subsidiaries</p>
                                        <p className="card-text border-bottom pb-2">Select cloud provider (GCP, AWS or Azure)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card _bilcrd">
                                    <div class="card-body">
                                        <h5 class="card-title _bilwtxt">Business Critical</h5>
                                        <p class="card-text">Contact us for pricing</p>
                                        <div className="_bilecont _unictc d-flex align-items-center">
                                            <a className="btn btn-primary _unib" href="/" role="button">Contact us</a>
                                        </div>

                                        <p className="card-text _bilbg">All features in Enterprise, plus:</p>

                                        <p className="card-text border-bottom pb-2">AWS PrivateLink for advanced security</p>
                                        <p className="card-text border-bottom pb-2">Operate Fivetran in chosen AWS region</p>
                                        <p className="card-text border-bottom pb-2">Customer-managed keys for encryption</p>
                                        <p className="card-text border-bottom pb-2">PCI DSS Level 1 certification</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <span><a href="/" className="_unilb">Visit our website for detailed plan information</a></span>
                    </div>

                    <div className="container py-5">
                        <span>Need more help?</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <button className="_bilfbtn">Talk To Sales</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Billing
