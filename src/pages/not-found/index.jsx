import ErrorPage from "../../assets/images/page.jpg";
function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <img src={ErrorPage} alt="404 image" />
      <a
        href="/"
        className="border-2 focus:border focus:border-white focus:outline  cursor-pointer  bg-black py-2 mt-5 text-white font-semibold px-6 rounded-lg hover:scale-[99%]"
      >
        Continue Shopping
      </a>
    </div>
  );
}

export default NotFound;
