import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-full flex items-center justify-between
    px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Logo */}
      <div className="">
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold
        flex items-center justify-center">
          <span className="text-white mr-1">Reyna</span>
          <span className="w-12 h-8 rounded bg-white text-black
          flex items-center justify-center">.dev</span>
        </Link>
      </div>
      {/* Responsive Menu*/}
      <div className="">
        {/* MENU BUTTON */}
        <button className="w-10 h-8 flex flex-col justify-between">
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
      </div>

    </div>
  )
}

export default Navbar;