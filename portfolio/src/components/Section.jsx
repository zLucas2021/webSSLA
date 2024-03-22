import Container from "./Container";
const Section = () => {
  return (
    <div className="w-[calc(100%_+_1440px)] bg-gray-200 max-w-full overflow-hidden flex flex-row items-center justify-center pt-[60px] px-0 pb-0 box-border relative gap-[60px] min-h-[396px] tracking-[normal] mq1100:gap-[60px_30px]">
      <Container />
      <svg className="h-[0.5px] w-full absolute !m-[0] right-[0px] bottom-[-0.5px] left-[0px] max-w-full overflow-hidden" id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"  version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood  result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="161" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="900" height="600" fill="#6600FF"></rect><g filter="url(#blur1)"><circle cx="842" cy="250" fill="#00CC99" r="357"></circle><circle cx="85" cy="157" fill="#6600FF" r="357"></circle><circle cx="294" cy="69" fill="#00CC99" r="357"></circle><circle cx="17" cy="383" fill="#00CC99" r="357"></circle><circle cx="463" cy="365" fill="#6600FF" r="357"></circle><circle cx="674" cy="91" fill="#00CC99" r="357"></circle></g></svg>
      
    </div>
  );
};

export default Section;
