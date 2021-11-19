import React from 'react'
import dengheaderi from '../images/dengheaderi.png'

import card1 from '../images/MarketingAgency/card1.jpg'
import card2 from '../images/MarketingAgency/card2.jpg'
import card3 from '../images/MarketingAgency/card3.jpg'
import card5 from '../images/MarketingAgency/card5.jpg'
import card6 from '../images/MarketingAgency/card6.jpg'
import card7 from '../images/MarketingAgency/card7.jpg'
import card8 from '../images/MarketingAgency/card8.jpg'
import card9 from '../images/MarketingAgency/card9.jpg'
import card10 from '../images/MarketingAgency/card10.jpg'
import SubNav from './SubNav'
import Navbar from './Navbar'
import Footer from './Footer'

const MarketingAgency = () => {
    return (
        <>
            <Navbar />

            <div className="_dengheader">
                <img className="_dengheaderi" src={dengheaderi} alt="" />
                <div className="container _dengheaderc">
                    <h2 className="_unih2 _denghdtxt px-5 pt-3">Welcome to our Resource Center</h2>
                </div>
            </div>

            <SubNav />

            <div className="container-fluid _unibg py-5">
                <div className="container _cscont mt-5">
                    <div className="px-5">
                        <h2 className="_unih2">Agencies</h2>
                        <p className="_unip">Learn how marketing agencies use Fivetran.</p>
                    </div>
                </div>

                <div className="container my-2 py-2 px-5">
                    <div className="row featurette _unima py-5">
                        <div className="col-md-6 order-md-1 _unima">
                            <div className="card ">
                                <a className="_cscrdbody _dsccrd1" href="/">
                                    <img src={card1} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle _dsccrd1b">
                                        <small className="_unibc _txthid pb-2">ARTICLES</small>
                                        <h2 className="_unitxt _unih2 _txthid">Media Buying Is a Data Integration Game</h2>
                                        <h6 className="_unitxt _txthid">Let's talk media buying in the data age.</h6>

                                        <h2 className="_unitxt _unih2 _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Media Buying Is a Data Integration Game</h2>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis">Let's talk media buying in the data age.</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read Article &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 _unima">
                            <div className="row row-cols-1 row-cols-md-2 g-4">
                                <div className="col">
                                    <div className="card">
                                        <a className="_cscrdbody" href="/">
                                            <img src={card2} className="card-img-top" alt="..." />
                                            <div className="card-body p-4 _cscstyle">
                                                <h6 className="_unitxt _txthid">Powered by Fivetran: How Helios is Building Modern Data Experiences</h6>
                                                <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Learn how your organization can easily reap the benefits of a Powered by Fivetran Experience for your customers.</h6>
                                            </div>
                                            <div className="card-footer _cscrdf p-4">
                                                <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Watch Video &rarr;</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card">
                                        <a className="_cscrdbody" href="/">
                                            <img src={card3} className="card-img-top" alt="..." />
                                            <div className="card-body p-4 _cscstyle">
                                                <small className="_unibc _txthid pb-2">ARTICLES</small>
                                                <h6 className="_unitxt _txthid">Powered by Fivetran Fuels Savvy Data Insights Platforms and Agencies</h6>
                                                <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Offer clients comprehensive insights by building Fivetran connectors into your data products.</h6>
                                            </div>
                                            <div className="card-footer _cscrdf p-4">
                                                <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read Article &rarr;</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card _dengcrd4h">
                                        <div className="card-body p-4 _cscstyle">
                                            <div><i className="bi bi-dash-lg _unibc"></i></div>
                                            <h4 className="_unitxt _txthid _dsccrd1txt">Are you an Agency? Get an agency focused demo</h4>
                                        </div>
                                        <div className="card-footer _cscrdf p-4 _unictc">
                                            <a className="btn btn-light btn-sm _unip" href="/" role="button">Get Demo</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card">
                                        <a className="_cscrdbody" href="/">
                                            <img src={card5} className="card-img-top" alt="..." />
                                            <div className="card-body p-4 _cscstyle">
                                                <h6 className="_unitxt _txthid">Enhance Your Customer's Data Experience with Fivetran</h6>
                                                <h6 className="_txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>An introduction to Powered by Fivetran. Deliver the data your customers need. Build experiences they'll love.</h6>
                                            </div>
                                            <div className="card-footer _cscrdf p-4">
                                                <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Watch Video &rarr;</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-4 g-4 px-2">
                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={card6} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <h6 className="_unitxt _txthid">With Centralized Data, Moroch Cuts Costs and Enhances Value</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Moroch Agency can easily add new connectors for customers, produce client-facing reports, and deliver insights more quickly with Fivetran, Snowflake and Power BI.</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read Article &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={card7} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">Copyright Migrates Databases to the Cloud</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With Fivetran and Snowflake, nonprofit agency Copyright migrates its databases to the cloud, decommissions legacy platforms, and reduces costs.</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read Article &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={card8} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">ARTICLES</small>
                                        <h6 className="_unitxt _txthid">Digital Agencies Centralize Data to Drive Growth and Build Loyalty</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Automated data integration makes it much easier for digital agencies to help clients connect the dots across marketing and non-marketing data sources.</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read Article &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={card9} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">ARTICLES</small>
                                        <h6 className="_unitxt _txthid">Digital Marketing Agencies White Label Fivetran, Speed Up Development With "Powered by Fivetran"</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Powered by Fivetran (PBF) provides a simple framework that allows developers to go beyond internal analytics and build data pipelines into their applications within the Fivetran platform.</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read Article &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={card10} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <h6 className="_unitxt _txthid">Building the Future of Analytics for Digital Agencies</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Marketing agencies continuously improve their analytics services to identify new insights for better engagement and to optimize or accelerate customer acquisition for their clients. Historically agenc</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Watch Video &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default MarketingAgency
