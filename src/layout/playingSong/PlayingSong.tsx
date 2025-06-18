import {
  faBackwardStep,
  faBars,
  faForwardStep,
  faHeart,
  faPlay,
  faRepeat,
  faShuffle,
  faUpRightAndDownLeftFromCenter,
  faVolumeLow,
} from "@fortawesome/free-solid-svg-icons";
import style from "./PlayingSong.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PlayingSong() {
  return (
    <footer className={style.footer}>
      <div className={style.left}>
        <p className={style.song_name}>
          Play it Safe <br />
          <span className={style.singer}>Julia Wolf</span>
        </p>
        <FontAwesomeIcon icon={faHeart} className={style.heart} />
      </div>
      <div className={style.center}>
        <div className={style.buttons}>
          <FontAwesomeIcon icon={faShuffle} className={style.btn} />
          <FontAwesomeIcon icon={faBackwardStep} className={style.btn} />
          <FontAwesomeIcon
            icon={faPlay}
            className={`${style.btn} ${style.active}`}
          />
          <FontAwesomeIcon icon={faForwardStep} className={style.btn} />
          <FontAwesomeIcon icon={faRepeat} className={style.btn} />
        </div>
        <div className={style.video_bar}>
          <p className={style.minutes_played}>0:00</p>
          <span className={style.bar}></span>
          <p className={style.total_minutes}>3:59</p>
        </div>
      </div>
      <div className={style.right}>
        <FontAwesomeIcon icon={faBars} className={style.icons} />
        <span className={`material-symbols-outlined ${style.icons}`}>speaker</span>
        <FontAwesomeIcon icon={faVolumeLow} className={style.icons} />
        <span className={style.audio_bar}></span>
        <FontAwesomeIcon
          icon={faUpRightAndDownLeftFromCenter}
          className={style.icons}
        />
      </div>
    </footer>
  );
}
