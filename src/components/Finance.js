import React from 'react'
import pr1card from '../images/Finance/pr1card.webp'
import pr2card1 from '../images/Finance/pr2card1.webp'
import pr2card2 from '../images/Finance/pr2card2.webp'
import pr2card3 from '../images/Finance/pr2card3.webp'
import pr3card from '../images/Finance/pr3card.webp'
import pr5card from '../images/Finance/pr5card.webp'
import pr6card1 from '../images/Finance/pr6card1.webp'
import pr6card2 from '../images/Finance/pr6card2.webp'
import pr6card3 from '../images/Finance/pr6card3.webp'
import pr6card4 from '../images/Finance/pr6card4.webp'
import pr6card5 from '../images/Finance/pr6card5.webp'
import pr7card from '../images/Finance/pr7card.webp'
import Footer from './Footer'
import Navbar from './Navbar'

const Finance = () => {
    return (
        <>
            <Navbar />

            {/* 1st Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <p className="_unip _epr7pa">CENTRALIZE ALL YOUR FINANCE DATA IN MINUTES</p>
                                <h2 className="featurette-heading _unih2">Automate Financial Reporting with Reliable Data</h2>
                                <p className="_unip">Fivetran powers the reports your team needs for Planning and Budgeting, Integrated Financial Planning, Forecasting and Modeling, and more. All with data you can trust -- in an environment that sets up in minutes and just works.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Request a demo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={pr1card} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 1st Portion End */}

            {/* 2nd posrtion start */}
            <div className="container-fluid _unibg _6cont">
                <div className="container _unictc">
                    <h2 className="_unih2">Avoid Common Finance Reporting Issues Like…</h2>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 mt-3">
                        <div className="col _unictc">
                            <img src={pr2card1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text _unip">Performing manual synchronization from multiple finance sources</p>
                            </div>
                        </div>
                        <div className="col _unictc">
                            <img src={pr2card2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text _unip">Spending hours fixing broken pipelines caused by API or schema changes</p>
                            </div>
                        </div>
                        <div className="col _unictc">
                            <img src={pr2card3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text _unip">Being unable to report daily, weekly, or monthly financial reports</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd Portion End */}

            {/* 3rd Portion Start */}
            <div className="container-fluid py-4">
                <div className="container _unictc">
                    <h2 className="_unih2">Fivetran Automates Integrating Finance Data.</h2>
                    <p className="_unip px-5">Setup in minutes for sources like Anaplan, NetSuite, Quickbooks, Salesforce, Google Sheets, and more</p>
                    <img className="_epr8i img-fluid pt-4" src={pr3card} alt="" />
                </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 mt-3">
                        <div className="col _unictc">
                            <div className="card-body">
                                <h5 className="card-title _unih6">Connect all sources instantly</h5>
                                <p className="card-text _unip">Centralize your finance and other sources, even as the source schemas and APIs change</p>
                            </div>
                        </div>
                        <div className="col _unictc">
                            <div className="card-body">
                                <h5 className="card-title _unih6">Generate reliable reports</h5>
                                <p className="card-text _unip">Our pre-built templates for Looker Blocks and Tableau Workbooks are built on top of expert, standardized schemas.</p>
                            </div>
                        </div>
                        <div className="col _unictc">
                            <div className="card-body">
                                <h5 className="card-title _unih6">Continually synchronize data</h5>
                                <p className="card-text _unip">Load all your sources into your data warehouse on Snowflake, Amazon Redshift, Google BigQuery and more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid _unictc _unibg py-5">
                <h2 className="_unih2">Here’s Why You Need Fivetran for Finance Analytics</h2>
                <div className="container px-5">
                    <div className="_unictc _finpr4c">
                        <div className="col _finpr4 _finpr4c1">
                            <div className="_5crdpad">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-share card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                    </svg>
                                </div>
                                <div className="card-body _5contcb">
                                    <h5 className="card-title _unih6">Connect more data</h5>
                                    <p className="card-text _unip">Connect Opportunities in the CRM with ERP Orders and Accounting figures — even as the source schemas and APIs change</p>
                                </div>
                            </div>
                        </div>
                        <div className="col _finpr4 _finpr4c2">
                            <div className="_5crdpad">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-speedometer2 card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                        <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" />
                                    </svg>
                                </div>
                                <div className="card-body _5contcb">
                                    <h5 className="card-title _unih6">Faster reliable data</h5>
                                    <p className="card-text _unip">Automated reports in you favorite BI tool remove data wrangling in Microsoft Excel to overcome limited reporting and APIs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col _finpr4 _finpr4c3">
                            <div className="_5crdpad">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-shield-shaded card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 14.933a.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067v13.866zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                                    </svg>
                                </div>
                                <div className="card-body _5contcb">
                                    <h5 className="card-title _unih6">Protect sensitive data</h5>
                                    <p className="card-text _unip">Protect sensitive data with custom roles and achieve regulatory compliance using <a className="_unilb" href="/">column hashing</a>, blocking, and salting</p>
                                </div>
                            </div>
                        </div>
                        <div className="col _finpr4 _finpr4c4">
                            <div className="_5crdpad">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                                <div className="card-body _5contcb">
                                    <h5 className="card-title _unih6">Audit and reconcile</h5>
                                    <p className="card-text _unip">Reconcile when, where, and why figures might have changed historically between different sources.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th Portion End */}

            {/* 5th Portion Start */}
            <div className="container-fluid _unibbg py-5">
                <div className="container _unictc">
                    <img className="_finpr5i" src={pr5card} alt="" />
                    <span className="_unip py-3 _epr9txt">“NetSuite is constantly changing its API, but Fivetran keeps up and automatically centralizes both our on-prem and cloud ERPs into our data warehouse. We estimate that Fivetran has saved us $360,000 in setup and maintenance of our SQL Server and NetSuite connectors.”</span>
                    <h6 className="_unih6 pt-2 _epr9txt">Nick Heigerick</h6>
                    <span className="_unip pt-1 _epr9txt">IT Manager of BI</span>
                    <span className="_unip pt-1 _epr9txt">Oldcastle</span>
                </div>
            </div>
            {/* 5th Portion End */}

            {/* 6th Portion Start */}
            <div className="container-fluid _6cont">
                <div className="container _6cont2 _unictc">
                    <h2 className="_unih2">Learn How Fivetran Can Help You with Finance Analytics</h2>
                </div>

                <div className="container">
                    <div className="card mb-3 _dbrpr11c1">
                        <a className="_6crda" href="/">
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <img src={pr6card1} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-4 p-3">
                                    <div className="card-body">
                                        <h6 className="card-title _unih6">Seven Ways Finance Teams Drive Efficiency With Automated Pipelines</h6>
                                        <p className="card-text _unip">Easily modify income statements, set up alerts for cost overruns, automate data integrity checks — these are just a few of the things you can do with a modern data stack.</p>
                                        <p className="card-text _unip pt-5">By <span className="_unilb">Jeff Tietz</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 mt-3">
                        <div className="col">
                            <div className="card _epr11crdh">
                                <a className="_6crda" href="/">
                                    <img src={pr6card2} className="card-img-top" alt="..." />
                                    <div className="card-body _epr11crdb">
                                        <h5 className="card-title _unih6">How Fivetran Helps You Stay Compliant With GDPR</h5>
                                        <p className="card-text _unip">Fivetran services are compliant with GDPR and we’re continually adding new features to help you meet EU data protection requirements.</p>
                                        <p className="card-text _unip">By <span className="_unilb">Ciara Rafferty</span></p>
                                    </div>
                                    <div className="mt-4"> <hr /></div>
                                    <div className="_epr11f">
                                        <span className="_unilb">Read Post →</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card _epr11crdh">
                                <a className="_6crda" href="/">
                                    <img src={pr6card3} className="card-img-top _dbrpr10i3" alt="..." />
                                    <div className="card-body _epr11crdb">
                                        <h5 className="card-title _unih6">Oldcastle Infrastructure Sees $25M ROI With The Modern Data Stack</h5>
                                        <p className="card-text _unip">Oldcastle Infrastructure, a CRH Company, migrates its SQL Server and NetSuite data with Fivetran and enables business-wide analysis in Tableau, delivering a $25M ROI.</p>
                                        <p className="card-text _unip">By <span className="_unilb">Ciara Rafferty</span></p>
                                    </div>
                                    <div className="mt-4"> <hr /></div>
                                    <div className="_epr11f">
                                        <span className="_unilb">Read Post →</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card _epr11crdh">
                                <a className="_6crda" href="/">
                                    <img src={pr6card4} className="card-img-top" alt="..." />
                                    <div className="card-body _epr11crdb">
                                        <h5 className="card-title _unih6">Trustpilot Gives Fivetran a Five-Star Review for Zuora Connector</h5>
                                        <p className="card-text _unip">With the Zuora connector from Fivetran, Trustpilot dramatically cuts down on time spent merging data from disparate systems.</p>
                                        <p className="card-text _unip">By <span className="_unilb">Ciara Rafferty</span></p>
                                    </div>
                                    <div className="mt-3"> <hr /></div>
                                    <div className="_epr11f">
                                        <span className="_unilb">Read Post →</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="card mb-3 _dbrpr11c1">
                        <a className="_6crda" href="/">
                            <div className="row g-0">
                                <div className="col-md-4 p-3 justify-content-end">
                                    <div className="card-body text-end">
                                        <h6 className="card-title _unih6">Slash time reconciling Finance with your CRM and ERP data</h6>
                                        <small className="text-muted">Date: March 17, 2020</small>
                                        <p className="card-text _unip">To reconcile figures across sales, accounting, and finance, you need comprehensive reporting and auditing integrating all those data sources. Wrangling the data together in Microsoft Excel is not only a major hassle, it’s risky and potentially inconsistent and incomplete. And procuring the necessary data engineering resources when you need them is tricky at best. Wouldn’t it be great if you could connect all your data sources quickly and easily and for automated reporting within the business intelligence tool you prefer?</p>
                                        <hr />
                                        <a className="_unilb" href="/">Watch on demand</a>
                                    </div>
                                </div>
                                <div className="col-md-8 _finpr6ci _unima">
                                    <img src={pr6card5} className="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* 6th Portion End */}

            {/* 7th Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <h2 className="featurette-heading _unih2">Centralize all your finance data for combined insights</h2>
                                <p className="_unip">Fivetran has 150+ pre-built data connectors. Centralize data from all your applications, databases and more for powerful metrics that combine data sources.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Connector directory →</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={pr7card} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 7th Portion End */}

            {/* 8th Portion Start */}
            <div className="container-fluid border-top py-5">
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
            {/* 8th Portion End */}

            <Footer />
        </>
    )
}

export default Finance
