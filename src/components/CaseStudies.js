import React from 'react'
import pr1card1 from '../images/CaseStudies/pr1card1.webp'
import pr4card1 from '../images/CaseStudies/pr4card1.webp'
import pr4card2 from '../images/CaseStudies/pr4card2.webp'
import pr4card3 from '../images/CaseStudies/pr4card3.webp'
import Footer from './Footer'
import Navbar from './Navbar'

const CaseStudies = () => {
    return (
        <>
            <Navbar />

            {/* 1st Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="container _epr5c">
                                <h2 className="featurette-heading _unih2">Data-Driven Companies Trust Fivetran</h2>
                                <p className="_unip">Our fully managed data pipelines enable agile analytics for businesses big and small across the world.</p>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={pr1card1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 1st Portion End */}

            {/* 2nd Portion Start */}
            <div className="container-fluid _unibg p-5 _unictc">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <iframe className="_cspr2v" title="pr2v1" src="https://www.youtube.com/embed/zFmTHGeDcPs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" id="yt-2051ca40-2dfa-4529-abed-96c65714a481"></iframe>
                        </div>
                        <div className="carousel-item">
                            <iframe className="_cspr2v" title="pr2v2" src="https://www.youtube.com/embed/f53KMlfJsGE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" id="yt-c016ae70-30cb-4ffa-9a69-f9d26de7b972"></iframe>
                        </div>
                        <div className="carousel-item">
                            <iframe className="_cspr2v" title="pr2v3" src="https://www.youtube.com/embed/3NFy4gf22C4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>
                    </div>
                    <button className="carousel-control-prev _cspr2btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next _cspr2btn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* 2nd Portion End */}

            {/* 3rd Portion Start */}
            {/* Pending */}
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid _6cont">
                <div className="container _6cont2">
                    <h2 className="_unih2">Case Studies</h2>
                    <a className="_conta" href="/">View case studies →</a>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 mt-3">
                        <div className="col">
                            <div className="card _epr11crdh">
                                <a className="_6crda" href="/">
                                    <img src={pr4card1} className="card-img-top" alt="..." />
                                    <div className="card-body _epr11crdb">
                                        <h5 className="card-title _unih6">DocuSign Regains Engineering Time and Saves Money With Automated Data Pipelines</h5>
                                        <p className="card-text _unip">With Fivetran and Snowflake, DocuSign triples its data sources, refocuses its engineering efforts, and achieves greater visibility into data with 100+ BI dashboards.</p>
                                        <p className="card-text _unip">By <span className="_unilb">Ciara Raferty</span></p>
                                    </div>
                                    <div className="mt-4"> <hr /></div>
                                    <div className="_epr11f">
                                        <span className="_unilb">Read Post →</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _epr11crdh">
                                <a className="_6crda" href="/">
                                    <img src={pr4card2} className="card-img-top" alt="..." />
                                    <div className="card-body _epr11crdb">
                                        <h5 className="card-title _unih6">Oldcastle Infrastructure Sees $25M ROI With The Modern Data Stack</h5>
                                        <p className="card-text _unip">Oldcastle Infrastructure, a CRH Company, migrates its SQL Server and NetSuite data with Fivetran and enables business-wide analysis in Tableau, delivering a $25M ROI.</p>
                                        <p className="card-text _unip">By <span className="_unilb">Ciara Raferty</span></p>
                                    </div>
                                    <div className="mt-4"> <hr /></div>
                                    <div className="_epr11f">
                                        <span className="_unilb">Read Post →</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _epr11crdh">
                                <a className="_6crda" href="/">
                                    <img src={pr4card3} className="card-img-top" alt="..." />
                                    <div className="card-body _epr11crdb">
                                        <h5 className="card-title _unih6">Crossmedia Delivers Advanced Data Products With Powered by Fivetran</h5>
                                        <p className="card-text _unip">Crossmedia can now build centralized marketing warehouses for clients in days instead of weeks.</p>
                                        <p className="card-text _unip">By <span className="_unilb">Ciara Raferty</span></p>
                                    </div>
                                    <div className="mt-4"> <hr /></div>
                                    <div className="_epr11f">
                                        <span className="_unilb">Read Post →</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th Portion End */}

            {/* 5th Portion Start */}
            <div className="container-fluid border-top py-5">
                <div className="container _unima">
                    <div className="row featurette">
                        <div className="col-md-6 _unima">
                            <div className="container">
                                <h2 className="featurette-heading _unih2">Want to see more examples of companies using data to drive business success?</h2>
                            </div>
                        </div>
                        <div className="col-md-6 _unima d-flex justify-content-end">
                            <a className="btn btn-primary _unib mx-2 _wfp12b" href="/" role="button">Visit our case studies &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 5th Portion End */}

            {/* 6th Portion Start */}
            <div className="container-fluid _unisbbg py-5">
                <div className="container _unictc">
                    <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col">
                                        <div class="card-body">
                                            <p class="card-text _uniwc">“We really like what Fivetran enables us to do. It is incredibly easy, fast and reliable. This has been a paradigm shift for us — it is the future of data pipelines and ETL and Fivetran is at the forefront of it.”</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="card-body">
                                            <p class="card-text _uniwc">“There were three main reasons we needed to bring on Fivetran: easier data integration, quicker access, and the ability to construct more complex data models.”</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="card-body">
                                            <p class="card-text _uniwc">“I got what I wanted, something automated and trustworthy. Just click a few buttons, enter your credentials, and it's all up and running. Fivetran does its job.”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col">
                                        <div class="card-body">
                                            <p class="card-text _uniwc">“We really like what Fivetran enables us to do. It is incredibly easy, fast and reliable. This has been a paradigm shift for us — it is the future of data pipelines and ETL and Fivetran is at the forefront of it.”</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="card-body">
                                            <p class="card-text _uniwc">“There were three main reasons we needed to bring on Fivetran: easier data integration, quicker access, and the ability to construct more complex data models.”</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="card-body">
                                            <p class="card-text _uniwc">“I got what I wanted, something automated and trustworthy. Just click a few buttons, enter your credentials, and it's all up and running. Fivetran does its job.”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col">
                                        <div class="card-body">
                                            <p class="card-text _uniwc">“We really like what Fivetran enables us to do. It is incredibly easy, fast and reliable. This has been a paradigm shift for us — it is the future of data pipelines and ETL and Fivetran is at the forefront of it.”</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="card-body">
                                            <p class="card-text _uniwc">“There were three main reasons we needed to bring on Fivetran: easier data integration, quicker access, and the ability to construct more complex data models.”</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="card-body">
                                            <p class="card-text _uniwc">“I got what I wanted, something automated and trustworthy. Just click a few buttons, enter your credentials, and it's all up and running. Fivetran does its job.”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev _cspr6btn" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next _cspr6btn" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* 6th Portion End */}

            {/* 7th Portion Start */}
            <div className="container-fluid border-top py-5">
                <div className="container _unima">
                    <div className="row featurette">
                        <div className="col-md-7 _unima">
                            <div className="container">
                                <h2 className="featurette-heading _unih2">Start analyzing your data in minutes, not months</h2>
                                <p className="_unip">Launch any Fivetran connector instantly.</p>
                            </div>
                        </div>
                        <div className="col-md-5 _unima">
                            <a className="btn btn-primary _unib mx-2 _wfp12b" href="/" role="button">Start a free trial</a>
                            <a className="btn btn-outline-primary _uniob mx-2 _wfp12b" href="/" role="button">Get a demo</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 7th Portion End */}

            <Footer />
        </>
    )
}

export default CaseStudies
