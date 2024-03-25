import Container from "./Container";
import background from '../assets/vector.svg';
import { ImgCustom } from "./ImgCustom";
const SectionTop = ({onfocusProjec}) => {
  return (
    <div className="w-[calc(100%_+_1440px)] bg-gray-200 max-w-full overflow-hidden flex flex-row items-center justify-center  px-0 pb-0 box-border relative gap-[60px] min-h-[396px] tracking-[normal] mq1100:gap-[60px_30px]">
      <Container onfocusProjec={onfocusProjec} />
      <ImgCustom url={background} alt={""} style={'absolute w-full z-[-1] object-cover h-full'}/>
      
      
    </div>
  );
};

export default SectionTop;
