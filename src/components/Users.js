import React from 'react'
import { Link } from 'react-router-dom'
import WelcomeHeader2 from './WelcomeHeader2'

const Users = () => {
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
                                <li class="nav-item"><Link to="/users" class="nav-link link-dark px-3  _manavlink">Users</Link></li>
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
                            <h2 className="_unih2 _mahed">Users</h2>
                            <small className="_mastxt">Manage users and their permissions. For a full list of permissions, see <a href="/" className="_unilb">our documentation</a>.</small>
                        </div>
                        <div>
                            <a className="btn btn-primary _unib" href="/" role="button">+ USER</a>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="_oFJ1 _2mu9v o74Fu GQ1tB iqc0Q">
                        <div class="kwIN5 zupz-">
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" class="svg-inline--fa fa-search fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
                        </div>
                        <input class="_2Wpqb GQ1tB _2VsvA _userswid" type="text" spellcheck="false" placeholder="Search all sources..." ></input>
                    </div>
                </div>

                <div className="container">
                    <table class="table _ustbhwid">
                        <thead>
                            <tr>
                                <th scope="col" className="_ustbhwi"></th>
                                <th scope="col" className="_ustbhwi _ustcol2">Amit <br /><small className="_mastxt">Account</small></th>
                                <th scope="col" className="_ustbhwi _ustcol2">Warehouse</th>
                                <th scope="col" className="_ustbhwi"></th>
                            </tr>
                        </thead>
                    </table>
                    <table >
                        <div className="_ustable">
                            <tbody>
                                <tr>
                                    <td className="_ustbhwi23"><div class="d-flex align-items-center">
                                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                                        <div className="_welhdend">
                                            <div> <small className="_welcmtxt">Amit Dalal</small></div>
                                            <div className="_mastxt d-inline-block text-truncate" style={{ maxWidth: "145px" }}> <small className="_mastxt" >dalalamit.201@gmail.com</small></div>
                                        </div>
                                    </div>
                                    </td>
                                    <td className="_ustbhwi2 _ustcol2">Otto</td>
                                    <td className="_ustbhwi2 _ustcol2">@mdo</td>
                                    <td className="_ustbhwi2"></td>
                                </tr>
                            </tbody>
                        </div>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Users
