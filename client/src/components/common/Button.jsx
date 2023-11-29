import React from "react";
import icons from "~/ultils/icons";

const Button = ({
    type,
    text,
    image,
    icon,
    onClick,
    fullWidth,
    style,
    disabled,
}) => {
    return (
        <button
            className={`flex items-center justify-center gap-[6px] h-[48px] rounded-[6px] px-[15px] text-[17px] font-[600] cursor-pointer ${
                type === "primary"
                    ? "bg-main-50 text-white"
                    : type === "disabled"
                    ? "opacity-50"
                    : "text-white  border-[#fff] border-[2px] hover:bg-[#d3d3d318]"
            } ${fullWidth ? "w-full" : ""} ${style || ""}`}
            onClick={onClick}
            disabled={disabled}
        >
            {disabled ? (
                <React.Fragment>
                    <icons.CgSpinner className="animate-spin" />
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {image && (
                        <img
                            src={image}
                            alt="Avatar"
                            className="w-[40px] h-[40px] object-cover rounded-full"
                        />
                    )}
                    <div className="">{text || ""}</div>
                    {icon && <div className="mt-[5px]">{icon}</div>}
                </React.Fragment>
            )}
        </button>
    );
};

export default Button;
