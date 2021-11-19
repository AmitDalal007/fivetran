import React from 'react'
import dengheaderi from '../images/dengheaderi.png'

import entc2i from '../images/entc2i.jpg'
import entc4i from '../images/entc4i.jpg'
import entc5i from '../images/entc5i.jpg'
import entc6i from '../images/entc6i.jpg'
import entc7i from '../images/entc7i.jpg'
import entc10i from '../images/entc10i.png'
import SubNav from './SubNav'
import Navbar from './Navbar'
import Footer from './Footer'

const Enterprise = () => {
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
                        <h2 className="_unih2">Enterprise</h2>
                        <p className="_unip">Learn how Enterprise teams are using Fivetran to accelerate their business.</p>
                    </div>
                </div>

                <div className="container my-2 py-2 px-5">
                    <div className="row featurette _unima py-5">
                        <div className="col-md-6 order-md-1 _unima">
                            <div className="card ">
                                <a className="_cscrdbody _dsccrd1" href="/">
                                    <img src={entc10i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle _dsccrd1b">
                                        <small className="_unibc _txthid pb-2">EBOOK</small>
                                        <h2 className="_unitxt _unih2 _txthid">Fivetran For The Modern Enterprise</h2>
                                        <h6 className="_unitxt _txthid">Explore the benefits of automated data integration and why enterprise organizations are making the move to a modern data stack.</h6>

                                        <h2 className="_unitxt _unih2 _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Fivetran For The Modern Enterprise</h2>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis">Explore the benefits of automated data integration and why enterprise organizations are making the move to a modern data stack.</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read Flipbook &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 _unima">
                            <div className="row row-cols-1 row-cols-md-2 g-4">
                                <div className="col">
                                    <div className="card">
                                        <a className="_cscrdbody" href="/">
                                            <img src={entc2i} className="card-img-top" alt="..." />
                                            <div className="card-body p-4 _cscstyle">
                                                <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                                <h6 className="_unitxt _txthid">Autodesk Is All in on the Modern Data Stack</h6>
                                                <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With Fivetran, Snowflake and dbt, Autodesk Construction Services builds a uniform data architecture for its many acquisitions.</h6>
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
                                            <img src={entc6i} className="card-img-top" alt="..." />
                                            <div className="card-body p-4 _cscstyle">
                                                <h6 className="_unitxt _txthid">Cloud Data Warehouse Benchmark 2020: <br />Redshift, Snowflake, Presto And BigQuery</h6>
                                                <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div></h6>
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
                                            <img src={entc4i} className="card-img-top" alt="..." />
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
                                            <img src={entc5i} className="card-img-top" alt="..." />
                                            <div className="card-body p-4 _cscstyle">
                                                <small className="_unibc _txthid pb-2">ARTICLES</small>
                                                <h6 className="_unitxt _txthid">Migrating Your Enterprise Data Warehouse to a Cloud-Based Data Warehouse</h6>
                                                <h6 className="_txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>The modern data stack lives in the cloud. Learn some concrete, actionable steps to migrate your on-premise system to the cloud and keep up with the technology curve.</h6>
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
                                    <img src={entc6i} className="card-img-top" alt="..." />
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
                                    <img src={entc7i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <h6 className="_unitxt _txthid">The Importance of Automation to the Enterprise Data Stack</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Make enterprise data more accurate, and instantly actionable, by adding automated data integration to your stack.</h6>
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
                                    <img src={entc4i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">ARTICLES</small>
                                        <h6 className="_unitxt _txthid">2020 State Of Data Analyst Global Survey</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div></h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read Flipbook &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <a className="_dengc1a" href="/">
                                <div className="card _dengcrd1h">
                                    <div className="card-body p-4 _cscstyle">
                                        <div><i className="bi bi-dash-lg _unibc"></i></div>
                                        <h5 className="_unitxt _dsccrd1txt _txthid">Enterprise Data Warehouses: Definition And Guide</h5>

                                        <h6 className="_dengc1htxt py-3">An enterprise data warehouse is critical to the long-term viability of your business.</h6>
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
                                    <img src={entc10i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">EBOOK</small>
                                        <h6 className="_unitxt _txthid">The CMO's Guide to Automating Your Marketing Analytics</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Find out how automated data integration makes it easy to centralize all your marketing data and improve analytics outcomes, no matter how many sources you have or how fast you grow.</h6>
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
                                    <img src={entc7i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">ARTICLES</small>
                                        <h6 className="_unitxt _txthid">Why Your Enterprise Needs Automated Data Integration</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Data automation is the bridge between enterprise analysts and IT and engineering departments.</h6>
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

export default Enterprise
