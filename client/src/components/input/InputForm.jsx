import React from "react";

const InputForm = ({
    style = "form-input rounded-[6px] text-[14px]",
    label,
    id,
    type = "text",
    register,
    errors,
    validate,
    placeholderText = "",
    defaultValue,
    readOnly,
    disabled,
}) => {
    return (
        <div className="flex flex-col gap-2 mb-[13px]">
            {label && (
                <label
                    htmlFor={id}
                    className="text-[14px] text-main font-[600]"
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                className={style}
                placeholder={placeholderText}
                {...register(id, validate)}
                disabled={disabled}
                defaultValue={defaultValue}
                readOnly={readOnly}
            />
            {errors[id] && (
                <span className="text-[12px] text-red-500">
                    {errors[id]?.message}
                </span>
            )}
        </div>
    );
};

export default InputForm;
