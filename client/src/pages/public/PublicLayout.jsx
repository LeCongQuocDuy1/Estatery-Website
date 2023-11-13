import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "~/components";

const PublicLayout = () => {
    return (
        <div className="">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default PublicLayout;
