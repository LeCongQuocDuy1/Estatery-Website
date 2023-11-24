import React, { useEffect, useState } from "react";
import icons from "~/ultils/icons";
import { useAppStore } from "~/store/useAppStore";
import { Button, InputForm, InputRadio } from "..";
import { useForm } from "react-hook-form";
import { apiLogin, apiRegister } from "~/apis/auth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import path from "~/ultils/path";

const Login = () => {
    const navigate = useNavigate();
    const { setModal } = useAppStore();
    const [variant, setVariant] = useState("signin");
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = async (data) => {
        if (variant === "signup") {
            const response = await apiRegister(data);
            if (response.success) {
                Swal.fire({
                    icon: "success",
                    title: "Congratulations!",
                    text: response.message,
                    showConfirmButton: true,
                    confirmButtonText: "Go sign in now!",
                }).then(({ isConfirmed }) => {
                    if (isConfirmed) setVariant("signin");
                });
            } else toast.error(response.message);
        }

        if (variant === "signin") {
            const { name, role, ...payload } = data;
            const response = await apiLogin(payload);
            if (response.success) {
                Swal.fire({
                    icon: "success",
                    title: "Congratulations!",
                    text: response.message,
                });
                setModal(false, null);
            } else toast.error(response.message);
        }
    };

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
                    id="phone"
                    label="Phone Number"
                    register={register}
                    placeholderText="Enter phone number"
                    type="tel"
                    errors={errors}
                    validate={{
                        required: "Phone is required!",
                        pattern: {
                            value: /^[0-9]{10}$/i,
                            message: "Phone number isn't valid!",
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
                {variant === "signup" && (
                    <InputRadio
                        id="role"
                        label="Role"
                        type="radio"
                        register={register}
                        validate={{
                            required: "Role is required!",
                        }}
                        errors={errors}
                        options={[
                            { label: "User", value: "USER" },
                            { label: "Agent", value: "AGENT" },
                        ]}
                    />
                )}
                <div className="my-[12px]">
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        type="primary"
                        text={variant === "signin" ? "Sign in" : "Submit"}
                        fullWidth={true}
                    />
                </div>
                {variant === "signin" && (
                    <div className="text-[14px] font-bold text-main-300 cursor-pointer hover:underline hover:text-main-500 w-full text-center">
                        Forgot your password?
                    </div>
                )}
            </form>
        </div>
    );
};

export default Login;
