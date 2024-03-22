import Container1 from "./Container1";

const Section3 = () => {
  return (
    <div className="w-[1440px] max-w-full overflow-hidden flex flex-row items-center justify-center pt-[60px] px-0 pb-0 box-border relative gap-[60px] min-h-[408px] tracking-[normal] mq1150:gap-[60px_30px]">
      <Container1 />
      <img
        className="h-[0.5px] w-full absolute !m-[0] right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden"
        alt=""
        src="/v-e-c-t-o-r.svg"
      />
    </div>
  );
};

export default Section3;
