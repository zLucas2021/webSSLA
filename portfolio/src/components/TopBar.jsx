import { ImgCustom } from "./ImgCustom";
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

const TopBar = () => {
  return (
    <div className="w-[calc(100%_+_1440px)] !m-[0] sticky top-[0] right-[-1440px] left-[0px] bg-white shadow-[0px_0px_6px_rgba(0,_0,_0,_0.12)] max-w-full overflow-hidden flex flex-row items-start justify-start p-5 box-border gap-[20px] z-[99] tracking-[normal] text-left text-base text-black font-roboto">
      <ImgCustom url={logo} alt={""} style={"h-10 w-10 relative rounded-[100px] bg-gray-300 object-cover"}/>
      <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-[28px]">
        <h2 className="m-0 self-stretch relative text-inherit leading-[36px] font-medium font-inherit whitespace-nowrap">
          Soluciones Tecnologicas L.A.
        </h2>
      </div>
      <div className="flex flex-col items-start justify-start pt-2 pb-0 pr-5 pl-0">
        <div className="relative leading-[24px] inline-block min-w-[44px]">
          <Link to={'/'}> Home</Link>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-2 pb-0 pr-5 pl-0">
        <div className="relative leading-[24px] inline-block min-w-[43px]">
        <Link to={'/about'}> About </Link>
        </div>
      </div>
      
    </div>
  );
};

export default TopBar;
