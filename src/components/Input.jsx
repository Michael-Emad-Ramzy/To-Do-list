import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-[0.35rem] rounded-sm border-[#164391] bg-stone-200 text-stone-600 focus:outline-none focus:border-[#4b7bcd]";

  return (
    <p className=" flex flex-col gap-1 my-4">
      <label className=" text-sm font-bold uppercase text-[#71a9fd]">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
