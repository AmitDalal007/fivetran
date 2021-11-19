import React from 'react'
import { Link } from 'react-router-dom'
import WelcomeHeader2 from './WelcomeHeader2'

const Usage = () => {
    return (
        <>
            <div class="container-fluid _signcont pb-4 _bilcont">
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
                                <li class="nav-item"><Link to="billing/" class="nav-link link-dark px-3">Billing</Link></li>
                                <li class="nav-item"><Link to="usage/" class="nav-link link-dark px-3 _manavlink">Usage</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="container-fluid _ussovrf">
                    <div className="container py-5 px-4">
                        <select class="form-select _usswid" aria-label="Default select example">
                            <option selected>November,2021</option>
                            <option value="1">October,2021</option>
                        </select>
                    </div>

                    <div className="container p-4 _uscont2">
                        <p className="_usc2stxt">Paid MAR &nbsp;<i class="bi bi-info-circle-fill"></i></p>
                        <p className="_usc2btxt mb-5">0</p>
                        <span><a href="/" className="_unilb _usc2link">View MAR documentation &rarr;</a></span>
                    </div>

                    <div className="container mt-5 p-4 _uscont2">
                        <div className="d-flex justify-content-between mb-4">
                            <div>
                                <p className="_usc2stxt">Incremental MAR &nbsp;<i class="bi bi-info-circle-fill"></i></p>
                            </div>

                            <div>
                                <div className="_usc3clr1 _usc3ib mx-1"></div>
                                <div className="_usc2stxt _usc3ib mx-1">Paid MAR</div>
                                <div className="_usc3clr2 _usc3ib mx-1"></div>
                                <div className="_usc2stxt _usc3ib mx-1">Free MAR</div>
                                <div className="_usc2stxt _usc3ib mx-1">
                                    <select class="form-select _usc3swid" aria-label="Default select example">
                                        <option selected>All destinations</option>
                                        <option value="1">Warehouse</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="container border-bottom pb-4">
                            <div class="recharts-wrapper _3Xawg _2-hjN _3FnFy"
                                style={{ position: "relative", cursor: "default", width: "882px", height: "200px" }}><svg class="recharts-surface" width="882"
                                    height="200" viewBox="0 0 882 200" version="1.1">
                                    <defs>
                                        <clipPath id="recharts9-clip">
                                            <rect x="65" y="5" height="160" width="812"></rect>
                                        </clipPath>
                                    </defs>
                                    <g class="recharts-cartesian-grid">
                                        <g class="recharts-cartesian-grid-horizontal">
                                            <line stroke="#f5f5f5" fill="none" x="65" y="5" width="812" height="160" offset="[object Object]"
                                                x1="65" y1="165" x2="877" y2="165"></line>
                                            <line stroke="#f5f5f5" fill="none" x="65" y="5" width="812" height="160" offset="[object Object]"
                                                x1="65" y1="125" x2="877" y2="125"></line>
                                            <line stroke="#f5f5f5" fill="none" x="65" y="5" width="812" height="160" offset="[object Object]"
                                                x1="65" y1="85" x2="877" y2="85"></line>
                                            <line stroke="#f5f5f5" fill="none" x="65" y="5" width="812" height="160" offset="[object Object]"
                                                x1="65" y1="45" x2="877" y2="45"></line>
                                            <line stroke="#f5f5f5" fill="none" x="65" y="5" width="812" height="160" offset="[object Object]"
                                                x1="65" y1="5" x2="877" y2="5"></line>
                                        </g>
                                    </g>
                                    <g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                                        <line type="category" orientation="bottom" width="812" height="30" x="65" y="165"
                                            class="recharts-cartesian-axis-line" stroke="#c4c4c4" fill="none" x1="65" y1="165" x2="877" y2="165">
                                        </line>
                                        <g class="recharts-cartesian-axis-ticks">
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="78.53333333333333" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="78.53333333333333" dy="0.71em">1</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="105.6" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="105.6" dy="0.71em">2</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="132.66666666666666" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="132.66666666666666" dy="0.71em">3</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="159.73333333333332" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="159.73333333333332" dy="0.71em">4</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="186.79999999999998" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="186.79999999999998" dy="0.71em">5</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="213.86666666666667" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="213.86666666666667" dy="0.71em">6</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="240.93333333333334" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="240.93333333333334" dy="0.71em">7</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="268" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="268" dy="0.71em">8</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="295.06666666666666" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="295.06666666666666" dy="0.71em">9</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="322.1333333333334" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="322.1333333333334" dy="0.71em">10</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="349.20000000000005" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="349.20000000000005" dy="0.71em">11</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="376.2666666666667" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="376.2666666666667" dy="0.71em">12</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="403.33333333333337" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="403.33333333333337" dy="0.71em">13</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="430.40000000000003" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="430.40000000000003" dy="0.71em">14</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="457.4666666666667" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="457.4666666666667" dy="0.71em">15</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="484.53333333333336" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="484.53333333333336" dy="0.71em">16</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="511.6" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="511.6" dy="0.71em">17</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="538.6666666666666" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="538.6666666666666" dy="0.71em">18</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="565.7333333333333" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="565.7333333333333" dy="0.71em">19</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="592.8" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="592.8" dy="0.71em">20</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="619.8666666666667" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="619.8666666666667" dy="0.71em">21</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="646.9333333333333" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="646.9333333333333" dy="0.71em">22</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="674" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="674" dy="0.71em">23</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="701.0666666666666" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="701.0666666666666" dy="0.71em">24</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="728.1333333333333" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="728.1333333333333" dy="0.71em">25</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="755.1999999999999" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="755.1999999999999" dy="0.71em">26</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="782.2666666666667" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="782.2666666666667" dy="0.71em">27</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="809.3333333333333" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="809.3333333333333" dy="0.71em">28</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="836.4" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="836.4" dy="0.71em">29</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text type="category" orientation="bottom"
                                                width="812" height="30" x="863.4666666666666" y="173" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle">
                                                <tspan x="863.4666666666666" dy="0.71em">30</tspan>
                                            </text></g>
                                        </g>
                                    </g>
                                    <g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                                        <line orientation="left" width="60" height="160" type="number" x="5" y="5"
                                            class="recharts-cartesian-axis-line" stroke="#c4c4c4" fill="none" x1="65" y1="5" x2="65" y2="165">
                                        </line>
                                        <g class="recharts-cartesian-axis-ticks">
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text orientation="left" width="60" height="160"
                                                type="number" x="57" y="165" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                                                <tspan x="57" dy="0.355em">0</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text orientation="left" width="60" height="160"
                                                type="number" x="57" y="125" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                                                <tspan x="57" dy="0.355em">1</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text orientation="left" width="60" height="160"
                                                type="number" x="57" y="85" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                                                <tspan x="57" dy="0.355em">2</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text orientation="left" width="60" height="160"
                                                type="number" x="57" y="45" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                                                <tspan x="57" dy="0.355em">3</tspan>
                                            </text></g>
                                            <g class="recharts-layer recharts-cartesian-axis-tick"><text orientation="left" width="60" height="160"
                                                type="number" x="57" y="12.5" stroke="none" fill="#7b7b7b"
                                                class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end">
                                                <tspan x="57" dy="0.355em">4</tspan>
                                            </text></g>
                                        </g>
                                    </g>
                                    <g class="recharts-layer recharts-bar _3EesZ">
                                        <defs>
                                            <clipPath id="clipPath-recharts-bar-10">
                                                <rect x="65" y="5" width="812" height="160"></rect>
                                            </clipPath>
                                        </defs>
                                        <g class="recharts-layer recharts-bar-rectangles" clip-path="url(#clipPath-recharts-bar-10)">
                                            <g class="recharts-layer">
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="71" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="98.06666666666666" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="125.13333333333333" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="152.2" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="179.26666666666665" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="206.33333333333334" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="233.4" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="260.4666666666667" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="287.5333333333333" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="314.6" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="341.6666666666667" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="368.73333333333335" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="395.8" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="422.8666666666667" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="449.93333333333334" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="477" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="504.06666666666666" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="531.1333333333333" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="558.2" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="585.2666666666667" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="612.3333333333334" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="639.4" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="666.4666666666667" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="693.5333333333333" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="720.6" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="747.6666666666666" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="774.7333333333333" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="801.8" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="828.8666666666667" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="855.9333333333333" y="165.5" width="15" height="0" fill="#9FCFFF" class="_3EesZ">
                                                    </rect>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g class="recharts-layer recharts-bar _3EesZ">
                                        <defs>
                                            <clipPath id="clipPath-recharts-bar-11">
                                                <rect x="65" y="5" width="812" height="160"></rect>
                                            </clipPath>
                                        </defs>
                                        <g class="recharts-layer recharts-bar-rectangles" clip-path="url(#clipPath-recharts-bar-11)">
                                            <g class="recharts-layer">
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="71" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="98.06666666666666" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="125.13333333333333" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="152.2" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="179.26666666666665" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="206.33333333333334" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="233.4" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="260.4666666666667" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="287.5333333333333" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="314.6" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="341.6666666666667" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="368.73333333333335" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="395.8" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="422.8666666666667" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="449.93333333333334" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="477" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="504.06666666666666" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="531.1333333333333" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="558.2" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="585.2666666666667" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="612.3333333333334" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="639.4" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="666.4666666666667" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="693.5333333333333" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="720.6" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="747.6666666666666" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="774.7333333333333" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="801.8" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="828.8666666666667" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="855.9333333333333" y="165.5" width="15" height="0" fill="#FF9FDB" class="_3EesZ">
                                                    </rect>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g class="recharts-layer recharts-bar">
                                        <defs>
                                            <clipPath id="clipPath-recharts-bar-12">
                                                <rect x="65" y="5" width="812" height="160"></rect>
                                            </clipPath>
                                        </defs>
                                        <g class="recharts-layer recharts-bar-rectangles" clip-path="url(#clipPath-recharts-bar-12)">
                                            <g class="recharts-layer">
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="71" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="98.06666666666666" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="125.13333333333333" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="152.2" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="179.26666666666665" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="206.33333333333334" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="233.4" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="260.4666666666667" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="287.5333333333333" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="314.6" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="341.6666666666667" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="368.73333333333335" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="395.8" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="422.8666666666667" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="449.93333333333334" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="477" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="504.06666666666666" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="531.1333333333333" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="558.2" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="585.2666666666667" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="612.3333333333334" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="639.4" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="666.4666666666667" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="693.5333333333333" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="720.6" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="747.6666666666666" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="774.7333333333333" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="801.8" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="828.8666666666667" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                                <g class="recharts-layer recharts-bar-rectangle">
                                                    <rect x="855.9333333333333" y="5.5" width="15" height="160" fill="transparent"></rect>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <div class="recharts-tooltip-wrapper recharts-tooltip-wrapper-left recharts-tooltip-wrapper-top"
                                    style={{ transform: "translate(0px, 0px)", pointerEvents: "none", visibility: "visible", position: "absolute; top: 0px; left: 0px" }}>
                                </div>
                            </div>
                        </div>

                        <div className="container py-4">
                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                                <label class="btn btn-outline-primary" for="btnradio1">All connectors</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                <label class="btn btn-outline-primary" for="btnradio2">Select connectors</label>
                            </div>

                            <div className="_usc2stxt _usc3ib mx-3">
                                0 connectors graphed
                            </div>
                        </div>

                        <div className="container">
                            <input class="form-control me-2 _ussrhwid" type="search" placeholder="Search by connector name" aria-label="Search" />

                            <div className="container pt-4">
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="_usc3tc1 _usc3ttxt">Connector</th>
                                            <th scope="col" className="_usc3tc2 _usc3ttxt">Destination</th>
                                            <th scope="col" className="_usc3tc3 _usc3ttxt">MAR</th>
                                            <th scope="col" className="_usc3tc4 _usc3ttxt">% of total account</th>
                                            <th scope="col" className="_usc3tc5 _usc3ttxt">% change <i class="bi bi-info-circle-fill"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Usage
