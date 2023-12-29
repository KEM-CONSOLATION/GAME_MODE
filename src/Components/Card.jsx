const Card = ({ imageUrl, text }) => {
  return (
    <div className=" bg-secondary border-2 border-border p-2 rounded-lg ">
      <div className=" flex items-center gap-5">
        <img src={imageUrl} alt="" className=" w-10 md:w-[100px]" />
        <div className="">
          <p className=" font-[400] text-[12px] md:text-[14px] text-TextPrimary">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
