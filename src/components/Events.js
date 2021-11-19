import React from 'react'
import evntpr1i from '../images/evntpr1i.webp'
import evntpr4i1 from '../images/evntpr4i1.svg'
import evntpr4i2 from '../images/evntpr4i2.svg'
// Not for this page From Here 
import epr10i1 from '../images/epr10i1.svg'
import epr10i2 from '../images/epr10i2.svg'
import epr10i3 from '../images/epr10i3.svg'
import epr10i4 from '../images/epr10i4.svg'
import epr10i5 from '../images/epr10i5.svg'
import epr10i6 from '../images/epr10i6.svg'
// To Here
import apr6i1 from '../images/apr6i1.svg'
import apr6i2 from '../images/apr6i2.svg'
import Navbar from './Navbar'
import Footer from './Footer'

const Events = () => {
    return (
        <>
            <Navbar />

            {/* 1st Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <h2 className="featurette-heading _unih2">Analyze every event, anticipate every behavior.</h2>
                                <p className="_unip">Track billions of daily events down to the individual button click from any site, mobile app or internal server. Then send the data directly to your warehouse and dig in.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Talk to an expert</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={evntpr1i} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 1st Portion End */}

            {/* 2nd Portion Start */}
            <div className="container-fluid _3rdprt _wfp2c1">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div>
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2 card-img-top _3contimg" viewBox="0 0 16 16">
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title _unih6">Track everything</h6>
                                    <p className="card-text _unip">Creating exceptional user experiences is a competitive necessity. Add a customizable tracking service to register every click, signup, login, submission, download, swipe and share.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2 card-img-top _3contimg" viewBox="0 0 16 16">
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title _unih6">Zero infrastructure required</h6>
                                    <p className="card-text _unip">Our data collector scales to billions of events per day and automatically retains a secure backup. We can easily reload your events if your warehouse is ever compromised.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2 card-img-top _3contimg" viewBox="0 0 16 16">
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title _unih6">Centralize your raw event data</h6>
                                    <p className="card-text _unip">We make it simple to deploy complex, scalable event collection systems. Fivetran manages the systems and delivers the endpoints you need.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd Portion End */}

            {/* 3rd Portion Start */}
            <div className="container-fluid _unibg py-3">
                <div className="container px-4">
                    <p className="_unip _epr7pa pt-5">HOW IT WORKS</p>
                    <h2 className="_unih2 ">Effortless event collection</h2>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card-body">
                                <p className="card-text _unip">Our toolkit makes it easy to replicate data from any source with outgoing messaging capability.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <p className="card-text _unip d-flex"><i className="bi bi-info-circle _unibc mx-2"></i><span>Learn why this isn’t magic</span></p>
                            </div>
                        </div>
                        <div className="col _unictc">
                            <a className="btn btn-primary _unib" href="/" role="button">Documentation</a>
                        </div>
                    </div>
                </div>

                <div className="container my-5 px-4">
                    <div className="row row-cols-1 row-cols-md-3 g-5">
                        <div className="col">
                            <div className="card-body _apr3crdb">
                                <p className="card-text _unip d-flex"><i className="bi bi-play-circle-fill _unibc mx-2"></i><span>Step 1. Create a Fivetran endpoint.</span></p>
                                <p className="card-text _unip">We’ll generate a unique URL for you.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body _apr3crdb">
                                <p className="card-text _unip d-flex"><i className="bi bi-play-circle-fill _unibc mx-2"></i><span>Step 2. Start sending data.</span></p>
                                <p className="card-text _unip">Send data from your application, web tracker or webhook source to that URL.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body _apr3crdb">
                                <p className="card-text _unip d-flex"><i className="bi bi-play-circle-fill _unibc mx-2"></i><span>Step 3. Watch the data roll in.</span></p>
                                <p className="card-text _unip">Fivetran will collect all incoming events, permanently store them in an S3 repo, and then process and load them into your warehouse.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container _unima _unictc pb-5">
                    <iframe className="_apr3v" title="evntpr3v" src="https://s3.amazonaws.com/fivetran-website/events/h264/event-step-01.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
            </div>
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid py-4">
                <div className="container _unictc">
                    <h2 className="_unih2">Events from thousands of applications</h2>
                    <p className="_unip">Fivetran can collect data from any application that sends it via webhooks or event service.</p>
                </div>
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 mt-3 _unictc">
                        <div className="col">
                            <div className="card _evntpr4c">
                                <a className="_unictc" href="/">
                                    <img src={evntpr4i1} className="card-img-top _evntpr4ci" alt="..." />
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _evntpr4c">
                                <a className="_6crda" href="/">
                                    <img src={evntpr4i2} className="card-img-top _evntpr4ci" alt="..." />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th Portion End */}

            {/* 5th Portion Start */}
            <div className="container-fluid _unibg py-5">
                <div className="container _unictc d-flex">
                    <a className="btn mx-1 _apr5_1" href="/" role="button">Events</a>
                    <a className="btn btn-primary _unib mx-1 _apr5_2" href="/" role="button">View All</a>
                    <input type="search" className="form-control form-control-dark mx-1 _apr5_3" placeholder="Search 100+ Data Source Connectors" aria-label="Search" />
                    <select className="form-select mx-1 _apr5_4" aria-label="Default select example" placeholder="Filter By Type">
                        <option value="1">Marketing Analytics</option>
                        <option value="2">Databases</option>
                        <option value="3">Sales Analytics</option>
                        <option value="4">Product Analytics</option>
                        <option value="5">Finance & Ops Analytics</option>
                        <option value="6">Finance & Ops Analytics</option>
                        <option value="7">Engineering Analytics</option>
                    </select>
                </div>
                <div className="container _unictc mt-5">
                    <p className="_unip _epr7pa">DATA SOURCE CONNECTOR DIRECTORY</p>
                    <h2 className="_unih2">Connectors for every data source.</h2>
                    <div className="row _unictc _epr10c">
                        <div className="col-lg-4 _wfpr7crd">
                            <a className="_wfpr7a" href="/">
                                <img className="_wfpr7img _epr10img" src={epr10i1} alt="" />
                                <span className="_unip py-3">APPLICATION</span>
                                <span className="_unilb py-3">Facebook Ads Insights</span>
                            </a>
                        </div>

                        <div className="col-lg-4 _wfpr7crd">
                            <a className="_wfpr7a" href="/">
                                <img className="_wfpr7img _epr10img" src={epr10i2} alt="" />
                                <span className="_unip py-3">APPLICATION</span>
                                <span className="_unilb py-3">Google Analytics</span>
                            </a>
                        </div>

                        <div className="col-lg-4 _wfpr7crd">
                            <a className="_wfpr7a" href="/">
                                <img className="_wfpr7img _epr10img" src={epr10i3} alt="" />
                                <span className="_unip py-3">APPLICATION</span>
                                <span className="_unilb py-3">Salesforce</span>
                            </a>
                        </div>

                        <div className="col-lg-4 _wfpr7crd">
                            <a className="_wfpr7a" href="/">
                                <img className="_wfpr7img _epr10img" src={epr10i4} alt="" />
                                <span className="_unip py-3">DATABASE</span>
                                <span className="_unilb py-3">PostgreSQL Database</span>
                            </a>
                        </div>

                        <div className="col-lg-4 _wfpr7crd">
                            <a className="_wfpr7a" href="/">
                                <img className="_wfpr7img _epr10img" src={epr10i5} alt="" />
                                <span className="_unip py-3">APPLICATION</span>
                                <span className="_unilb py-3">Google Ads</span>
                            </a>
                        </div>

                        <div className="col-lg-4 _wfpr7crd">
                            <a className="_wfpr7a" href="/">
                                <img className="_wfpr7img _epr10img" src={epr10i6} alt="" />
                                <span className="_unip py-3">APPLICATION</span>
                                <span className="_unilb py-3">Stripe</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 5th Portion End */}

            {/* 6th Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-6 order-md-1 _unima _unictc">
                            <img className="_apr6i" src={apr6i1} alt="" />
                            <div className="card-body">
                                <h2 className="card-title _unih2">Request Connector</h2>
                                <p className="card-text _unip">Don’t see a data source you need? We add new connectors based on customer requests.</p>
                                <a className="card-text _unilb" href="/">Please request new data sources through our Feature Request Portal!</a>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 _unima _unictc">
                            <img className="_apr6i" src={apr6i2} alt="" />
                            <div className="card-body">
                                <h2 className="card-title _unih2">View Articles from our Blog</h2>
                                <p className="card-text _unip">Stay up to date with new connectors and features as they become available.</p>
                                <a className="card-text _unilb mx-3" href="/">Check out our latest blog entry</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 6th Portion End */}

            {/* 7th Portion Start */}
            <div className="container-fluid border-top">
                <div className="container _unima">
                    <div className="row featurette">
                        <div className="col-md-7 _unima">
                            <div className="container">
                                <h2 className="featurette-heading _unih2">Start analyzing your data in minutes, not months</h2>
                                <p className="_unip">Launch any Fivetran connector instantly.</p>
                            </div>
                        </div>
                        <div className="col-md-5 _unima">
                            <a className="btn btn-primary _unib mx-2 _wfp12b" href="/" role="button">Start a free trial</a>
                            <a className="btn btn-outline-primary _uniob mx-2 _wfp12b" href="/" role="button">Get a demo</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 7th Portion End */}

            <Footer />
        </>
    )
}

export default Events
