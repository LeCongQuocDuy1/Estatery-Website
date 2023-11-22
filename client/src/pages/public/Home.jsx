import React, { useState } from "react";
import background from "~/assets/home-background.jpg";
import sell from "~/assets/sell.png";
import rent from "~/assets/rent.png";
import buy from "~/assets/buy.png";
import marketing from "~/assets/marketing.png";
import { Button, SearchType } from "~/components";
import icons from "~/ultils/icons";

const Home = () => {
    const [stateCustomer, setStateCustomer] = useState("rent");

    return (
        <div className="w-full bg-white">
            <div className="relative">
                <div className="absolute inset-0 bg-overlay"></div>
                <img
                    src={background}
                    alt=""
                    className="w-full h-[450px] object-fill"
                />
                <div className="absolute top-[25%] z-20 flex flex-col justify-center text-center w-full gap-[10px]">
                    <div className="text-[50px] text-white font-[600]">
                        Buy, rent, or sell your property easily
                    </div>
                    <div className="text-[18px] text-white">
                        A great plaform to buy, sell, or even rent your
                        properties without any commisions.
                    </div>
                </div>
                <SearchType
                    stateCustomer={stateCustomer}
                    setStateCustomer={setStateCustomer}
                />
            </div>
            <div className="w-full px-[100px] pt-[100px] pb-[60px]">
                <div className="text-title text-main font-bold w-full text-center mb-[15px]">
                    Propertice by Area
                </div>
                <div className="text-desc text-[#666] w-[60%] flex m-auto text-center mb-[30px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus corporis voluptatem ipsa velit doloremque
                    perferendis aperiam laudantium quasi ea pariatur.
                </div>
                <div className=" grid grid-cols-3 gap-[15px] mb-[15px]">
                    <div className="relative">
                        <div class="absolute top-[6%] left-[6%] z-10 flex flex-col justify-between bottom-[6%]">
                            <div className="">
                                <div className="text-[20px] text-white font-bold mb-[6px]">
                                    Washington
                                </div>
                                <div className="text-[16px] text-white">
                                    25 listings
                                </div>
                            </div>
                            <icons.BiMap className="text-[24px] text-white font-bold" />
                        </div>
                        <div class="absolute inset-0 bg-overlay2 rounded-[8px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <Button text="View Detail" />
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                            alt=""
                            className="rounded-[8px] object-cover h-full"
                        />
                    </div>
                    <div className="relative">
                        <div class="absolute top-[6%] left-[6%] z-10 flex flex-col justify-between bottom-[6%]">
                            <div className="">
                                <div className="text-[20px] text-white font-bold mb-[6px]">
                                    Washington
                                </div>
                                <div className="text-[16px] text-white">
                                    25 listings
                                </div>
                            </div>
                            <icons.BiMap className="text-[24px] text-white font-bold" />
                        </div>
                        <div class="absolute inset-0 bg-overlay2 rounded-[8px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <Button text="View Detail" />
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
                            alt=""
                            className="rounded-[8px] object-cover h-full"
                        />
                    </div>
                    <div className="relative">
                        <div class="absolute top-[6%] left-[6%] z-10 flex flex-col justify-between bottom-[6%]">
                            <div className="">
                                <div className="text-[20px] text-white font-bold mb-[6px]">
                                    Washington
                                </div>
                                <div className="text-[16px] text-white">
                                    25 listings
                                </div>
                            </div>
                            <icons.BiMap className="text-[24px] text-white font-bold" />
                        </div>
                        <div class="absolute inset-0 bg-overlay2 rounded-[8px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <Button text="View Detail" />
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                            alt=""
                            className="rounded-[8px] object-cover h-full"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-[15px]">
                    <div className="relative col-span-2">
                        <div class="absolute top-[6%] left-[6%] z-10 flex flex-col justify-between bottom-[6%]">
                            <div className="">
                                <div className="text-[20px] text-white font-bold mb-[6px]">
                                    Washington
                                </div>
                                <div className="text-[16px] text-white">
                                    25 listings
                                </div>
                            </div>
                            <icons.BiMap className="text-[24px] text-white font-bold" />
                        </div>
                        <div class="absolute inset-0 bg-overlay2 rounded-[8px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <Button text="View Detail" />
                        </div>
                        <img
                            src="https://media.istockphoto.com/id/1656526382/vi/anh/ng%C3%B4i-nh%C3%A0-hi%E1%BB%87n-%C4%91%E1%BA%A1i-v%E1%BB%9Bi-h%E1%BB%93-b%C6%A1i.jpg?s=612x612&w=0&k=20&c=1uPSthAiQRnFS4Tr5A-Uub2DgHVRoER-a0EvaKQ2Pc8="
                            alt=""
                            className="rounded-[8px] object-cover w-full h-[250px]"
                        />
                    </div>
                    <div className="relative">
                        <div class="absolute top-[6%] left-[6%] z-10 flex flex-col justify-between bottom-[6%]">
                            <div className="">
                                <div className="text-[20px] text-white font-bold mb-[6px]">
                                    Washington
                                </div>
                                <div className="text-[16px] text-white">
                                    25 listings
                                </div>
                            </div>
                            <icons.BiMap className="text-[24px] text-white font-bold" />
                        </div>
                        <div class="absolute inset-0 bg-overlay2 rounded-[8px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <Button text="View Detail" />
                        </div>
                        <img
                            src="https://media.istockphoto.com/id/1162515759/vi/anh/nh%C3%A0-b%C3%AAn-ngo%C3%A0i-v%E1%BB%9Bi-h%E1%BB%93-b%C6%A1i-trong-nh%C3%A0.jpg?s=612x612&w=0&k=20&c=1iJ13QA70MFLcZLXUc5n2iEHP2NHK9NrupaBhGjznGM="
                            alt=""
                            className="rounded-[8px] object-cover h-full"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full px-[100px] py-[80px] bg-[#edeff6]">
                <div className="text-title text-main font-bold w-full text-center mb-[15px]">
                    Propertice by Area
                </div>
                <div className="text-desc text-[#666] w-[60%] flex m-auto text-center mb-[50px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus corporis voluptatem ipsa velit doloremque
                    perferendis aperiam laudantium quasi ea pariatur.
                </div>
                <div className="grid grid-cols-4">
                    <div className="bg-white py-[20px] px-[20px] rounded-[4px]">
                        <img
                            src={sell}
                            alt=""
                            className=" object-cover mb-[20px]"
                        />
                        <div className="text-[24px] text-main font-bold mb-[10px]">
                            Sell your home
                        </div>
                        <div className="text-[14px] text-[#666] mb-[15px]">
                            We do a free evaluation to be sure you want to start
                            selling.
                        </div>
                        <div className="text-[16px] text-main-500 font-[500] cursor-pointer">
                            Read more
                        </div>
                    </div>
                    <div className="py-[20px] px-[20px] rounded-[4px]">
                        <img
                            src={rent}
                            alt=""
                            className=" object-cover mb-[20px]"
                        />
                        <div className="text-[24px] text-main font-bold mb-[10px]">
                            Rent your home
                        </div>
                        <div className="text-[14px] text-[#666] mb-[15px]">
                            We do a free evaluation to be sure you want to start
                            selling.
                        </div>
                        <div className="text-[16px] text-main-500 font-[500] cursor-pointer">
                            Read more
                        </div>
                    </div>
                    <div className="py-[20px] px-[20px] rounded-[4px]">
                        <img
                            src={buy}
                            alt=""
                            className=" object-cover mb-[20px]"
                        />
                        <div className="text-[24px] text-main font-bold mb-[10px]">
                            Buy a home
                        </div>
                        <div className="text-[14px] text-[#666] mb-[15px]">
                            We do a free evaluation to be sure you want to start
                            selling.
                        </div>
                        <div className="text-[16px] text-main-500 font-[500] cursor-pointer">
                            Read more
                        </div>
                    </div>
                    <div className="py-[20px] px-[20px] rounded-[4px]">
                        <img
                            src={marketing}
                            alt=""
                            className=" object-cover mb-[20px]"
                        />
                        <div className="text-[24px] text-main font-bold mb-[10px]">
                            Free marketing
                        </div>
                        <div className="text-[14px] text-[#666] mb-[15px]">
                            We do a free evaluation to be sure you want to start
                            selling.
                        </div>
                        <div className="text-[16px] text-main-500 font-[500] cursor-pointer">
                            Read more
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div class="absolute inset-0 bg-overlay"></div>
                <div className="absolute inset-0 text-center flex flex-col justify-center items-center">
                    <div className="w-[500px]">
                        <div className="text-[34px] text-white font-bold mb-[10px]">
                            Find Best Place For Living
                        </div>
                        <div className="text-[16px] text-[#d3d3d3] mb-[25px]">
                            Spend vacations in best hotels and resorts find the
                            great place of your choice using different searching
                            options.
                        </div>
                        <div className="w-full flex justify-center">
                            <Button text="Contact Us" style="w-[130px]" />
                        </div>
                    </div>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="object-cover w-full h-[400px]"
                />
            </div>
        </div>
    );
};

export default Home;
