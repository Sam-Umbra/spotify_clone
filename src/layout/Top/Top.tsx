import {
  faCaretDown,
  faChevronLeft,
  faChevronRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Top.module.css";

export default function Top() {
  return (
    <div className={style.top}>
      <div className={style.arrows}>
        <FontAwesomeIcon icon={faChevronLeft} className={style.arrow} />
        <FontAwesomeIcon icon={faChevronRight} className={style.arrow} />
      </div>
      <div className={style.user}>
        <FontAwesomeIcon icon={faUser} className={style.user_photo} />
        <span>Sam-Umbra</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
    </div>
  );
}
