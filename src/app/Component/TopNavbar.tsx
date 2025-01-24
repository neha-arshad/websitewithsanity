import { FiCheck, FiChevronDown } from "react-icons/fi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Link from "next/link";

const TopNavbar = () => {
  return (
    <div className="bg-[#272343] text-white text-xs font-light h-11 px-4 flex flex-wrap items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-2  ml-0 sm:ml-4 md:ml-12 lg:ml-44 ">
        <FiCheck className="text-lg" />
        <span></span>
      </div>

      {/* Right Section */}
      <div className="flex items-center mr-44 space-x-6 sm:space-x-3 md:space-x-6 flex-wrap justify-center md:justify-end">
        <div className="flex items-center space-x-1 cursor-pointer">
          <span>Eng</span>
          <FiChevronDown className="text-lg" />
        </div>
        <Link href="/Faq">
          <span className="cursor-pointer hover:underline">Faqs</span>
        </Link>

        <div className="flex items-center space-x-1 cursor-pointer hover:underline">
          <AiOutlineExclamationCircle className="text-lg" />
          <span>Need Help</span>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
