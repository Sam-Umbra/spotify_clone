import style from "./MixRetangle.module.css";

export default function MixRetangle() {
  return (
    <div className={style.mix_retangle}>
      <figure className={style.album_container}>
        <img src="https://i.scdn.co/image/ab67616d0000b273c9bc256b5cdd5c1d333115f0" alt="" className={style.album_cover} />
        <figcaption className={style.album_caption}>Chill Mix</figcaption>
      </figure>
      <p className={style.album_name}>Chill Mix</p>
    </div>
  );
}
