function CatVideo() {
  return (
    <div className="relative">
      <span className="absolute top-1/4 left-1/4 text-slate-700 font-bold text-5xl">
        Love Cats
      </span>
      <video
        src="/src/assets/cat.mp4"
        autoPlay
        preload="auto"
        loop
        className="mx-auto my-0 md:w-[70%] w-fit"
      >
        Sorry, your browser doesn't support videos.
      </video>
    </div>
  );
}

export default CatVideo;
