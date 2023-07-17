const Emoticon = () => {
  return (
    <div className="flex flex-col lg:flex-col gap-3 mt-[1rem] md:mt-10 md:w-fit max-w-[80%] ">
      <div className="flex gap-5 items-center font-semibold ">
        <div className="text-5xl">😴</div>
        <span className="text-xl ">
          Diminta membuat team building yang {`"beda"`}
        </span>
      </div>
      <div className="flex gap-5 font-semibold items-center">
        <div className="text-5xl">😵</div>
        <span className="text-xl ">
          Bosan dengan agenda training di kelas aja
        </span>
      </div>
      <div className="flex gap-5 font-semibold items-center">
        <div className="text-5xl">🤔</div>
        <span className="text-xl ">
          Bingung menjelaskan hasil dari trainingnya
        </span>
      </div>
    </div>
  );
};

export default Emoticon;
