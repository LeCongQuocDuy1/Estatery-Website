import React, { useState } from "react";
import background from "~/assets/home-background.jpg";
import { SearchType } from "~/components";

const Home = () => {
    const [stateCustomer, setStateCustomer] = useState("rent");

    return (
        <div className="w-full bg-white py-[60px]">
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
            <div className="px-[100px] mt-[100px]">
                <div className="text-title text-main font-bold w-full text-center mb-[15px]">
                    Propertice by Area
                </div>
                <div className="text-desc text-main w-[60%] flex m-auto text-center mb-[30px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus corporis voluptatem ipsa velit doloremque
                    perferendis aperiam laudantium quasi ea pariatur.
                </div>
                <div className=" grid grid-cols-3 gap-[15px] mb-[15px]">
                    <div className="relative">
                        <div className="absolute inset-0 bg-overlay2 rounded-[8px]"></div>
                        <img
                            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                            alt=""
                            className="rounded-[8px] object-cover h-full"
                        />
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-overlay2 rounded-[8px]"></div>
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
                            alt=""
                            className="rounded-[8px] object-cover h-full"
                        />
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-overlay2 rounded-[8px]"></div>
                        <img
                            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                            alt=""
                            className="rounded-[8px] object-cover h-full"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-[15px]">
                    <div className="relative col-span-2">
                        <div className="absolute inset-0 bg-overlay2 rounded-[8px]"></div>
                        <img
                            src="https://media.istockphoto.com/id/1656526382/vi/anh/ng%C3%B4i-nh%C3%A0-hi%E1%BB%87n-%C4%91%E1%BA%A1i-v%E1%BB%9Bi-h%E1%BB%93-b%C6%A1i.jpg?s=612x612&w=0&k=20&c=1uPSthAiQRnFS4Tr5A-Uub2DgHVRoER-a0EvaKQ2Pc8="
                            alt=""
                            className="rounded-[8px] object-cover w-full h-[250px]"
                        />
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-overlay2 rounded-[8px]"></div>
                        <img
                            src="https://media.istockphoto.com/id/1162515759/vi/anh/nh%C3%A0-b%C3%AAn-ngo%C3%A0i-v%E1%BB%9Bi-h%E1%BB%93-b%C6%A1i-trong-nh%C3%A0.jpg?s=612x612&w=0&k=20&c=1iJ13QA70MFLcZLXUc5n2iEHP2NHK9NrupaBhGjznGM="
                            alt=""
                            className="rounded-[8px] object-cover h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
