import banner from "../assets/images/banner.svg"
import buildingImage from "../assets/images/white-concrete-building-1838640.svg"
import shape_1 from "../assets/images/shape-1.svg";
import shape_2 from "../assets/images/shape-2.svg";
import user_image from "../assets/images/user_image.svg";
import CategoryCards from "../components/CategoryCards";
import ListOfAuthors from "../components/ListOfAuthors";
import FeaturedIn from "../components/FeaturedIn";
import arrow_icon from "../assets/Icons/arrow_icon.svg";

function Home() {

  return (
    <>
      {/* <h1 className="text-xl font-semibold">Home Page</h1> */}
      {/* section 1 - (banner) */}
      <section className="relative w-full">
        <img className="w-full" src={banner} alt="banner image" />
        <div className="absolute bg-black bg-opacity-30 w-full h-full text-white top-0 z-[1]">
          <div className="w-[60%] pl-16 py-20">
            <p className="mb-4">POSTED ON STARTUP</p>
            <h1 className="mb-6 text-5xl font-bold">Step-by-step guide to choosing great font pairs</h1>
            <p>By Lorem ipsum | Aug 23 2022</p>
            <p className="mt-5 w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit dese facere odio sunt alias labore maiores minus quae ad.</p>
            <div className="mt-4">
              <button className="px-8 py-2 mt-6 text-black font-semibold  bg-[#ffd050] hover:bg-opacity-80 active:bg-opacity-100">Read More {">"}</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* section 2 - (featured post and all posts) */}
      <section className="flex px-16 mt-24">
        {/* featured post */}
        <div className="w-[50%]">
          <h2 className="mb-6 text-2xl font-semibold">Featured Post</h2>
          <div className="p-5 border-[1px] border-gray-300">
            <img src={buildingImage} alt="building Image" />
            <p className="mt-5">By John Doe on | May 22 2022</p>
            <h4 className="my-3 text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam error sed quibusdam.</h4>
            <p className="">Lorem ipsum dolor, adipisicing elit. Dolore suscipit saepe nostrum aut debitis in doloribus dignissimos maiores distinctio quam!</p>
            <button className="px-8 py-2 mt-6 text-black font-semibold  bg-[#ffd050] hover:bg-opacity-80 active:bg-opacity-100">Read More {">"}</button>
          </div>
        </div>
        {/* all posts */}
        <div className="w-[50%]">
        <div className="flex items-center justify-between pl-12">
          <h1 className="mb-6 text-2xl font-semibold">All Posts</h1>
          <span className="text-blue-600 cursor-pointer">View All</span>
        </div>
          <div className="h-full py-5 pl-8 overflow-y-auto">
          <div className="cursor-pointer p-7 hover:bg-yellow-50">
              <h5 className="text-sm">By John Aug 22 2021</h5>
              <p className="pr-12 mt-2 text-xl">8 Figma design systems that you can download for free today.</p>
            </div>
            <div className="cursor-pointer p-7 hover:bg-yellow-50">
              <h5 className="text-sm">By John Aug 22 2021</h5>
              <p className="pr-12 mt-2 text-xl">8 Figma design systems that you can download for free today.</p>
            </div>
            <div className="cursor-pointer p-7 hover:bg-yellow-50">
              <h5 className="text-sm">By John Aug 22 2021</h5>
              <p className="pr-12 mt-2 text-xl">8 Figma design systems that you can download for free today.</p>
            </div>
            <div className="cursor-pointer p-7 hover:bg-yellow-50">
              <h5 className="text-sm">By John Aug 22 2021</h5>
              <p className="pr-12 mt-2 text-xl">8 Figma design systems that you can download for free today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 - (about us and our mission) */}
      <section className="px-16 mt-24">
        <div className="flex justify-end">
          <img className="h-[21px]" src={shape_2} alt="shape_2" />
          <img className="h-[21px]" src={shape_1} alt="shape_1" />
        </div>
        <div className="flex w-full bg-pink-100">
          <div className="w-[50%] p-12 ">
            <h1 className="mb-6 font-semibold">ABOUT US</h1>
            <p className="mb-3 text-2xl font-semibold">We are a community of content writers who share their learings</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi ex aut omnis inventore.</p>
            <button className="mt-6 font-bold text-purple-700 hover:underline">Read More {">"}</button>
          </div>
          <div className="w-[50%] pr-10 p-12 ">
            <h1 className="mb-6 font-semibold">OUR MISION</h1>
            <p className="mb-3 text-2xl font-semibold">Creating valuable content for creatices all around the world</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla hic? Harum reprehenderit quas, aut ipsum itaque eaque quos odit.</p>
          </div>
        </div>
      </section>

      {/* section 4 - (Choose a category)*/}
      <section className="px-16 mt-24">
        <h1 className="mb-12 text-4xl font-semibold text-center">Choose A Category</h1>
        <div>
          <CategoryCards />
        </div>
      </section>

      {/* section 5 - () */}
      <section className="px-16 mt-24">
        <div className="relative w-full">
          <img className="bg-gray-300 w-[70%] h-[450px]" src="" alt="" />
          <div className="absolute bottom-0 w-[40%] right-0 bg-white px-12 py-10 flex flex-col gap-3">
            <h1>WHY WE STARTED</h1>
            <h2 className="text-3xl font-semibold">It started out as a simple idea and evolved into our passion</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore voluptas aperiam non amet sint vitae modi! Incidunt consequatur dicta voluptatibus?</p>
            <div className="mt-2">
              <button className="px-10 py-2 font-semibold bg-Yellow hover:bg-opacity-80 active:bg-opacity-100">Discover Our Story {">"}</button>
            </div>
          </div>
        </div>
      </section>

      {/* section 6 - (List of Authors) */}
      <section className="px-16 mt-24">
        <h1 className="mb-12 text-4xl font-semibold text-center">List of Authors</h1>
        <ListOfAuthors />
      </section>

      {/* section 7 - (Featured In) */}
      <section className="px-16 mt-24">
        <FeaturedIn />
      </section>

      {/* section 8 - () */}
      <section className="px-16 mt-24">
        <div className="flex px-20 py-16 bg-orange-100">
          {/* part 1 */}
          <div className="w-[40%] pb-20 border-r-2 pr-24">
            <h2 className="mb-2 font-semibold">Loremolipsum</h2>
            <h1 className="mb-4 text-3xl font-semibold">What people say about our blog</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, laborum nulla.</p>
          </div>
          {/* part 2 */}
          <div className="w-[60%] pl-20 flex flex-col justify-between">
            <p className="pr-10 text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, exercitationem eum nulla consequuntur cumque iusto ullam? Sit, quia recusandae?</p>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <img className="w-10 h-10 mr-4 bg-gray-300 rounded-full" src={user_image} alt="" />
                <div>
                  <h2 className="text-xl font-semibold">Janathan Vallem</h2>
                  <p className="text-sm">New York USA</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer hover:scale-95 active:scale-105">
                  <img className="w-5 h-5 rotate-180 invert" src={arrow_icon} alt="arrow_icon" />
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full cursor-pointer juce hover:scale-95 active:scale-105">
                  <img className="w-5 h-5 " src={arrow_icon} alt="arrow_icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 9 - () */}
      <section className="px-16 mt-24">
        <div className="flex justify-center">
          <div className="flex flex-col items-center w-[32%] gap-4">
            <h1 className="text-3xl font-bold text-center">Join our team to be a part of our story</h1>
            <p className="text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt cupiditate dolore.</p>
            <div>
              <button className="px-10 py-2 font-semibold bg-Yellow hover:bg-opacity-80 active:bg-opacity-100">Join Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
