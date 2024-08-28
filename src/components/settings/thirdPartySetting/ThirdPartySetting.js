import React from 'react'

function ThirdPartySetting() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="mb-0 h6">Google reCAPTCHA Setting</h3>
                                </div>
                                <div className="card-body">
                                    <form action="https://demo.activeitzone.com/matrimonial/admin/third-party-settings/update" method="POST">
                                        <input type="hidden" name="setting_type" defaultValue="google_recaptcha" />
                                        <input type="hidden" name="_token" defaultValue="TzQIq6Om03FLyro0DQeqNpRAdRmieKZiCT5LKRhL" />                    <div className="form-group row">
                                            <div className="col-md-3">
                                                <label className="control-label">Activation</label>
                                            </div>
                                            <div className="col-md-9">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} name="google_recaptcha_activation" type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="CAPTCHA_KEY" />
                                            <div className="col-md-3">
                                                <label className="control-label">Site KEY</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" name="CAPTCHA_KEY" defaultValue placeholder="Site KEY" required fdprocessedid="ezmxx8" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="button" className="btn btn-sm btn-primary" fdprocessedid="uibf4e">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="mb-0 h6">Google Analytics Settings</h3>
                                </div>
                                <div className="card-body">
                                    <form action="https://demo.activeitzone.com/matrimonial/admin/third-party-settings/update" method="POST">
                                        <input type="hidden" name="setting_type" defaultValue="google_analytics" />
                                        <input type="hidden" name="_token" defaultValue="TzQIq6Om03FLyro0DQeqNpRAdRmieKZiCT5LKRhL" />                    <div className="form-group row">
                                            <div className="col-md-3">
                                                <label className="control-label">Activation</label>
                                            </div>
                                            <div className="col-md-9">
                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                    <input defaultValue={1} name="google_analytics_activation" type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <input type="hidden" name="types[]" defaultValue="GOOGLE_ANALYTICS_TRACKING_ID" />
                                            <div className="col-md-3">
                                                <label className="control-label">Tracking ID</label>
                                            </div>
                                            <div className="col-md-9">
                                                <input type="text" className="form-control" name="GOOGLE_ANALYTICS_TRACKING_ID" defaultValue placeholder="Tracking ID" required fdprocessedid="s4pym" />
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 text-right">
                                            <button type="button" className="btn btn-sm btn-primary" fdprocessedid="1r4zjf">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Facebook Chat Setting */}
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h6 className="fw-600 mb-0">Facebook Chat</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row gutters-10">
                                        <div className="col-lg-6">
                                            <div className="card shadow-none bg-light">
                                                <div className="card-header">
                                                    <h5 className="mb-0 h6">Facebook Chat Setting</h5>
                                                </div>
                                                <div className="card-body">
                                                    <form action="https://demo.activeitzone.com/matrimonial/admin/third-party-settings/update" method="POST">
                                                        <input type="hidden" name="setting_type" defaultValue="facebook_chat" />
                                                        <input type="hidden" name="_token" defaultValue="TzQIq6Om03FLyro0DQeqNpRAdRmieKZiCT5LKRhL" />                                    <div className="form-group row">
                                                            <div className="col-md-3">
                                                                <label className="col-from-label">Facebook Chat</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                                    <input defaultValue={1} name="facebook_chat_activation" type="checkbox" />
                                                                    <span className="slider round" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <input type="hidden" name="types[]" defaultValue="FACEBOOK_PAGE_ID" />
                                                            <div className="col-md-3">
                                                                <label className="col-from-label">Facebook Page ID</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <input type="text" className="form-control" name="FACEBOOK_PAGE_ID" defaultValue={25} placeholder="Facebook Page ID" required fdprocessedid="l90kj" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-0 text-right">
                                                            <button type="button" className="btn btn-sm btn-primary" fdprocessedid="6sp9c">Save</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card shadow-none bg-light">
                                                <div className="card-header">
                                                    <h5 className="mb-0 h6">Please be carefull when you are configuring Facebook chat. For incorrect configuration you will not get messenger icon on your user-end site.</h5>
                                                </div>
                                                <div className="card-body">
                                                    <ul className="list-group mar-no">
                                                        <li className="list-group-item text-dark">1. Login into your facebook page</li>
                                                        <li className="list-group-item text-dark">2. Find the About option of your facebook page.</li>
                                                        <li className="list-group-item text-dark">3. At the very bottom, you can find the \“Facebook Page ID\”.</li>
                                                        <li className="list-group-item text-dark">4. Go to Settings of your page and find the option of \"Advance Messaging\".</li>
                                                        <li className="list-group-item text-dark">5. Scroll down that page and you will get \"white listed domain\".</li>
                                                        <li className="list-group-item text-dark">6. Set your website domain name.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h6 className="fw-600 mb-0">Facebook Pixel</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row gutters-10">
                                        <div className="col-lg-6">
                                            <div className="card shadow-none bg-light">
                                                <div className="card-header">
                                                    <h5 className="mb-0 h6">Facebook Pixel Setting</h5>
                                                </div>
                                                <div className="card-body">
                                                    <form action="https://demo.activeitzone.com/matrimonial/admin/third-party-settings/update" method="POST">
                                                        <input type="hidden" name="setting_type" defaultValue="facebook_pixel" />
                                                        <input type="hidden" name="_token" defaultValue="TzQIq6Om03FLyro0DQeqNpRAdRmieKZiCT5LKRhL" />                                    <div className="form-group row">
                                                            <div className="col-lg-3">
                                                                <label className="col-from-label">Facebook Pixel</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                                    <input defaultValue={1} name="facebook_pixel_activation" type="checkbox" />
                                                                    <span className="slider round" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <input type="hidden" name="types[]" defaultValue="FACEBOOK_PIXEL_ID" />
                                                            <div className="col-lg-3">
                                                                <label className="col-from-label">Facebook Pixel ID</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <input type="text" className="form-control" name="FACEBOOK_PIXEL_ID" defaultValue="asdws121" placeholder="Facebook Pixel ID" required fdprocessedid="8b57uj" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-0 text-right">
                                                            <button type="button" className="btn btn-sm btn-primary" fdprocessedid="xkxl87">Save</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card shadow-none bg-light">
                                                <div className="card-header">
                                                    <h5 className="mb-0 h6">Please be carefull when you are configuring Facebook pixel.</h5>
                                                </div>
                                                <div className="card-body">
                                                    <ul className="list-group mar-no">
                                                        <li className="list-group-item text-dark">1. Log in to Facebook and go to your Ads Manager account.</li>
                                                        <li className="list-group-item text-dark">2. Open the Navigation Bar and select Events Manager.</li>
                                                        <li className="list-group-item text-dark">3. Copy your Pixel ID from underneath your Site Name and paste the number into Facebook Pixel ID field.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h6 className="fw-600 mb-0">Facebook Comment</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row gutters-10">
                                        <div className="col-lg-6">
                                            <div className="card shadow-none bg-light">
                                                <div className="card-header">
                                                    <h5 className="mb-0 h6">Facebook Comment Setting</h5>
                                                </div>
                                                <div className="card-body">
                                                    <form action="https://demo.activeitzone.com/matrimonial/admin/third-party-settings/update" method="POST">
                                                        <input type="hidden" name="setting_type" defaultValue="facebook_comment" />
                                                        <input type="hidden" name="_token" defaultValue="TzQIq6Om03FLyro0DQeqNpRAdRmieKZiCT5LKRhL" />                                    <div className="form-group row">
                                                            <div className="col-lg-3">
                                                                <label className="col-from-label">Facebook Comment</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <label className="aiz-switch aiz-switch-success mb-0">
                                                                    <input defaultValue={1} name="facebook_comment_activation" type="checkbox" />
                                                                    <span className="slider round" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <input type="hidden" name="types[]" defaultValue="FACEBOOK_APP_ID" />
                                                            <div className="col-lg-3">
                                                                <label className="col-from-label">Facebook App ID</label>
                                                            </div>
                                                            <div className="col-md-7">
                                                                <input type="text" className="form-control" name="FACEBOOK_APP_ID" defaultValue={3651638584928275} placeholder="Facebook App ID" required fdprocessedid="e7yxsb" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-0 text-right">
                                                            <button type="button" className="btn btn-sm btn-primary" fdprocessedid="1jgilbj">Save</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card shadow-none bg-light">
                                                <div className="card-header">
                                                    <h5 className="mb-0 h6">Please be carefull when you are configuring Facebook Comment. For incorrect configuration you will not get comment section on your user-end site.</h5>
                                                </div>
                                                <div className="card-body">
                                                    <ul className="list-group mar-no">
                                                        <li className="list-group-item text-dark">
                                                            1. Login into your facebook page
                                                        </li>
                                                        <li className="list-group-item text-dark">
                                                            2. After then go to this URL https://developers.facebook.com/apps/.
                                                        </li>
                                                        <li className="list-group-item text-dark">
                                                            3. Create Your App.
                                                        </li>
                                                        <li className="list-group-item text-dark">
                                                            4. In Dashboard page you will get your App ID.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
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
export default ThirdPartySetting