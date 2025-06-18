import style from "./MixBlock.module.css";

export default function MixBlock() {
  return (
    <div className={style.mix_block}>
      <figure className={style.album_container}>
        <img
          src="https://i.scdn.co/image/ab67616d0000b273c9bc256b5cdd5c1d333115f0"
          alt=""
          className={style.album_cover}
        />
        <figcaption className={style.album_caption}>Chill Mix</figcaption>
      </figure>
      <p className={style.album_name}>Chill Mix</p>
      <p className={style.album_singers}>Julia Wolf, Khalid, ayokay and more</p>
    </div>
  );
}
