import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {

      return (
            <div className="mb-5">
                  {title && <Cover img={img} title={title}></Cover>}
                  <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-7xl mx-auto">
                        {items.map((item) => (
                              <MenuItem key={item._id} item={item} />
                        ))}
                  </div>
                  <div className="text-center mt-10">
                        <button className="btn  btn-outline border-0 border-b-4
                              "> View full menu</button>
                  </div>
            </div>
      );
};

export default MenuCategory;