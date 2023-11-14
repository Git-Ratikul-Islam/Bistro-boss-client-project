import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Login = () => {

      const captchaRef = useRef(null);
      const [disabled, setDisabled] = useState(true);


      const { signInUser } = useContext(AuthContext);


      useEffect(() => {
            loadCaptchaEnginge(6);
      }, []);

      const handleLogin = e => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
            signInUser(email, password)
                  .then(result => {
                        const user = result.user;
                        console.log(user);
                  });

      };

      const handleValidateCaptcha = () => {
            const user_captcha_value = captchaRef.current.value;
            console.log(user_captcha_value);
            if (validateCaptcha(user_captcha_value)) {
                  setDisabled(false);
            }
            // else {
            //       setDisabled(true);
            // }



      };
      return (
            <>
                  <Helmet>
                        <title>Bistro Boss | Log In</title>
                  </Helmet>

                  <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col md:w-1/2 md:flex-row lg:flex-row">
                              <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Login now!</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                              </div>
                              <div className="card  md:h-1/2 l max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleLogin} className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                                <label className="label">
                                                      <LoadCanvasTemplate />
                                                </label>
                                                <input type="text" ref={captchaRef} name="captcha" placeholder="Type the captcha above" className="input input-bordered" required />
                                                <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>

                                          </div>
                                          <div className="form-control mt-6">

                                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Log in" />
                                          </div>
                                    </form>
                                    <p><small>New here? <Link to="/signUp">Create an account</Link></small></p>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default Login;