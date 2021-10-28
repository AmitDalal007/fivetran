import React from 'react'
import WelcomeHeader from './WelcomeHeader'
import mysql from '../images/ContinueSetup/mysql.png'

const ContinueSetup = () => {
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

                <div class="row featurette _csrfwid">
                    <div class="col-md-7">
                        <div className="d-flex mt-2 mb-4 mar">
                            <div>
                                <img src={mysql} alt="" className="_csimg mt-2" />
                            </div>

                            <div>
                                <p className="_cshed">MySQL</p> <a href="/" className="_unilb">(change)</a>

                                <p className="_cshedtxt">Follow the setup guide on the right to connect your data source to <br /> Fivetran. If you need help accessing the source system, <a href="/" className="_unilb"> invite a <br /> teammate</a> to complete this step.</p>
                            </div>
                        </div>

                        <div className="mt-2 mb-4 pt-3 mar _cscont1p2">
                            <form>
                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label _1A10-">Destination schema prefix</label>
                                    <div class="col-sm-8">
                                        <input type="email" class="form-control" id="inputEmail3" value="mysql" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label _1A10-">Email</label>
                                    <div class="col-sm-8">
                                        <input type="email" class="form-control" id="inputEmail3" value="mysql" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputPassword3" class="col-sm-2 col-form-label _1A10-">Password</label>
                                    <div class="col-sm-8">
                                        <input type="password" class="form-control" id="inputPassword3" />
                                    </div>
                                </div>
                                <fieldset class="row mb-3">
                                    <legend class="col-form-label _1A10- col-sm-2 pt-0">Radios</legend>
                                    <div class="col-sm-8">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                            <label class="form-check-label" for="gridRadios1">
                                                First radio
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                            <label class="form-check-label" for="gridRadios2">
                                                Second radio
                                            </label>
                                        </div>
                                        <div class="form-check disabled">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                                            <label class="form-check-label" for="gridRadios3">
                                                Third disabled radio
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div class="row mb-3">
                                    <div class="col-sm-8 offset-sm-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="gridCheck1" />
                                            <label class="form-check-label _1A10-" for="gridCheck1">
                                                Example checkbox
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary _csstbtn">SAVE & TEST</button>
                            </form>
                        </div>

                    </div>
                    <div class="col-md-5 _cscm5">
                        <div className="_csrcont">
                            <p className="_csc2h _cshed">Setup Guide</p>

                            <div className="_csc2of">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, suscipit aliquid. Tempore, dolor quas libero, facilis velit sapiente est et perspiciatis atque quos ratione deleniti officia dicta harum asperiores iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, deserunt veniam eos impedit error vitae maxime est inventore nihil saepe, molestiae natus dignissimos aspernatur, mollitia quibusdam! Beatae accusantium maiores cum sint qui facilis obcaecati tenetur praesentium, error ex iste libero ipsa blanditiis odio veritatis labore quas rem earum repellat? Laborum et asperiores quod minus quia iste sint mollitia quidem quam optio voluptas illum consequatur inventore excepturi velit est, nesciunt sequi repellendus omnis nisi? Deleniti debitis sapiente eos dolorum minus quasi rem dolores consequatur aspernatur quam est nemo laboriosam, maiores, at similique? Ea velit asperiores dolores quasi fugiat sunt veniam! Atque fugiat impedit modi rerum aliquam illo inventore, ut accusamus aspernatur nobis enim, tempore magni beatae? In quas magni non odio accusantium, recusandae totam fuga architecto. Aperiam adipisci aliquam tempora nam, ad itaque et? Fuga consequuntur quos voluptate magni nam quam itaque praesentium quibusdam sint, suscipit asperiores distinctio harum eius dolore recusandae tempora animi inventore non id quidem nulla reiciendis similique. Culpa doloremque vitae nemo quam qui nam eaque aliquid in dignissimos molestiae ut, tempora tempore eos porro voluptate nulla. Quos impedit deserunt sint enim iste, recusandae quo consectetur assumenda minus quibusdam ipsam molestiae, rerum eos? Nulla officiis rerum voluptate ex voluptatum a quis cumque suscipit sed aliquam eaque odit, soluta ducimus et consequuntur nihil, delectus maxime, autem nostrum. Assumenda quos, quibusdam soluta libero harum amet quisquam at? Praesentium sint quaerat culpa, est, necessitatibus modi cupiditate ipsum quo repellat aspernatur velit ex in, inventore suscipit repudiandae voluptatibus commodi dolore consequatur repellendus iste adipisci? Perspiciatis consequatur qui molestias, voluptatibus voluptas fuga repellendus vitae voluptatem soluta vel quod quas rerum dolorum culpa ab alias dolor distinctio dignissimos repellat facere rem itaque exercitationem praesentium cupiditate. Totam, quod voluptate. Accusantium non nostrum voluptatum. Dolor aperiam atque eveniet aliquam possimus iure reiciendis praesentium fuga excepturi optio. Repellendus expedita libero eos suscipit vel eveniet, dolore nobis incidunt optio, voluptatibus alias at nam reiciendis excepturi a. Distinctio rem exercitationem voluptatum in ea reprehenderit illum soluta, ut dolorum, temporibus praesentium labore magni harum ab modi incidunt explicabo. Voluptatum excepturi repellat distinctio quo suscipit aut recusandae reiciendis iusto ut error veritatis adipisci ducimus magnam atque, repellendus illum voluptas maiores aliquid assumenda, ex, sunt hic. Eveniet dignissimos, ipsa odit cum hic voluptates ducimus, eius iure quod autem est mollitia quis pariatur assumenda eaque obcaecati totam nostrum aperiam deleniti sequi aliquam. Cum unde eum laborum magni nulla. Nam incidunt assumenda porro beatae, omnis ipsam laudantium et consequatur perspiciatis, eum fugiat quos rem, aperiam eligendi vero iste autem doloremque minus quis pariatur ex necessitatibus labore esse. Numquam possimus velit, doloribus facilis at debitis ea est, itaque nulla architecto quod mollitia recusandae, quisquam voluptatum. Error sint tempora consequuntur amet in laborum maiores odit magnam neque consectetur. Perspiciatis non explicabo sunt architecto numquam est beatae sint mollitia ratione nemo, ut alias repudiandae molestias nobis necessitatibus fuga perferendis vitae? Accusamus velit suscipit nihil earum obcaecati neque facilis excepturi eos, incidunt tempora nisi? Corrupti rerum alias aperiam! Recusandae eum voluptate quibusdam! Itaque facilis hic perspiciatis fugiat architecto.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContinueSetup
