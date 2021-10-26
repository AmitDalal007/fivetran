import React from 'react'
import fppr2i from '../images/FindPartner/fppr2i.svg'
import pr3card1 from '../images/FindPartner/pr3card1.svg'
import pr3card2 from '../images/FindPartner/pr3card2.svg'
import pr3card3 from '../images/FindPartner/pr3card3.svg'
import pr3card4 from '../images/FindPartner/pr3card4.svg'
import pr3card5 from '../images/FindPartner/pr3card5.svg'
import pr3card6 from '../images/FindPartner/pr3card6.svg'
import pr3card7 from '../images/FindPartner/pr3card7.svg'
import pr4card1 from '../images/FindPartner/pr4card1.svg'
import pr4card2 from '../images/FindPartner/pr4card2.svg'

const FindPartner = () => {
    return (
        <>
            {/* 1st Portion Start */}
            <div className="container-fluid _unibbg _unictc py-5">
                <h2 className="_unih2 _fppr1txt">Fivetran Partner Ecosystem</h2>
                <p className="_unip _fppr1txt">Fivetran partners share our commitment to making cloud-first data services robust, powerful and easy to use for everyone.</p>
            </div>
            {/* 1st Portion End */}

            {/* 2nd Portion Start */}
            <div className="container-fluid py-5 border-bottom">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-2 _unima">
                            <div className="container _epr5c">
                                <h2 className="featurette-heading _unih2">Find a Partner</h2>
                                <p className="_unip">Use our Partner Directory to find the technologies and services you need to fully modernize your analytics stack.</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">See partners directory</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-1 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={fppr2i} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd Portion End */}

            {/* 3rd Portion Start */}
            <div className="container-fluid border-bottom py-5">
                <div className="container _unictc">
                    <h2 className="_unih2">Strategic Partners</h2>
                    <p className="_unip">We partner with select market leaders and invest in deep integrations that allow our customers to maximize the power of each platform.</p>
                </div>
                <div className="container _unictc px-5">
                    <div className="row row-cols-1 row-cols-md-4 _unictc g-4 px-5">
                        <div className="col">
                            <div className="card">
                                <img src={pr3card1} className="card-img-top _fppr3crd" alt="..." />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={pr3card2} className="card-img-top _fppr3crd" alt="..." />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={pr3card3} className="card-img-top _fppr3crd" alt="..." />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={pr3card4} className="card-img-top _fppr3crd" alt="..." />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={pr3card5} className="card-img-top _fppr3crd" alt="..." />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={pr3card6} className="card-img-top _fppr3crd" alt="..." />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={pr3card7} className="card-img-top _fppr3crd" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid py-5">
                <div className="container _unictc px-5">
                    <h2 className="_unih2">Become a partner</h2>
                    <p className="_unip">We offer a tiered program with benefits geared to your needs and the needs of your customers, and we provide ongoing education and support.</p>
                </div>
                <div className="container px-5">
                    <div className="row row-cols-1 row-cols-md-2 g-4 _unima">
                        <div className="col">
                            <div className="card _fppr4card">
                                <img src={pr4card1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Technology Partners</h5>
                                    <p className="card-text _unip">Software providers that add value for our customers by integrating seamlessly with Fivetran data pipelines and other products.</p>
                                </div>
                                <div className="card-footer p-3">
                                    <a className="btn btn-primary _unib" href="/" role="button">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _fppr4card">
                                <img src={pr4card2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Consulting Partners</h5>
                                    <p className="card-text _unip">Consulting organizations that help implement and maintain a modern data architecture and analytics environment.</p>
                                </div>
                                <div className="card-footer p-3">
                                    <a className="btn btn-primary _unib" href="/" role="button">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th Portion End */}

            {/* 5th Portion Start */}
            <div className="container-fluid _unictc py-5 _unisbbg">
                <h2 className="_unih2 _fppr1txt">Already a partner?</h2>
                <p className="_unip _fppr1txt">Use the Partner Portal to access all the information and resources you need.</p>
                <a className="btn btn-light _unitxt mt-4 _fppr5btn" href="/" role="button">Go to partner portal</a>
            </div>
            {/* 5th Portion End */}

            {/* 6th Portion Start */}
            <div className="container-fluid border-top py-5">
                <div className="container _unima">
                    <div className="row featurette">
                        <div className="col-md-6 _unima">
                            <div className="container">
                                <h2 className="featurette-heading _unih2">Join our network of partners.</h2>
                                <p className="_unip">It's free to join, and free to maintain.</p>
                            </div>
                        </div>
                        <div className="col-md-6 _unictc _unima">
                            <a className="btn btn-primary _unib px-5" href="/" role="button">Become a partner today</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* 6th Portion End */}
        </>
    )
}

export default FindPartner
