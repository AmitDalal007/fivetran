import React from 'react'
import tpr1img from '../images/tpr1img.webp'
import tpr3img from '../images/tpr3img.svg'
import tpr4img from '../images/tpr4img.svg'

const Transform = () => {
    return (
        <>
            {/* 1st Portion */}
            <div className="container-fluid my-5">
                <div className="container _unima">
                    <div className="row featurette">
                        <div className="col-md-7 _unima">
                            <div className="container _tpr1c">
                                <h2 className="featurette-heading _unih2 _wfp1c2h2">Fivetran Transformations</h2>
                                <p className="_unip">Automated data pipelines land data in your cloud data warehouse. Fivetran Transformations ensures that data is modeled for analytics to maximize its impact across your business.</p>
                                <div className="d-flex w-100 gap-2 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Start a free trial</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 _unima">
                            <img className="_tpr1img" src={tpr1img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 1st Portion End */}

            {/* 2nd Portion Start */}
            <div className="container-fluid _unibg _unictc py-4">
                <h2 className="_unih2">Deliver Analytics Projects Faster</h2>
                <p className="_unip">Accelerate the delivery of value, reduce time to insight, and free up critical engineering time with Fivetran Transformations</p>
            </div>
            <div className="container-fluid _wfp4c1 _unibbg _unima p-4">
                <div className="container">
                    <div className="row featurette">
                        <div className="col-md-6 _unima">
                            <div className="container _unima">
                                <h2 className="_unih2 _tpr2txt">Accessible</h2>
                                <p className="_unip _tpr2txt">Transform data with SQL from within your data warehouse for a powerful and modern ELT solution.</p>

                                <h2 className="_unih2 _tpr2txt">Accelerate</h2>
                                <p className="_unip _tpr2txt">Speed up ELT development by using packages with pre-built logic to accelerate the delivery of data insights to your business.</p>

                                <h2 className="_unih2 _tpr2txt">Reliable</h2>
                                <p className="_unip _tpr2txt">Automate pipelines and deploy analytics faster with CI/CD and data governance for consistent and reliable data analytics.</p>
                            </div>
                        </div>
                        <div className="col-md-5 _unima">
                            <iframe className="_tpr2v" title="tpr2" src="https://www.youtube.com/embed/UBwwjCsf4Jk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd Portion End */}

            {/* 3rd Portion */}
            <div className="container-fluid py-5">
                <div className="container _unima">
                    <div className="row featurette">
                        <div className="col-md-7 order-md-2 _unima">
                            <div className="container _tpr1c">
                                <h2 className="featurette-heading _unih2 _wfp1c2h2">Fivetran dbt Packages</h2>
                                <p className="_unip">Accelerate analytics with pre-built SQL models to use with <span className="_unilb">dbt</span> to save engineer development time. Utilize packages for a wide range of use cases.</p>
                                <div className="d-flex w-100 gap-2 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Explore all packages</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-1 _unima _unictc">
                            <img className="_tpr1img" src={tpr3img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid py-4 _unibg _unictc">
                <h2 className="_unih2 my-4">Our Approach to ELT</h2>
                <img src={tpr4img} alt="" />
                <div className="container">
                    <div className="_5crdcont">
                        <div className="col">
                            <div className="_5crdpad">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-diagram-2 _5contimg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                                    </svg>
                                </div>
                                <div className="card-body _5contcb">
                                    <h5 className="card-title _unih6">Version Control</h5>
                                    <p className="card-text _unip">Connect Fivetran directly to your git repository</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="_5crdpad">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bell _5contimg" viewBox="0 0 16 16">
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Log & Alerts</h5>
                                    <p className="card-text _unip">Receive automated alerts when a job or test fails</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="_5crdpad">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-box-seam _5contimg" viewBox="0 0 16 16">
                                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Modeling</h5>
                                    <p className="card-text _unip">Install Fivetran dbt packages for quick data modeling</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="_5crdpad">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bounding-box _5contimg" viewBox="0 0 16 16">
                                        <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Testing</h5>
                                    <p className="card-text _unip">Trust the data in your models and automate the tests against your transformations</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="_5crdpad">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cursor _5contimg" viewBox="0 0 16 16">
                                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Deployment</h5>
                                    <p className="card-text _unip">Orchestrate jobs from within Fivetran and deploy directly to production</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="_5crdpad">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-files _5contimg" viewBox="0 0 16 16">
                                        <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Documentation</h5>
                                    <p className="card-text _unip">Leverage documentation and create your own as you build your models</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th Portion End */}

            {/* 5th Portion Start */}
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title _unih6">Start analyzing your data in minutes, not months</h5>
                                <p className="card-text _unip">Start loading and transforming your data today.</p>
                                <a className="btn btn-primary _unib" href="/" role="button">Get a demo</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title _unih6">View Fivetran dbt Packages</h5>
                                <p className="card-text _unip">Learn more about all our pre-built transformations and how you can use these to model your data..</p>
                            </div>
                            <a className="_unilb mx-3" href="/">Explore all packages</a>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title _unih6">Request Transformation</h5>
                                <p className="card-text _unip">Don’t see a Fivetran Transformations feature or dbt package you’d like.</p>
                            </div>
                            <a className="_unilb mx-3" href="/">Submit a Feature Request</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 5th Portion End */}
        </>
    )
}

export default Transform
