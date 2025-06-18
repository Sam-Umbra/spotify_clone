import { Link } from "react-router-dom";
import style from "./MixRetangle.module.css";

export default function MixRetangle() {
  return (
    <Link to={"/mix"} className={style.link}>
      <div className={style.mix_retangle}>
        <figure className={style.album_container}>
          <img src="https://www.teachhub.com/wp-content/uploads/2019/10/Our-Top-10-Songs-About-School.png" alt="" className={style.album_cover} />
          <figcaption className={style.album_caption}>Chill Mix</figcaption>
        </figure>
        <p className={style.album_name}>Chill Mix</p>
      </div>
    </Link>
  );
}
