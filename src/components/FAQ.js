import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const FAQ = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid py-5">
                <div className="container">
                    <h2 className="_unih2">Frequently Asked Questions</h2>
                </div>
                <div className="container pt-5 c1">
                    <div class="row g-5">
                        <div class="col-md-5">
                            <div class="position-sticky" style={{ top: "8rem" }}>
                                <div id="list-example" className="">
                                    <a className="_faqa _unip" href="#list-item-1">01. Getting Started</a>
                                    <a className="_faqa _unip" href="#list-item-2">02. Data Extraction and Loading</a>
                                    <a className="_faqa _unip" href="#list-item-3">03. Transformations and Automated <br /> <span className="px-4"> &nbsp; Schema Changes</span></a>
                                    <a className="_faqa _unip" href="#list-item-4">04. Security and Data Audits</a>
                                    <a className="_faqa _unip" href="#list-item-5">05. Billing and Support</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabindex="0">
                                <h4 id="list-item-1" className="_unitxt">01. Getting Started</h4>
                                <div className="px-3">
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne1">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">
                                                    <strong>What do I need to get started using Fivetran?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne1" className="accordion-collapse collapse" aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Sign up <a href="/" className="_unilb">here</a> for a 14-day trial and follow the steps to get your data flowing. Alternatively, you can request a personalized demo from our team <a href="/" className="_unilb">here</a></div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne2">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne2">
                                                    <strong>What data sources does Fivetran offer connectors for?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne2" className="accordion-collapse collapse" aria-labelledby="flush-headingOne2" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Fivetran offers 100+ data source connectors and we regularly add new connectors. View the full list <a href="/" className="_unilb">here</a>. If you don’t see a source you need, send us an <a href="/" className="_unilb">email</a> and let us know. We add new connectors based on customer requests.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne3">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne3">
                                                    <strong>Where can I find more detailed information about Fivetran connectors?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne3" className="accordion-collapse collapse" aria-labelledby="flush-headingOne3" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">In our <a href="/" className="_unilb">documentation</a></div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne4">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne4">
                                                    <strong>What if I don’t see a source that I need in your list of connectors?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne4" className="accordion-collapse collapse" aria-labelledby="flush-headingOne4" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Talk to your product specialist or <a href="/" className="_unilb">submit a support ticket</a> indicating the source you need and your request will get routed to the correct person. The more requests we get for a source, the higher we prioritize building the new connectors.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne5">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne5" aria-expanded="false" aria-controls="flush-collapseOne5">
                                                    <strong>Which data warehouse should I use?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne5" className="accordion-collapse collapse" aria-labelledby="flush-headingOne5" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Fivetran supports multiple <a href="/" className="_unilb">warehouses</a> including Azure Synapse, BigQuery, MySQL, Panoply, Periscope, PostgreSQL, Redshift, Snowflake and SQL Server. Learn more about price, performance and features of five of the most popular data warehouses <a href="/" className="_unilb">here</a>.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne6">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne6" aria-expanded="false" aria-controls="flush-collapseOne6">
                                                    <strong>What warehouses does Fivetran support?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne6" className="accordion-collapse collapse" aria-labelledby="flush-headingOne6" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">See a list of supported warehouses <a href="/" className="_unilb">here</a>.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne7">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne7" aria-expanded="false" aria-controls="flush-collapseOne7">
                                                    <strong>How can I add multiple warehouses?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne7" className="accordion-collapse collapse" aria-labelledby="flush-headingOne7" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">
                                                    <ol type="1">
                                                        <li>Log into your warehouse, you will notice your Account name in the upper lefthand corner.</li>
                                                        <li>Underneath the Account name in the upper lefthand corner you will see the name of your warehouse. Click on the arrow to view the dropdown menu.</li>
                                                        <li>Select ‘Manage Account’ in the dropdown menu.</li>
                                                        <li>Click the ‘+ Warehouse’ option.</li>
                                                        <li>Enter your new warehouse name and select ‘Add warehouse.’</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 id="list-item-2" className="_unitxt py-2">02. Data Extraction and Loading</h4>
                                <div className="px-3">
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne8">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne8" aria-expanded="false" aria-controls="flush-collapseOne8">
                                                    <strong>How frequently can Fivetran sync data?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne8" className="accordion-collapse collapse" aria-labelledby="flush-headingOne8" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">As fast as every five minutes.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne9">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne9" aria-expanded="false" aria-controls="flush-collapseOne9">
                                                    <strong>Is the data load time configurable?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne9" className="accordion-collapse collapse" aria-labelledby="flush-headingOne9" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Yes, you can adjust the load time to run as frequent as every five minutes and as infrequent as every 24 hours.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne10">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne10" aria-expanded="false" aria-controls="flush-collapseOne10">
                                                    <strong>Why wouldn’t I choose to load all of my data every five minutes?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne10" className="accordion-collapse collapse" aria-labelledby="flush-headingOne10" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">While frequent data loads will give you more up-to-date data, there are a few reasons you wouldn’t want to load your data every five minutes, including:</div>
                                                <ul>
                                                    <li className="_unitxt">Higher API usage may cause you to hit a limit that could impact other systems that rely on that API.</li>
                                                    <li className="_unitxt">Higher cost of loading data into your warehouse.</li>
                                                    <li className="_unitxt">More frequent delays, resulting in increased delay notification emails. For instance, if the data source generally takes several hours to update but you choose five-minute increments, you may receive a delay notification every sync.</li>
                                                </ul>
                                                <div className="accordion-body _unitxt">We generally recommend setting the incremental loads to every hour to help limit API calls.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne11">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne11" aria-expanded="false" aria-controls="flush-collapseOne11">
                                                    <strong>Is there a way to know the estimated time to completion for the first historic sync?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne11" className="accordion-collapse collapse" aria-labelledby="flush-headingOne11" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">No. Support can provide an update in progress upon request, but it will not include an estimated time of completion.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne12">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne12" aria-expanded="false" aria-controls="flush-collapseOne12">
                                                    <strong>Why can’t I see any data?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne12" className="accordion-collapse collapse" aria-labelledby="flush-headingOne12" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">If you just set up your trial, it could take anywhere from a couple of hours to a couple of days to complete the historical sync depending on the size of your data source. If it has been several days, please <a href="/" className="_unilb">submit a support ticket</a> and we will look into it.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne13">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne13" aria-expanded="false" aria-controls="flush-collapseOne13">
                                                    <strong>What is the average data load time for each ad application source?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne13" className="accordion-collapse collapse" aria-labelledby="flush-headingOne13" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Most ad sources complete a historical sync in less than a day. However, the amount of data in the source and API rate limits may cause this to vary.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 id="list-item-3" className="_unitxt py-2">03. Transformations and Automated Schema Changes</h4>
                                <div className="px-3">
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne14">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne14" aria-expanded="false" aria-controls="flush-collapseOne14">
                                                    <strong>How does Fivetran handle changes in the source, such as schema or API changes?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne14" className="accordion-collapse collapse" aria-labelledby="flush-headingOne14" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Our pipelines are configured to handle new fields or tables added to your source gracefully, so you don’t need to make manual adjustments in the UI. We constantly monitor and stay ahead of API changes or deprecations so you don’t need to think about it.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne15">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne15" aria-expanded="false" aria-controls="flush-collapseOne15">
                                                    <strong>Do I have to do anything if an API endpoint is changed?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne15" className="accordion-collapse collapse" aria-labelledby="flush-headingOne15" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">No, the Fivetran team will update the connector. Fivetran is fully managed, including managing your destination schema in addition to staying ahead of API changes for all connectors. This is one of our core philosophies.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne16">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne16" aria-expanded="false" aria-controls="flush-collapseOne16">
                                                    <strong>Can Fivetran help with data transformation?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne16" className="accordion-collapse collapse" aria-labelledby="flush-headingOne16" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Yes, Fivetran can currently schedule SQL-based transformations to run in your destination on either a regular configured schedule or when new data loads. We also support integration with dbt (data build tool) to run your models.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 id="list-item-4" className="_unitxt py-2">04. Security and Data Audits</h4>
                                <div className="px-3">
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne17">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne17" aria-expanded="false" aria-controls="flush-collapseOne17">
                                                    <strong>How secure is Fivetran?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne17" className="accordion-collapse collapse" aria-labelledby="flush-headingOne17" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">We take security very seriously. Learn more <a href="/" className="_unilb">here</a></div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne18">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne18" aria-expanded="false" aria-controls="flush-collapseOne18">
                                                    <strong>Where is Fivetran hosted?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne18" className="accordion-collapse collapse" aria-labelledby="flush-headingOne18" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">In Google Cloud Services in the EU or on AWS in the US depending on setup. You can view our architecture <a href="/" className="_unilb">here</a>.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne19">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne19" aria-expanded="false" aria-controls="flush-collapseOne19">
                                                    <strong>How is my data encrypted?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne19" className="accordion-collapse collapse" aria-labelledby="flush-headingOne19" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">In rest and in transit. Learn more <a href="/" className="_unilb">here</a>.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne20">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne20" aria-expanded="false" aria-controls="flush-collapseOne20">
                                                    <strong>Can I block specific data from replicating into my warehouse?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne20" className="accordion-collapse collapse" aria-labelledby="flush-headingOne20" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Yes, you can block both specific tables and specific columns. This is especially helpful for sensitive information such as personally identifiable information (PII).</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne21">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne21" aria-expanded="false" aria-controls="flush-collapseOne21">
                                                    <strong>Does Fivetran support SSH?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne21" className="accordion-collapse collapse" aria-labelledby="flush-headingOne21" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Yes. Learn more <a href="/" className="_unilb">here</a>.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne22">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne22" aria-expanded="false" aria-controls="flush-collapseOne22">
                                                    <strong>Do you have access to my data?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne22" className="accordion-collapse collapse" aria-labelledby="flush-headingOne22" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Fivetran can only access your data with your approval.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne23">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne23" aria-expanded="false" aria-controls="flush-collapseOne23">
                                                    <strong>Does Fivetran store my data long-term?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne23" className="accordion-collapse collapse" aria-labelledby="flush-headingOne23" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Data is purged as soon as successfully written to the destination in most instances. Learn more <a href="/" className="_unilb">here</a>.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne24">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne24" aria-expanded="false" aria-controls="flush-collapseOne24">
                                                    <strong>Is Fivetran GDPR compliant?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne24" className="accordion-collapse collapse" aria-labelledby="flush-headingOne24" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Yes. At Fivetran we take data privacy seriously. Read more <a href="/" className="_unilb">here</a>.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne25">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne25" aria-expanded="false" aria-controls="flush-collapseOne25">
                                                    <strong>Does Fivetran offer advanced logging?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne25" className="accordion-collapse collapse" aria-labelledby="flush-headingOne25" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Yes, you can connect your logging system to Fivetran. Learn more <a href="/" className="_unilb">here</a>.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne26">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne26" aria-expanded="false" aria-controls="flush-collapseOne26">
                                                    <strong>Where can I get more detailed information about my sync history?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne26" className="accordion-collapse collapse" aria-labelledby="flush-headingOne26" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Find details on Fivetran audit tables <a href="/" className="_unilb">here</a>.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne27">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne27" aria-expanded="false" aria-controls="flush-collapseOne27">
                                                    <strong>What should I do if the data looks incomplete?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne27" className="accordion-collapse collapse" aria-labelledby="flush-headingOne27" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">We recommend that you first check the Fivetran audit table (more information <a href="/" className="_unilb">here</a>). If you still do not see the data you need, please contact the Fivetran support team by submitting a <a href="/" className="_unilb">support ticket</a>.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne28">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne28" aria-expanded="false" aria-controls="flush-collapseOne28">
                                                    <strong>Why do I only see two years of data for AdWords and Facebook?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne28" className="accordion-collapse collapse" aria-labelledby="flush-headingOne28" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">
                                                    For customers that run a lot of campaigns, we’ve seen syncs take more than 24 hours for AdWords and Facebook. In order to make the process faster, we only sync the most recent two years of data automatically. If you would like to see more history, submit a <a href="/" className="_unilb">support ticket</a>. Do remember, however, that these bigger historical syncs can take days and incremental updates will be paused in the interim.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h4 id="list-item-5" className="_unitxt py-2">05. Billing and Support</h4>
                                <div className="px-3">
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne29">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne29" aria-expanded="false" aria-controls="flush-collapseOne29">
                                                    <strong>How much does Fivetran cost?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne29" className="accordion-collapse collapse" aria-labelledby="flush-headingOne29" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Fivetran pricing is volume based. You will be charged based on what you use, defined as the number of monthly active rows (MAR). The number of MAR is variable based on the data sources you connect and your specific business. Please contact us to receive help with a quote or <a href="/" className="_unilb">use this blog resource</a> to determine the cost yourself.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne30">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne30" aria-expanded="false" aria-controls="flush-collapseOne30">
                                                    <strong>How do I contact the Fivetran support team?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne30" className="accordion-collapse collapse" aria-labelledby="flush-headingOne30" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Submit a support ticket <a href="/" className="_unilb">here</a>.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne31">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne31" aria-expanded="false" aria-controls="flush-collapseOne31">
                                                    <strong>What is a Monthly Active Row?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne31" className="accordion-collapse collapse" aria-labelledby="flush-headingOne31" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">It is defined as the number of distinct primary keys synced via the Fivetran plan calculated on a per-account basis. We only count rows once per Billing Period, even if they sync multiple times.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h4 className="accordion-header _unitxt" id="flush-headingOne32">
                                                <button className="accordion-button collapsed _unitxt" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne32" aria-expanded="false" aria-controls="flush-collapseOne32">
                                                    <strong>What is a credit?</strong>
                                                </button>
                                            </h4>
                                            <div id="flush-collapseOne32" className="accordion-collapse collapse" aria-labelledby="flush-headingOne32" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body _unitxt">Usage of Fivetran is charged on the basis of credits, which are converted to monthly active rows as determined by the <a href="/" className="_unilb">Service Consumption Table</a>.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            {/* 2nd Portion Start */}
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
            {/* 2nd Portion End */}

            <Footer />
        </>
    )
}

export default FAQ
