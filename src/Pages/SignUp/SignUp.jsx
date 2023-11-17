import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {

      const { register, handleSubmit, reset, formState: { errors }, } = useForm();
      const { createUser, updateUserProfile } = useContext(AuthContext);
      const navigate = useNavigate();

      const onSubmit = data => {
            console.log(data);
            createUser(data.email, data.password)
                  .then(result => {
                        const loggedUser = result.user;
                        console.log(loggedUser);
                        updateUserProfile(data.name, data.photoURL)

                              .then(() => {
                                    console.log('user profile info updated');
                                    reset();
                                    Swal.fire({
                                          position: "center",
                                          icon: "success",
                                          title: "Your work has been saved",
                                          showConfirmButton: false,
                                          timer: 1500
                                    });
                                    navigate('/');

                              })
                              .catch(error => console.log(error));
                  });
      };



      // console.log(watch("example"));

      return (
            <>
                  <Helmet>
                        <title>Bistro Boss | Sign Up</title>

                  </Helmet>
                  <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                              <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Sign Up now</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                              </div>
                              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                                {errors.name && <span className="text-red-600 ml-1 mt-2">Name is required</span>}
                                          </div>


                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Photo url</span>
                                                </label>
                                                <input type="text" {...register("photoURL", { required: true })} name="name" placeholder="Photo URl" className="input input-bordered" />
                                                {errors.name && <span className="text-red-600 ml-1 mt-2">PhotoURL  required</span>}
                                          </div>



                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" {...register("email", { required: true })} placeholder="Email" name="email" className="input input-bordered" />
                                                {errors.email && <span className="text-red-600 ml-1 mt-2">Email is required</span>}
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password"  {...register("password", {
                                                      required: true, minLength: 6,
                                                      maxLength: 20,
                                                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/


                                                })} name="password" placeholder="password" className="input input-bordered" />
                                                <label className="label">
                                                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                                {errors.password?.type === "required" && (
                                                      <p className="text-red-600">Password is required </p>
                                                )}


                                                {errors.password?.type === "minLength" && (
                                                      <p className="text-red-600">Password must be 6 character </p>
                                                )}
                                                {errors.password?.type === "maxLength" && (
                                                      <p className="text-red-600">Password must be less than  20 character </p>
                                                )}
                                                {errors.password?.type === "pattern" && (
                                                      <p className="text-red-600">Password must one uppercase one lowercase and one special character</p>
                                                )}


                                          </div>
                                          <div className="form-control mt-6">
                                                <input type="submit" className="btn btn-primary" value="Sign Up" />

                                          </div>
                                    </form>
                                    <p>Already have an account? <Link to="/login">Log in</Link></p>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default SignUp;