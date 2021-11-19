import React from 'react'
import { Link } from 'react-router-dom'
import WelcomeHeader2 from './WelcomeHeader2'

const ManageAccount = () => {
    return (
        <>
            <div class="container-fluid _signcont _welcont">
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
                            <li class="nav-item"><Link to="/manageaccount" class="nav-link link-dark px-3 _manavlink" aria-current="page">Destinations</Link></li>
                            <li class="nav-item"><Link to="/users" class="nav-link link-dark px-3">Users</Link></li>
                            <li class="nav-item"><Link to="/roles" class="nav-link link-dark px-3">Roles</Link></li>
                            <li class="nav-item"><Link to="/settings" class="nav-link link-dark px-3">Settings</Link></li>
                            <li class="nav-item"><Link to="/billing" class="nav-link link-dark px-3">Billing</Link></li>
                            <li class="nav-item"><Link to="/usage" class="nav-link link-dark px-3">Usage</Link></li>
                        </ul>
                    </div>
                </nav>
                </div>

                <div className="container mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="_unih2 _mahed">Destinations</h2>
                            <small className="_mastxt">Access the dashboard for each destination and manage the destinations associated with your account.</small>
                        </div>
                        <div>
                        <a className="btn btn-primary _unib" href="/" role="button">+ DESTINATION</a>
                        </div>
                    </div>
                </div>
                
                <div className="container border-top border-bottom">
                    <div className="container">
                        <span className="_madata">Warehouse</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageAccount
