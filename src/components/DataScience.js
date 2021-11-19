import React from 'react'
import dengheaderi from '../images/dengheaderi.png'

import dscc1i from '../images/dscc1i.jpg'
import dscc2i from '../images/dscc2i.jpg'
import dscc3i from '../images/dscc3i.jpg'
import Footer from './Footer'
import Navbar from './Navbar'
import SubNav from './SubNav'

const DataScience = () => {
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
                        <h2 className="_unih2">Data Science</h2>
                        <p className="_unip">Learn how other data scientists drive insights and create models with Fivetran</p>
                    </div>
                </div>

                <div className="container my-2 py-2 px-5">
                    <div className="row featurette _unima py-5">
                        <div className="col-md-6 order-md-1 _unima">
                            <div className="card ">
                                <a className="_cscrdbody _dsccrd1" href="/">
                                    <img src={dscc1i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle _dsccrd1b">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h2 className="_unitxt _unih2 _txthid">Pet Circle Improves Customer Experience Through Data</h2>
                                        <h6 className="_unitxt _txthid">Fivetran integrates MariaDB data into BigQuery, enabling Australia's largest ecommerce pet store to understand and improves its customer journey.</h6>
                                        <h2 className="_unitxt _unih2 _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Pet Circle Improves Customer Experience Through Data</h2>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis">Fivetran integrates MariaDB data into BigQuery, enabling Australia's largest ecommerce pet store to understand and improves its customer journey.</h6>
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
                                            <img src={dscc2i} className="card-img-top" alt="..." />
                                            <div className="card-body p-4 _cscstyle">
                                                <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                                <h6 className="_unitxt _txthid">DonorsChoose Makes the Right Choice With a Modern Data Stack</h6>
                                                <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With Fivetran, Redshift and Looker, DonorsChoose easily adds new data sources, migrates its production database and visualizes its app performance.</h6>
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
                                                <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                                <h6 className="_unitxt _txthid">Digital Marketing Agency Crossmedia Delivers Advanced Data Products With "Powered by Fivetran"</h6>
                                                <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>Crossmedia can now build centralized marketing warehouses for clients in days instead of weeks.</h6>
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
                                            <h4 className="_unitxt _txthid _dsccrd1txt">Fivetran Data Science Demo</h4>
                                        </div>
                                        <div className="card-footer _cscrdf p-4 _unictc">
                                            <a className="btn btn-light btn-sm _unip" href="/" role="button">Get Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <a className="_cscrdbody" href="/">
                                            <img src={dscc3i} className="card-img-top" alt="..." />
                                            <div className="card-body p-4 _cscstyle">
                                                <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                                <h6 className="_unitxt _txthid">Taking the Sting Out of ParkBee's Transition to a Data-Centric Culture</h6>
                                                <h6 className="_txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>With Fivetran and Looker, ParkBee reduces spending, increases sales and promotes a data-driven culture.</h6>
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
                                    <img src={dscc3i} className="card-img-top" alt="..." />
                                    <div className="card-body p-4 _cscstyle">
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">With Modern Data Stack, Ignition Group Leverages Holistic Data, Cuts Costs</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div>The Ignition Group saves 6 million rand and the work of three people across two years’ time by opting for Fivetran and Snowflake over building its own warehouse and connectors.</h6>
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
                                        <small className="_unibc _txthid pb-2">CASE STUDIES</small>
                                        <h6 className="_unitxt _txthid">Guest Post: <br />DonorsChoose.Org On Symplifying Its Data Stack</h6>
                                        <h6 className="_unitxt _dsccrd1txt _txtvis"><div><i className="bi bi-dash-lg _unibc"></i></div></h6>
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

export default DataScience
