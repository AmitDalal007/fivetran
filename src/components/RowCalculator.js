import React from 'react'
import pr1img from '../images/RowCalculator/pr1img.svg'
import pr3img1 from '../images/RowCalculator/pr3img1.svg'
import pr3img2 from '../images/RowCalculator/pr3img2.svg'

const RowCalculator = () => {
    return (
        <>
            {/* 1st Portion Start */}
            <div className="cotntainer-fluid _rcpr1bg _culpr11c">
                <div className="_culpr11c2 pb-4">
                    <h2 className="_unih2">Only pay for what you use.</h2>
                    <p className="_unip">Credits correspond to Monthly Active Rows as outlined in our Consumption Table and scale — so the more MAR you use, the less credits you consume. Start a free 14-day trial to get your custom quote.</p>
                    <div className="d-flex w-100 gap-2 mt-2 _wfp1b">
                        <a className="btn btn-primary _unib" href="/" role="button">Start free trial</a>
                        <a className="_unilb mx-3" href="/">Request demo &rarr;</a>
                    </div>
                </div>
                <img className="_rcpr1img" src={pr1img} alt="" />
            </div>
            {/* 1st Portion End */}

            {/* 2nd Portion Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <p className="_unip mb-4">All free trials are on the Enterprise plan.</p>
                </div>

                <div className="container">
                    <div class="row g-5">
                        <div class="col-md-12">
                            <div class="position-sticky" style={{ top: "81px" }}>
                                <table className="table table-bordered bg-light">
                                    <thead className="_3Hx0N">
                                        <tr className="_1nahx">
                                            <th className="j_hIc _unitxt"></th>
                                            <th className="j_hIc _unitxt Ueqh6"></th>
                                            <th className="j_hIc _unitxt Ueqh6 _2q0-G _2NwmM _2dl6K">Most popular</th>
                                            <th className="j_hIc _unitxt Ueqh6"></th>
                                            <th className="j_hIc _unitxt Ueqh6"></th>
                                        </tr>
                                    </thead>
                                    <thead className="_3Hx0N">
                                        <tr className="_1nahx _1wMzd">
                                            <th className="j_hIc _unitxt"></th>
                                            <th className="j_hIc _unitxt Ueqh6">
                                                <div className="YoGva uALyE">Starter</div>
                                            </th>
                                            <th className="j_hIc _unitxt Ueqh6">
                                                <div className="YoGva uALyE">Standard</div>
                                            </th>
                                            <th className="j_hIc _unitxt Ueqh6">
                                                <div className="YoGva uALyE">Enterprise</div>
                                            </th>
                                            <th className="j_hIc _unitxt Ueqh6">
                                                <div className="YoGva uALyE">Business Critical</div>
                                            </th>
                                        </tr>
                                        <tr className="_1nahx _1wMzd">
                                            <th className="j_hIc _unitxt"></th>
                                            <th className="j_hIc _unitxt Ueqh6">
                                                <div className="_1eVyG uALyE gEUTB">$1</div>
                                                <div className="_3Cipy uALyE BpP4x">per credit</div>
                                            </th>
                                            <th className="j_hIc _unitxt Ueqh6">
                                                <div className="_1eVyG uALyE gEUTB">$1.50</div>
                                                <div className="_3Cipy uALyE BpP4x">per credit</div>
                                            </th>
                                            <th className="j_hIc _unitxt Ueqh6">
                                                <div className="_1eVyG uALyE gEUTB">$2</div>
                                                <div className="_3Cipy uALyE BpP4x">per credit</div>
                                            </th>
                                            <th className="j_hIc _unitxt Ueqh6">
                                                <div className="_1eVyG uALyE gEUTB">Contact us for pricing.</div>
                                                <div className="_3Cipy BpP4x">&nbsp;</div>
                                            </th>
                                        </tr>
                                        <tr className="_1nahx _1wMzd">
                                            <th className="j_hIc _unitxt"></th>
                                            <th className="j_hIc _unitxt Ueqh6 uALyE">
                                                <a
                                                    href="/signup"
                                                    target="_self"
                                                    className="btn _rctbtn"
                                                >
                                                    Start free trial
                                                </a>
                                            </th>
                                            <th className="j_hIc _unitxt Ueqh6 uALyE">
                                                <a
                                                    href="/signup"
                                                    target="_self"
                                                    className="btn _rctbtn"
                                                >
                                                    Start free trial
                                                </a>
                                            </th>
                                            <th className="j_hIc _unitxt Ueqh6 uALyE">
                                                <a
                                                    href="/signup"
                                                    target="_self"
                                                    className="btn _rctbtn"
                                                >
                                                    Start free trial
                                                </a>
                                            </th>
                                            <th className="j_hIc _unitxt Ueqh6 uALyE">
                                                <a
                                                    href="https://get.fivetran.com/demo"
                                                    target="_self"
                                                    className="btn _rctbtn"
                                                >
                                                    Contact us
                                                </a>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                            <table className="table table-bordered">
                                <thead className="_3Hx0N">
                                    <tr className="_1nahx">
                                        <th className="j_hIc _unitxt"></th>
                                        <th className="j_hIc _unitxt Ueqh6 _31jc9">
                                            For foundational data integration needs
                                        </th>
                                        <th className="j_hIc _unitxt Ueqh6 _31jc9">
                                            For advanced analytics needs and production workloads
                                        </th>
                                        <th className="j_hIc _unitxt Ueqh6 _31jc9">
                                            For enhanced data security, speed, access, and support
                                        </th>
                                        <th className="j_hIc _unitxt Ueqh6 _31jc9">
                                            For maximum security over data infrastructure, pipelines, and
                                            access
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="_3Hx0N">
                                    <tr className="_1nahx">
                                        <td colspan="5" className="j_hIc _unitxt _1qJrR">
                                            Connectors and databases
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">Sync frequency</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">1-hour max</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">15-min max</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">5-min max</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">5-min max</td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">180+ fully-managed connectors</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">Analytic-ready schemas</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">14-days of free use with new connectors</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">Fivetran transformations and packages</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">Fully-managed database connectors</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx">
                                        <td colspan="5" className="j_hIc _unitxt _1qJrR">
                                            Security
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">SOC 2 Type II and ISO 27001 certifications</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">
                                            Select data processing location (US, EU, etc.)
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">SSH tunnels for encryption</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">Reverse SSH tunnels (annual contract only)</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">User permissioning for custom controls</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">
                                            VPN tunnels for advanced security (annual contract only)
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">Select cloud provider (GCP or AWS)</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">Operate Fivetran in chosen AWS region</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">
                                            AWS PrivateLink for advanced security requirements
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">PCI DSS Level 1 Certification</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">Customer-managed keys for encryption</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx">
                                        <td colspan="5" className="j_hIc _unitxt _1qJrR">
                                            Support
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">24/7 global support</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">SLA for system uptime</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">SLA for data delivery</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">SLA for 1-hour support response</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx">
                                        <td colspan="5" className="j_hIc _unitxt _1qJrR">
                                            Extensibility
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">Access to Fivetran’s REST API</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">Streaming logging to external tools</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                    <tr className="_1nahx U625B">
                                        <td className="j_hIc _unitxt">Support for multiple subsidiaries</td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9"></td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                        <td className="j_hIc _unitxt Ueqh6 _31jc9">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fal"
                                                data-icon="check"
                                                className="svg-inline--fa fa-check fa-w-14 fa-lg "
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                                name="checked"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
                                                ></path>
                                            </svg>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="container py-2">
                    <div className="_dsp mx-1">
                        <span className="_unip _rcwc">Not sure the best fit for you? Connect now with a 14-day free trial and we’ll help you pick a plan.</span>
                        <a href="/" className="_unilb _rcwc">Start a trial &rarr;</a>
                    </div>
                </div>
            </div>
            {/* 2nd Portion End */}

            {/* 3rd Portion Start */}
            <div className="container-fluid py-5 _rcpr3bg">
                <div className="container">
                    <p className="_unitxt _rcpr3txt">You have questions, we have answers.</p>
                </div>

                <div className="container pt-4">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header" id="flush-headingOne1">
                                <button className="accordion-button collapsed _unitxt _rcpr3txt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">
                                    How long can I trial Fivetran?
                                </button>
                            </h2>
                            <div id="flush-collapseOne1" className="accordion-collapse collapse" aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body _unitxt">We offer a risk-free trial experience where you can test connectors and platform features at no cost for up to 14-days. After you've become a customer, every new connector in your account starts 14 days of free use.</div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header" id="flush-headingOne2">
                                <button className="accordion-button collapsed _unitxt _rcpr3txt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne2">
                                    What if I need more time to trial Fivetran?
                                </button>
                            </h2>
                            <div id="flush-collapseOne2" className="accordion-collapse collapse" aria-labelledby="flush-headingOne2" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body _unitxt">If you need more time to evaluate or to simply pause the account and timer on your trial during your evaluation, please reach out to your designated product specialist or <a href="/" className="_unilb">reach out to us here</a> and we will be able to help you. You can also add a credit card to keep your data flowing while you figure out a full annual contract.</div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header" id="flush-headingOne3">
                                <button className="accordion-button collapsed _unitxt _rcpr3txt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne3">
                                    What are my billing options?
                                </button>
                            </h2>
                            <div id="flush-collapseOne3" className="accordion-collapse collapse" aria-labelledby="flush-headingOne3" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body _unitxt">Fivetran offers monthly and annual subscriptions either paid via invoice or through credit card. You can also use the <a href="/" className="_unilb">AWS</a> and <a href="/" className="_unilb">GCP</a> marketplaces to purchase Fivetran.</div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header" id="flush-headingOne4">
                                <button className="accordion-button collapsed _unitxt _rcpr3txt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne4">
                                    How do I input my credit card to purchase Fivetran?
                                </button>
                            </h2>
                            <div id="flush-collapseOne4" className="accordion-collapse collapse" aria-labelledby="flush-headingOne4" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body _unitxt">You can input your credit card details in the <a href="/" className="_unilb">billing tab of your Manage Account section</a> if you are <a href="/" className="_unilb">an account owner</a>. Watch <a href="/" className="_unilb">this video</a> to learn more.</div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header" id="flush-headingOne5">
                                <button className="accordion-button collapsed _unitxt _rcpr3txt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne5" aria-expanded="false" aria-controls="flush-collapseOne5">
                                    What plan should I choose?
                                </button>
                            </h2>
                            <div id="flush-collapseOne5" className="accordion-collapse collapse" aria-labelledby="flush-headingOne5" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body _unitxt">Starter plan is recommended for small to mid sized companies with non-database sources and no need for real time data. Standard plan is recommend if you have a database source and desire 15 minute sync frequencies for more real time monitoring dashboards. Enterprise platform is needed for those with more stringent internal security needs, as well as those who want real time syncs and more timely support.</div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header" id="flush-headingOne6">
                                <button className="accordion-button collapsed _unitxt _rcpr3txt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne6" aria-expanded="false" aria-controls="flush-collapseOne6">
                                    Can I upgrade my plan?
                                </button>
                            </h2>
                            <div id="flush-collapseOne6" className="accordion-collapse collapse" aria-labelledby="flush-headingOne6" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body _unitxt">Plans can always be upgraded. If you're on a credit card subscription, you can do this directly in your billing page. Otherwise, please contact your customer success manager.</div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header" id="flush-headingOne7">
                                <button className="accordion-button collapsed _unitxt _rcpr3txt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne7" aria-expanded="false" aria-controls="flush-collapseOne7">
                                    Do you offer non-profit pricing?
                                </button>
                            </h2>
                            <div id="flush-collapseOne7" className="accordion-collapse collapse" aria-labelledby="flush-headingOne7" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body _unitxt">Yes! At Fivetran we believe non-profits should have access to the best tools available. <a href="/" className="_unilb">Contact us</a> to learn more about our special rates for non-profits.</div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header" id="flush-headingOne8">
                                <button className="accordion-button collapsed _unitxt _rcpr3txt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne8" aria-expanded="false" aria-controls="flush-collapseOne8">
                                    Where can I find more information on Fivetran SLAs?
                                </button>
                            </h2>
                            <div id="flush-collapseOne8" className="accordion-collapse collapse" aria-labelledby="flush-headingOne8" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body _unitxt">All information on our uptime and data delivery SLAs can be found <a href="/" className="_unilb">here</a>.</div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header" id="flush-headingOne9">
                                <button className="accordion-button collapsed _unitxt _rcpr3txt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne9" aria-expanded="false" aria-controls="flush-collapseOne9">
                                    Where can I find more details about the pricing model?
                                </button>
                            </h2>
                            <div id="flush-collapseOne9" className="accordion-collapse collapse" aria-labelledby="flush-headingOne9" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body _unitxt">The consumption table can always be found <a href="/" className="_unilb">here</a></div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header" id="flush-headingOne10">
                                <button className="accordion-button collapsed _unitxt _rcpr3txt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne10" aria-expanded="false" aria-controls="flush-collapseOne10">
                                    Does Fivetran support data residency options including the ability to select regions and specific locations for where my data is processed?
                                </button>
                            </h2>
                            <div id="flush-collapseOne10" className="accordion-collapse collapse" aria-labelledby="flush-headingOne10" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body _unitxt">Fivetran runs data connectors on servers in the United States (US), Canada, European Union (EU), United Kingdom (UK), Australia, and Singapore. You can select your preferred data processing location when configuring your target destination. All connectors configured in a destination run in that destination's designated location. Customers on Fivetran's Enterprise and Business Critical plans have the added ability to select a cloud provider (AWS or GCP). And, our Business Critical customers have the ability to also select a specific cloud region (ie. us-east-1) to meet stricter data residency requirements.</div>
                            </div>
                        </div>

                        <div className="accordion-item mb-3">
                            <h2 className="accordion-header" id="flush-headingOne11">
                                <button className="accordion-button collapsed _unitxt _rcpr3txt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne11" aria-expanded="false" aria-controls="flush-collapseOne11">
                                    What if I have more questions?
                                </button>
                            </h2>
                            <div id="flush-collapseOne11" className="accordion-collapse collapse" aria-labelledby="flush-headingOne11" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body _unitxt">Head on over to <a href="/" className="_unilb">our product FAQ page</a>, <a href="/" className="_unilb">documentation</a>, or get in touch with a <a href="/" className="_unilb">product specialist</a>.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pt-3">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <div className="row _rcpr3ch g-0">
                                    <div className="col-md-4 _unima">
                                        <img src={pr3img1} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h6 className="card-title _unih6">See how Fivetran powers organizations</h6>
                                            <p className="card-text _unip">From startups to Fortune 500s, explore how companies use Fivetran to centralize their data.</p>
                                            <p className="card-text pt-3"><a href="/" className="_unilb">Explore more &rarr;</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="row _rcpr3ch g-0">
                                    <div className="col-md-4 _unima">
                                        <img src={pr3img2} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h6 className="card-title _unih6">Check out the Fivetran Resource Center</h6>
                                            <p className="card-text _unip">Get advice, insights, and information from our community of data experts.</p>
                                            <p className="card-text pt-3"><a href="/" className="_unilb">Learn more &rarr;</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 3rd Portion End */}
        </>
    )
}

export default RowCalculator
