import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
      console.log(items);
      return (
            <div className="mb-5">
                  {title && <Cover img={img} title={title}></Cover>}
                  <div className="grid md:grid-cols-2 gap-10 my-16 max-w-7xl mx-auto">
                        {items.map((item) => (
                              <MenuItem key={item._id} item={item} />
                        ))}
                  </div>
                  <div className="text-center mt-10">
                        <Link to={`/order/${title}`}>
                              <button className="btn  btn-outline border-0 border-b-4
                              "> ORDER YOUR FAVOURITE FOOD</button>
                        </Link>
                  </div>
            </div>
      );
};

export default MenuCategory;