import React from 'react'
import dengheaderi from '../images/dengheaderi.png'

import dengc2i from '../images/dengc2i.jpg'
import dengc3i from '../images/dengc3i.jpg'
import dengc6i from '../images/dengc6i.jpg'
import dengc7i from '../images/dengc7i.jpg'
import dengc8i from '../images/dengc8i.jpg'
import dengc9i from '../images/dengc9i.jpg'
import dengc10i from '../images/dengc10i.jpg'
import dengc11i from '../images/dengc11i.jpg'
import dengc12i from '../images/dengc12i.jpg'
import dengc13i from '../images/dengc13i.jpg'
import dengc14i from '../images/dengc14i.jpg'
import SubNav from './SubNav'

const DataEngineering = () => {
    return (
        <>
            <div className="_dengheader">
                <img className="_dengheaderi" src={dengheaderi} alt="" />
                <div className="container _dengheaderc">
                    <h2 className="_unih2 _denghdtxt px-5 pt-3">Welcome to our Resource Center</h2>
                </div>
            </div>

            <SubNav/>

            <div className="container-fluid _unibg py-5">
                <div className="container _cscont mt-5">
                    <div className="px-5">
                        <h2 className="_unih2">IT/Engineering</h2>
                        <p className="_unip">Learn how other data engineers and information technology professionals have utilized Fivetran to minimize their infrastructure maintenance.</p>
                    </div>
                </div>

                <div className="container my-2 py-2 px-5">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
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
                                    <img src={dengc2i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <h6 className="_unitxt _txthid">A Modern Data Stack Improves Analytics in Seven Key Ways</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Real-world success stories illustrate the benefits of a modern data stack, from lower engineering costs to greater data literacy.</h6>
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
                                    <img src={dengc3i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">Ziff Davis Analyzes Ad & Website Data</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With a modern data stack, Ziff Davis centralizes Google Analytics 360 and ad data to gain insights into paid search performance.</h6>
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
                                    <h4 className="_unitxt _dsccrd1txt _txthid">Developing SQL For Zendesk Ticket Metrics</h4>
                                </div>
                                <div className="card-footer _cscrdf p-4 _unictc">
                                    <a className="btn btn-light btn-sm _unip" href="/" role="button">Get Demo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={dengc7i} className="card-img-top img5" alt="..." />
                                    <div className="card-body p-4 _cscstyle part5">
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
                                    <img src={dengc6i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">ARTICLES</small>
                                        <h6 className="_unitxt _txthid">Build vs. Buy: An Illustrated Guide</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Consider these comparisons before you try to build your own data pipeline</h6>
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
                                    <img src={dengc7i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">ASICS Focuses on Digital Innovation, Not ELT</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With Fivetran handling ELT, the company's engineers can focus on data science and machine learning projects.</h6>
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
                                    <img src={dengc8i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">Branch Centralizes Transactional Data for Reporting</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With a modern data stack, Branch Insurance joins data from its transactional database and apps to visualize acquisition cost and lifetime value in real time.</h6>
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
                                    <img src={dengc9i} className="card-img-top" alt="..." />
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
                                    <img src={dengc10i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">Intercom Easily Integrates Financial Data</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Intercom uses Fivetran to centralize Zuora data into Redshift and join it with product, marketing, sales and other data for reports and dashboards.</h6>
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
                                    <img src={dengc11i} className="card-img-top" alt="..." />
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
                                    <img src={dengc12i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">Aceable Switches From Alooma to Fivetran, Eliminates ETL Maintenance</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With Alooma, schema changes required back-end maintenance, but Fivetran connectors automatically adapt to schema and API changes.</h6>
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
                                    <img src={dengc13i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <h6 className="_unitxt _txthid">How Autodesk Achieves Fast, Reliable Data Pipelines with Snowflake and Fivetran</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Learn how Autodesk achieves faster data pipelines with Snowflake and Fivetran.</h6>
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
                                    <img src={dengc14i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">Case Study: Spendesk Focus on Analysis, Powers ELT with dbt</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With Fivetran, Snowflake, dbt and Looker, Spendesk saves engineering resources, improves the analyst function and introduces a self-service data desk.</h6>
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
        </>
    )
}

export default DataEngineering
