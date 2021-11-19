import React from 'react'
import csi from '../images/csi.png'
import csi1 from '../images/csi1.jpg'
import csi2 from '../images/csi2.jpg'
import csi3 from '../images/csi3.jpg'
import Footer from './Footer'
import Navbar from './Navbar'

const CustomerSupport = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid _unibg py-5">
                <div className="container _cscont px-5">
                    <img className="_csi" src={csi} alt="" />

                    <div className="px-4">
                        <h2 className="_unih2">Support Solutions</h2>
                        <p className="_unip">Learn how Fivetran can help alleviate your biggest customer support headaches.</p>
                    </div>
                </div>

                <div className="container my-5 py-5 px-5">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={csi1} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <h6 className="_unitxt _txthid">Announcing The Fivetran Dbt Package For Zendesk Support</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div> Refine customer succes data modeling with more detailed tracking</h6>
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
                                    <img src={csi2} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">VIDEOS</small>
                                        <h6 className="_unitxt _txthid">Fivetran Customer Video: Optimizely</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div> Optimizely replaces custom, in-house ETL with Fivetran and refocuses its energy on driving insights and delivering data to stakeholders in near real time.</h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-camera-video-fill"> </i> Read Article &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <a className="_cscrdbody" href="/">
                                    <img src={csi3} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">Falcon.lo: Building A Data-Driven Culutre In A Fast-Growing Company</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div> With its modern data stack, Falcon.io builds a comprehensive picture of the business's critical operations, democratises access to data, and makes faster, more precise business decisions.</h6>
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
                                    <img src={csi3} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">ANALYST RECIPES</small>
                                        <h6 className="_unitxt _txthid">Developing SQL For Zendesk Ticket Metrics</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div> Use SQL queries with Zendesk data to assess help desk performance by employing metrics that offer quantitative insight into the efficiency of support teams</h6>
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

export default CustomerSupport
