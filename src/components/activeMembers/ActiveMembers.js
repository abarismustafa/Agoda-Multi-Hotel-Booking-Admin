import { Link } from "react-router-dom"

function ActiveMembers() {
  const autoFill = () => {
    alert("helo")
  }
  const autoFill2 = () => {
    alert("helo")
  }
  return (
    <>
      <div className="py-4 py-lg-5" style={{ marginTop: "158px" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-5 col-md-7 mx-auto">
              <div className="card">
                <div className="card-body">
                  <div className="mb-5 text-center">
                    <h1 className="h3 text-primary mb-0">Login to your Account</h1>
                  </div>
                  <form className method="POST" action="https://demo.activeitzone.com/matrimonial/login">
                    <input type="hidden" name="_token" defaultValue="5WpdvYCj5vitK99bAnbI5bFnBZatU9GbAVf4qR4J" />
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email/Phone
                      </label>
                      <input type="text" className="form-control " defaultValue placeholder="Email Or Phone" name="email" id="email" />
                      <span className="opacity-60">Use country code before number</span>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="password">Password</label>
                      <input type="password" className="form-control " name="password" id="password" placeholder="********" required />
                    </div>
                    <div className="mb-3 text-right">
                      <a className="link-muted text-capitalize font-weight-normal" href="https://demo.activeitzone.com/matrimonial/password/reset">Forgot Password?</a>
                    </div>
                    <div className="mb-5">
                      <Link to='/member-listing' className="btn btn-block btn-primary">Login to your Account</Link>               
                    </div>
                  </form>
                  <div className="mb-5">
                    <table className="table table-bordered table-responsive">
                      <tbody>
                        <tr>
                          <td>user2@example.com</td>
                          <td>12345678</td>
                          <td className="text-center">
                            <button className="btn btn-outline-primary btn-xs" onClick={autoFill}>Copy credentials</button>
                          </td>
                        </tr>
                        <tr>
                          <td>user17@example.com</td>
                          <td>12345678</td>
                          <td className="text-center">
                            <button className="btn btn-outline-primary btn-xs" onClick={autoFill2}>Copy credentials</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="separator mb-3">
                    <span className="bg-white px-3 opacity-60">Or Login With</span>
                  </div>
                  <ul className="list-inline social colored text-center mb-5">
                    <li className="list-inline-item">
                      <a href="https://demo.activeitzone.com/matrimonial/social-login/redirect/facebook" className="facebook">
                        <i className="lab la-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://demo.activeitzone.com/matrimonial/social-login/redirect/google" className="google">
                        <i className="lab la-google" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://demo.activeitzone.com/matrimonial/social-login/redirect/twitter" className="twitter">
                        <i className="lab la-twitter" />
                      </a>
                    </li>
                  </ul>
                  <div className="text-center">
                    <p className="text-muted mb-0">Don't have an account?</p>
                    <a href="https://demo.activeitzone.com/matrimonial/register">Create an account</a>
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
export default ActiveMembers