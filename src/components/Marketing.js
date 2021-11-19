import React from 'react'
import pr1card from '../images/Marketing/pr1card.webp'
import pr2i1 from '../images/Marketing/pr2i1.webp'
import pr2i2 from '../images/Marketing/pr2i2.webp'
import pr2i3 from '../images/Marketing/pr2i3.webp'
import pr2i4 from '../images/Marketing/pr2i4.webp'
import pr2i5 from '../images/Marketing/pr2i5.webp'
import pr2i6 from '../images/Marketing/pr2i6.webp'
import pr3img from '../images/Marketing/pr3img.webp'
import pr4card from '../images/Marketing/pr4card.webp'
import pr5card from '../images/Marketing/pr5card.webp'
import pr6card from '../images/Marketing/pr6card.webp'
import pr8img from '../images/Marketing/pr8img.webp'
// Not for this page from here
import epr10i1 from '../images/epr10i1.svg'
import epr10i2 from '../images/epr10i2.svg'
import epr10i3 from '../images/epr10i3.svg'
import epr10i4 from '../images/epr10i4.svg'
import epr10i5 from '../images/epr10i5.svg'
import epr10i6 from '../images/epr10i6.svg'
// to here
import pr10i1 from '../images/Marketing/pr10i1.webp'
import pr10i2 from '../images/Marketing/pr10i2.webp'
import pr10i3 from '../images/Marketing/pr10i3.webp'
import Navbar from './Navbar'
import Footer from './Footer'

