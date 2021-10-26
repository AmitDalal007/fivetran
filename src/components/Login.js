import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="container-fluid _logcont">
                <div class="_block">
                    <div class="modal-dialog">
                        <div class="modal-content _logmodl">
                            <div class="modal-body p-5 _unictc">
                                <div>
                                    <span className="display-6">Welcome Back</span><br />
                                    <p className="my-3"> <small className="muted _unitxt">Sign in to continue to Fivetran.</small></p>
                                </div>
                                <div className="_logwid">
                                    <div className="py-3">
                                        <a class="hollow button primary border _logat" href="/">
                                            <img width="20px" className="_loggog" alt="Google login" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                                            <span className="_logsg"> Sign in with Google</span>
                                        </a>
                                    </div>

                                    <div className="py-3">
                                        <p className="_logltxt"><span className="back"> OR </span></p>
                                    </div>

                                    <div class="mb-3">
                                        <input type="email" class="form-control" placeholder="Email" aria-label="Email" />
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" class="form-control" placeholder="Password" aria-label="Password" />
                                    </div>

                                    <button type="button" style={{ width: "100%" }} class="btn _unib"><h5>Sign In</h5></button>

                                    <p className="_unip pt-4">Don’t have a Fivetran account yet?  <Link to="/signup" className="_unilb">Sign Up</Link></p>

                                    <a href="/" className="_unilb">Forgot your password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
