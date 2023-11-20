import React from "react";
import icons from "~/ultils/icons";
import { Button } from "..";

const SearchType = ({ stateCustomer, setStateCustomer }) => {
    return (
        <React.Fragment>
            <div className="absolute top-[72%] left-[43%]">
                <div className="rounded-[8px] bg-white flex items-center">
                    <div
                        onClick={() => setStateCustomer("rent")}
                        className={`text-[18px] font-[600] text-main-500 py-[10px] px-[20px] cursor-pointer ${
                            stateCustomer === "rent"
                                ? "border-b-[4px] border-main-500"
                                : ""
                        }`}
                    >
                        Rent
                    </div>
                    <div
                        onClick={() => setStateCustomer("buy")}
                        className={`text-[18px] font-[600] text-primary py-[10px] px-[20px] cursor-pointer ${
                            stateCustomer === "buy"
                                ? "border-b-[4px] border-main-500"
                                : ""
                        }`}
                    >
                        Buy
                    </div>
                    <div
                        onClick={() => setStateCustomer("sell")}
                        className={`text-[18px] font-[600] text-primary py-[10px] px-[20px] cursor-pointer ${
                            stateCustomer === "sell"
                                ? "border-b-[4px] border-main-500"
                                : ""
                        }`}
                    >
                        Sell
                    </div>
                </div>
            </div>
            <div className="absolute top-[85%] left-[15%]">
                <div className="rounded-[8px] bg-white flex gap-[45px] items-center py-[30px] pl-[50px] shadow-lg">
                    <div className="border-r-[2px] border-[#ccc] flex flex-col gap-2 pr-[50px]">
                        <div className="text-[17px] font-bold text-main">
                            Locations
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <div className="text-[16px] text-[#999]">
                                Select your city
                            </div>
                            <icons.FiChevronDown className="text-[20px] text-[#666]" />
                        </div>
                    </div>
                    <div className="border-r-[2px] border-[#ccc] flex flex-col gap-2 pr-[50px]">
                        <div className="text-[17px] font-bold text-main">
                            Property Type
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <div className="text-[16px] text-[#999]">
                                Select property type
                            </div>
                            <icons.FiChevronDown className="text-[20px] text-[#666]" />
                        </div>
                    </div>
                    <div className="border-r-[2px] border-[#ccc] flex flex-col gap-2 pr-[50px]">
                        <div className="text-[17px] font-bold text-main">
                            Rent Range
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <div className="text-[16px] text-[#999]">
                                Select rent range
                            </div>
                            <icons.FiChevronDown className="text-[20px] text-[#666]" />
                        </div>
                    </div>
                    <div className="px-[50px]">
                        <Button text="Search" type="primary" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SearchType;
