import React from 'react'
import { Link } from 'react-router-dom'
import WelcomeHeader2 from './WelcomeHeader2'

const Settings = () => {
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
                                <li class="nav-item"><Link to="/manageaccount" class="nav-link link-dark px-3" aria-current="page">Destinations</Link></li>
                                <li class="nav-item"><Link to="/users" class="nav-link link-dark px-3">Users</Link></li>
                                <li class="nav-item"><Link to="/roles" class="nav-link link-dark px-3">Roles</Link></li>
                                <li class="nav-item"><Link to="/settings" class="nav-link link-dark px-3 _manavlink">Settings</Link></li>
                                <li class="nav-item"><Link to="/billing" class="nav-link link-dark px-3">Billing</Link></li>
                                <li class="nav-item"><Link to="/usage" class="nav-link link-dark px-3">Usage</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="container mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="_unih2 _mahed">Account Settings</h2>
                        </div>
                    </div>
                </div>

                <div className="container-fluid _ssovrf">
                    <div className="container">
                        <form>
                            <div className="container border-bottom">
                                <span className="_ssmtxt">General</span>
                            </div>
                            <div class="row g-3 align-items-center pt-4">
                                <div class="col-auto">
                                    <label for="name" class="col-form-label _sslblwid">Name</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="name" class="form-control _ssinwid" value="Amit_2" />
                                </div>
                            </div>
                            <div className="container border-bottom pt-5">
                                <span className="_ssmtxt">Authentication Config</span>
                            </div>
                            <div class="row g-3 align-items-center pt-4">
                                <div class="col-auto">
                                    <label for="authentication" class="col-form-label _sslblwid">Required authentication type</label>
                                </div>
                                <div class="col-auto">
                                    <select class="form-select _ssinwid" aria-label="Default select example">
                                        <option selected>No Restrictions</option>
                                        <option value="1">Google OAuth</option>
                                        <option value="2">SAML</option>
                                    </select>
                                    <div id="emailHelp" class="form-text">Restrict authentication type for account users</div>
                                </div>
                            </div>
                            <div className="container border-bottom pt-5">
                                <span className="_ssmtxt">SAML Config</span>
                            </div>
                            <div class="row g-3 align-items-center pt-4">
                                <div class="col-auto">
                                    <label for="authentication" class="col-form-label _sslblwid">Required authentication type</label>
                                </div>
                                <div class="col-auto">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                    </div>
                                    <div id="emailHelp" class="form-text">Enable SAML authentication for your organization through an identity provider <br /> like Okta, Onelogin, or any other SAML 2.0 provider.</div>
                                </div>
                            </div>
                            <div class="row g-3 align-items-center pt-4">
                                <div class="col-auto">
                                    <label for="authentication" class="col-form-label _sslblwid">Enable user provisioning</label>
                                </div>
                                <div class="col-auto">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                        <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                                    </div>
                                    <div id="emailHelp" class="form-text">Automatically create users logging in with SAML</div>
                                </div>
                            </div>

                            <div class="row g-3 align-items-center pt-4">
                                <div class="col-auto">
                                    <label for="name" class="col-form-label _sslblwid">Sign on URL</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="name" class="form-control _ssinwid" value="" placeholder="https://myapp.example.com/application_id" disabled />
                                    <div id="emailHelp" class="form-text">Users will be forwarded to this URL, when SAML is the only allowed <br /> authentication</div>
                                </div>
                            </div>

                            <div class="row g-3 align-items-center pt-4">
                                <div class="col-auto">
                                    <label for="name" class="col-form-label _sslblwid">Issuer</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="name" class="form-control _ssinwid" value="" placeholder="https://idp.example.com/metadata.php" disabled />
                                    <div id="emailHelp" class="form-text">Unique URL generated by your SAML Identity Provider</div>
                                </div>
                            </div>
                            <div class="row g-3 align-items-center pt-4">
                                <div class="col-auto">
                                    <label for="name" class="col-form-label _sslblwid">Public certificate</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="name" class="form-control _ssinwid" value="" placeholder="Paste x509 certicicate" disabled />
                                </div>
                            </div>

                            <div className="container border-bottom pt-5">
                                <span className="_ssmtxt">API Config</span>
                            </div>
                            <div class="row g-3 align-items-center pt-4">
                                <div class="col-auto">
                                    <label for="authentication" class="col-form-label _sslblwid">API key</label>
                                </div>
                                <div class="col-auto">
                                    <span>p2Zo5ey6q7AdAcxd</span>
                                </div>
                            </div>
                            <div class="row g-3 align-items-center pt-4 pb-3 border-bottom">
                                <div class="col-auto">
                                    <label for="name" class="col-form-label _sslblwid">API secret</label>
                                </div>
                                <div class="col-auto">
                                    <input type="password" id="name" class="form-control _ssinwid" value="64NhEtiyWqxQa8S7nLTgES8dxSqwFG07" />
                                    <div className="mt-3">
                                        <button type="button" class="btn btn-outline-primary _ssobtn mx-1">Show</button>
                                        <button type="button" class="btn btn-outline-primary _ssobtn mx-1">Generate</button>
                                    </div>
                                </div>
                            </div>

                            <div class="row g-3 align-items-center pt-4">
                                <div class="col-auto">
                                    <label for="name" class="col-form-label _sslblwid"></label>
                                </div>
                                <div class="col-auto">
                                    <div className="mt-3">
                                        <button type="button" class="btn btn-primary mx-1">SAVE CONFIG</button>
                                        <button type="button" class="btn btn-outline-primary _ssobtn mx-1">BACK TO DASHBOARD</button>
                                    </div>
                                </div>
                            </div>

                            <div className="container border-bottom pt-5">
                                <span className="_ssmtxt">Test source or destination connection for new <a href="/" className="_unilb">IPs</a></span>
                            </div>
                            <div class="row g-3 align-items-center pt-4">
                                <div class="col-auto">
                                    <label for="name" class="col-form-label _sslblwid">Host</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="name" class="form-control _ssinwid" />
                                </div>
                            </div>
                            <div class="row g-3 align-items-center pt-4">
                                <div class="col-auto">
                                    <label for="name" class="col-form-label _sslblwid">Port Number</label>
                                </div>
                                <div class="col-auto">
                                    <input type="number" id="name" class="form-control _ssinwid" />
                                </div>
                            </div>
                            <div class="row g-3 align-items-center pt-4 pb-3 border-bottom">
                                <div class="col-auto">
                                    <label for="name" class="col-form-label _sslblwid">Region</label>
                                </div>
                                <div class="col-auto">
                                    <select class="form-select _ssinwid" aria-label="Default select example">
                                        <option selected>US</option>
                                        <option value="1">EU</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row g-3 align-items-center pt-4">
                                <div class="col-auto">
                                    <label for="name" class="col-form-label _sslblwid"></label>
                                </div>
                                <div class="col-auto">
                                    <div className="mt-3">
                                        <button type="button" class="btn btn-primary mx-1">TEST</button>
                                    </div>
                                </div>
                            </div>

                            <div className="container border-bottom pt-5">
                                <span className="_ssmtxt">Validated Certificates & Keys</span>
                            </div>
                            <div className="container">
                                <div className="py-3">
                                    <small>Certificates and keys that a user on this account has validated.</small>
                                </div>

                                <table class="table py-5 table-borderless">
                                    <thead>
                                        <tr className="table-active">
                                            <th scope="col">Name</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Connector</th>
                                            <th scope="col">Validated By</th>
                                            <th scope="col">Validated Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th></th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings
