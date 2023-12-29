const Card = ({ imageUrl, text }) => {
  return (
    <div className=" bg-secondary border-2 border-border p-2 rounded-lg">
      <div className=" flex items-center gap-5">
        <img src={imageUrl} alt="" />
        <div className="">
          <p className=" font-[400] text-[14px] text-TextPrimary">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
