const Article = ({ title, subtitle }) => {
  return (
    <div className="self-stretch rounded-md box-border flex flex-row items-start justify-start py-4 px-[15px] gap-[16px] max-w-full text-left text-base text-black font-roboto border-[1px] border-solid border-gray-300 mq450:flex-wrap">
      <div className="h-[100px] w-[100px] relative bg-gainsboro" />
      <div className="w-[372px] flex flex-col items-start justify-start gap-[8px] min-w-[242px] max-w-full">
        <div className="self-stretch relative text-xl leading-[28px] font-medium mq450:text-base mq450:leading-[22px]">
          {title}
        </div>
        <div className="self-stretch relative leading-[24px]">{subtitle}</div>
        <div className="self-stretch h-8 flex flex-row items-center justify-start py-1 px-0 box-border text-center">
          <div className="self-stretch w-14 flex flex-row items-center justify-start gap-[8px]">
            <div className="self-stretch flex-1 relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap">
              🔧
            </div>
            <div className="self-stretch flex-1 relative leading-[24px] flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap">
              💻
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
