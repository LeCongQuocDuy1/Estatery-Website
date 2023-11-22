import React from "react";

const Button = ({ type, text, image, icon, onClick, fullWidth, style }) => {
    return (
        <div
            className={`flex items-center justify-center gap-[6px] h-[48px] rounded-[6px] px-[15px] text-[17px] font-[600] cursor-pointer ${
                type === "primary"
                    ? "bg-main-50 text-white"
                    : "text-white  border-[#fff] border-[2px] hover:bg-[#d3d3d318]"
            } ${fullWidth ? "w-full" : ""} ${style || ""}`}
            onClick={onClick}
        >
            {image && (
                <img
                    src={image}
                    alt="Avatar"
                    className="w-[40px] h-[40px] object-cover rounded-full"
                />
            )}
            <div className="">{text || ""}</div>
            {icon && <div className="mt-[5px]">{icon}</div>}
        </div>
    );
};

export default Button;
