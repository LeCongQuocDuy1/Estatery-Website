import React from "react";

const SearchType = () => {
    return (
        <div className="absolute top-[70%] left-[43%] flex flex-col gap-[5px] justify-center">
            <div className="rounded-[8px] bg-white flex items-center">
                <div className="text-[18px] font-[600] text-main-500 py-[10px] px-[25px] border-b-[4px] border-main-500 cursor-pointer">
                    Rent
                </div>
                <div className="text-[18px] font-[600] text-primary py-[10px] px-[20px] cursor-pointer">
                    Buy
                </div>
                <div className="text-[18px] font-[600] text-primary py-[10px] px-[20px] cursor-pointer">
                    Sell
                </div>
            </div>
            <div className="rounded-[8px] bg-white flex items-center p-[20px] h-[120px] shadow-lg"></div>
        </div>
    );
};

export default SearchType;
