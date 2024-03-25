
const Container = () => {
  
  return (
    <section  className="w-[1100px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[24px] max-w-full text-center text-21xl text-white font-roboto">
      <h1 className="m-0 w-[520px] relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[29px] mq1025:text-13xl mq1025:leading-[38px]">
        Welcome to Our Software Factory
      </h1>
      <div className="w-[520px] relative text-base leading-[24px] inline-block max-w-full">
        Transforming Ideas into Reality
      </div>
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[12px] max-w-full">
        <button
          className="whitespace-nowrap"
          name="more"
          id="more"
          
          size="lg"
        >
          Saber Mas
        </button>
        <button
          className="whitespace-nowrap"
          name="products"
          id="products"

          size="lg"
        >
          Nuestros Productos
        </button>
      </div>
      <div className="w-[520px] overflow-hidden flex flex-row flex-wrap items-center justify-center py-0 px-[68px] box-border gap-[12px] max-w-full mq750:pl-[34px] mq750:pr-[34px] mq750:box-border">
        <button className="cursor-pointer [border:none] p-2 bg-gainsboro flex-1 rounded-md flex flex-col items-center justify-start box-border min-w-[90px] whitespace-nowrap">
          <div className="self-stretch h-5 relative text-sm leading-[20px] font-roboto text-white text-center flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            Web Development
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-2 bg-gainsboro flex-1 rounded-md flex flex-col items-center justify-start box-border min-w-[90px] whitespace-nowrap">
          <div className="self-stretch h-5 relative text-sm leading-[20px] font-roboto text-white text-center flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            Mobile Apps
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-2 bg-gainsboro flex-1 rounded-md flex flex-col items-center justify-start box-border min-w-[90px] whitespace-nowrap"
          id="solutionas"
        >
          <div className="self-stretch h-5 relative text-sm leading-[20px] font-roboto text-white text-center flex items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
            Enterprise Solutions
          </div>
        </button>
      </div>
    </section>
  );
};

export default Container;
