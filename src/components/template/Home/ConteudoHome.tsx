interface ConteudoItemProps{
    Titulo:string;
    Descricao:string;
    className?: string;

}
const ConteudoHome = (props) => {
  return (
    <div className={`col-span-6 row-span-1 w-full  ${props.className}`}>
      <div className="w-full mb-5">
        <h1 className={`text-[20px] w-full h-1/4 font-bold ml-2`}>
          {props.titulo}
        </h1>
      </div>
    </div>
  );
};

export default ConteudoHome;