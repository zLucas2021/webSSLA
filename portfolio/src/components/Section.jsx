import Container from "./Container";
import background from '../assets/vector.svg';
const Section = () => {
  return (
    <div className="w-[calc(100%_+_1440px)] bg-gray-200 max-w-full overflow-hidden flex flex-row items-center justify-center  px-0 pb-0 box-border relative gap-[60px] min-h-[396px] tracking-[normal] mq1100:gap-[60px_30px]">
      <Container />
      <img src={background} alt="" className='absolute w-full z-[-1]' />
      
    </div>
  );
};

export default Section;
