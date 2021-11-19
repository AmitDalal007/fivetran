import React from 'react'
import csi from '../images/csi.png'

import card2 from '../images/ProductEngineering/card2.jpg'
import card5 from '../images/ProductEngineering/card5.jpg'
import card6 from '../images/ProductEngineering/card6.jpg'
import card7 from '../images/ProductEngineering/card7.jpg'
import card8 from '../images/ProductEngineering/card8.jpg'
import card9 from '../images/ProductEngineering/card9.jpg'
import Footer from './Footer'
import Navbar from './Navbar'

const ProductEngineering = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid _unibg py-5">
                <div className="container _cscont px-5">
                    <img className="_csi" src={csi} alt="" />

                    <div className="px-4">
                        <h2 className="_unih2">Product & Engineering Solutions</h2>
                        <p className="_unip">Learn how Fivetran helps your teams solve their Product & Engineering headaches.</p>
                    </div>
                </div>

                <div className="container my-5 py-5 px-5">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <a className="_dengc1a" href="/">
                                <div className="card _dengcrd1h">
                                    <div className="card-body p-4 _cscstyle">
                                        <div><i className="bi bi-dash-lg _unibc"></i></div>
                                        <h5 className="_unitxt _dsccrd1txt _txthid">2020 Cloud Data Warehouse Benchmark: Redshift, Snowflake, Presto And BigQuery</h5>

                                        <h6 className="_dengc1htxt py-3">Our latest benchmark compares price, performance and differentiated features for BigQuery, Presto, Redshift and Snowflake.</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_uniwc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read Article &rarr;</small>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={card2} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">VIDEOS</small>
                                        <h6 className="_unitxt _txthid">Aligning Product and Sales with Shared Metrics with Brandwatch</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Learn how your sales and product teams can leverage BI in your organization. You will learn how to save hours of engineering and manual reporting work each week to enable data-driven decisions across</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-camera-video-fill"> </i> Watch Video &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={card9} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">EBOOK</small>
                                        <h6 className="_unitxt _txthid">Build vs Buy Data Pipeline Guide</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>As you pursue data integration, be sure to consider the benefits an automated, off-the-shelf solution may bring you.</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read Flipbook &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={card9} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">EBOOK</small>
                                        <h6 className="_unitxt _txthid">The Essential Guide to Data Integration</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Learn how data integration allows your organization to maintain all of its data in a single environment, so your team has a comprehensive view of business operations and customer interactions.</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read Flipbook &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={card5} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">VIDEOS</small>
                                        <h6 className="_unitxt _txthid">Zenefits Leaves the Code to Fivetran, Delivers Reports 3x Faster</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>By bringing data into Redshift in near real time, Zenefits saves 20 hours of engineering time a month and reduces reporting time from five days to less than a day.</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-camera-video-fill"> </i> WATCH VIDEO &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={card6} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">Skuid Saves Six Months of Engineering Time With Fivetran Transformations</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Digital experience firm rapidly sets up its data stack and transformations while reducing BI and financial reporting time from days to minutes.</h6>
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
                                        <h6 className="_unitxt _txthid">DocuSign Regains Engineering Time and Saves Money With Automated Data Pipelines</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With Fivetran and Snowflake, DocuSign triples its data sources, refocuses its engineering efforts, and achieves greater visibility into data with 100+ BI dashboards.</h6>
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
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">Football Index Bets on Fivetran, Saves 10-20% of Developer Time</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Betting platform Football Index centralizes data from its operational database, builds out multiple dashboards and saves engineering time.</h6>
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
                                        <h6 className="_unitxt _txthid">Pendo-Fivetran Partnership Enables Seamless Export of Behavioral Activity Data to Cloud Warehouses</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With Fivetran and Pendo, businesses can track behavioral user activity, then centralize and transform activity data — without ever diverting engineering resources.</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read Article &rarr;</small>
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

export default ProductEngineering