const Marketing = () => {
    return (
        <>
            <Navbar />

            {/* 1st Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="px-4 _epr5c">
                                <p className="_unip _epr7pa">Fivetran’s Marketing Analytics Solution</p>
                                <h2 className="featurette-heading _unih2">Transform your disparate marketing data into dependable marketing insights.</h2>
                                <p className="_unip">Centralize all of your marketing data in a way that’s fast, reliable, and in real time to make the most of it.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Start your free trial</a>
                                    <a className="_unilb mx-1" href="/">How to talk to marketing about data analytics</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={pr1card} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 1st Portion End */}

            {/* 2nd Portion Start */}
            <div className="container-fluid py-5 _unibg">
                <div className="container _epr2c _unictc">
                    <img className="_epr2i _markpri" src={pr2i1} alt="" />
                    <img className="_epr2i _markpri2" src={pr2i2} alt="" />
                    <img className="_epr2i _markpri" src={pr2i3} alt="" />
                    <img className="_epr2i _markpri" src={pr2i4} alt="" />
                    <img className="_epr2i _markpri2" src={pr2i5} alt="" />
                    <img className="_epr2i _markpri2" src={pr2i6} alt="" />
                </div>
            </div>
            {/* 2nd Portion Start */}

            {/* 3rd Portion Start */}
            <div className="container-fluid py-4 _unisbbg">
                <div className="container _unictc">
                    <h2 className="_unih2 _markpr3txt">Stop manually comparing data across marketing <br /> platforms and spreadsheets.</h2>
                    <p className="_unip px-5 _markpr3txt">Bring your ad spend, funnel analysis, and all other marketing analytics into one central place and into the 21st century with Fivetran.</p>
                    <img className="_epr8i img-fluid pt-4" src={pr3img} alt="" />
                </div>
            </div>
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="px-4 _epr5c">
                                <p className="_unip _epr7pa">Know how & where all your ad money is being spent</p>
                                <h2 className="featurette-heading _unih2">See your entire marketing mix</h2>
                                <p className="_unip">Spending marketing dollars across platforms & channels? Stop comparing your results manually through numerous spreadsheets.</p>
                                <p className="_unip">Bring all your ad spend data into your data warehouse so you can ensure you have the complete view of your marketing mix at all times.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Learn how</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={pr4card} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th Portion End */}

            {/* 5th Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-2 _unima">
                            <div className="px-4 _epr5c">
                                <p className="_unip _epr7pa">Understand your brand awareness efforts</p>
                                <h2 className="featurette-heading _unih2">Top of the funnel analysis</h2>
                                <p className="_unip">Connect all of your brand awareness efforts to your systems of record to ensure you know what’s capturing the eyes of prospects early on.</p>
                                <p className="_unip">Centralize all of this data in once place so you have a complete, up-to-date view of the top of your marketing funnel.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-1 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={pr5card} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 5th Portion End */}

            {/* 6th Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="px-4 _epr5c">
                                <p className="_unip _epr7pa">Examine the bottom of your marketing funnel</p>
                                <h2 className="featurette-heading _unih2">Cost of acquisition analysis</h2>
                                <p className="_unip">Working on a ROAS or a fully-baked analysis taking in all your marketing efforts across paid ads, email, and organic efforts?</p>
                                <p className="_unip">Fivetran is your reliable choice for centralizing your key marketing acquisition data.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Learn how</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={pr6card} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 6th Portion End */}

            {/* 7th Portion Start */}
            <div className="container-fluid py-5 _unisbbg">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-1 _unima">
                            <div className="px-4 _epr5c">
                                <h2 className="featurette-heading _unih2 _markpr3txt">How it works</h2>
                                <p className="_unip _markpr3txt">Fivetran has natively built connectors with over 150+ tools so that you can effortlessly and reliably extract all of the data from your favorite marketing platforms.</p>
                                <p className="_unip _markpr3txt">After a simple set up & a first sync of the historical data, Fivetran will automatically check that data source for added values, updates, and deletions, keeping your warehouse always up to date with your marketing sources.</p>
                                <p className="_unip _markpr3txt">With all of your marketing data centralized in your data warehouse, you can easily start tackling your marketing analytic projects—everything from seeing all your ad spend in one place to full-funnel analysis.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-light _unib _markpr7btn" href="/" role="button">Speed your time to insights with one of our dbt package</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-2 _unima">
                            <iframe className="_markpr7v" title="markpr7v" src="https://www.youtube.com/embed/DmRxXIBssPo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* 7th Portion End */}

            {/* 8th Portion Start */}
            <div className="container-fluid _unibbg py-5">
                <div className="container _unictc px-5">
                    <img className="_markpr8img" src={pr8img} alt="" />
                    <span className="_unip py-3 _epr9txt">“Now we spend less time on data plumbing, so we can focus on innovative initiatives. We’ve significantly elevated our infrastructure capabilities — a necessity now that we’re a $20 billion public company.”</span>
                    <span className="_unip pt-1 _epr9txt">Head of Analytics</span>
                    <span className="_unip pt-1 _epr9txt">Square</span>
                </div>
            </div>
            {/* 8th Portion End */}

            {/* 9th Portion Start */}
            <div className="container-fluid _unibg">
                <div className="container">
                    <h2 className="_unih2 pt-5">Connectors for every marketing data source</h2>
                </div>
                <div className="container _unictc py-5">
                    <div className="row _unictc _epr10c">
                        <div className="col-lg-4 _wfpr7crd">
                            <a className="_wfpr7a" href="/">
                                <img className="_wfpr7img _epr10img" src={epr10i1} alt="" />
                                <span className="_unip py-3">APPLICATION</span>
                                <span className="_unilb py-3">Facebook Ads Insights</span>
                            </a>
                        </div>

                        <div className="col-lg-4 _wfpr7crd">
                            <a className="_wfpr7a" href="/">
                                <img className="_wfpr7img _epr10img" src={epr10i2} alt="" />
                                <span className="_unip py-3">APPLICATION</span>
                                <span className="_unilb py-3">Google Analytics</span>
                            </a>
                        </div>

                        <div className="col-lg-4 _wfpr7crd">
                            <a className="_wfpr7a" href="/">
                                <img className="_wfpr7img _epr10img" src={epr10i3} alt="" />
                                <span className="_unip py-3">APPLICATION</span>
                                <span className="_unilb py-3">Salesforce</span>
                            </a>
                        </div>

                        <div className="col-lg-4 _wfpr7crd">
                            <a className="_wfpr7a" href="/">
                                <img className="_wfpr7img _epr10img" src={epr10i4} alt="" />
                                <span className="_unip py-3">DATABASE</span>
                                <span className="_unilb py-3">PostgreSQL Database</span>
                            </a>
                        </div>

                        <div className="col-lg-4 _wfpr7crd">
                            <a className="_wfpr7a" href="/">
                                <img className="_wfpr7img _epr10img" src={epr10i5} alt="" />
                                <span className="_unip py-3">APPLICATION</span>
                                <span className="_unilb py-3">Google Ads</span>
                            </a>
                        </div>

                        <div className="col-lg-4 _wfpr7crd">
                            <a className="_wfpr7a" href="/">
                                <img className="_wfpr7img _epr10img" src={epr10i6} alt="" />
                                <span className="_unip py-3">APPLICATION</span>
                                <span className="_unilb py-3">Stripe</span>
                            </a>
                        </div>
                    </div>
                    <p><a className="btn btn-primary _unib mt-5" href="/">View All 150+ Connectors</a></p>
                </div>
            </div>
            {/* 9th Portion End */}

            {/* 10th Portion Start */}
            <div className="container-fluid _6cont _unibg">
                <div className="container _6cont2">
                    <h2 className="_unih2">Resources</h2>
                    <p className="_unip">Automating Your Marketing Analytics</p>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-4 mt-3">
                        <div className="col">
                            <div className="card _epr11crdh">
                                <a className="_6crda" href="/">
                                    <img src={pr10i1} className="card-img-top" alt="..." />
                                    <div className="card-body _epr11crdb">
                                        <h5 className="card-title _unih6">Why Growth Marketers Need Marketing Analytics Automation</h5>
                                        <p className="card-text _unip">Centralize all your company’s growth marketing channels’ data into one place for easy analysis.</p>
                                        <p className="card-text _unip">By <span className="_unilb">Jason Harris</span></p>
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
                                    <img src={pr10i2} className="card-img-top" alt="..." />
                                    <div className="card-body _epr11crdb">
                                        <h5 className="card-title _unih6">Centralize Marketing Data to Demystify Customer Behavior</h5>
                                        <p className="card-text _unip">Marketing teams can use automated data pipelines to facilitate key goals like precise targeting, accurate lead attribution and maximal campaign ROI.</p>
                                        <p className="card-text _unip">By <span className="_unilb">Jeff Tietz</span></p>
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
                                    <img src={pr10i3} className="card-img-top" alt="..." />
                                    <div className="card-body _epr11crdb">
                                        <h5 className="card-title _unih6">How to Talk to Your CMO About Data Analytics</h5>
                                        <p className="card-text _unip">Minimize human error, combine disparate marketing data and have a true conversation about marketing campaign effectiveness.</p>
                                        <p className="card-text _unip">By <span className="_unilb">Jason Harris</span></p>
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
            {/* 10th Portion End */}

            {/* 11th Portion Start */}
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
            {/* 11th Portion End */}

            <Footer />
        </>
    )
}

export default Marketing
