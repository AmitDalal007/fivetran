import React from 'react'
import fivetran from '../images/fivetran.svg'
import asics from '../images/asics.webp'
import solution from '../images/solution.svg'
import npostgres from '../images/npostgres.svg'
import nmysql from '../images/nmysql.svg'
import noracle from '../images/noracle.svg'
import nsql from '../images/nsql.svg'
import ngoogle from '../images/ngoogle.svg'
import nsalesforce from '../images/nsalesforce.svg'
import nnetsuite from '../images/nnetsuite.svg'
import nhubspot from '../images/nhubspot.svg'
import nfivetran from '../images/nfivetran.svg'
import nsecurity from '../images/nsecurity.svg'
import nwhats from '../images/nwhats.svg'
import nextract from '../images/nextract.svg'
import ntransform from '../images/ntransform.svg'
import nembed from '../images/nembed.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/* Header Start */}
            <header className="p-2 border-bottom navbar-header">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <p className="nav me-lg-auto justify-content-center">
                            Fivetran to Acquire HVR; Announces $565M in Series D. &nbsp; <a className="nba" href="/"> Learn More.</a>
                        </p>

                        <div className="d-flex">
                            <a href="/" className="d-block link-dark text-decoration-none mx-3" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="25" height="25" className="rounded-circle" />
                            </a>
                            | <a className="mx-3 nba" href="/">Support</a> <Link className="mx-2 nba" to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header End */}

            {/* Navbar Start */}
            {/* sticky-top */}
            <nav className="navbar navbar-expand-lg container-fluid navbar-light bg-light border-bottom">
                <div className="container">
                    <Link className="navbar-brand" aria-current="page" to="/">
                        <img src={fivetran} alt="" className="nav-logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            {/* Platform Start */}
                            <li className="nav-item drpdown">
                                <span className="nav-link navbar-a">Platform</span>
                                <div className="drpdown-content dcp">
                                    <div className="row d-flex justify-content-between my-5">
                                        <div className="col"></div>
                                        <div className="col-md-3 _npcm3">
                                            <p className="_navresp">OVERVIEW</p>
                                            <ul className="nav flex-column">
                                                <li className="nav-item mb-3"><Link to="/whyfivetran" className=" _navresa _ndca"><img className="_nicon _npicon" src={nfivetran} alt="" /><p className="_ndcp1">Why Fivetran <br /> <span className="_ndcsp">Discover why we are the leader in automated data integration</span></p></Link></li>

                                                <li className="nav-item mb-3"><Link to="/security" className=" _navresa _ndca"><img className="_nicon _npicon" src={nsecurity} alt="" /><p className="_ndcp1">Security <br /> <span className="_ndcsp">Dig into our security, encryption, and compliance</span></p></Link></li>

                                                <li className="nav-item mb-3"><a href="/" className=" _navresa _ndca"><img className="_nicon _npicon" src={nwhats} alt="" /><p className="_ndcp1">What's New? <br /> <span className="_ndcsp">Get the latest updates & feature releases</span></p></a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 _npcm3">
                                            <p className="_navresp">PRODUCTS</p>
                                            <ul className="nav flex-column">
                                                <li className="nav-item mb-3"><Link to="/extractload" className=" _navresa _ndca"><img className="_nicon _npicon" src={nextract} alt="" /><p className="_ndcp1">Extract & Load <br /> <span className="_ndcsp">Centralize your data within a target destination with fully managed data connectrs</span></p></Link></li>

                                                <li className="nav-item mb-3"><Link to="/transform" className=" _navresa _ndca"><img className="_nicon _npicon" src={ntransform} alt="" /><p className="_ndcp1">Transform <br /> <span className="_ndcsp">Develop insights by creating, testing and documenting new data modals</span></p></Link></li>

                                                <li className="nav-item mb-3"><Link to="/embed" className=" _navresa _ndca"><img className="_nicon _npicon" src={nembed} alt="" /><p className="_ndcp1">Embed <br /> <span className="_ndcsp">Build powerful data experiences that your customers can trust</span></p></Link></li>
                                            </ul>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </li>
                            {/* Platform End */}

                            {/* Solution Start */}
                            <li className="nav-item drpdown">
                                <span className="nav-link navbar-a">Solutions</span>
                                <div className="drpdown-content dcs">
                                    <div className="row d-flex justify-content-between my-5">
                                        <div className="col"></div>
                                        <div className="col-md-2">
                                            <p className="_navresp">BY USE CASE</p>
                                            <ul className="nav flex-column">
                                                <li className="nav-item mb-1"><Link to="/customersupport" className=" _navresa">Customer Support</Link></li>
                                                <li className="nav-item mb-1"><Link to="/marketing" className=" _navresa">Marketing</Link></li>
                                                <li className="nav-item mb-1"><Link to="/finance" className=" _navresa">Finance</Link></li>
                                                <li className="nav-item mb-1"><Link to="/sales" className=" _navresa">Sales</Link></li>
                                                <li className="nav-item mb-1"><Link to="/productengineering" className=" _navresa">Product & Engineering</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-2">
                                            <p className="_navresp">BY TEAM</p>
                                            <ul className="nav flex-column">
                                                <li className="nav-item mb-1"><Link to="/dataengineering" className=" _navresa">Data Engineering</Link></li>
                                                <li className="nav-item mb-1"><Link to="/datascience" className=" _navresa">Data Science</Link></li>
                                                <li className="nav-item mb-1"><Link to="/dataanalyticsbusinessintelligence" className=" _navresa">Data Analysts</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-2">
                                            <p className="_navresp">FEATURED</p>
                                            <ul className="nav flex-column">
                                                <li className="nav-item mb-1"><Link to="/databasereplication" className=" _navresa">Database Replication</Link></li>
                                                <li className="nav-item mb-1"><Link to="/embed" className=" _navresa">External Data Integration</Link></li>
                                                <li className="nav-item mb-1"><Link to="/enterprise" className=" _navresa">Enterprise</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-2 _navresl">
                                            <Link className="_navra" to="/embed">
                                                <img className="_nrimg" src={solution} alt="" />
                                                <p className="_navresa">Powered by Fivetran</p>
                                                <p className="_navsp">The easiest way for customers to connect their data to your app</p>
                                                <span className="_unilb">Get Powered Today →</span>
                                            </Link>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </li>
                            {/* Solution End */}

                            {/* Connectors Start */}
                            <li className="nav-item drpdown">
                                <a className="nav-link navbar-a" href="/">Connectors<span className="badge _conb">150+</span></a>
                                <div className="drpdown-content dcc">
                                    <div className="row d-flex justify-content-between my-5">
                                        <div className="col"></div>
                                        <div className="col-md-2">
                                            <p className="_navresp">CATEGORIES</p>
                                            <ul className="nav flex-column">
                                                <li className="nav-item mb-1"><a href="/" className=" _navresa">Marketing</a></li>
                                                <li className="nav-item mb-1"><a href="/" className=" _navresa">Database</a></li>
                                                <li className="nav-item mb-1"><a href="/" className=" _navresa">Finance</a></li>
                                                <li className="nav-item mb-1"><a href="/" className=" _navresa">HR</a></li>
                                                <li className="nav-item mb-1"><a href="/" className=" _navresa">Product</a></li>
                                                <li className="nav-item mb-1"><a href="/" className=" _navresa">Customer Service</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <p className="_navresp">DATABASE CONNECTORS</p>
                                            <ul className="nav flex-column">
                                                <li className="nav-item mb-3"><a href="/" className=" _navresa _ndca"><img className="_nicon" src={npostgres} alt="" /><p className="_ndcp1">PostgreSQL Database <br /> <span className="_ndcsp">Database</span></p></a></li>

                                                <li className="nav-item mb-3"><a href="/" className=" _navresa _ndca"><img className="_nicon" src={nmysql} alt="" /><p className="_ndcp1">MySQL Database <br /> <span className="_ndcsp">Database</span></p></a></li>

                                                <li className="nav-item mb-3"><a href="/" className=" _navresa _ndca"><img className="_nicon" src={noracle} alt="" /><p className="_ndcp1">Oracle <br /> <span className="_ndcsp">Database</span></p></a></li>

                                                <li className="nav-item mb-3"><a href="/" className=" _navresa _ndca"><img className="_nicon" src={nsql} alt="" /><p className="_ndcp1">SQL Server <br /> <span className="_ndcsp">Database</span></p></a></li>

                                                <a className="_unilb my-2" href="/">View all →</a>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <p className="_navresp">FEATURED</p>
                                            <ul className="nav flex-column">
                                                <li className="nav-item mb-3"><a href="/" className=" _navresa _ndca"><img className="_nicon" src={ngoogle} alt="" /><p className="_ndcp1">Google Ads <br /> <span className="_ndcsp">Application</span></p></a></li>

                                                <li className="nav-item mb-3"><a href="/" className=" _navresa _ndca"><img className="_nicon" src={nsalesforce} alt="" /><p className="_ndcp1">Salesforce <br /> <span className="_ndcsp">Application</span></p></a></li>

                                                <li className="nav-item mb-3"><a href="/" className=" _navresa _ndca"><img className="_nicon" src={nnetsuite} alt="" /><p className="_ndcp1">NetSuite SuiteAnalytics <br /> <span className="_ndcsp">Application</span></p></a></li>

                                                <li className="nav-item mb-3"><a href="/" className=" _navresa _ndca"><img className="_nicon" src={nhubspot} alt="" /><p className="_ndcp1">Hubspot <br /> <span className="_ndcsp">Application</span></p></a></li>

                                                <a className="_unilb my-2" href="/">View all →</a>
                                            </ul>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </li>
                            {/* Connectors End */}

                            {/* Pricing Start */}
                            <li className="nav-item">
                                <Link className="nav-link navbar-a pricing" to="/rowcalculator">Pricing</Link>
                            </li>
                            {/* Pricing End */}

                            {/* Resources Start */}
                            <li className="nav-item drpdown">
                                <span className="nav-link navbar-a">Resources</span>
                                <div className="drpdown-content dcr">
                                    <div className="row d-flex justify-content-between my-5">
                                        <div className="col"></div>
                                        <div className="col-md-2">
                                            <p className="_navresp">Resources</p>
                                            <ul className="nav flex-column">
                                                <li className="nav-item mb-1"><a href="/" className=" _navresa">Blog</a></li>
                                                <li className="nav-item mb-1"><Link to="/casestudies" className=" _navresa">Case Studies</Link></li>
                                                <li className="nav-item mb-1"><a href="/" className=" _navresa">Documentation</a></li>
                                                <li className="nav-item mb-1"><a href="/" className=" _navresa">Events</a></li>
                                                <li className="nav-item mb-1"><a href="/" className=" _navresa">News and Press</a></li>
                                                <li className="nav-item mb-1"><a href="/" className=" _navresa">Resource Center</a></li>
                                                <li className="nav-item mb-1"><a href="/" className=" _navresa">Webinars</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-2">
                                            <p className="_navresp">Partners</p>
                                            <ul className="nav flex-column">
                                                <li className="nav-item mb-1"><Link to="/findpartner" className=" _navresa">Find a Partner</Link></li>
                                                <li className="nav-item mb-1"><Link to="/systemintegrators" className=" _navresa">System Integrators</Link></li>
                                                <li className="nav-item mb-1"><Link to="/technologypartners" className=" _navresa">Technology Partners</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-2">
                                            <p className="_navresp">Support</p>
                                            <ul className="nav flex-column">
                                                <li className="nav-item mb-1"><a href="/" className=" _navresa">Support Portal</a></li>
                                                <li className="nav-item mb-1"><Link to="/faq" className=" _navresa">FAQs</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-2 _navresl">
                                            <p className="_navresp">FEATURED CONTENT:</p>
                                            <a className="_navra" href="/">
                                                <img className="_nrimg" src={asics} alt="" />
                                                <p className="_navresa">ASICS Focuses on Digital Innovation, Not ELT</p>
                                                <span className="_unilb">Read Case Study →</span>
                                            </a>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </li>
                            {/* Resources End */}
                        </ul>
                        {/* Buttons */}
                        <div className="navbar-nav me-auto">
                            <a className="btn btn-outline-primary nav-btn" href="/" role="button">Get a Demo</a>
                            <Link className="btn btn-primary nav-btn" to="/signup" role="button">SignUp</Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navbar Footer */}
            <div className="container-fluid py-1 nav-foot sticky-top border-bottom">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <a href="/" className="d-flex align-items-center mb-1 mb-lg-0 text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                    </a>

                    <form className="col-12 col-lg-auto mb-lg-0 me-lg-3 d-flex align-items-center">
                        <i className="bi bi-search mx-3"></i>
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Navbar