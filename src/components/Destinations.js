import React from 'react'
import destipr1i from '../images/destipr1i.webp'
import destipr3i from '../images/destipr3i.webp'
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

const Destinations = () => {
    return (
        <>
            {/* 1st Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <h2 className="featurette-heading _unih2">Our pipelines scale with your cloud warehouse.</h2>
                                <p className="_unip">Load all your event, database, file and app data into the cloud warehouse of your choice — and then drill down into any detail.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Talk to an expert</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={destipr1i} alt="" />
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
                                    <h6 className="card-title _unih6">Optimized loading</h6>
                                    <p className="card-text _unip">Cloud data warehouses are infinitely scalable — but expensive to load into. We put most of the process on our servers and optimize every load.</p>
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
                                    <h6 className="card-title _unih6">Base table management</h6>
                                    <p className="card-text _unip">Never work with old data again.</p>
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
                                    <h6 className="card-title _unih6">Vacuuming and cleanup</h6>
                                    <p className="card-text _unip">When warehouses require DBA management, Fivetran runs periodic vacuums and removes upserted or overwritten data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd Portion End */}

            {/* 3rd Portion Start */}
            <div className="container-fluid _unictc">
                <h2 className="_unih2">Connect us to your warehouse in minutes</h2>
                <p className="_unip">You can connect Fivetran to most popular warehouses, including sandbox accounts, in just a few minutes.</p>
                <div className="container py-5">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <h2 className="featurette-heading _unih2">No warehouse, no problem</h2>
                                <p className="_unip">We'll set up a high-performance cloud warehouse for you to use during your trial. When the trial's over, you can keep it or choose a different solution.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Spin up a warehouse</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={destipr3i} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid _unibg py-5">
                <div className="container _unictc d-flex">
                    <a className="btn mx-1 _apr5_1" href="/" role="button">Warehouses</a>
                    <input type="search" className="form-control form-control-dark mx-1 _apr5_3" placeholder="Search 100+ Data Source Connectors" aria-label="Search" />
                </div>
                <div className="container _unictc mt-5">
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
            {/* 4th Portion End */}

            {/* 5th Portion Start */}
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
            {/* 5th Portion End */}

            {/* 6th Portion Start */}
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
            {/* 6th Portion End */}
        </>
    )
}

export default Destinations
