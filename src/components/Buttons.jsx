export default function Button({ children , ...props }) {
  return (
    <button className=" px-6 ml-5 mt-4 py-2 text-xs md:text-base rounded-md bg-[#4b7bcd] text-stone-100 hover:bg-[#71a9fd] hover:text-stone-700" {...props}>
      {children}
    </button>
  );
}
