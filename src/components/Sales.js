import React from 'react'
import dengheaderi from '../images/dengheaderi.png'

import card1 from '../images/Sales/card1.jpg'
import card2 from '../images/Sales/card2.jpg'
import card3 from '../images/Sales/card3.jpg'
import card5 from '../images/Sales/card5.jpg'
import card6 from '../images/Sales/card6.jpg'
import card7 from '../images/Sales/card7.jpg'
import card11 from '../images/Sales/card11.jpg'
import SubNav from './SubNav'
import Navbar from './Navbar'
import Footer from './Footer'

const Sales = () => {
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
                        <h2 className="_unih2">Sales Analytics</h2>
                    </div>
                </div>

                <div className="container py-2 px-5">
                    <div className="row featurette _unima py-5">
                        <div className="col-md-6 order-md-1 _unima">
                            <div className="card ">
                                <a className="_cscrdbody _dsccrd1" href="/">
                                    <img src={card1} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle _dsccrd1b">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h2 className="_unitxt _unih2 _txthid">Announcing The Fivetran Dbt Package For Salesforce</h2>
                                        <h6 className="_unitxt _txthid">Monitor your sales team’s performance health, from individual salespeople to the entire team.</h6>
                                        <h2 className="_unitxt _unih2 _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Pet Circle Improves Customer Experience Through Data</h2>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis">Monitor your sales team’s performance health, from individual salespeople to the entire team.</h6>
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
                                                <small className="_unibc _txthid pb-2">ARTICLES</small>
                                                <h6 className="_unitxt _txthid">Let Data Show the Way Through Uncertainty</h6>
                                                <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>How we uncovered an unexpected sales opportunity through data sleuthing.</h6>
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
                                            <img src={card3} className="card-img-top" alt="..." />
                                            <div className="card-body p-4 _cscstyle">
                                                <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                                <h6 className="_unitxt _txthid">Guest Post: Delivering Valuable Data to Medical Researchers</h6>
                                                <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>By bringing Salesforce data into BigQuery for the University of Colorado School of Medicine, Fivetran helps researchers secure grants and advance personalized medicine.</h6>
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
                                            <h4 className="_unitxt _txthid _dsccrd1txt">Get Sales Analytics Demo</h4>
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
                                                <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                                <h6 className="_unitxt _txthid">Football Index Bets on Fivetran, Saves 10-20% of Developer Time</h6>
                                                <h6 className="_txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Betting platform Football Index centralizes data from its operational database, builds out multiple dashboards and saves engineering time.</h6>
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
                    <div className="row row-cols-1 row-cols-md-4 g-4 px-2">
                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={card6} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">ARTICLES</small>
                                        <h6 className="_unitxt _txthid">How to Maximise the Value of Your Salesforce Data</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Learn how Fivetran can help you get the most out of an extremely popular data source.</h6>
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
                                        <h6 className="_unitxt _txthid">Webinar: Aligning Product and Sales With Shared Metrics</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Product teams often struggle to validate requests from sales teams. But what if both teams had access to the same up-to-date usage data?</h6>
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
                                        <h6 className="_unitxt _txthid">From Data-Reactive to Data-Informed: DiscoverOrg’s Move to the Modern Data Stack</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>DiscoverOrg eliminates the need to hire three full-time engineers, slashes time to create reports, increases annual contract value by 80–90%, and embeds customer-facing dashboards into its platform.</h6>
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
                                        <h6 className="_unitxt _txthid">Phorest Bridges HubSpot and Salesforce Data With Fivetran Connectors</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Salon software solution provider Phorest centralises sales and marketing data to better understand the customer journey, create impactful reports and dashboards, and improve its website.</h6>
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
                                        <h6 className="_unitxt _txthid">Taking the Sting Out of ParkBee's Transition to a Data-Centric Culture</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With Fivetran and Looker, ParkBee reduces spending, increases sales and promotes a data-driven culture.</h6>
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
                                    <img src={card11} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">Square Banks on Fivetran for Effortless Data Centralization</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Payments disruptor Square uses Fivetran to remove the pressure of ongoing maintenance and focus on what matters most — continued growth.</h6>
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
                                        <h6 className="_unitxt _txthid">Replicating Sharded Databases: A Case Study of SalesLoft, Citus Data and Fivetran</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>When SalesLoft faced a daunting challenge — combining sharded tables in AWS Redshift — it turned to Fivetran.</h6>
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
                                        <small className="_unibc _txthid pb-2">ANALYST RECIPES</small>
                                        <h6 className="_unitxt _txthid">Replicating Formula and Lookup Fields in Your Data Warehouse</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Why Saleforce’s formula and lookup fields can cause problems when integrating your data pipeline, and what you can do to get the information to your warehouse.</h6>
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

export default Sales
