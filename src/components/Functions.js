import React from 'react'
import funpr1i from '../images/funpr1i.webp'
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

const Functions = () => {
    return (
        <>
            {/* 1st Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <h2 className="featurette-heading _unih2">Function connectors fetch data from obscurity.</h2>
                                <p className="_unip">Building custom pipelines doesn’t have to be hard. If you’re pulling from obscure sources or using custom APIs, our cloud function connectors help limit your engineering burden.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Talk to an expert</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={funpr1i} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 1st Portion End */}

            {/* 2nd Portion Start */}
            <div className="container-fluid _unibg py-3">
                <div className="container px-4">
                    <p className="_unip _epr7pa pt-5">HOW THEY WORK</p>
                    <h2 className="_unih2 ">Build a custom connector.</h2>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card-body">
                                <p className="card-text _unip">If you’re a developer, these steps should be easy. If not, we can put you in touch with one of our partners.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <p className="card-text _unip d-flex"><i className="bi bi-info-circle _unibc mx-2"></i><span>See sample functions and more information</span></p>
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
                                <p className="card-text _unip d-flex"><i className="bi bi-play-circle-fill _unibc mx-2"></i><span>Step 1: Write a small function to fetch data</span></p>
                                <p className="card-text _unip">Using Go, Java, Node.js, Python, C# or F#, write a small function to fetch data from your custom source. Then write into our state logic to handle the incremental updating.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body _apr3crdb">
                                <p className="card-text _unip d-flex"><i className="bi bi-play-circle-fill _unibc mx-2"></i><span>Step 2: Host your function on a serverless platform</span></p>
                                <p className="card-text _unip">Host your code on Google Cloud Functions, AWS Lambda or Azure Functions.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body _apr3crdb">
                                <p className="card-text _unip d-flex"><i className="bi bi-play-circle-fill _unibc mx-2"></i><span>Step 3: Connect Fivetran</span></p>
                                <p className="card-text _unip">After you fetch the data, we’ll load it into your warehouse, calling your function as often as every five minutes to fetch new data, deduplicate it and incrementally update it.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container _unima _unictc pb-5">
                    <iframe className="_apr3v" title="funpr2v" src="https://s3.amazonaws.com/fivetran-website/cloud-function/h264/cloud-functions-step-01.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                </div>
            </div>
            {/* 2nd Portion End */}

            {/* 3rd Portion Start */}
            <div className="container-fluid py-5">
                <div className="container _unictc">
                    <h2 className="_unih2">We support cloud functions for these serverless platforms:</h2>
                    <div className="row featurette _unima">
                        <div className="col-md-6 _unima">
                            <div className="container _epr5c">
                                <h2 className="_unih2">When to use cloud functions</h2>
                                <p className="_unip">Common use cases for our cloud functions include fetching data from the following places:</p>
                                <p className="card-text _unip d-flex"><i className="bi bi-info-circle _unibc mx-2"></i><span>APIs without a pre-built connector</span></p>
                                <p className="card-text _unip d-flex"><i className="bi bi-info-circle _unibc mx-2"></i><span>Private APIs</span></p>
                                <p className="card-text _unip d-flex"><i className="bi bi-info-circle _unibc mx-2"></i><span>Data formats that don’t self-describe</span></p>
                                <p className="card-text _unip d-flex"><i className="bi bi-info-circle _unibc mx-2"></i><span>Sensitive data that needs filtering or anonymizing</span></p>
                                <a className="btn btn-primary _unib my-3" href="/" role="button">View docs</a>
                            </div>
                        </div>
                        <div className="col-md-6 _unima">
                            <div className="container _epr5c">
                                <h2 className="_unih2">Advantages over DIY solutions</h2>
                                <p className="_unip">Fivetran cloud function connectors improve on DIY with:</p>
                                <p className="card-text _unip d-flex"><i className="bi bi-check-circle _unigc mx-2"></i><span>Built-in version control, testing & infrastructure management</span></p>
                                <p className="card-text _unip d-flex"><i className="bi bi-check-circle _unigc mx-2"></i><span>Compatibility with virtual private cloud (VPC)</span></p>
                                <p className="card-text _unip d-flex"><i className="bi bi-check-circle _unigc mx-2"></i><span>Fewer engineering resources required</span></p>
                                <p className="card-text _unip d-flex"><i className="bi bi-check-circle _unigc mx-2"></i><span>Fivetran expertise delivering incremental changes</span></p>
                                <a className="btn btn-primary _unib my-3" href="/" role="button">Examples</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid _unibg py-5 _filespr5">
                <div className="container _unictc d-flex">
                    <a className="btn mx-1 _apr5_1" href="/" role="button">Functions</a>
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

export default Functions
