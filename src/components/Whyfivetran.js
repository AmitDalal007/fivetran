import React from 'react'
import wfscrolling from '../images/wfscrolling.webp'
import wfbook from '../images/wfbook.svg'
import wfid from '../images/wfid.svg'
import wftransformation from '../images/wftransformation.svg'
import wfmonitoring from '../images/wfmonitoring.webp'
import wfsecurity from '../images/wfsecurity.webp'
import wfcrd1 from '../images/wfcrd1.svg'
import wfcrd2 from '../images/wfcrd2.svg'
import wfcrd3 from '../images/wfcrd3.svg'
import wfcrd4 from '../images/wfcrd4.svg'
import wfpr7bigquery from '../images/wfpr7bigquery.svg'
import wfpr7databricks from '../images/wfpr7databricks.webp'
import wfpr7amazon from '../images/wfpr7amazon.svg'
import wfpr7snow from '../images/wfpr7snow.svg'
import Navbar from './Navbar'
import Footer from './Footer'

const Whyfivetran = () => {
    return (
        <>
            <Navbar />

            {/* 1st Portion */}
            <div className="container-fluid my-5">
                <div className="container _wfp1c1">
                    <div className="row featurette">
                        <div className="col-md-7 _unima">
                            <div className="container _wfp1c2">
                                <h2 className="featurette-heading _unih2 _wfp1c2h2">Reliable access to analysis-ready data</h2>
                                <p className="_unip">Allow your analysts to query any data set at any time. Fivetran automated data integration is built on a fully managed ELT architecture that delivers zero-maintenance pipelines and ready-to-query schemas.</p>
                                <div className="d-flex w-100 gap-2 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Start a free trial</a>
                                    <a className="_unilb mx-3" href="/">Explore our Docs</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <iframe className="_wfp1v" title="_1stwf" src="https://www.youtube.com/embed/OEM0-_g6o94?enablejsapi=1&amp;origin=https%3A%2F%2Ffivetran.com" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* 1st Portion End */}

            {/* 2nd Portion Start */}
            <div className="container-fluid _3rdprt _wfp2c1">
                <h2 className="_unih2 _wfp2h2">Fully managed data pipelines for ELT</h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div>
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-gear-wide-connected card-img-top _3contimg" viewBox="0 0 16 16">
                                        <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title _unih6">Automated</h6>
                                    <p className="card-text _unip">Fivetran creates and maintains a perfect replica of your data, with minimal user configuration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bounding-box card-img-top _3contimg" viewBox="0 0 16 16">
                                        <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title _unih6">Resilient</h6>
                                    <p className="card-text _unip">Idempotent core architecture makes Fivetran resilient to failure and data duplication while minimizing computational costs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-tools card-img-top _3contimg" viewBox="0 0 16 16">
                                        <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title _unih6">Maintenance-free</h6>
                                    <p className="card-text _unip">Our engineers update Fivetran connectors as source APIs and schemas change, eliminating user maintenance and ensuring 99.9% uptime.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd Portion End */}

            {/* 3rd Portion Start */}
            <div className="container-fluid _wfp3c1">
                <h2 className="_unih2">See how Fivetran helps you automate data integration</h2>
                <iframe className="_wfp3v" title="_3rdwf" src="https://www.youtube.com/embed/MPb7-0wHC9Q" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
            </div>
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid my-5 _wfp4c1">
                <div className="container">
                    <div className="row featurette">
                        <div className="col-md-6 _unima">
                            <div className="container">
                                <h2 className="featurette-heading _unih2">Extract data from any source
                                </h2>
                                <p className="_unip">As your data sources grow, so does your management burden. Fivetran offers 150+ fully managed, automated connectors for databases, applications, events, files and functions.</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Automatic adjustment to schema and API changes</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Change data capture and log-based replication to ensure data quality</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Five-minute, zero-configuration setup</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> 24/7 support and 99.9% uptime SLA</p>
                                <div className="d-flex w-100 gap-2 ">
                                    <a className="btn btn-outline-primary _uniob" href="/" role="button">See all Fivetran data connectors</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={wfscrolling} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th Portion End */}

            {/* 5th Portion Start */}
            <div className="container-fluid _wfpr5c1">
                {/* _unictc d-flex row */}
                <div className="container _wfpr5c2">
                    <div className="col-md-3 _wfpr5col1"><h2 className="_unih2 _wfpr5h2">Learn how to get started with Fivetran</h2></div>
                    <div className="col-md-2 _wfpr5col2"><img src={wfbook} alt="" /></div>
                    <div className="col-md-3 _wfpr5col3"><a className="btn btn-primary _unib" href="/" role="button">Download Essentials Guide</a></div>
                </div>
            </div>
            {/* 5th Portion End */}

            {/* 6th Portion Start */}
            <div className="container-fluid py-5 _wfpr6c1">
                <div className="container">
                    <div className="row featurette">
                        <div className="col-md-6 order-md-2 _unima">
                            <div className="container">
                                <h2 className="featurette-heading _unih2">Your raw data automatically normalized
                                </h2>
                                <p className="_unip">Fivetran extensively researches and establishes partnerships with each data source. That allows us to automatically normalize your data and prepare it for analysis.</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Prebuilt, analysis-ready schemas in your data destination</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Documented ERDs</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Business dashboards can be developed in minutes</p>
                                <div className="d-flex w-100 gap-2 ">
                                    <a className="btn btn-outline-primary _uniob" href="/" role="button">Start Free Trial</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-1 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={wfid} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 6th Portion End */}

            {/* 7th Portion Start */}
            <div className="container-fluid _unibg _unictc py-5">
                <h2 className="_unih2">Explore our 150+ destinations</h2>
                <div className="row _unictc my-3 pt-3">
                    <div className="col-lg-4 _wfpr7crd">
                        <a className="_wfpr7a" href="/">
                            <img className="_wfpr7img" src={wfpr7bigquery} alt="" />
                            <span className="_unip py-3">TECHNOLOGY</span>
                            <span className="_unilb py-3">Google BigQuery</span>
                        </a>
                    </div>

                    <div className="col-lg-4 _wfpr7crd">
                        <a className="_wfpr7a" href="/">
                            <img className="_wfpr7img" src={wfpr7databricks} alt="" />
                            <span className="_unip py-3">TECHNOLOGY</span>
                            <span className="_unilb py-3">Databricks</span>
                        </a>
                    </div>

                    <div className="col-lg-4 _wfpr7crd">
                        <a className="_wfpr7a" href="/">
                            <img className="_wfpr7img" src={wfpr7amazon} alt="" />
                            <span className="_unip py-3">TECHNOLOGY</span>
                            <span className="_unilb py-3">Amazon Redshift Warehouse</span>
                        </a>
                    </div>

                    <div className="col-lg-4 _wfpr7crd">
                        <a className="_wfpr7a" href="/">
                            <img className="_wfpr7img" src={wfpr7snow} alt="" />
                            <span className="_unip py-3">TECHNOLOGY</span>
                            <span className="_unilb py-3">Snowflake Data Cloud</span>
                        </a>
                    </div>
                </div>
                <p><a className="btn btn-primary _unib mt-5" href="/">View All</a></p>
            </div>
            {/* 7th Portion End */}

            {/* 8th Portion Start */}
            <div className="container-fluid my-5">
                <div className="container">
                    <div className="row featurette">
                        <div className="col-md-7 order-md-2 _unima">
                            <div className="container">
                                <h2 className="featurette-heading _unih2">Transform your data with SQL
                                </h2>
                                <p className="_unip">Adding manual ETL software requires new skills and creates bottlenecks for analysts. Fivetran supports SQL-based, in-warehouse transformations, so your team can fully leverage modern scalable compute.</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Automated triggering via schedule or when new data is loaded</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Transformations integrated into the data pipeline and easily triggered</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Robust logging and notification system</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Compatible with all modern data destinations</p>
                                <div className="d-flex w-100 gap-2 ">
                                    <a className="btn btn-outline-primary _uniob" href="/" role="button">Explore transformations</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-1 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={wftransformation} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 8th Portion End */}

            {/* 9th Portion Start */}
            <div className="container-fluid my-5 py-5 _unibg">
                <div className="container">
                    <div className="row featurette">
                        <div className="col-md-7 _unima">
                            <div className="container">
                                <h2 className="featurette-heading _unih2">Log and monitor the entire pipeline
                                </h2>
                                <p className="_unip">Fivetran captures sync statistics, status changes and user activities for each connector, and makes that data readily accessible.</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Sync Fivetran logs to any supported destination</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Access logs in the UI and filter events easily</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Support for third-party logging services</p>
                                <h5>Support for <a className="_unilb" href="/">third-party logging services</a></h5>
                            </div>
                        </div>
                        <div className="col-md-5 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={wfmonitoring} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 9th Portion End */}

            {/* 10th Portion Start */}
            <div className="container-fluid my-5">
                <div className="container">
                    <div className="row featurette">
                        <div className="col-md-7 order-md-2 _unima">
                            <div className="container">
                                <h2 className="featurette-heading _unih2">The most reliable and secure cloud data integration platform
                                </h2>
                                <p className="_unip">Fivetran protects sensitive data while offering the auditing, control and regulatory compliance modern businesses need.</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Hashing and column blocking for sensitive data</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Data fully encrypted in transit and at rest</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Availability in the U.S., Europe and Asia</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> Enables compliance with the Global Data Protection Regulation (GDPR)</p>
                                <p className="_unip"><i className="bi bi-check-circle _unibc"></i> <a className="_nria" href="/"> Business Critical plan</a> for companies with highly sensitive data and industry security requirements</p>
                                <div className="d-flex w-100 gap-2 ">
                                    <a className="btn btn-outline-primary _uniob" href="/" role="button">Read whitepaper</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-1 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={wfsecurity} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 10th Portion End */}

            {/* 11th Portion Start */}
            <div className="container-fluid py-5 _unibg _unictc">
                <div className="container">
                    <h2 className="_unih2">Resources & Events</h2>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4 mb-4 mt-3">
                        <div className="col">
                            <div className="card _wfcrdh">
                                <a className="_6crda" href="/">
                                    <img src={wfcrd1} className="card-img-top" alt="..." />
                                    <div className="card-body _wfcbh">
                                        <h5 className="card-title _unih6">Demos</h5>
                                        <p className="card-text _unip">Sign up for our Weekly Demo</p>
                                    </div>
                                    <div className="mt-4"> <hr /></div>
                                    <div className="_unilb">
                                        Sign up
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _wfcrdh">
                                <a className="_6crda" href="/">
                                    <img src={wfcrd2} className="card-img-top" alt="..." />
                                    <div className="card-body _wfcbh">
                                        <h5 className="card-title _unih6">Reports</h5>
                                        <p className="card-text _unip">Download the GigaOm Report</p>
                                    </div>
                                    <div className="mt-4"> <hr /></div>
                                    <div className="_unilb">
                                        Download
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _wfcrdh">
                                <a className="_6crda" href="/">
                                    <img src={wfcrd3} className="card-img-top" alt="..." />
                                    <div className="card-body _wfcbh">
                                        <h5 className="card-title _unih6">Case Studies</h5>
                                        <p className="card-text _unip">Hear from our customers</p>
                                    </div>
                                    <div className="mt-4"> <hr /></div>
                                    <div className="_unilb">
                                        View all
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _wfcrdh">
                                <a className="_6crda" href="/">
                                    <img src={wfcrd4} className="card-img-top" alt="..." />
                                    <div className="card-body _wfcbh">
                                        <h5 className="card-title _unih6">Learning center</h5>
                                        <p className="card-text _unip">Learn more about ETL vs. ELT</p>
                                    </div>
                                    <div className="mt-4"> <hr /></div>
                                    <div className="_unilb">
                                        Learn more
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 11th Portion End */}

            {/* 12th Portion Start */}
            <div className="container-fluid my-5">
                <div className="container">
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
            {/* 12th Portion End */}

            <Footer />
        </>
    )
}

export default Whyfivetran
