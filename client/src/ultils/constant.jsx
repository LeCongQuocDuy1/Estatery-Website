import path from "./path";
import icons from "./icons";

export const navigations = [
    {
        id: 1,
        value: "Home",
        path: `/${path.HOME}`,
    },
    {
        id: 2,
        value: "Rent",
        path: `/${path.RENT}`,
    },
    {
        id: 3,
        value: "Buy",
        path: `/${path.BUY}`,
    },
    {
        id: 4,
        value: "Sell",
        path: `/${path.SELL}`,
    },
    {
        id: 5,
        value: "Manage Property",
        icon: (
            <icons.FiChevronDown className="text-primary text-[17px] font-[700]" />
        ),
        path: `/${path.MANAGE_PROPERTY}`,
    },
    {
        id: 6,
        value: "Resources",
        icon: (
            <icons.FiChevronDown className="text-primary text-[17px] font-[700]" />
        ),
        path: `/${path.RESOURCES}`,
    },
];
