import React from 'react'
import apr1i from '../images/apr1i.webp'
import apr4i from '../images/apr4i.webp'
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

const Applications = () => {
    return (
        <>
            {/* 1st Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <h2 className="featurette-heading _unih2">Unlock the potential of SaaS.</h2>
                                <p className="_unip">Cloud apps make your team faster and more powerful, additional data deepens your insights, and Fivetran connects to all your new tools and services. What’s the downside again?</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Talk to an expert</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={apr1i} alt="" />
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
                                    <h6 className="card-title _unih6">See the logic</h6>
                                    <p className="card-text _unip">We create a thoughtful ERD for every data source, ensuring your data is easy to understand and easy to query.</p>
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
                                    <h6 className="card-title _unih6">Own your data down to the row</h6>
                                    <p className="card-text _unip">SaaS apps were built to use, not to query, and your data disappears once you stop using them. Take back ownership by replicating into a warehouse at the row level.</p>
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
                                    <h6 className="card-title _unih6">App connectors that accelerate analytics</h6>
                                    <p className="card-text _unip">Our data connectors optimize warehousing and accelerate your analytics projects. Start a pipeline faster than ever before.</p>
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
                    <h2 className="_unih2 ">Authenticate and forget</h2>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card-body">
                                <p className="card-text _unip">Setup takes five minutes and maintenance is entirely on us. We hope you never log in again.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <p className="card-text _unip d-flex"><i className="bi bi-info-circle _unibc mx-2"></i><span>Learn why this isn’t magic, or view ERDs by source</span></p>
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
                                <p className="card-text _unip d-flex"><i className="bi bi-play-circle-fill _unibc mx-2"></i><span>Step 1: You authenticate Fivetran</span></p>
                                <p className="card-text _unip">All you need is admin access to your cloud application and data warehouse. Use OAuth or your credentials to give us access.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body _apr3crdb">
                                <p className="card-text _unip d-flex"><i className="bi bi-play-circle-fill _unibc mx-2"></i><span>Step 2: We perform a historical sync and incrementally update</span></p>
                                <p className="card-text _unip">We extract historical data for standard and custom objects. From there, we incrementally batch-update all your tables up to every five minutes.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body _apr3crdb">
                                <p className="card-text _unip d-flex"><i className="bi bi-play-circle-fill _unibc mx-2"></i><span>Step 3: We automate schema migrations</span></p>
                                <p className="card-text _unip">When your sources change, Fivetran adjusts automatically: no orchestration workflows, no scheduled maintenance.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container _unima _unictc pb-5">
                    <iframe className="_apr3v" title="apr3v" src="https://s3.amazonaws.com/fivetran-website/application/h264/application-step-01.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
            </div>
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <h2 className="featurette-heading _unih2">Work with clean data</h2>
                                <p className="_unip">APIs create a risk of stored duplicates and inaccurate reporting, so we normalize, cleanse and standardize before loading.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">View more features</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={apr4i} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th Portion End */}

            {/* 5th Portion Start */}
            <div className="container-fluid _unibg py-5">
                <div className="container _unictc d-flex">
                    <a className="btn mx-1 _apr5_1" href="/" role="button">Applications</a>
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
        </>
    )
}

export default Applications
