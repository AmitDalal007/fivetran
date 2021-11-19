import React from 'react'
import pr1img from '../images/ExtractLoad/pr1img.webp'
// Not for this page From Here 
import epr10i1 from '../images/epr10i1.svg'
import epr10i2 from '../images/epr10i2.svg'
import epr10i3 from '../images/epr10i3.svg'
import epr10i4 from '../images/epr10i4.svg'
import epr10i5 from '../images/epr10i5.svg'
import epr10i6 from '../images/epr10i6.svg'
// To Here
import pr7img1 from '../images/ExtractLoad/pr7img1.webp'
import pr7img2 from '../images/ExtractLoad/pr7img2.webp'
import pr7img3 from '../images/ExtractLoad/pr7img3.webp'
import pr7img4 from '../images/ExtractLoad/pr7img4.webp'
import pr7img5 from '../images/ExtractLoad/pr7img5.webp'
import pr7img6 from '../images/ExtractLoad/pr7img6.webp'
import pr7img7 from '../images/ExtractLoad/pr7img7.webp'
import pr7img8 from '../images/ExtractLoad/pr7img8.webp'
import pr7img9 from '../images/ExtractLoad/pr7img9.webp'
import pr7img10 from '../images/ExtractLoad/pr7img10.webp'
import pr7img11 from '../images/ExtractLoad/pr7img11.webp'
import pr9img1 from '../images/ExtractLoad/pr9img1.svg'
import pr9img2 from '../images/ExtractLoad/pr9img2.svg'
import Navbar from './Navbar'
import Footer from './Footer'

