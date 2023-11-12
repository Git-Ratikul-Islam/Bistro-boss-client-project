import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import UseMenu from '../../../Hookd/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
      const [menu] = UseMenu();
      const desserts = menu.filter(item => item.category === 'dessert');
      const soup = menu.filter(item => item.category === 'soup');
      const salad = menu.filter(item => item.category === 'salad');
      const pizza = menu.filter(item => item.category === 'pizza');
      const offered = menu.filter(item => item.category === 'offered');
      return (
            <div>
                  <Helmet>
                        <title>Bistro Boss | Menu</title>
                        <link rel="canonical" href="https://www.tacobell.com/" />
                  </Helmet>
                  <Cover img={menuImg} title="our menu"></Cover>

                  {/* Main cover */}

                  <SectionTitle subHeading="Don't miss" heading="Today's Offer">

                  </SectionTitle>
                  {/* Offered menu items */}

                  <MenuCategory items={offered}></MenuCategory>

                  {/* Dessert menu items */}

                  <MenuCategory items={desserts} title="Dessert"
                        img={dessertImg}>
                  </MenuCategory>

                  {/* Pizza menu items */}
                  <MenuCategory items={pizza} title="Pizza"
                        img={pizzaImg}>
                  </MenuCategory>
                  {/* Salad menu items */}
                  <MenuCategory items={salad} title="Salad"
                        img={saladImg}>
                  </MenuCategory>
                  {/* Soup menu items */}
                  <MenuCategory items={salad} title="Soup"
                        img={soupImg}>
                  </MenuCategory>




            </div>
      );
};

export default Menu;