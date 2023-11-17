import React from "react";
import icons from "~/ultils/icons";
import { navigations } from "~/ultils/constant";
import Button from "../common/Button";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="h-[85px] bg-white w-full leading-[85px] px-[36px] shadow-main">
            <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-1 cursor-pointer">
                    <icons.RiHome6Fill className="text-main-50 text-[30px]" />
                    <div className="text-[24px] font-bold text-primary">
                        Estatery
                    </div>
                </Link>
                <div className="flex items-center gap-[50px]">
                    {navigations.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-[19px] ${
                                    isActive ? "text-main-500" : "text-primary"
                                } font-[600] flex items-center gap-[6px] cursor-pointer`
                            }
                        >
                            <h3>{item.value}</h3>
                            {item.icon}
                        </NavLink>
                    ))}
                </div>
                <div className="flex items-center gap-3 leading-[45px]">
                    <Button text={"Login"} />
                    <Button type={"primary"} text={"Sign up"} />
                </div>
            </div>
        </div>
    );
};

export default Header;
