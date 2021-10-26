import React from 'react'
import { Link } from 'react-router-dom'
import fivetran from '../images/fivetran.svg'

const SignUp = () => {
    return (
        <>
            <div class="container-fluid _signcont">
                <div class="row justify-content-start">
                    <div class="col-5 _unisbbg">
                        <div className="_sicont1wid">
                        <h4 className="_unih6 _siwtxt mb-3">Fully managed data pipelines</h4>
                        <div className="mb-3">
                            <iframe title="svideo" width="100%" src="https://www.youtube.com/embed/Md0XbSp3VSo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>
                        <div className="d-flex pt-3">
                            <i class="bi bi-check-circle-fill _siwtxt _sicon"></i>
                            <span>
                                <h5 className="_unitxt _siwtxt _signhed">Adapts with your data</h5>
                                <p className="_unitxt _siwtxt">New fields and API versions are automatically updated</p>
                            </span>
                        </div>
                        <div className="d-flex">
                            <i class="bi bi-check-circle-fill _siwtxt _sicon"></i>
                            <span>
                                <h5 className="_unitxt _siwtxt _signhed">Easy to set up</h5>
                                <p className="_unitxt _siwtxt">All data sources have simple authentication fields</p>
                            </span>
                        </div>
                        <div className="d-flex">
                            <i class="bi bi-check-circle-fill _siwtxt _sicon"></i>
                            <span>
                                <h5 className="_unitxt _siwtxt _signhed">Reliable</h5>
                                <p className="_unitxt _siwtxt">Automated retries are picked up from the last saved sync</p>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div class="col-7 _sicont2wid py-5 mb-5">
                        <div className="_unictc py-5">
                            <Link to="/"><img src={fivetran} alt="" className="nav-logo" /></Link>
                        </div>
                        <div>
                            <h4 className="_unih6 _signhed">Create your account today</h4>
                            <p className="_unip">Data integration in minutes, not days</p>
                        </div>
                        <div className="mb-3">
                            <i class="bi bi-check-circle-fill _unibc _sicon"></i>
                            <strong className="_unitxt">14-day enterprise platform trial</strong>
                        </div>
                        <div className="mb-3">
                            <i class="bi bi-check-circle-fill _unibc _sicon"></i>
                            <strong className="_unitxt">No coding required</strong>
                        </div>
                        <div className="mb-3">
                            <i class="bi bi-check-circle-fill _unibc _sicon"></i>
                            <strong className="_unitxt">No data warehouse required</strong>
                        </div>

                        <form>
                            <div class="mb-1">
                                <label for="fname" class="form-label">First name</label>
                                <input type="text" class="form-control" id="fname" name="fname" aria-describedby="fnameHelp" required />
                            </div>
                            <div class="mb-1">
                                <label for="lname" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="lname" name="lname" aria-describedby="lnameHelp" required />
                            </div>
                            <div class="mb-1">
                                <label for="email" class="form-label">E-mail</label>
                                <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" required />
                            </div>
                            <div class="mb-1">
                                <label for="phone" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="phone" name="phone" aria-describedby="phoneHelp" pattern="[1-9]{1}[0-9]{9}" required />
                            </div>
                            <div class="mb-1">
                                <label for="company" class="form-label">Company</label>
                                <input type="text" class="form-control" id="company" name="company" aria-describedby="companyHelp" required />
                            </div>
                            <div class="mb-1">
                                <label for="company" class="form-label">Country</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option style={{display:"none"}}></option>
                                    <option value="1">United States</option>
                                    <option value="2">Afganishtan</option>
                                    <option value="3">Albania</option>
                                    <option value="4">Algeria</option>
                                    <option value="5">American Samoa</option>
                                    <option value="6">Andora</option>
                                    <option value="7">Angola</option>
                                    <option value="8">Anguilla</option>
                                    <option value="9">Antarctica</option>
                                    <option value="10">Antigua & Barbuda</option>
                                    <option value="11">Argntina</option>
                                    <option value="12">Armenia</option>
                                    <option value="13">Aruba</option>
                                </select>
                            </div>
                            <div class="mb-1">
                                <label for="company" class="form-label">Employee size range</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option style={{display:"none"}}></option>
                                    <option value="1">1-10</option>
                                    <option value="2">11-199</option>
                                    <option value="3">200-1999</option>
                                    <option value="4">2000+</option>
                                </select>
                            </div>

                            <p className="_unip pt-3">Already have a Fivetran account? <Link to="/login" className="_unilb">Sign in</Link></p>

                            <button type="button" style={{width:"100%"}} class="btn _unib"><h5>Sign up</h5></button>

                            <div className="_unictc pt-3">
                                <p className="_unitxt">Signing up signifies that you have read and <br /> agreed to our <a href="/" className="_unilb">Terms of Service</a> and <a href="/" className="_unilb">Privacy Policy</a>.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
