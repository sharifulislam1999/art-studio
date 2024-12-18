import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <div className="bg-[#062f57e0] mt-24">
      <div className="container mx-auto px-3">
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-3">
            <div className="col-span-1 space-y-4">
              <div>
                <h1 className="text-5xl text-white font-bold">Art Studio</h1>
              </div>
              <div className="text-[#ABABAB]">
                <p>
                Discover artisanal excellence at [Website Name], your destination for handcrafted treasures. Explore unique creations crafted with passion and skill, and find inspiration for your next artistic endeavor.
                </p>
              </div>
              <div className="flex gap-4 text-white text-2xl">
                <Link to="https://www.facebook.com">
                    <FaFacebook/>
                </Link>
                <Link to="https://www.twitter.com">
                    <FaTwitter/>
                </Link>
                <Link to="https://www.linkedin.com">
                    <FaLinkedin/>
                </Link>
              </div>
              <div className="text-white">
                <div className="flex items-center gap-3">
                  <div>
                    <MdLocationPin></MdLocationPin>
                  </div>
                  <div>
                    <p className="text-white">Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <IoIosMail></IoIosMail>
                  </div>
                  <div>
                    <p className="text-white">support@artstudio.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <FiPhoneCall></FiPhoneCall>
                  </div>
                  <div>
                    <p className="text-white">+880175653****</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 text-left lg:text-center space-y-8">
              <div className="text-white text-xl font-medium">
                <h1>Popular</h1>
              </div>
              <div className="text-[#ABABAB]">
                <ul className="space-y-2">
                  <li>Upcomming Event</li>
                  <li>Upcomming Products</li>
                  <li>New Product</li>
                  <li>Product News</li>
                  <li>Product Stock</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1  text-left lg:text-center space-y-8">
              <div className="text-white text-xl font-medium">
                <h1>Quick links</h1>
              </div>
              <div className="text-[#ABABAB]">
                <ul className="space-y-2">
                  <li>Terms of Use</li>
                  <li>Privacy Police</li>
                  <li>Contact Support</li>
                  <li>Careers</li>
                  <li>FAQs</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1  text-left lg:text-center space-y-4">
              <div>
                <h1 className="text-2xl text-white font-medium">News Letter</h1>
              </div>
              <div className="text-[#ABABAB]">
                <p>Subscribe to our newsletter.</p>
              </div>
              <div className="text-[#ABABAB]">
                <div className="flex items-center bg-white rounded-full">
                  <div className="flex-grow">
                    <input
                      className="w-full text-base px-6  rounded-full border-none outline-none"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="p-2">
                    <h1 className="py-2 cursor-pointer bg-[#0A7EF5] text-white font-semibold px-4 rounded-full">
                      Submit
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 text-[#ABABAB]">
            <span>All Right Reserved By @artstudio.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
