import LeftAside from "../../layout/leftAside/LeftAside";
import style from "./Home.module.css";
import PlayingSong from "../../layout/playingSong/PlayingSong";
import { useEffect, useState } from "react";
import Top from "../../layout/Top/Top";
import MixRetangle from "../../components/MixRetangle/MixRetangle";
import MixBlock from "../../components/MixBlock/MixBlock";

export default function Home() {
  const [timeText, setTimeText] = useState<string>("");
  function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon";
    } else {
      return "Good night";
    }
  }
  useEffect(() => {
    setTimeText(getGreeting());
  }, []);

  return (
    <div className={style.home}>
      <LeftAside />
      <main className={style.main}>
        <Top />
        <div className={style.mixes}>
          <span className={style.time_text}>{timeText}</span>
          <div className={style.mixes_container}>
            <MixRetangle />
            <MixRetangle />
            <MixRetangle />
            <MixRetangle />
            <MixRetangle />
            <MixRetangle />
          </div>
        </div>
        <div className={style.mixesCategory}>
          <div className={style.category}>
            <div className={style.top}>
              <span className={style.category_name}>Your top mixes</span>
              <button className={style.category_btn}>SEE ALL</button>
            </div>
            <div className={style.category_container}>
              <MixBlock />
              <MixBlock />
              <MixBlock />
              <MixBlock />
            </div>
          </div>
          <div className={style.category}>
            <div className={style.top}>
              <span className={style.category_name}>Recently played</span>
              <button className={style.category_btn}>SEE ALL</button>
            </div>
            <div className={style.category_container}>
              <MixBlock />
              <MixBlock />
              <MixBlock />
              <MixBlock />
            </div>
          </div>
        </div>
      </main>
      <PlayingSong />
    </div>
  );
}
