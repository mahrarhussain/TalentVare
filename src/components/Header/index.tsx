import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LOGO, PROFILE_ICON } from "../../assets/images";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white w-full">
      <div className=" mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center w-full">
          <img src={LOGO} alt="Logo" className="h-10 w-10" />

          <nav className="hidden ml-4 space-x-3 lg:flex lg:items-center me-4">
            <a href="#" className="text-[#0154aa] font-bold">
              Find Jobs
            </a>
            <a href="#" className="text-gray-600">
              Top Companies
            </a>
            <a href="#" className="text-gray-600">
              Job Tracker
            </a>
            <a href="#" className="text-gray-600">
              My Calendar
            </a>
            <a href="#" className="text-gray-600">
              Documents
            </a>
            <a href="#" className="text-gray-600">
              Messages
            </a>
            <a href="#" className="text-gray-600">
              Notifications
            </a>
          </nav>

          <button
            className="lg:hidden ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="hidden ms-9 lg:flex items-center space-x-4">
          <div className="relative flex-1 min-w-0 lg:w-70">
            {" "}
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg px-10 py-2 bg-[#f6f9ff] focus:outline-none w-full"
            />
          </div>

          <button className="bg-[#0154aa] text-white py-2 px-4 rounded-lg text-center">
            Resume Builder
          </button>
          <img
            src={PROFILE_ICON}
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white shadow-md overflow-hidden"
          >
            <nav className="nav py-3 space-y-4 grid justify-center">
              <a href="#" className="block  text-[#0154aa] font-bold">
                Find Jobs
              </a>
              <a href="#" className="block  text-[#737a91]">
                Top Companies
              </a>
              <a href="#" className="block  text-[#737a91]">
                Job Tracker
              </a>
              <a href="#" className="block  text-[#737a91]">
                My Calendar
              </a>
              <a href="#" className="block  text-[#737a91]">
                Documents
              </a>
              <a href="#" className="block  text-[#737a91]">
                Messages
              </a>
              <a href="#" className="block  text-[#737a91]">
                Notifications
              </a>
            </nav>

            <div className="flex items-center justify-center py-4">
              <img
                src={PROFILE_ICON}
                alt="User Avatar"
                className="h-12 w-12 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
