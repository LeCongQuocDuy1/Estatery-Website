import React from "react";

const Button = ({ type, text }) => {
    return (
        <div
            className={`rounded-[8px] px-[20px] text-[17px] font-[600] cursor-pointer ${
                type === "primary"
                    ? "bg-main-50 text-white"
                    : "text-primary bg-white border-[#e9e9e9] border-[2px]"
            }`}
        >
            {text || ""}
        </div>
    );
};

export default Button;