const ExtractLoad = () => {
    return (
        <>
            <Navbar />

            {/* 1st Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <h2 className="featurette-heading _unih2">Built for analysts, approved by engineers.</h2>
                                <p className="_unip">Replicate everything, with zero configuration and schemas designed for analytics. Eliminate engineering busywork while empowering your analysts to prove value.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Talk to an expert</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={pr1img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 1st Portion End */}

            {/* 2nd Portion Start */}
            <div className="container-fluid _3rdprt _wfp2c1 py-3">
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
                                    <h6 className="card-title _unih6">Simplicity</h6>
                                    <p className="card-text _unip">Customization invites complexity. We build robust, automated pipelines with standardized schemas that free you to focus on analytics, not ETL.</p>
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
                                    <h6 className="card-title _unih6">Agility</h6>
                                    <p className="card-text _unip">Agile analytics means adding new data sources as fast as you need to, not waiting months to start using your data.</p>
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
                                    <h6 className="card-title _unih6">Reliability</h6>
                                    <p className="card-text _unip">Pipeline failure should never compromise an analytics project, so we iterate and battle-test our pipelines, then monitor and maintain them 24x7.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd Portion End */}

            {/* 3rd Portion Start */}
            <div className="container-fluid py-5 _unibg">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <h2 className="featurette-heading _unih2">All the features you need, none you don’t</h2>
                                <strong className="_unitxt">Five-minute setup</strong>
                                <p className="_unip">10 clicks and you’re syncing data into your destination.</p>
                                <strong className="_unitxt">Ready-to-query data</strong>
                                <p className="_unip">We prep your data so you can run analytics instantly:</p>
                                <p className="_unip"><i className="bi bi-check-lg _unigc"></i> <span className="mx-1">Defined schemas and well-documented ERDs</span></p>
                                <p className="_unip"><i className="bi bi-check-lg _unigc"></i> <span className="mx-1">No training or custom coding required</span></p>
                                <p className="_unip"><i className="bi bi-check-lg _unigc"></i> <span className="mx-1">Access to all your data in SQL</span></p>
                                <p className="_unip"><i className="bi bi-check-lg _unigc"></i> <span className="mx-1">Complete replication by default</span></p>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <iframe className="_wfp1v" title="_1stwf" src="https://www.youtube.com/embed/OEM0-_g6o94?enablejsapi=1&amp;origin=https%3A%2F%2Ffivetran.com" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <h2 className="_unih2">Support for modern cloud warehouses</h2>
                    <p className="_unip">Advanced data warehouses like BigQuery, Snowflake, Azure and Redshift allow you to affordably query anything, at any time.</p>
                    <a className="btn btn-primary _unib my-3" href="/" role="button">View all warehouses</a>
                </div>
            </div>
            {/* 4th Portion End */}

            {/* 5th Portion Start */}
            <div className="container-fluid py-5 _unibg">
                <div className="container _unictc">
                    <div className="row featurette _unima">
                        <div className="col-md-6 _unima">
                            <div className="container _epr5c">
                                <h2 className="_unih2">Built to scale</h2>
                                <p className="_unip">In a world of exponential data growth, <br /> you need a massively scalable partner. Fivetran offers:</p>
                                <p className="card-text _unip d-flex"><i className="bi bi-check-circle _unigc mx-2"></i><span>Instantly scalable cloud resources</span></p>
                                <p className="card-text _unip d-flex"><i className="bi bi-check-circle _unigc mx-2"></i><span>Low-impact replication to protect source systems</span></p>
                                <p className="card-text _unip d-flex"><i className="bi bi-check-circle _unigc mx-2"></i><span>Highly optimized loading</span></p>
                                <p className="card-text _unip d-flex"><i className="bi bi-check-circle _unigc mx-2"></i><span>Volume-neutral pricing to facilitate scaling</span></p>
                            </div>
                        </div>

                        <div className="col-md-6 _unima">
                            <div className="container _epr5c">
                                <h2 className="_unih2">Next-level enterprise security</h2>
                                <p className="_unip">Because we know your data is invaluable,<br />we provide:</p>
                                <p className="card-text _unip d-flex"><i className="bi bi-check-circle _unigc mx-2"></i><span>SOC 2 and GDPR compliance</span></p>
                                <p className="card-text _unip d-flex"><i className="bi bi-check-circle _unigc mx-2"></i><span>Encryption in motion and at rest</span></p>
                                <p className="card-text _unip d-flex"><i className="bi bi-check-circle _unigc mx-2"></i><span>Built-in infrastructure management</span></p>
                                <p className="card-text _unip d-flex"><i className="bi bi-check-circle _unigc mx-2"></i><span>Data purge after every sync</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 5th Portion End */}

            {/* 6th Portion Start */}
            <div className="container-fluid _unibg py-5">
                <div className="container _unictc">
                    <h2 className="_unih2">Built for the future of data</h2>
                    <p className="_unip">In the cloud era, you need to replicate data from an ever-expanding array of sources.</p>
                </div>
                <div className="container _unictc mt-4">
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
                    <a className="btn btn-primary _unib mt-5" href="/" role="button">View All 150+ Connectors</a>
                </div>
            </div>
            {/* 6th Portion End */}

            {/* 7th Portion Start */}
            <div className="container-fluid py-5 _unibg">
                <div className="container _unictc">
                    <h2 className="_unih2">We make replication effortless</h2>
                    <p className="_unip">Fivetran handles 100% of your pipeline maintenance and setup.</p>
                </div>

                <div className="container mt-5">
                    <div className="row d-flex g-4">
                        <div className="col">
                            <div className="card _elpr7crd1">
                                <img src={pr7img1} className="card-img-top _unima _elpr7cimg1" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Normalized schemas</h5>
                                    <p className="card-text _unip">We transform and normalize schemas from denormalized APIs, so your data is immediately useable.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _elpr7crd2">
                                <img src={pr7img2} className="card-img-top _unima _elpr7cimg2" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Incremental batch updates</h5>
                                    <p className="card-text _unip">Instead of reloading full data dumps from APIs and databases, we incrementally update all your data sources.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 px-4">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card _elpr7crd3">
                                <img src={pr7img3} className="card-img-top _unima _elpr7cimg3" alt="..." />
                                <div class="card-body mt-2">
                                    <h5 class="card-title _unih6">Direct pulls from cloud applications</h5>
                                    <p class="card-text _unip">There are now 5,000 cloud applications, and counting. Our connectors help you keep pace.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _elpr7crd3">
                                <img src={pr7img4} className="card-img-top _unima _elpr7cimg3" alt="..." />
                                <div class="card-body mt-2">
                                    <h5 class="card-title _unih6">24-hour tech support</h5>
                                    <p class="card-text _unip">When you continuously replicate billions of rows of data, things can go wrong. We’re here 24x7 to fix them.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _elpr7crd3">
                                <img src={pr7img5} className="card-img-top _unima _elpr7cimg3" alt="..." />
                                <div class="card-body mt-2">
                                    <h5 class="card-title _unih6">Real-time monitoring</h5>
                                    <p class="card-text _unip">Get real-time feedback on sync progress, delays and updates from the Fivetran UI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 px-4">
                    <div className="row d-flex g-3">
                        <div className="col">
                            <div className="card _elpr7crd2">
                                <img src={pr7img6} className="card-img-top _unima _elpr7cimg2" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Battle-tested connectors</h5>
                                    <p className="card-text _unip">Our engineering team continuously tests our system, so we see problems before they occur. And hundreds of companies battle-test our connectors, so we catch all the edge cases.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _elpr7crd1">
                                <img src={pr7img7} className="card-img-top _unima px-4" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Alerts</h5>
                                    <p className="card-text _unip">Delays happen, but with Fivetran alerts you’ll be the first to know.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 px-4">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card _elpr7crd3">
                                <img src={pr7img8} className="card-img-top _unima px-5" alt="..." />
                                <div class="card-body mt-3">
                                    <h5 class="card-title _unih6">Fully transparent, totally responsive</h5>
                                    <p class="card-text _unip">We offer complete visibility into our system and proactive 24x7 support.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _elpr7crd3">
                                <img src={pr7img9} className="card-img-top _unima px-5" alt="..." />
                                <div class="card-body mt-2">
                                    <h5 class="card-title _unih6">Granular system logs</h5>
                                    <p class="card-text _unip">It’s hard to trust an opaque system. We send granular logs of every sync to your own logging system.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _elpr7crd3">
                                <img src={pr7img10} className="card-img-top _unima _elpr7cimg3" alt="..." />
                                <div class="card-body mt-2">
                                    <h5 class="card-title _unih6">Automatic schema migrations</h5>
                                    <p class="card-text _unip">Stop monitoring sources and fixing leaks. We adjust our schemas automatically, so source changes never disrupt your analytics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row d-flex g-4">
                        <div className="col">
                            <div className="card _elpr7crd1">
                                <img src={pr7img11} className="card-img-top _unima" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Guaranteed data delivery</h5>
                                    <p className="card-text _unip">We ensure delivery by managing your data from source to warehouse.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _elpr7crd2">
                                <img src={pr7img2} className="card-img-top _unima _elpr7cimg2" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Efficient cloud-to-cloud replication</h5>
                                    <p className="card-text _unip">Fivetran is cloud-native, so you’ll never have to route data through an on-premises system to get it to a warehouse.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 7th Portion End */}

            {/* 8th Portion Start */}
            <div className="container-fluid _unibg py-5">
                <div className="container _unictc d-flex">
                    <a className="btn mx-1 _apr5_1 _elpr8btn1" href="/" role="button">View All</a>
                    <a className="btn btn-primary _unib mx-1 _elpr8btn2" href="/" role="button">Recently Added</a>
                    <a className="btn btn-primary _unib mx-1" href="/" role="button">Soon</a>
                    <input type="search" className="form-control form-control-dark mx-1 " placeholder="Search 100+ Data Source Connectors" aria-label="Search" />
                    <select className="form-select mx-1" aria-label="Default select example" placeholder="Filter By Type">
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
            {/* 8th Portion End */}

            {/* 9th Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-6 order-md-1 _unima _unictc">
                            <img className="_apr6i" src={pr9img1} alt="" />
                            <div className="card-body">
                                <h2 className="card-title _unih2">Request Connector</h2>
                                <p className="card-text _unip">Don’t see a data source you need? We add new connectors based on customer requests.</p>
                                <a className="card-text _unilb" href="/">Please request new data sources through our Feature Request Portal!</a>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 _unima _unictc">
                            <img className="_apr6i" src={pr9img2} alt="" />
                            <div className="card-body">
                                <h2 className="card-title _unih2">View Articles from our Blog</h2>
                                <p className="card-text _unip">Stay up to date with new connectors and features as they become available.</p>
                                <a className="card-text _unilb mx-3" href="/">Check out our latest blog entry</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 9th Portion End */}

            {/* 10th Portion Start */}
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
            {/* 10th Portion End */}

            <Footer />
        </>
    )
}

export default ExtractLoad
