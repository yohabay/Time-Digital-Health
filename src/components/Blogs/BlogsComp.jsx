import Img5 from "../../assets/blog/app1..png";
import Img1 from "../../assets/blog/image1.png";
import Img2 from "../../assets/blog/image2.png";
import Img3 from "../../assets/blog/image3.png";
import Img6 from "../../assets/blog/image5.png";
import Img7 from "../../assets/blog/image6.png";

import BlogCard from "./BlogCard";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Training Entrepreneurs",
    description:
      "“The training program has been instrumental in empowering entrepreneurs.”",
  },
  {
    id: 4,
    image: Img2,
    title: "World Conferencing",
    description:
      "“To improve the production and supply of nutrient-dense food, guarantee food security, and encourage healthier diets, innovative solution into agri-processing. ”",
  },
  {
    id: 4,
    image: Img3,
    title: "Attending the world conference",
    description:
      "“At International investment Forum   international high-level leaders & among dedicated stakeholders to addressing global problems ”",
  },
  {
    id: 4, // Unique ID for the new project
    image: Img5, // Add the image related to the Digital Healthcare App
    title: "Digital Healthcare App",

    description:
      "“The Digital Health care App connects physicians and patients for improved healthcare access and delivery.”",
  },
  {
    id: 5, // Unique ID for the new project
    image: Img6, // Add the image related to the Digital Healthcare App
    title: "Health",

    description:
      "“our company serving the community by solving different sector problems  with different partners”",
  },
  {
    id: 6, // Unique ID for the new project
    image: Img7, // Add the image related to the Digital Healthcare App
    title: "our working area",

    description: "“I work in mthis area for production ”",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Blogs
          </h1>
          {/* Horizontal Scrollable Row with Fixed Width and Height */}
          <div className="flex space-x-6 overflow-x-scroll scrollbar-hide">
            {BlogsData.map((item) => (
              <div
                key={item.id}
                className="flex-none w-[300px] h-[400px]" // Set width and height to 300px
              >
                <BlogCard {...item} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
