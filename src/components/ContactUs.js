import React from 'react'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const ContactUs = () => {
    const myForm = useRef(null)
    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm(
            "service_hfq3ob1",
            "template_owrvt0j",
            e.target,
            "user_ubEtwKHsJVMGKKKQjUCH9"
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));

        myForm.current.reset();
    }

    return (
        <>
            <div className="container-fluid py-3">
                <div className="container pb-3">
                    <h2 className="_unih2">Contact Us</h2>
                </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            <form className="_confor" onSubmit={sendEmail} ref={myForm}>
                                <div className="mb-3 d-flex">
                                    <input type="text" className="form-control _conform mx-1" id="name" name="name" aria-describedby="nameHelp" placeholder="Your Name" required />
                                    <input type="email" className="form-control _conform mx-1" id="email" name="email" aria-describedby="emailHelp" placeholder="Your Email" required />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control _conform mx-1" id="pnumber" name="pnumber" aria-describedby="nameHelp" placeholder="Phone Number" pattern="[1-9]{1}[0-9]{9}" required />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control _conform mx-1" id="message" name="message" placeholder="Message" rows="3" required></textarea>
                                </div>
                                <button type="submit" className="btn mx-1 _conbtn">Send Message</button>
                            </form>
                        </div>

                        <div className="col _concol2">
                            <h4 className="_unih6">Get In Touch</h4>
                            <span className="_unitxt _conspn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 24 24">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                            </svg><strong>: </strong><a href="/" className="_unilb">kkhurana696@gmail.com</a></span>
                            <span className="_unitxt _conspn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg> <strong> : </strong><a href="/" className="_unilb">+91 XXX XXX XXXX</a></span>

                            <h4 className="_unih6 pt-3">Our Office Address</h4>
                            <p className="_unip">F-184/LG, Block-F, Dilshad Colony, Delhi - 110095</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
