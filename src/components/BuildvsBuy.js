import React from 'react'
import dengheaderi from '../images/dengheaderi.png'

import dscc1i from '../images/dscc1i.jpg'
import dscc2i from '../images/dscc2i.jpg'
import dscc3i from '../images/dscc3i.jpg'

import bvbc3i from '../images/bvbc3i.jpg'
import bvbc5i from '../images/bvbc5i.jpg'
import bvbc6i from '../images/bvbc6i.jpg'
import bvbc9i from '../images/bvbc9i.jpg'
import bvbc10i from '../images/bvbc10i.jpg'
import bvbc11i from '../images/bvbc11i.jpg'
import SubNav from './SubNav'
import Navbar from './Navbar'
import Footer from './Footer'

const BuildvsBuy = () => {
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
                        <h2 className="_unih2">Build vs. Buy</h2>
                        <p className="_unip">Wondering whether to build or buy? Explore these resources that dive into tradeoffs, calculations, and much more before you make a decision.</p>
                    </div>
                </div>

                <div className="container my-2 py-2 px-5">
                    <div className="row featurette _unima py-5">
                        <div className="col-md-6 order-md-1 _unima">
                            <div className="card ">
                                <a className="_cscrdbody _dsccrd1" href="/">
                                    <img src={dscc1i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle _dsccrd1b">
                                        <h2 className="_unitxt _unih2 _txthid">The Data Professional's Guide to Data Integration: How to Build a Modern Data Stack</h2>
                                        <h2 className="_unitxt _unih2 _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>The Data Professional's Guide To Data Integration: How To Build A Modern Data Stack</h2>
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
                                            <img src={dscc2i} className="card-img-top" alt="..." />
                                            <div className="card-body p-4 _cscstyle">
                                                <h6 className="_unitxt _txthid">7 Insider Tips For Building Modern Data Stacks</h6>
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
                                            <img src={bvbc3i} className="card-img-top" alt="..." />
                                            <div className="card-body p-4 _cscstyle">
                                                <h6 className="_unitxt _txthid">[Part Two] Data Integrations For SaaS_ Build vs Buy</h6>
                                                <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div></h6>
                                            </div>
                                            <div className="card-footer _cscrdf p-4">
                                                <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Watch Video &rarr;</small>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card _dengcrd4h">
                                        <div className="card-body p-4 _cscstyle">
                                            <div><i className="bi bi-dash-lg _unibc"></i></div>
                                            <h4 className="_unitxt _txthid _dsccrd1txt">Build vs Buy Demo</h4>
                                        </div>
                                        <div className="card-footer _cscrdf p-4 _unictc">
                                            <a className="btn btn-light btn-sm _unip" href="/" role="button">Get Demo</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="card">
                                        <a className="_cscrdbody" href="/">
                                            <img src={bvbc5i} className="card-img-top" alt="..." />
                                            <div className="card-body p-4 _cscstyle">
                                                <h6 className="_unitxt _txthid">[Part One] Data Integrations For SaaS_ Build vs Buy</h6>
                                                <h6 className="_txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div></h6>
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
                                    <img src={bvbc6i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">ARTICLES</small>
                                        <h6 className="_unitxt _txthid">Build vs. Buy: By the Numbers</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Wondering whether to build or buy? This infographic puts numbers to the issue.</h6>
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
                                    <img src={dscc3i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">ARTICLES</small>
                                        <h6 className="_unitxt _txthid">Five Differences Between Fivetran And Traditional ETL</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div></h6>
                                    </div>
                                    <div className="card-footer _cscrdf p-4">
                                        <small className="_unibc _cscrdftxt"><i className="bi bi-book-fill"> </i> Read Article &rarr;</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col">
                            <a className="_dengc1a" href="/">
                                <div className="card _dengcrd1h">
                                    <div className="card-body p-4 _cscstyle">
                                        <div><i className="bi bi-dash-lg _unibc"></i></div>
                                        <h5 className="_unitxt _dsccrd1txt _txthid">Increase Data Team Efficiency With A Modern Data Stack</h5>

                                        <h6 className="_dengc1htxt py-3">For high-growth companies, building a focused, priority-driven analytics team is mission-critical.</h6>
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
                                    <img src={bvbc9i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">ARTICLES</small>
                                        <h6 className="_unitxt _txthid">Building a 360° View of the Customer at Huel</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Data Scientist Jay Kotecha and Ecommerce Director Ollie Scheers share how they use data to keep customers happy.</h6>
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
                                    <img src={bvbc10i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">ARTICLES</small>
                                        <h6 className="_unitxt _txthid">Build vs. Buy: A Comparison</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Wondering whether to build or buy? Consider these quality-of-life tradeoffs before you make a decision.</h6>
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
                                    <img src={bvbc11i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">ARTICLES</small>
                                        <h6 className="_unitxt _txthid">How to Assess Build vs. Buy as a Product Manager</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>How can you avoid wasting engineering cycles on data pipeline creation and maintenance? Powered by Fivetran.</h6>
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
                                    <img src={dscc3i} className="card-img-top" alt="..." />
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
                                    <img src={dscc3i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">ARTICLES</small>
                                        <h6 className="_unitxt _txthid">There Is No ROI in Building Data Pipelines</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Modern data pipelines give your data engineers the opportunity to pursue higher-value activities.</h6>
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

export default BuildvsBuy
