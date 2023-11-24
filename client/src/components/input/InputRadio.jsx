import React from "react";

const InputRadio = ({
    style = "form-radio text-[14px] cursor-pointer",
    id,
    label = "",
    type = "text",
    register,
    errors,
    validate,
    options = [],
}) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label
                    htmlFor={id}
                    className="text-[14px] text-main font-[600] mb-[5px]"
                >
                    {label}
                </label>
            )}
            <div className="flex items-center gap-[20px]">
                {options.map((item, index) => (
                    <div className="flex items-center gap-[7px]" key={index}>
                        <input
                            type={type}
                            id={item.value}
                            name={id}
                            value={item.value}
                            className={style}
                            {...register(id, validate)}
                        />
                        <label
                            htmlFor={item.value}
                            className="text-[13px] text-[#333] mb-[1px]"
                        >
                            {item.label}
                        </label>
                    </div>
                ))}
            </div>
            {errors[id] && (
                <span className="text-[12px] text-red-500">
                    {errors[id]?.message}
                </span>
            )}
        </div>
    );
};

export default InputRadio;
