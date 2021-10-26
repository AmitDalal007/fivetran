import React from 'react'
import { Link } from 'react-router-dom'
import welcome from '../images/Welcome/welcome.png'
import WelcomeHeader from './WelcomeHeader'

const Welcome = () => {
    return (
        <>
            <div class="container-fluid _signcont _welcont">
                <WelcomeHeader/>

                <div class="_evabmod _welmd">
                    <div class="modal-dialog">
                        <div class="modal-content _welmdlwid">
                            <div class="modal-body  _unictc">
                                <div>
                                    <h2 className="_unih2">Fivetran is modern ELT</h2>
                                    <p className="_unip">Next we’ll guide you through setup of your first data source <br /> connector and destination.</p>
                                    <div><img src={welcome} alt="" /></div>
                                    <Link className="btn btn-primary _unib mx-1 mb-3" to="/setconnector">Set up a connector &rarr;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
