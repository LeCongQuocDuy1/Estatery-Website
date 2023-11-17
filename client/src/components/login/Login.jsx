import React, { useEffect, useState } from "react";
import icons from "~/ultils/icons";
import { useAppStore } from "~/store/useAppStore";
import { Button, InputForm } from "..";
import { useForm } from "react-hook-form";

const Login = () => {
    const { setModal } = useAppStore();
    const [variant, setVariant] = useState("signin");
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => console.log(data);

    useEffect(() => {
        reset();
    }, [variant]);

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="absolute w-[360px] h-[550px] bg-white top-[6%] rounded-[6px] shadow-lg p-[20px]"
        >
            <button
                onClick={() => setModal(false, null)}
                className="absolute right-[5px] top-[5px] text-[24px] p-2 rounded-full cursor-pointer hover:bg-slate-100"
            >
                <icons.FaTimes />
            </button>

            <div className="text-[22px] font-[700] text-main w-full text-center mt-[30px] mb-[10px]">
                Welcome to Estatery
            </div>
            <div className="flex items-center justify-start w-full border-b-[1px] border-[#d3d3d3] mb-[10px]">
                <span
                    onClick={() => setVariant("signin")}
                    className={`text-[16px] text-main p-[10px] cursor-pointer hover:text-main-50 ${
                        variant === "signin"
                            ? "border-b-[3px] border-main-500"
                            : "border-none"
                    }`}
                >
                    Sign in
                </span>
                <span
                    onClick={() => setVariant("signup")}
                    className={`text-[16px] text-main p-[10px] cursor-pointer hover:text-main-50 ${
                        variant === "signup"
                            ? "border-b-[3px] border-main-500"
                            : "border-none"
                    }`}
                >
                    New account
                </span>
            </div>
            <form className="px-[10px]">
                <InputForm
                    id="email"
                    label="Email"
                    register={register}
                    placeholderText="Enter email"
                    type="email"
                    errors={errors}
                    validate={{
                        required: "Email is required!",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address",
                        },
                    }}
                />

                <InputForm
                    id="password"
                    label="Password"
                    register={register}
                    placeholderText="Enter password"
                    type="password"
                    validate={{
                        required: "Password is required!",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                        },
                    }}
                    errors={errors}
                />
                {variant === "signup" && (
                    <InputForm
                        id="name"
                        label="Fullname"
                        register={register}
                        placeholderText="Enter fullname"
                        validate={{
                            required: "Name is required!",
                        }}
                        errors={errors}
                    />
                )}
                <div className="my-[12px]">
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        type="primary"
                        text="Sign in"
                        fullWidth={true}
                    />
                </div>
                <div className="text-[14px] font-bold text-main-300 cursor-pointer hover:underline hover:text-main-500 w-full text-center">
                    Forgot your password?
                </div>
            </form>
        </div>
    );
};

export default Login;
