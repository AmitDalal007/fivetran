import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="container-fluid">
                <div className="row d-flex justify-content-between pt-5 py-5 border-top">
                    <div className="col"></div>

                    <div className="col-md-2 footer-col-md-2">
                        <h5 className="footer-h5">Platform</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/whyfivetran" className="nav-link p-0 footer-nav-link ">Why Fivetran</Link></li>
                            <li className="nav-item mb-2"><Link to="/extractload" className="nav-link p-0 footer-nav-link ">Extract / Load</Link></li>
                            <li className="nav-item mb-2"><Link to="/transform" className="nav-link p-0 footer-nav-link ">Transform</Link></li>
                            <li className="nav-item mb-2"><Link to="/embed" className="nav-link p-0 footer-nav-link ">Embedded</Link></li>
                        </ul>

                        <h5 className="footer-h5">Connectors</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/applications" className="nav-link p-0 footer-nav-link ">Applications</Link></li>
                            <li className="nav-item mb-2"><Link to="/databases" className="nav-link p-0 footer-nav-link ">Databases</Link></li>
                            <li className="nav-item mb-2"><Link to="/destinations" className="nav-link p-0 footer-nav-link ">Destinations</Link></li>
                            <li className="nav-item mb-2"><Link to="/events" className="nav-link p-0 footer-nav-link ">Events</Link></li>
                            <li className="nav-item mb-2"><Link to="/files" className="nav-link p-0 footer-nav-link ">Files</Link></li>
                            <li className="nav-item mb-2"><Link to="/functions" className="nav-link p-0 footer-nav-link ">Functions</Link></li>
                        </ul>

                        <h5 className="footer-h5">Pricing</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/rowcalculator" className="nav-link p-0 footer-nav-link ">Row Calculator</Link></li>
                            <li className="nav-item mb-2"><Link to="/buildvsbuy" className="nav-link p-0 footer-nav-link ">Build vs. Buy</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2 footer-col-md-2">
                        <h5 className="footer-h5">Solutions</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/customersupport" className="nav-link p-0 footer-nav-link ">Customer Support</Link></li>
                            <li className="nav-item mb-2"><Link to="/dataanalyticsbusinessintelligence" className="nav-link p-0 footer-nav-link ">Data Analytics and Business Intelligence</Link></li>
                            <li className="nav-item mb-2"><Link to="/databasereplication" className="nav-link p-0 footer-nav-link ">Database Replication</Link></li>
                            <li className="nav-item mb-2"><Link to="/dataengineering" className="nav-link p-0 footer-nav-link ">Data Engineering</Link></li>
                            <li className="nav-item mb-2"><Link to="/datascience" className="nav-link p-0 footer-nav-link ">Data Science</Link></li>
                            <li className="nav-item mb-2"><Link to="/enterprise" className="nav-link p-0 footer-nav-link ">Enterprise</Link></li>
                            <li className="nav-item mb-2"><Link to="/embed" className="nav-link p-0 footer-nav-link ">External Data Integration</Link></li>
                            <li className="nav-item mb-2"><Link to="/finance" className="nav-link p-0 footer-nav-link ">Finance</Link></li>
                            <li className="nav-item mb-2"><Link to="/marketing" className="nav-link p-0 footer-nav-link ">Marketing</Link></li>
                            <li className="nav-item mb-2"><Link to="/marketingagency" className="nav-link p-0 footer-nav-link ">Marketing Agency</Link></li>
                            <li className="nav-item mb-2"><Link to="/productengineering" className="nav-link p-0 footer-nav-link ">Product & Engineering</Link></li>
                            <li className="nav-item mb-2"><Link to="/sales" className="nav-link p-0 footer-nav-link ">Sales</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2 footer-col-md-2">
                        <h5 className="footer-h5">Resources</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 footer-nav-link ">Blog</a></li>
                            <li className="nav-item mb-2"><Link to="/casestudies" className="nav-link p-0 footer-nav-link ">Case Studies</Link></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 footer-nav-link ">Documentation</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 footer-nav-link ">Events</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 footer-nav-link ">News and Press</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 footer-nav-link ">Resource Center</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 footer-nav-link ">Webinars</a></li>
                        </ul>

                        <h5 className="footer-h5">Partners</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/findpartner" className="nav-link p-0 footer-nav-link ">Find a Partner</Link></li>
                            <li className="nav-item mb-2"><Link to="/systemintegrators" className="nav-link p-0 footer-nav-link ">System Integrators</Link></li>
                            <li className="nav-item mb-2"><Link to="/technologypartners" className="nav-link p-0 footer-nav-link ">Technology Partners</Link></li>
                        </ul>

                        <h5 className="footer-h5">Support</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 footer-nav-link ">Support Portal</a></li>
                            <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0 footer-nav-link ">FAQs</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2 footer-col-md-2">
                        <h5 className="footer-h5">Helpful Content</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 footer-nav-link ">The Essential Guide to Data Integration</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 footer-nav-link ">Data Integration: Build or Buy?</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 footer-nav-link ">Data Warehouse Benchmark</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 footer-nav-link ">How to Implement Automated Data Integration</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 footer-nav-link ">How to Choose the Perfect BI Tool</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 footer-nav-link ">Gartner Magic Quadrant for Data Integration Tools</a></li>
                        </ul>

                        <h5 className="footer-h5">Company</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/aboutfivetran" className="nav-link p-0 footer-nav-link ">About Fivetran</Link></li>
                            <li className="nav-item mb-2"><Link to="/culture" className="nav-link p-0 footer-nav-link ">Culture</Link></li>
                            <li className="nav-item mb-2"><Link to="/careers" className="nav-link p-0 footer-nav-link ">Careers</Link></li>
                            <li className="nav-item mb-2"><Link to="/contactus" className="nav-link p-0 footer-nav-link ">Contact Us</Link></li>
                            <li className="nav-item mb-2"><Link to="/legal" className="nav-link p-0 footer-nav-link ">Legal</Link></li>
                        </ul>

                        <h5 className="footer-h5">Follow Us</h5>
                        <ul className="nav flex-row justify-content-start list-unstyled d-flex">
                            <li className="ms-2"><a className="footer-icon" href="/"><i className="bi bi-facebook" width="24" height="24" fill="currentColor"></i></a></li>
                            <li className="ms-2"><a className="footer-icon" href="/"><i className="bi bi-linkedin" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"></i></a></li>
                            <li className="ms-2"><a className="footer-icon" href="/"><i className="bi bi-twitter" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"></i></a></li>
                            <li className="ms-2"><a className="footer-icon" href="/"><i className="bi bi-youtube" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"></i></a></li>
                            <li className="ms-2"><a className="footer-icon" href="/"><i className="bi bi-github" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"></i></a></li>
                            <li className="ms-2"><a className="footer-icon" href="/"><i className="bi bi-rss" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"></i></a></li>
                            <li className="ms-2"><a className="footer-icon" href="/"><i className="bi bi-rss" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"></i></a></li>
                        </ul>
                    </div>

                    <div className="col"></div>
                </div>

                <div className="d-flex justify-content-between pt-4 my-4 border-top">
                    <div className="col"></div>

                    <div className="col-md-2 footer-col-md-2">
                        <div className="footer-lang">
                            <i className="bi bi-globe"></i>
                            <select className="footer-option">
                                <option value="en-US">US English</option>
                                <option value="en-GB">EU English</option>
                                <option value="fr-FR">Français</option>
                                <option value="de-DE">Deutsch</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-2 footer-col-md-2">
                        <a href="/" className="nav-link p-0 footer-nav-link ">Privacy Policy</a>
                    </div>

                    <div className="col-md-2 footer-col-md-2">
                        <a href="/" className="nav-link p-0 footer-nav-link ">Terms of Service</a>
                    </div>

                    <div className="col-md-2 footer-col-md-2">
                        <a href="/" className="nav-link p-0 footer-nav-link ">© 2021 Fivetran Inc.</a>
                    </div>

                    <div className="col"></div>
                </div>
            </footer>
        </>
    )
}

export default Footer