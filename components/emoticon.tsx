const Emoticon = () => {
  return (
    <div className="flex flex-col lg:flex-col gap-5 md:mt-10">
      <div className="text-white flex gap-5 font-semibold ">
        <div className="text-5xl">😴</div>
        <span className="text-lg">
          Bosan terus-terusan <br /> training di kelas aja?
        </span>
      </div>
      <div className="text-white flex gap-5 font-semibold ">
        <div className="text-5xl">😵</div>
        <span className="text-lg">
          Diminta membuat <br /> training yang {`"beda"`}?
        </span>
      </div>
      <div className="text-white flex gap-5 font-semibold ">
        <div className="text-5xl">🤔</div>
        <span className="text-lg">
          Tidak yakin trainingnya <br /> berdampak ke bisnis?
        </span>
      </div>
    </div>
  );
};

export default Emoticon;
