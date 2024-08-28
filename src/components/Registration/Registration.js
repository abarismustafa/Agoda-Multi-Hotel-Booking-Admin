
function Registration() {
    return (
        <>
            <div className="py-4 py-lg-5 py-lg-5-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-md-8 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <div className="mb-5 text-center">
                                        <h1 className="h3 text-primary mb-0">Create Your Account</h1>
                                        <p>Fill out the form to get started.</p>
                                    </div>
                                    <form className="form-default" id="reg-form" role="form" action="https://demo.activeitzone.com/matrimonial/register" method="POST">
                                        <input type="hidden" name="_token" defaultValue="SZH8IXMyBduJxf5jmQrMABcHtVkuPEqxuTofJemv" />							<div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mb-3">
                                                    <label className="form-label" htmlFor="on_behalf">On Behalf</label>
                                                    <select class="form-select aiz-selectpicker" aria-label="Default select example">
                                                    <option value={1}>Friend</option>
                                                        <option value={2}>Brother</option>
                                                        <option value={3}>Sister</option>
                                                        <option value={4}>Daughter/Son</option>
                                                        <option value={5}>Selfs</option>
                                                    </select>
                                                    {/* <div className="dropdown bootstrap-select form-control aiz- dropup">
                                                        <select className="form-control aiz-selectpicker" name="on_behalf" required tabIndex={-98}>
                                                        <option value={1}>Friend</option>
                                                        <option value={2}>Brother</option>
                                                        <option value={3}>Sister</option>
                                                        <option value={4}>Daughter/Son</option>
                                                        <option value={5}>Selfs</option>
                                                    </select>
                                                    <button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Friend" fdprocessedid="o6zywt">
                                                        <div className="filter-option">
                                                            <div className="filter-option-inner">
                                                                <div className="filter-option-inner-inner">
                                                                    Friend
                                                                </div>
                                                                </div> 
                                                                </div>
                                                                </button>
                                                                <div className="dropdown-menu" style={{ overflow: 'hidden' }}><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1} aria-activedescendant="bs-select-1-0" style={{ overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-1-0" tabIndex={0} aria-setsize={5} aria-posinset={1} aria-selected="true"><span className="text">Friend</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-1" tabIndex={0}><span className="text">Brother</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-2" tabIndex={0}><span className="text">Sister</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-3" tabIndex={0}><span className="text">Daughter/Son</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-1-4" tabIndex={0}><span className="text">Selfs</span></a></li></ul></div></div></div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group mb-3">
                                                    <label className="form-label" htmlFor="name">First Name</label>
                                                    <input type="text" className="form-control " name="first_name" id="first_name" placeholder="First Name" required fdprocessedid="2hu3fx" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group mb-3">
                                                    <label className="form-label" htmlFor="name">Last Name</label>
                                                    <input type="text" className="form-control " name="last_name" id="last_name" placeholder="Last Name" required fdprocessedid="jbaigx" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group mb-3">
                                                    <label className="form-label" htmlFor="gender">Gender</label>
                                                    <select class="form-select aiz-selectpicker" aria-label="Default select example">
                                                    <option value={1}>Male</option>
                                                        <option value={2}>Female</option>
                                                    </select>
                                                    {/* <div className="dropdown bootstrap-select form-control aiz- dropup"
                                                    ><select className="form-control aiz-selectpicker" name="gender" required tabIndex={-98}>
                                                        <option value={1}>Male</option>
                                                        <option value={2}>Female</option>
                                                    </select><button type="button" className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="Male" fdprocessedid="tfo6n1"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">Male</div></div> </div></button><div className="dropdown-menu" style={{ overflow: 'hidden' }}><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1} aria-activedescendant="bs-select-2-0" style={{ overflowY: 'auto' }}><ul className="dropdown-menu inner show" role="presentation" style={{ marginTop: 0, marginBottom: 0 }}><li className="selected active"><a role="option" className="dropdown-item active selected" id="bs-select-2-0" tabIndex={0} aria-setsize={2} aria-posinset={1} aria-selected="true"><span className="text">Male</span></a></li><li><a role="option" className="dropdown-item" id="bs-select-2-1" tabIndex={0}><span className="text">Female</span></a></li></ul></div></div></div> */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group mb-3">
                                                    <label className="form-label" htmlFor="name">Date Of Birth</label>
                                                    <input type="text" className="form-control aiz-date-range " name="date_of_birth" id="date_of_birth" placeholder="Date Of Birth" data-single="true" data-show-dropdown="true" data-max-date="2023-03-22" autoComplete="off" required fdprocessedid="nk8tq" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-between align-items-start">
                                                <label className="form-label" htmlFor="email">Email / Phone</label>
                                                <button className="btn btn-link p-0 opacity-50 text-reset fs-12" type="button" onclick="toggleEmailPhone(this)" fdprocessedid="663nip">Use Email Instead</button>
                                            </div>
                                            <div className="form-group phone-form-group mb-1">

                                            </div>
                                            <input type="hidden" name="country_code" defaultValue={91} />
                                            <div className="form-group email-form-group mb-1 d-none">
                                                <input type="email" className="form-control " defaultValue placeholder="Email" name="email" autoComplete="off" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group mb-3">
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                    <input type="password" className="form-control " name="password" placeholder="********" aria-label="********" required fdprocessedid="ou7wcf" />
                                                    <small>Minimun 8 characters</small>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group mb-3">
                                                    <label className="form-label" htmlFor="password-confirm">Confirm password</label>
                                                    <input type="password" className="form-control" name="password_confirmation" placeholder="********" required fdprocessedid="8uwkd3l" />
                                                    <small>Minimun 8 characters</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mb-3">
                                                    <label className="form-label" htmlFor="email">Referral Code</label>
                                                    <input type="text" className="form-control" defaultValue placeholder="Referral Code" name="referral_code" fdprocessedid="9dy9km" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="aiz-checkbox">
                                                <input type="checkbox" name="checkbox_example_1" required />
                                                <span className="opacity-60">By signing up you agree to our
                                                    <a href="https://demo.activeitzone.com/matrimonial/terms-conditions" target="_blank">terms and conditions.</a>
                                                </span>
                                                <span className="aiz-square-check" />
                                            </label>
                                        </div>
                                        <div className="mb-5">
                                            <button type="submit" className="btn btn-block btn-primary" fdprocessedid="l2qc7d">Create Account</button>
                                        </div>
                                        <div className="mb-5">
                                            <div className="separator mb-3">
                                                <span className="bg-white px-3">Or Join With</span>
                                            </div>
                                            <ul className="list-inline social colored text-center">
                                                <li className="list-inline-item">
                                                    <a href="https://demo.activeitzone.com/matrimonial/social-login/redirect/facebook" className="facebook" title="Facebook"><i className="lab la-facebook-f" /></a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="https://demo.activeitzone.com/matrimonial/social-login/redirect/google" className="google" title="Google"><i className="lab la-google" /></a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href="https://demo.activeitzone.com/matrimonial/social-login/redirect/twitter" className="twitter" title="Twitter"><i className="lab la-twitter" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-muted mb-0">Already have an account?</p>
                                            <a href="https://demo.activeitzone.com/matrimonial/login">Login to your Account</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Registration