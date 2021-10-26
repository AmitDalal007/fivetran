import React from 'react'
import favicon from '../images/Welcome/favicon-32x32.png'

const WelcomeHeader = () => {
    return (
        <>
            <header class="d-flex align-items-center _welhed">
                    <div class="d-flex justify-content-between" style={{ width: "100%" }}>
                        <div class="dropdown mx-3">
                            <a href="/" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={favicon} alt="" />
                                <div className="_wellogotxt">
                                    <small className="_welcmtxt">Amit</small><br />
                                    <p className="display-6 _welwtxt">Warehouse</p>
                                </div>
                            </a>
                            <ul class="dropdown-menu text-small shadow _weldrpd" aria-labelledby="dropdownNavLink">
                                <li><a class="dropdown-item disabled" href="/"><small className="_welcmtxt">Amit</small><br /></a></li>
                                <li><a class="dropdown-item d-flex justify-content-center _wellogf1 _wellogfw" href="/">Warehouse</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item d-flex justify-content-around _wellogfw" href="/"><div>Manage Account</div> <div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg></div></a></li>
                            </ul>
                        </div>

                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <div class="d-flex align-items-center">
                                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                                    <div className="_welhdend">
                                        <div> <small className="_welcmtxt">Amit Dalal</small></div>
                                        <div> <span><a href="/" className="_unilb">Logout</a> . <a href="/" className="_unilb">Support</a> . <a href="/" className="_unilb">Privacy</a></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
        </>
    )
}

export default WelcomeHeader
