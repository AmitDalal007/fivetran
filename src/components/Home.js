import React from 'react'
import Homepage from '../images/Homepage.webp'
import cta from '../images/cta.svg'
import autodesk from '../images/autodesk.webp'
import docusign from '../images/docusign.webp'
import oldcastle from '../images/oldcastle.webp'
import schematic from '../images/schematic.webp'
import asicsl from '../images/asicsl.svg'
import conagral from '../images/conagral.svg'
import docusignl from '../images/docusignl.svg'
import squarel from '../images/squarel.svg'
import lionsgatel from '../images/lionsgatel.svg'
import oktal from '../images/oktal.svg'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Navbar />

            {/* 1st portion */}
            <div className="container-fluid my-3">
                <div className="container">
                    <div className="row featurette">
                        <div className="col-md-7 home-email">
                            <h2 className="featurette-heading _unih2">Unlock Faster Time To Insight</h2>
                            <p className="_unip">Focus on insights and innovation instead of ETL.</p>
                            <div className="d-flex w-100 gap-2 newsemail">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary getstrt" type="button">Get Started</button>
                            </div>
                            <a className="getdemo" href="/">Get Demo &#8594;</a>
                        </div>
                        <div className="col-md-5">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={Homepage} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2nd portion */}
            <div className="_2cont">
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

            {/* 3rd portion */}
            <div className="container-fluid _3rdprt">
                <h2 className="_unih2">Unlock the value of your data</h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div>
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-gear-wide-connected card-img-top _3contimg" viewBox="0 0 16 16">
                                        <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title _crdt"><a className="_crdta" href="/">Replicate production databases</a></h6>
                                    <p className="card-text _unip">Generate insights from production data with a low-impact, highly reliable database integration service.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bounding-box card-img-top _3contimg" viewBox="0 0 16 16">
                                        <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title _crdt"><a className="_crdta" href="/">Centralize application data</a></h6>
                                    <p className="card-text _unip">Automatically integrate data from marketing, product, sales, finance and other applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-tools card-img-top _3contimg" viewBox="0 0 16 16">
                                        <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title _crdt"><a className="_crdta" href="/"> Build data products</a></h6>
                                    <p className="card-text _unip">Automated connectors seamlessly integrate with customer data to power your application.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4th portion */}
            <div className="container-fluid _4cont">
                <h2 className="_unih2">Leave the engineering to us</h2>
                <p className="_unip">Fivetran manages data delivery from source to destination, ensuring that your critical data is always accurate and up to date.</p>
                <img className="_4contimg" src={schematic} alt="" />
            </div>

            {/* 5th portion */}
            <div className="container-fluid">
                <div className="container _5cont">
                    <h2 className="_unih2">Built for data professionals</h2>
                    <div className="_5crdcont">
                        <div className="col">
                            <div className="_5crdpad _5crd12">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-plug card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0zM5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4H5z" />
                                    </svg>
                                </div>
                                <div className="card-body _5contcb">
                                    <h5 className="card-title"><a className="_5contta" href="/">Prebuilt connectors</a></h5>
                                    <p className="card-text _unip">150+ zero-configuration connectors that launch in minutes</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="_5crdpad _5crd12">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-share card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a className="_5contta" href="/">Self-healing architecture</a></h5>
                                    <p className="card-text _unip">Automated response to schema and API changes</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="_5crdpad _crd3">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left-right card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a className="_5contta" href="/">Prebuilt schemas</a></h5>
                                    <p className="card-text _unip">Research-driven schemas and ERDs for every source</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="_5crdpad _crd4">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check-circle card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a className="_5contta" href="/">99.9% reliability</a></h5>
                                    <p className="card-text _unip">Fully managed service for reliable data delivery</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="_5crdpad _crd5">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-diagram-3 card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a className="_5contta" href="/">Integrated transformations</a></h5>
                                    <p className="card-text _unip">In-warehouse SQL-based transformations powered by dbt</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="_5crdpad">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-lock card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a className="_5contta" href="/">End-to-end security</a></h5>
                                    <p className="card-text _unip">Industry-leading protocols backed by a global engineering team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6th posrtion start */}
            <div className="container-fluid _6cont">
                <div className="container _6cont2">
                    <h2 className="_unih2">Leading data teams rely on Fivetran</h2>
                    <a className="_conta" href="/">View case studies →</a>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 mt-3">
                        <div className="col">
                            <div className="card _6crdh">
                                <a className="_6crda" href="/">
                                    <img src={autodesk} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title _6crdt">Autodesk</h5>
                                        <p className="card-text _unip">Saw a 5x decrease in pipeline maintenance time</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _6crdh">
                                <a className="_6crda" href="/">
                                    <img src={docusign} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title _6crdt">DocuSign</h5>
                                        <p className="card-text _unip">Freed up 1,000+ hours of data engineering time a year</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _6crdh">
                                <a className="_6crda" href="/">
                                    <img src={oldcastle} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title _6crdt">Oldcastle Infrastructure</h5>
                                        <p className="card-text _unip">Saved $360k in data pipeline costs</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 7th portion */}
            <div className="container-fluid my-5">
                <div className="container">
                    <div className="row featurette">
                        <div className="col-md-7 home-email">
                            <div className="container">
                                <h2 className="featurette-heading _unih2">Ready to get started?</h2>
                                <div className="d-flex w-100 gap-2 ">
                                    <a className="btn btn-primary _7prbtn" href="/" role="button">Start a free trial</a>
                                    <a className="btn btn-outline-primary _7prbtn" href="/" role="button">Ask an expert</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={cta} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home