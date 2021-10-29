import React from 'react'
import WelcomeHeader from './WelcomeHeader'
import salesforce from '../images/SetConnector/salesforce.svg'

const SetConnector = () => {
    return (
        <>
            <div class="container-fluid _signcont _welcont">
                <div class="trial-panel trial-progress">
                    <div class="trial-panel-step count-step active">
                        <div class="trial-panel-title-container">
                            <div class="trial-panel-title">Connect&nbsp;source</div>
                        </div>
                    </div>
                    <div class="trial-panel-separator"></div>
                    <div class="trial-panel-step count-step">
                        <div class="trial-panel-title-container">
                            <div class="trial-panel-title">Connect&nbsp;destination</div>
                        </div>
                    </div>
                    <div class="trial-panel-separator"></div>
                    <div class="trial-panel-step count-step">
                        <div class="trial-panel-title-container">
                            <div class="trial-panel-title">Complete&nbsp;initial&nbsp;sync</div>
                        </div>
                    </div>
                    <div class="trial-panel-step trial-panel-step-right">Your 14-day trial starts once the initial sync is complete
                    </div>
                </div>
                <WelcomeHeader />

                <div className="container-fluid">
                    <div className="container">

                        <div className="_3SGHC _3HD2A _3yZ9B">
                            <div className="_3u-ZY _1N2j_ GQ1tB _36Tku _2O6M4 _3fo1_ _3HD2A _3yZ9B pZXMZ">
                                <div className="_3wPsn _3HD2A _3yZ9B zupz-">
                                    <div class="_1S5Eh _1elIU">Select your data source</div>
                                    <div class="list-group mx-0 _scliwid">
                                        <label class="list-group-item d-flex align-items-center gap-2 _sclbrdr">
                                            <input class="form-check-input flex-shrink-0 visually-hidden" type="radio" name="listGroupRadios" id="listGroupRadios1" value="" tabIndex="1" />
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list-ul" class="svg-inline--fa fa-list-ul fa-w-16 check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>

                                            <span class="gE_oZ _3CpuW">All data sources</span>

                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10 check _scrarr" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                                        </label>
                                        <label class="list-group-item d-flex align-items-center gap-2 _sclbrdr">
                                            <input class="form-check-input flex-shrink-0 visually-hidden" type="radio" name="listGroupRadios" id="listGroupRadios2" value="" />
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="database" class="svg-inline--fa fa-database fa-w-14 check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path></svg>

                                            <span class="gE_oZ _3CpuW">Databases</span>

                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10 check _scrarr" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                                        </label>
                                        <label class="list-group-item d-flex align-items-center gap-2 _sclbrdr">
                                            <input class="form-check-input flex-shrink-0 visually-hidden" type="radio" name="listGroupRadios" id="listGroupRadios3" value="" />
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie-alt" class="svg-inline--fa fa-chart-pie-alt fa-w-16 check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M461.29 288H224V50.71c0-9.55-8.39-17.39-17.84-16.06C87.08 51.47-3.96 155.43.13 280.07 4.2 404.1 107.91 507.8 231.93 511.87c124.64 4.09 228.6-86.95 245.42-206.03 1.33-9.45-6.52-17.84-16.06-17.84zM288.8.04C279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.69 16.2-16.8C503.72 103.74 408.26 8.28 288.8.04z"></path></svg>

                                            <span class="gE_oZ _3CpuW">Marketing Analytics</span>

                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10 check _scrarr" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                                        </label>
                                    </div>
                                </div>
                                <div className="_1qpt8 _3HD2A _3yZ9B">
                                    <div className="_oFJ1 _2mu9v o74Fu GQ1tB iqc0Q">
                                        <div class="kwIN5 zupz-">
                                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" class="svg-inline--fa fa-search fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
                                        </div>
                                        <input class="_2Wpqb GQ1tB _2VsvA" type="text" spellcheck="false" placeholder="Search all sources..." ></input>
                                    </div>

                                    <div className="_32jhG _3HD2A _1OAcY l2IRI">
                                        <div class="_1ueBX">154 sources</div>
                                        <div className="_1sreZ _3HD2A _3yZ9B Hxhvs">
                                            <div className="_1z4Lt _3HD2A _1OAcY _32LJv">
                                                <div class="_3mMt9 _1UPC7">Sort by:</div>
                                                <select class="_3NSXV _3HD2A _1OAcY _scobdr" role="button" tabindex="0">
                                                    <option value="1" className="_scobdrop">A-Z</option>
                                                    <option value="2" className="_scobdrop" selected>Relevance</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="_1F_0E _3HD2A _3yZ9B">
                                        <form>
                                            <label class=" d-flex align-items-center gap-2">
                                                <input class="form-check-input flex-shrink-0 visually-hidden" type="radio" name="listGroupRadios" id="listGroupRadios2" value="" />
                                                <div className="_368Qv _3HD2A _1OAcY GQ1tB z9NhF _3SuSX" role="button" tabindex="0">
                                                    <div class="-Iqqq VLHNV">
                                                        <img src={salesforce} class="_2LxHR" alt="" />
                                                        <span data-html="true" data-delay-show="500">Salesforce</span>
                                                    </div>

                                                    <div class="_3ZsPK _3HD2A _1OAcY _32LJv VLHNV">
                                                        <div class="_1hC4c" data-tip="Finance &amp; Ops, Marketing, Sales, Support" data-delay-show="1000" currentitem="false">
                                                            Finance &amp; Ops, Marketing, Sales, Support
                                                        </div>
                                                        <div class="qmbRl _3sCrq _3HD2A _2JViN _36Tku JubFm">
                                                            Fast setup
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                            <label class=" d-flex align-items-center gap-2">
                                                <input class="form-check-input flex-shrink-0 visually-hidden" type="radio" name="listGroupRadios" id="listGroupRadios2" value="" />
                                                <div className="_368Qv _3HD2A _1OAcY GQ1tB z9NhF _3SuSX" role="button" tabindex="0">
                                                    <div class="-Iqqq VLHNV">
                                                        <img src={salesforce} class="_2LxHR" alt="" />
                                                        <span data-html="true" data-delay-show="500">Salesforce</span>
                                                    </div>

                                                    <div class="_3ZsPK _3HD2A _1OAcY _32LJv VLHNV">
                                                        <div class="_1hC4c" data-tip="Finance &amp; Ops, Marketing, Sales, Support" data-delay-show="1000" currentitem="false">
                                                            Finance &amp; Ops, Marketing, Sales, Support
                                                        </div>
                                                        <div class="qmbRl _3sCrq _3HD2A _2JViN _36Tku JubFm">
                                                            Fast setup
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>
                                            <label class=" d-flex align-items-center gap-2">
                                                <input class="form-check-input flex-shrink-0 visually-hidden" type="radio" name="listGroupRadios" id="listGroupRadios2" value="" />
                                                <div className="_368Qv _3HD2A _1OAcY GQ1tB z9NhF _3SuSX" role="button" tabindex="0">
                                                    <div class="-Iqqq VLHNV">
                                                        <img src={salesforce} class="_2LxHR" alt="" />
                                                        <span data-html="true" data-delay-show="500">Salesforce</span>
                                                    </div>

                                                    <div class="_3ZsPK _3HD2A _1OAcY _32LJv VLHNV">
                                                        <div class="_1hC4c" data-tip="Finance &amp; Ops, Marketing, Sales, Support" data-delay-show="1000" currentitem="false">
                                                            Finance &amp; Ops, Marketing, Sales, Support
                                                        </div>
                                                        <div class="qmbRl _3sCrq _3HD2A _2JViN _36Tku JubFm">
                                                            Fast setup
                                                        </div>
                                                    </div>
                                                </div>
                                            </label>

                                            <button type="submit" class="btn btn-primary _csstbtn2">Continue setup <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-right" class="svg-inline--fa fa-long-arrow-right fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M254.544 154.427L320.118 220H24c-13.255 0-24 10.745-24 24v24c0 13.255 10.745 24 24 24h296.118l-65.574 65.573c-9.373 9.373-9.373 24.569 0 33.941l16.971 16.971c9.373 9.373 24.569 9.373 33.941 0L440.97 272.97c9.373-9.373 9.373-24.569 0-33.941L305.456 103.515c-9.373-9.373-24.569-9.373-33.941 0l-16.971 16.971c-9.373 9.372-9.373 24.568 0 33.941z"></path></svg></button>
                                        </form>
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

export default SetConnector
