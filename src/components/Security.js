import React from 'react'
import pr1img from '../images/Security/pr1img.webp'
import pr2img from '../images/Security/pr2img.webp'
import pr3img from '../images/Security/pr3img.webp'
import pr5img from '../images/Security/pr5img.webp'
import pr6img from '../images/Security/pr6img.webp'
import pr7img from '../images/Security/pr7img.webp'
import pr8img1 from '../images/Security/pr8img1.svg'
import pr8img2 from '../images/Security/pr8img2.svg'
import pr8img3 from '../images/Security/pr8img3.svg'
import pr8img4 from '../images/Security/pr8img4.svg'
import pr8img5 from '../images/Security/pr8img5.svg'
import pr8img6 from '../images/Security/pr8img6.svg'
import pr9img1 from '../images/Security/pr9img1.webp'
import pr9img2 from '../images/Security/pr9img2.webp'
import pr9img3 from '../images/Security/pr9img3.webp'
import pr9img4 from '../images/Security/pr9img4.webp'
import Footer from './Footer'
import Navbar from './Navbar'

const Security = () => {
    return (
        <>
            <Navbar />

            {/* 1st Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <p className="_unip _epr7pa">Data security is our highest priority</p>
                                <h2 className="featurette-heading _unih2">Data Privacy, Security & Compliance</h2>
                                <p className="_unip">Security and compliance is a cornerstone of our fully managed data integration philosophy. Fivetran guards customer data, including personally identifiable information (PII) through a rigorous combination of features, capabilities and processes.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Request a demo</a>
                                    <a className="_unilb mx-3" href="/">Security whitepaper download</a>
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
            <div className="container-fluid _unibbg py-5">
                <div className="container _unictc">
                    <img className="_wfpr7img _epr10img" src={pr2img} alt="" />
                    <span className="_unip py-3 _epr9txt">“For us, it's important to hash columns in our data warehouse. In the past, we could only hash the whole table, but now we can select the specific columns and ensure data security.”</span>
                    <h6 className="_unih6 pt-2 _epr9txt">Laura Vaida</h6>
                    <span className="_unip pt-1 _epr9txt">Data Analyst</span>
                    <span className="_unip pt-1 _epr9txt">Keller Sports</span>
                </div>
            </div>
            {/* 2nd Portion End */}

            {/* 3rd Portion Start */}
            <div className="container-fluid py-5 _unibg">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <h2 className="featurette-heading _unih2">Rigorous security for all Fivetran plans</h2>
                                <strong className="_unitxt">A dedicated security team</strong>
                                <p className="_unip">Drives rigorous internal processes and regulatory certifications.</p>
                                <strong className="_unitxt">Transparency</strong>
                                <p className="_unip">Detailed user action logging. Fivetran never accesses your data unless you authorize it through explicit grants.</p>
                                <p className="_unip"><i className="bi bi-check-lg _unigc"></i> <span className="mx-1">SSO & user-based roles and permissions</span></p>
                                <p className="_unip"><i className="bi bi-check-lg _unigc"></i> <span className="mx-1">Data encryption in transit and at rest</span></p>
                                <p className="_unip"><i className="bi bi-check-lg _unigc"></i> <span className="mx-1">Connection options for reverse SSH tunnels, VPN tunnels and more</span></p>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={pr3img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid py-5">
                <div className="container px-5">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card-body">
                                <p className="card-text _unip _epr7pa">Protect sensitive information with blocking & hashing</p>
                                <h2 className="card-title _unih2">Column masking</h2>
                                <p className="card-text _unip">Ensure that only the data you want is replicated. You have the option to block particular fields or hash them if you’d like the data in your destination, but not in cleartext. Along the way, data is encrypted in transit with TLS 1.2+ and at rest with AES 256-bit encryption keys.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <p className="card-text _unip _epr7pa">Track what’s done with your data</p>
                                <h2 className="card-title _unih2">Logging and auditability</h2>
                                <p className="card-text _unip">We offer details on every step of the process from extract to load, which can be found in the UI or exported to your analytics destination or log monitoring tool of choice for auditing. For premium plans, forward events to external log.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <p className="card-text _unip _epr7pa">Authorize data according to profiles</p>
                                <h2 className="card-title _unih2">Role-based access control</h2>
                                <p className="card-text _unip">Standard role-based access control includes SSO/SAML to configure single sign-on using Okta, OneLogin, PingOne, Azure AD or Google Workspace. Custom roles, available in premium plans, ensure that integrations and functionality can only be accessed by the appropriate persons.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <p className="card-text _unip _epr7pa">Data is processed, not persisted</p>
                                <h2 className="card-title _unih2">No data retention</h2>
                                <p className="card-text _unip">Fivetran only retains data as long as is needed to successfully sync your data. In the majority of cases, data is retained for less than 24 hours.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th Portion End */}

            {/* 5th Portion Start */}
            <div className="container-fluid py-5 _unibg">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <h2 className="featurette-heading _unih2">Business Critical Plan</h2>
                                <strong className="_unitxt">Advanced security for highly sensitive data</strong>
                                <p className="_unip">The most robust features, capabilities and certifications</p>
                                <p className="_unip"><i className="bi bi-check-lg _unigc"></i> <span className="mx-1">Customer-managed keys</span></p>
                                <p className="_unip"><i className="bi bi-check-lg _unigc"></i> <span className="mx-1">Private networking (AWS PrivateLink)</span></p>
                                <p className="_unip"><i className="bi bi-check-lg _unigc"></i> <span className="mx-1"><a href="/" className="_unilb">Data residency</a>: choice of cloud geography and region</span></p>
                                <p className="_unip"><i className="bi bi-check-lg _unigc"></i> <span className="mx-1">PCI DSS Level 1 compliance</span></p>
                                <div className="d-flex w-100 gap-2 mt-3 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Business Critical Plan</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={pr5img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 5th Portion End */}

            {/* 6th Portion Start */}
            <div className="cotntainer-fluid _unisbbg py-5">
                <div className="container _unictc">
                    <h2 className="_unih2 _culwtxt">The Most Reliable and Secure Cloud Data Integration Platform</h2>
                    <p className="_unip _culwtxt">Our highest level of data protection to support the needs of companies with extremely sensitive data</p>
                    <img src={pr6img} className="py-3" style={{ 'width': '100%' }} alt="" />
                    <a className="btn btn-light mt-4 _culpr11btn" href="/" role="button">Download the Security Whitepaper</a>
                </div>
            </div>
            {/* 6th Portion End */}

            {/* 7th Portion Start */}
            <div className="container-fluid _unibbg py-5">
                <div className="container _unictc">
                    <img className="_wfpr7img _epr10img" src={pr7img} alt="" />
                    <span className="_unip py-3 _epr9txt">“The new Business Critical Fivetran offering is the perfect complement to our own Business Critical edition, allowing enterprises with extremely sensitive data to create secure, automated data pipelines into Snowflake.”</span>
                    <h6 className="_unih6 pt-2 _epr9txt">Christian Kleinerman</h6>
                    <span className="_unip pt-1 _epr9txt">Senior Vice President of Product</span>
                    <span className="_unip pt-1 _epr9txt">Snowflake</span>
                </div>
            </div>
            {/* 7th Portion End */}

            {/* 8th Portion Start */}
            <div className="container-fluid _unictc py-5">
                <p className="_unip">Industry Leading Compliance</p>
                <h2 className="_unih2">Compliance for worldwide and regional regulations</h2>
                <div className="_2contc">
                    <img className="_2contimg" src={pr8img1} alt="" />
                    <img className="_2contimg" src={pr8img2} alt="" />
                    <img className="_2contimg" src={pr8img3} alt="" />
                    <img className="_2contimg" src={pr8img4} alt="" />
                    <img className="_2contimg" src={pr8img5} alt="" />
                    <img className="_2contimg" src={pr8img6} alt="" />
                </div>
                <a className="btn btn-primary _unib mt-4" href="/" role="button">Documentation: Compliance</a>
            </div>
            {/* 8th Portion End */}

            {/* 9th Portion Start */}
            <div className="container-fluid py-5 _unibg _unictc border-top">
                <div className="container">
                    <h2 className="_unih2">Additional Resources</h2>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4 mb-4 mt-3">
                        <div className="col">
                            <div className="card _wfcrdh">
                                <a className="_6crda" href="/">
                                    <img src={pr9img1} className="card-img-top" alt="..." />
                                    <div className="card-body _wfcbh">
                                        <h5 className="card-title _unih6">Documentation</h5>
                                        <p className="card-text _unip">Learn more about Fivetran security features and certifications</p>
                                    </div>
                                    <div className="mt-4"> <hr /></div>
                                    <div className="_unilb">
                                        Read it
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _wfcrdh">
                                <a className="_6crda" href="/">
                                    <img src={pr9img2} className="card-img-top" alt="..." />
                                    <div className="card-body _wfcbh">
                                        <h5 className="card-title _unih6">Security Team</h5>
                                        <p className="card-text _unip">Driving governance, risk and compliance (GRC)</p>
                                    </div>
                                    <div className="mt-4"> <hr /></div>
                                    <div className="_unilb">
                                        Learn more
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _wfcrdh">
                                <a className="_6crda" href="/">
                                    <img src={pr9img3} className="card-img-top" alt="..." />
                                    <div className="card-body _wfcbh">
                                        <h5 className="card-title _unih6">Whitepaper</h5>
                                        <p className="card-text _unip">An overview of features, processes and certifications</p>
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
                                    <img src={pr9img4} className="card-img-top" alt="..." />
                                    <div className="card-body _wfcbh">
                                        <h5 className="card-title _unih6">DPA</h5>
                                        <p className="card-text _unip">Learn how Fivetran commits to protecting your data</p>
                                    </div>
                                    <div className="mt-4"> <hr /></div>
                                    <div className="_unilb">
                                        Read it
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 9th Portion End */}

            {/* 10th Portion Start */}
            <div className="container-fluid py-5 border-top">
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
            {/* 10th Portion End */}

            <Footer />
        </>
    )
}

export default Security
