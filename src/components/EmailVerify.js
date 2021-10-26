import React from 'react'
import { Link } from 'react-router-dom'
import fivetran from '../images/fivetran.svg'
import vemail from '../images/EmailVerify/vemail.svg'

const EmailVerify = () => {
    return (
        <>
            <div class="container-fluid _signcont">
                <div class="row justify-content-start _evconth">
                    <div class="col-6 _unisbbg"></div>
                    <div class="col-6 _sicont2wid py-5 mb-5">
                        <div className="_unictc py-5">
                            <Link to="/"><img src={fivetran} alt="" className="nav-logo" /></Link>
                        </div>
                    </div>
                    <div class="_evabmod">
                        <div class="modal-dialog">
                            <div class="modal-content _evmodwid">
                                <div class="modal-body p-5 _unictc">
                                    <div>
                                        <span className="my-2 _vmemail _unigc"><i class="bi bi-check-circle-fill _unigc"></i> Verification email sent to: rohan@mail.com</span>
                                        <div><img src={vemail} alt="" className="mt-4" /></div>
                                        <h2 className="_unih2 mt-5">Please verify your email</h2>
                                        <p className="_unip">To verify your address, please check your email and click <br /> the verification link.</p>
                                        <div className=" gap-2 mt-5 my-5 _wfp1b">
                                            <a className="btn btn-outline-primary _uniob mx-1" href="/" role="button">Logout</a>
                                            <a className="btn btn-primary _unib mx-1" href="/">Resend email</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailVerify
