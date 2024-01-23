export default function Button({ children , ...props }) {
  return (
    <button className=" px-6 ml-5 mt-4 py-2 text-xs md:text-base rounded-md bg-[#305aa4] text-stone-100 hover:bg-[#23477e] hover:text-stone-200" {...props}>
      {children}
    </button>
  );
}
