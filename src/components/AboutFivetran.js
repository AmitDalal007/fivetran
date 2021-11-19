import React from 'react'
import pr2img from '../images/AboutFivetran/pr2img.webp'
import asicsl from '../images/AboutFivetran/asicsl.svg'
import conagral from '../images/AboutFivetran/conagral.svg'
import docusignl from '../images/AboutFivetran/docusignl.svg'
import lionsgatel from '../images/AboutFivetran/lionsgatel.svg'
import oktal from '../images/AboutFivetran/oktal.svg'
import squarel from '../images/AboutFivetran/squarel.svg'
import pr6card1 from '../images/AboutFivetran/pr6card1.webp'
import pr6card2 from '../images/AboutFivetran/pr6card2.webp'
import pr6card3 from '../images/AboutFivetran/pr6card3.webp'
import pr6card4 from '../images/AboutFivetran/pr6card4.webp'
import pr9card1 from '../images/AboutFivetran/pr9card1.webp'
import pr9card2 from '../images/AboutFivetran/pr9card2.webp'
import Navbar from './Navbar'
import Footer from './Footer'

const AboutFivetran = () => {
    return (
        <>
            <Navbar />

            {/* 1st Portion Start */}
            <div className="container-fluid py-5">
                <div className="container _unictc px-5">
                    <h2 className="_unih2">Fivetran redefined the data pipeline.</h2>
                    <p className="_unip">Shaped by the needs of analysts, our fully managed pipelines enable data-driven decisions company-wide by delivering ready-to-query data into your cloud warehouse. We’re focused, transparent and trusted by businesses that embrace agile analytics.</p>
                </div>
            </div>
            {/* 1st Portion End */}

            {/* 2nd Portion Start */}
            <div className="container-fluid _unibg py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-6 order-md-1 _unima">
                            <div className="px-3 _epr5c">
                                <h2 className="featurette-heading _unih2">About Fivetran</h2>
                                <p className="_unip">As the leader in automated data integration, Fivetran delivers ready-to-use connectors that automatically adapt as schemas and APIs change, ensuring consistent, reliable access to data. Fivetran improves the accuracy of data-driven decisions by continuously synchronizing data from source applications to any destination, allowing analysts to work with the freshest possible data. To accelerate analytics, Fivetran automates in-warehouse transformations and programmatically manages ready-to-query schemas.</p>
                                <h2 className="featurette-heading _unih2">Our origin story</h2>
                                <p className="_unip">Fivetran began with a realization: For modern companies using cloud-based software and storage, traditional ETL tools badly underperformed, and the complicated configurations they required often led to project failures. To streamline and accelerate analytics projects, Fivetran developed zero-configuration, zero-maintenance pipelines to deliver data into modern cloud warehouses. Established out of Y Combinator, we are part of a growing ecosystem of cloud companies that enable organizations to control their data without complex engineering. Fivetran now serves thousands of customers and hundreds of leading brands across the globe, including ASICS, Autodesk, BJ’s Restaurants, Conagra Brands, DocuSign, Forever 21, Lionsgate, Square, Strava, Urban Outfitters and Ziff Davis.</p>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={pr2img} alt="" />
                            <p className="card-text _unip pt-5 d-flex"><i className="bi bi-check-lg _unigc mx-2"></i><span>Fivetran is headquartered in Oakland, California, with offices around the world.</span></p>
                            <p className="card-text _unip d-flex"><i className="bi bi-check-lg _unigc mx-2"></i><span>George Fraser and Taylor Brown founded Fivetran in 2013 out of Y Combinator.</span></p>
                            <p className="card-text _unip d-flex"><i className="bi bi-check-lg _unigc mx-2"></i><span>The pair met way back in the day, when they were both in diapers.</span></p>
                            <p className="card-text _unip d-flex"><i className="bi bi-check-lg _unigc mx-2"></i><span>They set out to build a better BI tool, but quickly realized they could disrupt the ETL market.</span></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd Portion End */}

            {/* 3rd Portion Start */}
            <div className="container-fluid _unictc _unibg py-4">
                <h2 className="_unih2">To learn more, visit our newsroom</h2>
                <a className="btn btn-primary _unib" href="/" role="button">Fivetran in the News</a>
            </div>
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid _3rdprt _wfp2c1 py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-2">
                        <div className="col">
                            <div className="_5contimgbr">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2 card-img-top _3contimg" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </div>
                            <h6 className="card-title pt-3 _unih6">2 trillion+</h6>
                            <p className="card-text _unip">Monthly synced rows</p>
                        </div>
                        <div className="col">
                            <div className="_5contimgbr">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2 card-img-top _3contimg" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </div>
                            <h6 className="card-title pt-3 _unih6">700,000+</h6>
                            <p className="card-text _unip">Monthly managed schema changes</p>
                        </div>
                        <div className="col">
                            <div className="_5contimgbr">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2 card-img-top _3contimg" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </div>
                            <h6 className="card-title pt-3 _unih6">30,000+</h6>
                            <p className="card-text _unip">Monthly managed connectors</p>
                        </div>
                        <div className="col">
                            <div className="_5contimgbr">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2 card-img-top _3contimg" viewBox="0 0 16 16">
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                </svg>
                            </div>
                            <h6 className="card-title pt-3 _unih6">99.9%</h6>
                            <p className="card-text _unip">Guaranteed data pipeline uptime</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th Portion End */}

            {/* 5th Portion Start */}
            <div className="container-fluid py-5 _unictc">
                <p className="_unip">Join the 2,000+ companies using Fivetran to centralize their data</p>
                <div className="_2contc">
                    <img className="_2contimg" src={asicsl} alt="" />
                    <img className="_2contimg" src={conagral} alt="" />
                    <img className="_2contimg" src={docusignl} alt="" />
                    <img className="_2contimg" src={squarel} alt="" />
                    <img className="_2contimg" src={lionsgatel} alt="" />
                    <img className="_2contimg" src={oktal} alt="" />
                </div>
                <a className="_2conta" href="/">Read customer stories →</a>
            </div>
            {/* 5th Portion End */}

            {/* 6th Portion Start */}
            <div className="container-fluid _unictc py-5">
                <div className="container _unictc">
                    <h2 className="_unih2">Awards</h2>
                    <p className="_unip">Respected industry analysts, peer review communities and publications <br /> regularly recognize Fivetran for product innovation and workplace culture.</p>
                </div>

                <div className="container _unictc py-5 px-5">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card">
                                <a className="_abpr6a" href="/">
                                    <img src={pr6card1} className="card-img-top _abpr6img" alt="..." />
                                    <hr />
                                    <div className="card-body">
                                        <p className="card-text">Fivetran Wins Globee® in the 8th Annual 2021 Sales and Customer Service Excellence Awards</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <a className="_abpr6a" href="/">
                                    <img src={pr6card2} className="card-img-top _abpr6img" alt="..." />
                                    <hr />
                                    <div className="card-body">
                                        <p className="card-text">Great Place to Work</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <a className="_abpr6a" href="/">
                                    <img src={pr6card3} className="card-img-top _abpr6img" alt="..." />
                                    <hr />
                                    <div className="card-body">
                                        <p className="card-text">G2 Names Fivetran a Leader in Data Extraction, ETL Tools and Data Replication</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <a className="_abpr6a" href="/">
                                    <img src={pr6card4} className="card-img-top _abpr6img" alt="..." />
                                    <hr />
                                    <div className="card-body">
                                        <p className="card-text">The Top 100 Software Companies of 2021</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="btn btn-primary _unib" href="/" role="button">View All</a>
            </div>
            {/* 6th Portion End */}

            {/* 7th Portion Start */}
            <div className="container-fluid py-5 _unibg">
                <div className="container px-5 _unictc">
                    <h2 className="_unih2">Raised in the Bay, we’ve gone global.</h2>
                    <p className="_unip">Headquartered in Oakland, California, Fivetran maintains offices around the world to provide 24/7/365 customer support and guaranteed 99.9% data pipeline uptime.</p>
                </div>

                <div className="container _unictc pt-5">
                    <div className="row row-cols-1 row-cols-md-4 g-3 _unictc">
                        <div className="col">
                            <div className="card h-100">
                                {/* <img src="..." className="card-img-top" alt="..."/> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14000.914467616205!2d77.31068752120133!3d28.682807093075755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbab9ce6c6f1%3A0xed38e4e70c5c356b!2sf%20block%20%2C%20Dilshad%20colony!5e0!3m2!1sen!2sin!4v1626503092649!5m2!1sen!2sin" title="abmap" allowfullscreen="" loading="lazy"></iframe>
                                <div className="card-body">
                                    <h5 className="card-title _unih6">New Delhi</h5>
                                    <p className="card-text _unip">f block , Dilshad colony</p>
                                    <p className="card-text _unip">F-169, Block F, Dilshad Colony, Delhi, Uttar Pradesh 110095</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted _unip">India</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 7th Portion End */}

            {/* 8th Portion Start */}
            <div className="container-fluid _unibbg py-5">
                <div className="container _unictc">
                    <h2 className="_unih2 _abpr8txt">Experience ownership, empowerment, recognition and fun at Fivetran</h2>
                    <p className="_unip _abpr8txt">Join our growing team — we’re hiring!</p>
                    <a className="btn mt-4 _abpr8btn _unib" href="/" role="button">Join Fivetran</a>
                </div>
            </div>
            {/* 8th Portion End */}

            {/* 9th Portion Start */}
            <div className="container-fluid py-5">
                <div className="container px-5">
                    <div className="row row-cols-1 row-cols-md-2 g-4 _unima _unictc">
                        <div className="col">
                            <div className="card _fppr4card">
                                <img src={pr9card1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Branded Assets</h5>
                                    <p className="card-text _unip">Fivetran Logos and Product Screenshots</p>
                                </div>
                                <div className="card-footer p-3">
                                    <a className="_unilb" href="/" role="button">Download Assests →</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _fppr4card">
                                <img src={pr9card2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Contact Us</h5>
                                    <p className="card-text _unip">Press & Media Inquiries</p>
                                </div>
                                <div className="card-footer p-3">
                                    <a className="_unilb" href="/" role="button">Email Us →</a>
                                </div>
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

export default AboutFivetran
