import Swal from "sweetalert2";
import UseAuth from "../../Hookd/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../Hookd/UseAxiosSecure";
import UseCart from "../../Hookd/UseCart";





const FoodCard = ({ item }) => {
      const { name, image, price, recipe, _id } = item;
      const { user } = UseAuth();
      const navigate = useNavigate();
      const location = useLocation();
      const axiosSecure = UseAxiosSecure();
      const [, refetch] = UseCart();



      const handleAddToCart = () => {
            if (user && user.email) {
                  //  send cart item to the database

                  const cartItem = {
                        menuId: _id,
                        email: user.email,
                        name,
                        image,
                        price
                  };
                  axiosSecure.post('/carts', cartItem)
                        .then(res => {
                              console.log(res.data);
                              if (res.data.insertedId) {
                                    Swal.fire({
                                          title: `${name} added to your cart`,
                                          text: "You clicked the button!",
                                          icon: "success"
                                    });
                                    // refetch cart to update the cart items count
                                    refetch();
                              }
                        });
            }
            else {
                  Swal.fire({
                        title: "You are not logged in",
                        text: "Please login to add to the cart?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, login"
                  }).then((result) => {
                        if (result.isConfirmed) {
                              //      send the user to the login page
                              navigate('/login', { state: { from: location } });

                        }
                  });
            }
      };


      return (
            <div>
                  <div className="card w-96 bg-base-100 h-full shadow-xl">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <p className="absolute right-0 mr-4 mt-4 px-4 py-1 bg-slate-900 text-white rounded-md">${price}</p>
                        <div className="card-body">
                              <h2 className="card-title">{name}</h2>
                              <p>{recipe}</p>
                              <div className="card-actions justify-end">
                                    <button onClick={handleAddToCart}
                                          className="btn btn-primary">Buy Now</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default FoodCard;