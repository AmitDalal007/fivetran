import React from 'react'
import dengheaderi from '../images/dengheaderi.png'

import card2 from '../images/DataAnalyticsBusinessIntelligence/card2.jpg'
import card3 from '../images/DataAnalyticsBusinessIntelligence/card3.jpg'
import card5 from '../images/DataAnalyticsBusinessIntelligence/card5.jpg'
import card6 from '../images/DataAnalyticsBusinessIntelligence/card6.jpg'
import card7 from '../images/DataAnalyticsBusinessIntelligence/card7.jpg'
import card8 from '../images/DataAnalyticsBusinessIntelligence/card8.jpg'
import card9 from '../images/DataAnalyticsBusinessIntelligence/card9.jpg'
import card10 from '../images/DataAnalyticsBusinessIntelligence/card10.jpg'
import card11 from '../images/DataAnalyticsBusinessIntelligence/card11.jpg'
import card12 from '../images/DataAnalyticsBusinessIntelligence/card12.jpg'
import SubNav from './SubNav'

const DataAnalyticsBusinessIntelligence = () => {
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
                        <h2 className="_unih2">Data Analyst & Business Intelligence</h2>
                        <p className="_unip">Learn how data analysts & Business Intelligence teams use Fivetran.</p>
                    </div>
                </div>

                <div className="container my-2 py-2 px-5">
                    <div className="row featurette _unima py-5">
                        <div className="col-md-6 order-md-1 _unima">
                            <div className="card ">
                                <a className="_cscrdbody _dsccrd1" href="/">
                                    <img src={card8} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle _dsccrd1b">
                                        <small className="_unibc _txthid pb-2">EBOOK</small>
                                        <h2 className="_unitxt _unih2 _txthid">The Essential Guide to Data Integration</h2>
                                        <h6 className="_unitxt _txthid">Learn how data integration allows your organization to maintain all of its data in a single environment, so your team has a comprehensive view of business operations and customer interactions.</h6>
                                        <h2 className="_unitxt _unih2 _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>The Essential Guide to Data Integration</h2>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis">Learn how data integration allows your organization to maintain all of its data in a single environment, so your team has a comprehensive view of business operations and customer interactions.</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read FLIPBOOK &rarr;</small>
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
                                                <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                                <h6 className="_unitxt _txthid">Pet Circle Improves Customer Experience Through Data</h6>
                                                <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Fivetran integrates MariaDB data into BigQuery, enabling Australia’s largest ecommerce pet store to understand and improve its customer journey.</h6>
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
                                                <h6 className="_unitxt _txthid">The Data Analyst Survey Says…</h6>
                                                <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Global research reveals data analysts are a critical, underutilized resource.</h6>
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
                                            <h4 className="_unitxt _txthid _dsccrd1txt">Fivetran Business Intelligence Demo</h4>
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
                                                <h6 className="_unitxt _txthid">Autodesk Is All in on the Modern Data Stack</h6>
                                                <h6 className="_txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With Fivetran, Snowflake and dbt, Autodesk Construction Services builds a uniform data architecture for its many acquisitions.</h6>
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
                                        <h6 className="_unitxt _txthid">Why Your Enterprise Needs Automated Data Integration</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Data automation is the bridge between enterprise analysts and IT and engineering departments.</h6>
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
                                        <h6 className="_unitxt _txthid">Ritual Improves Retention With a Modern Data Stack</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With Fivetran, Snowflake, dbt and Looker, Ritual empowers business users with accurate, timely data and improves retention month over month.</h6>
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
                                        <h6 className="_unitxt _txthid">The Importance of a Modern Data Stack with Omni Factors</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Immerse yourself in an interactive webinar with Omni Factors where you will learn the importance of a modern data stack with Fivetran and Looker. Ali Demir, Founder at Omni Factors will give you real</h6>
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
                                    <img src={card9} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">Sendbird Scales With a Data-Driven DNA</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With Fivetran and Looker, Sendbird engineers save 20 hours a week and the business builds out multiple critical dashboards.</h6>
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
                                        <h6 className="_unitxt _txthid">2020: The State of Data Analysts Global Survey</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Dimensional Research &amp; Fivetran present insights from nearly 500 data professionals.</h6>
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
                                    <img src={card11} className="card-img-top" alt="..." />
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

                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={card12} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">Webinar: From Disparate Data to Tell-All Dashboards at Talkdesk</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Learn how Talkdesk powers business intelligence with Looker and Fivetran.</h6>
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

export default DataAnalyticsBusinessIntelligence
