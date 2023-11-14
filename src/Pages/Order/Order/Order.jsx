import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { useState } from 'react';
import UseMenu from '../../../Hookd/UseMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
      const categories = ['salad', 'pizza', 'soups', 'dessert', 'drinks'];
      const { category } = useParams();
      const initialIndex = categories.indexOf(category);
      const [tabIndex, setTabIndex] = useState(initialIndex);
      const [menu] = UseMenu();


      console.log(category);

      const desserts = menu.filter(item => item.category === 'dessert');
      const soup = menu.filter(item => item.category === 'soup');
      const salad = menu.filter(item => item.category === 'salad');
      const pizza = menu.filter(item => item.category === 'pizza');
      const drinks = menu.filter(item => item.category === 'drinks');
      return (
            <div>
                  <Helmet>
                        <title>Bistro Boss | Order Food</title>

                  </Helmet>
                  <Cover img={orderCoverImg} title="Order Food"></Cover>
                  <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className="uppercase text-center mt-16">
                              <Tab>Salad</Tab>
                              <Tab>pizza</Tab>
                              <Tab>soups</Tab>
                              <Tab>desserts</Tab>
                              <Tab>Drinks</Tab>
                        </TabList>
                        <TabPanel>
                              <OrderTab
                                    items={salad}>

                              </OrderTab>

                        </TabPanel>
                        <TabPanel>
                              <OrderTab
                                    items={pizza}>

                              </OrderTab>
                        </TabPanel>
                        <TabPanel>
                              <OrderTab
                                    items={soup}>

                              </OrderTab>
                        </TabPanel>
                        <TabPanel>
                              <OrderTab
                                    items={desserts}>

                              </OrderTab>
                        </TabPanel>
                        <TabPanel>
                              <OrderTab
                                    items={drinks}>

                              </OrderTab>
                        </TabPanel>
                  </Tabs>
            </div>
      );
};

export default Order;