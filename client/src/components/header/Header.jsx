import React from "react";
import icons from "~/ultils/icons";
import { navigations } from "~/ultils/constant";
import { Link, NavLink } from "react-router-dom";
import { useUserStore } from "~/store/useUserStore";
import { useAppStore } from "~/store/useAppStore";
import { Login, Button } from "~/components/";

const Header = () => {
    const { token } = useUserStore();
    const { setModal } = useAppStore();

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
                {/* !token */}
                {true ? (
                    <Button
                        type={"primary"}
                        text={"Sign In"}
                        onClick={() => setModal(true, <Login />)}
                    />
                ) : (
                    <Button
                        text={"Duy Le"}
                        image={
                            "https://lh3.googleusercontent.com/a/ACg8ocIfhe96EVBlem4KuXRdr1-vVc2BeYP2JGwYWuOrvp5-rxo=s288-c-no"
                        }
                        icon={<icons.FiChevronDown />}
                    />
                )}
            </div>
        </div>
    );
};

export default Header;
