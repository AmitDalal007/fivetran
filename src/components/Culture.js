import React from 'react'
import pr3img from '../images/Culture/pr3img.webp'
import pr9img from '../images/Culture/pr9img.webp'
import pr11img from '../images/Culture/pr11img.svg'
import Navbar from './Navbar'
import Footer from './Footer'

const Culture = () => {
    return (
        <>
            <Navbar />

            {/* 1st Portion Start */}
            <div className="container-fluid py-5">
                <div className="container _unictc px-5">
                    <h2 className="_unih2">Our Mission</h2>
                    <p className="_unip">The Fivetran mission is to make access to data as simple and reliable as electricity. The invention of the lightbulb spawned generations to change the world through electricity, creating millions of new products, devices and services. We’re empowering future “Thomas Edison’s” to transform the way the world makes decisions through our always-on access to accurate data. This helps drive better data-driven decisions in pursuits like discovering new drugs, serving humanity in ways big and small (think: banking the underbanked, keeping hospital records up to date, and more!), and enabling social good organizations to do what they do best by improving lives everywhere.</p>
                </div>
            </div>
            {/* 1st Portion End */}

            {/* 2nd Portion Start */}
            <div className="container-fluid _unibbg py-5">
                <div className="container _unictc">
                    <p className="_unip _culwtxt pt-2">Data fuels powerful insights and changes lives. What progress could you power by bringing your skills to Fivetran?</p>
                </div>
            </div>
            {/* 2nd Portion End */}

            {/* 3rd Portion Start */}
            <div className="container-fluid py-5">
                <div className="container px-5 _unictc">
                    <h2 className="_unih2">Our Culture</h2>
                    <p className="_unip">The culture of any organization flows from its people, so we seek out teammates who share our values and drive, not people who are exactly like us. We’ve built a company that allows everyone to take risks and thrive professionally — without ever hiding their authentic selves.</p>
                </div>
                <div className="container pt-4 px-4 _unictc">
                    <img className="_culpr3img" src={pr3img} alt="" />
                </div>
            </div>
            {/* 3rd Portion End */}

            {/* 4th Portion Start */}
            <div className="container-fluid _unisbbg py-5">
                <div className="container _unictc">
                    <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col">
                                        <div className="card-body">
                                            <p className="card-text _uniwc">”I love being surrounded by smart, driven, enthusiastic and collaborative people. We are genuinely excited about what we do and what we are creating as a company I love about Fivetran.”</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card-body">
                                            <p className="card-text _uniwc">”We are a fun, hard-working, supportive and diverse group of individuals who love doing what we do and helping our customers flourish with Fivetran.”</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card-body">
                                            <p className="card-text _uniwc">“You spend so much of your life at work, and so it was really important for me to have people and a culture that feeds you and helps you grow.”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col">
                                        <div className="card-body">
                                            <p className="card-text _uniwc">”We value the life experience of every Fivetranner and problem-solving approaches as critical enablers of our mission: to make access to data as simple and reliable as electricity.”</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card-body">
                                            <p className="card-text _uniwc">”What I love about Fivetran is we have built a culture where you feel like you have more than a job but rather a community ETL and Fivetran is at the forefront of it.”</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card-body">
                                            <p className="card-text _uniwc">”Our leadership team empowers universal innovation across the company, which enables us to solve incredibly complex data problems at scale!”</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col">
                                        <div className="card-body">
                                            <p className="card-text _uniwc">“We really like what Fivetran enables us to do. It is incredibly easy, fast and reliable. This has been a paradigm shift for us — it is the future of data pipelines and ETL and Fivetran is at the forefront of it.”</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card-body">
                                            <p className="card-text _uniwc">“There were three main reasons we needed to bring on Fivetran: easier data integration, quicker access, and the ability to construct more complex data models.”</p>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card-body">
                                            <p className="card-text _uniwc">“I got what I wanted, something automated and trustworthy. Just click a few buttons, enter your credentials, and it's all up and running. Fivetran does its job.”</p>
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
            {/* 4th Portion End */}

            {/* 5th Portion Start */}
            <div className="container-fluid p-5 _unictc">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <iframe className="_cspr2v" title="pr5v1" src="https://www.youtube.com/embed/YTDAsvIYOkw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>
                        <div className="carousel-item">
                            <iframe className="_cspr2v" title="pr5v2" src="https://www.youtube.com/embed/YbKeUfPMydc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                        </div>
                        <div className="carousel-item">
                            <iframe className="_cspr2v" title="pr5v3" src="https://www.youtube.com/embed/H9PdmLpVTWk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
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
            {/* 5th Portion End */}

            {/* 6th Portion Start */}
            <div className="container-fluid _3rdprt _wfp2c1">
                <div className="container px-5 _unictc">
                    <h2 className="_unih2">Our Values</h2>
                    <p className="_unip">Our core values make us who we are — and explain why Fivetran is such a great place to work. We’re committed to upholding our values no matter how much we grow, or how fast.</p>
                </div>
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div>
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check2 card-img-top _3contimg" viewBox="0 0 16 16">
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title _unih6">Integrity</h6>
                                    <p className="card-text _unip">We do the right thing, even when it's harder in the short run. We challenge the status quo by reasoning from first principles.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-reception-4 card-img-top _3contimg" viewBox="0 0 16 16">
                                        <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title _unih6">Initiative</h6>
                                    <p className="card-text _unip">Fivetran belongs to all of us. We take ownership and are accountable for getting things done. Through curiosity, learning, and coaching, we grow as individuals and teams.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-people-fill card-img-top _3contimg" viewBox="0 0 16 16">
                                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title _unih6">1 Team, 1 Dream</h6>
                                    <p className="card-text _unip">We share the pains and successes of our customers, partners and colleagues. We seek, gather, and trust a diverse group of teammates with different perspectives to guide Fivetran’s progress. We go above and beyond for each other.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 6th Portion End */}

            {/* 7th Portion Start */}
            <div className="container-fluid _unictc _unibg py-5">
                <div className="container _unictc px-5">
                    <h2 className="_unih2">Investing in Our Greatest Strength — Our People</h2>
                    <p className="_unip">Fivetran employees rate the company with an A+ for perks and benefits. In addition to fully funded medical, dental, vision and life insurance plans, free food, happy hours, 13+ paid holidays, volunteer days, corporate matching of charitable donations, pre-tax commuter benefits, an employee assistance program, and a very generous vacation package (5 weeks in your first year!), Fivetran also offers:</p>
                </div>
                <div className="container px-5 pt-5">
                    <div className="_unictc _culpr7c">
                        <div className="col _culpr7crd _culpr7c1">
                            <div className="p-4">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-globe card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                                    </svg>
                                </div>
                                <div className="card-body _5contcb">
                                    <h5 className="card-title _unih6">All-Company Trip</h5>
                                    <p className="card-text _unip"><a href="/" className="_unilb">Camp Fivetran</a>, our week-long annual trip brings together employees from around the world!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col _culpr7crd _culpr7c2">
                            <div className="p-4">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-minecart-loaded card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z" />
                                        <path fill-rule="evenodd" d="M6 1a2.498 2.498 0 0 1 4 0c.818 0 1.545.394 2 1 .67 0 1.552.57 2 1h-2c-.314 0-.611-.15-.8-.4-.274-.365-.71-.6-1.2-.6-.314 0-.611-.15-.8-.4a1.497 1.497 0 0 0-2.4 0c-.189.25-.486.4-.8.4-.507 0-.955.251-1.228.638-.09.13-.194.25-.308.362H3c.13-.147.401-.432.562-.545a1.63 1.63 0 0 0 .393-.393A2.498 2.498 0 0 1 6 1z" />
                                    </svg>
                                </div>
                                <div className="card-body _5contcb">
                                    <h5 className="card-title _unih6">Parental Leave</h5>
                                    <p className="card-text _unip">Parents get 4 months off fully paid + a baby cash incentive for new additions to their family.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col _culpr7crd _culpr7c3">
                            <div className="p-4">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-credit-card-2-front card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                                        <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </div>
                                <div className="card-body _5contcb">
                                    <h5 className="card-title _unih6">Stock Equity</h5>
                                    <p className="card-text _unip">Stock options for all employees, with the opportunity to earn more through outstanding performance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col _culpr7crd _culpr7c4">
                            <div className="p-4">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cash-coin card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                                    </svg>
                                </div>
                                <div className="card-body _5contcb">
                                    <h5 className="card-title _unih6">401K and HSA + Matching</h5>
                                    <p className="card-text _unip">Generous 401K matching program and contributions to your health savings accounts (which further fuels your retirement)!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col _culpr7crd _culpr7c5">
                            <div className="p-4">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-gift card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                                    </svg>
                                </div>
                                <div className="card-body _5contcb">
                                    <h5 className="card-title _unih6">Referral Bonuses</h5>
                                    <p className="card-text _unip">Get cash for new hires from your network!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col _culpr7crd _culpr7c6">
                            <div className="p-4">
                                <div className="_5contimgbr">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-snow3 card-img-top _5contimg" viewBox="0 0 16 16">
                                        <path d="M8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z" />
                                        <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.51l-2.053-1.232-1.348.778-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.883-.237a.5.5 0 1 1 .258-.966l1.85.495L5 9.155v-2.31l-1.4-.808-1.85.495a.5.5 0 1 1-.259-.966l.884-.237-1.12-.646a.5.5 0 0 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849 1.348.778L7.5 4.717v-1.51L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.51l2.053 1.232 1.348-.778.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-1.4.808v2.31l1.4.808 1.849-.495a.5.5 0 1 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-1.348-.778L8.5 11.283v1.51l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5zm2-6.783V6.783l-2-1.2-2 1.2v2.434l2 1.2 2-1.2z" />
                                    </svg>
                                </div>
                                <div className="card-body _5contcb">
                                    <h5 className="card-title _unih6">Pet Perks</h5>
                                    <p className="card-text _unip">Our offices are dog-friendly and we offer pet insurance to help keep pets healthy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 7th Portion End */}

            {/* 8th Portion Start */}
            <div className="container-fluid py-5 _unisbbg">
                <div className="container _unictc">
                    <h2 className="_unih2 _culwtxt">Our Employee Resource Groups (ERGs)</h2>
                </div>

                <div className="container px-5">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card _culpr8ch1">
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Fivetran Women+</h5>
                                    <p className="card-text _unip">Fivetran Women+ connects, educates and empowers all female-identifying women and their allies at Fivetran through social impact, professional development, intersectional support and advocacy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _culpr8ch1">
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Fivetran 7ERG</h5>
                                    <p className="card-text _unip">To promote an inclusive community for LGBTQIA employees at Fivetran by fostering a fun, safe environment for all and encouraging greater diversity.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _culpr8ch2">
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Fivetran Black Fivetranner’s Network (BFN)</h5>
                                    <p className="card-text _unip">Our mission is to create a space for black employees and allies at Fivetran to help further their personal and professional development through community engagement and education.</p>
                                    <p className="card-text _unip">We’re a black employee resource group that believes in empowering and supporting the black community inside and outside of our organization.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card _culpr8ch2">
                                <div className="card-body">
                                    <h5 className="card-title _unih6">Fivetran Latinx</h5>
                                    <p className="card-text _unip">Our mission is to unite the Latinx community and allies at Fivetran and promote cultural awareness, foster professional development, and create a safe space for the community.</p>
                                    <p className="card-text _unip">Latinx seeks to partner with other employee resource groups to drive intersectional diversity and inclusion initiatives at Fivetran.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 8th Portion End */}

            {/* 9th Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row featurette _unima">
                        <div className="col-md-7 order-md-2 _unima">
                            <div className="container _epr5c text-end">
                                <h2 className="featurette-heading _unih2">Community Engagement</h2>
                                <p className="_unip">Businesses don’t exist in isolation — they belong to the local community. At Fivetran, we embrace that role, hosting community events and seeking out diverse local talent though our Tech Equity Pipeline Program (TEPP).</p>
                                <div className="d-flex w-100 gap-2 mt-5 _wfp1b">
                                    <a className="btn btn-primary _unib" href="/" role="button">Learn more about TEPP</a>
                                    <a className="_unilb mx-3" href="/">Join Our Next Community Meet Up &rarr;</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 order-md-1 _unima">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={pr9img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* 9th Portion End */}

            {/* 10th Portion Start */}
            <div className="container-fluid py-5 _unibg">
                <div className="container _unictc px-5">
                    <h2 className="_unih2">Our Story</h2>
                    <p className="_unip">Established out of Y Combinator in 2013, Fivetran began with a realization: For modern companies using cloud-based software and storage, traditional ETL tools badly underperformed. So we designed an entirely new kind of data connector.</p>
                    <a className="btn btn-primary mt-4 _unib" href="/" role="button">Read more</a>
                </div>
            </div>
            {/* 10th Portion End */}

            {/* 11th Portion Start */}
            <div className="cotntainer-fluid _unisbbg _culpr11c">
                <div className="_culpr11c2">
                    <h2 className="_unih2 _culwtxt">Our Team Is Growing!</h2>
                    <p className="_unip _culwtxt">Our award-winning culture is no accident — we’re deeply committed to employee growth and well-being. Join us!</p>
                    <a className="btn btn-light mt-4 _culpr11btn" href="/" role="button">See open positions</a>
                </div>
                <img className="_culpr11img" src={pr11img} alt="" />
            </div>
            {/* 11th Portion End */}

            {/* 12th Portion Start */}
            <div className="container-fluid border-top py-5 _culpr12c">
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
            {/* 12th Portion End */}

            <Footer />
        </>
    )
}

export default Culture
