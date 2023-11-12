
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hookd/UseMenu";


const PopularMenu = () => {
      const [menu] = UseMenu();
      const popular = menu.filter(item => item.category === 'popular');
      // const [menu, setMenu] = useState([]);
      // useEffect(() => {
      //       fetch('./menu.json')
      //             .then(res => res.json())
      //             .then(data => {
      //                   const popularItems = data.filter(item => item.category === 'popular');

      //                   setMenu(popularItems);
      //             });
      // }, []);
      return (
            // <section className="mb-12">
            //       <SectionTitle heading="From Our Menu"
            //             subHeading="Popular Items">
            //       </SectionTitle>
            //       <div className="gird md:grid-cols-2 gap-4">
            //             {menu.map(item => <MenuItem
            //                   key={item._id}
            //                   item={item}
            //             ></MenuItem>)
            //             }
            //       </div>
            // </section>
            <section className="mb-12">
                  <SectionTitle heading="From Our Menu" subHeading="Popular Items" />
                  <div className="grid md:grid-cols-2 gap-10 ">
                        {popular.map((item) => (
                              <MenuItem key={item._id} item={item} />
                        ))}
                  </div>
                  <div className="text-center mt-10">
                        <button className="btn  btn-outline border-0 border-b-4
                              "> View full menu</button>
                  </div>
            </section>


      );
};

export default PopularMenu;