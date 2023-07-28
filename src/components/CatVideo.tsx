function CatVideo() {
  return (
    <div className="relative">
      <span className="absolute top-20 left-14 text-slate-700 font-bold text-5xl love-cat">
        Love Cats
      </span>
      <video
        autoPlay
        loop
        src="./src/assets/cat.mp4"
        className="mx-auto my-0 max-w-2xl"
      >
        Sorry, your browser doesn't support videos.
      </video>
    </div>
  );
}

export default CatVideo;
