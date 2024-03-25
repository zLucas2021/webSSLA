import Input from "./Input";

const Container1 = () => {
  return (
    <section className="w-[1140px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full text-left text-21xl text-black font-roboto">
      <h4 className="m-0 self-stretch relative text-inherit leading-[48px] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq1050:text-13xl mq1050:leading-[38px]">
        Contactanos
      </h4>
      <Input title="Name" text="Enter your name" type={'text'}/>
      <Input title="Email" text="Enter your email" type={'email'} />
      <Input title="Mensaje" text="Ingresa tu mensaje" type={'text'} />
      <div className="overflow-hidden flex flex-col items-start justify-start text-base text-white">
        <div className="rounded-lg bg-black flex flex-col items-center justify-center py-3 px-[54.5px]">
          <button className="relative leading-[24px] font-medium inline-block min-w-[51px] cursor-pointer">
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Container1;
