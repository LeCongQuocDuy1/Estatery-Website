import React from "react";
import background from "~/assets/home-background.jpg";
import { SearchType } from "~/components";

const Home = () => {
    return (
        <div className="h-[1000px] w-full">
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
                <SearchType />
            </div>
        </div>
    );
};

export default Home;
