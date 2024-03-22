const Card = ({ title, title1, subtitle }) => {
  return (
    <div className="flex-1 rounded-md box-border overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-[12px] min-w-[255px] max-w-full text-center text-xs text-black font-roboto border-[1px] border-solid border-gray-300">
      <div className="self-stretch bg-gainsboro flex flex-row items-start justify-start py-[162px] px-4">
        <div className="flex-1 relative leading-[16px]">{title}</div>
      </div>
      <div className="self-stretch h-[84px] flex flex-row items-start justify-start py-0 px-3 box-border text-left text-base">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch relative leading-[24px]">{title1}</div>
          <div className="self-stretch relative text-xl leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
            {subtitle}
          </div>
          <div className="w-[88px] flex-1 flex flex-row items-start justify-start gap-[8px] text-center">
            <div className="self-stretch flex-1 relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap">
              🚀
            </div>
            <div className="self-stretch flex-1 relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap">
              💡
            </div>
            <div className="self-stretch flex-1 relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap">
              ⏳
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
