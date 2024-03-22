const Input = ({ title, text }) => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-start justify-center gap-[4px] max-w-full text-left text-sm text-black font-roboto">
      <div className="self-stretch relative leading-[20px] font-medium">
        {title}
      </div>
      <div className="self-stretch rounded-md bg-white box-border flex flex-row items-center justify-start py-2 px-[11px] max-w-full text-gray-100 border-[1px] border-solid border-gray-300">
        <div className="h-5 flex-1 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Input;
