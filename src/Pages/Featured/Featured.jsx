import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';
import './Features.css';

const Featured = () => {
      return (
            <div className="featured-item bg-fixed text-white pt-8 my-20 ">
                  <SectionTitle heading="Featured Item"
                        subHeading="Check it out">

                  </SectionTitle>
                  <div className="md:flex justify-center items-center pb-20 pt-12 px-36 ">
                        <div>
                              <img className="md:px-10 " src={featuredImg} alt="" />
                        </div>
                        <div className="md:ml-6 text-[22px] space-y-1">
                              <p>Aug 20 , 2029</p>
                              <p className="uppercase">Where can i get some</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                              <button className="btn text-white btn-outline border-0 border-b-4
                              "> Order  now</button>
                        </div>
                  </div >

            </div >
      );
};

export default Featured;