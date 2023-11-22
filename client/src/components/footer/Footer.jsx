import React from "react";
import icons from "~/ultils/icons";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-white w-full px-[100px] py-[60px] grid grid-cols-5 gap-[15px]">
            <div className="col-span-2">
                <Link
                    to="/"
                    className="flex items-center gap-1 cursor-pointer mb-[15px]"
                >
                    <icons.RiHome6Fill className="text-main-50 text-[30px]" />
                    <div className="text-[24px] font-bold text-primary">
                        Estatery
                    </div>
                </Link>

                <ul className="">
                    <div className="text-[22px] text-main font-bold mb-[10px]">
                        Contact Us
                    </div>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Call: +123 400 123
                    </li>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px] w-[80%]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Neque atque non sequi, fugiat harum animi.
                    </li>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Email: estatery123@gmail.com
                    </li>
                </ul>
                <div className="flex items-center justify-between w-[220px] mt-[10px]">
                    <div className="rounded-[3px] py-[10px] px-[10px] bg-[#edeff6] text-center cursor-pointer">
                        <icons.FaFacebookF className="text-[16px] text-blue-500" />
                    </div>
                    <div className="rounded-[4px] py-[10px] px-[10px] bg-[#edeff6] text-center cursor-pointer">
                        <icons.FcGoogle className="text-[16px] text-blue-500" />
                    </div>
                    <div className="rounded-[4px] py-[10px] px-[10px] bg-[#edeff6] text-center cursor-pointer">
                        <icons.FaInstagram className="text-[16px] text-pink-500" />
                    </div>
                    <div className="rounded-[4px] py-[10px] px-[10px] bg-[#edeff6] text-center cursor-pointer">
                        <icons.TiSocialLinkedin className="text-[16px] text-black" />
                    </div>
                    <div className="rounded-[4px] py-[10px] px-[10px] bg-[#edeff6] text-center cursor-pointer">
                        <icons.TiSocialTwitter className="text-[16px] text-blue-500" />
                    </div>
                </div>
            </div>
            <div className="">
                <ul className="">
                    <div className="text-[22px] text-main font-bold mb-[10px]">
                        Features
                    </div>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Home
                    </li>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Become a Host
                    </li>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Pricing
                    </li>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Blog
                    </li>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Contact
                    </li>
                </ul>
            </div>
            <div className="">
                <ul className="">
                    <div className="text-[22px] text-main font-bold mb-[10px]">
                        Company
                    </div>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        About Us
                    </li>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Press
                    </li>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Contact
                    </li>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Careers
                    </li>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Blog
                    </li>
                </ul>
            </div>
            <div className="">
                <ul className="">
                    <div className="text-[22px] text-main font-bold mb-[10px]">
                        Team and policies
                    </div>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Terms of services
                    </li>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Privacy policy
                    </li>
                    <li className="text-[14px] text-main-500 cursor-pointer mb-[5px]">
                        Security
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
