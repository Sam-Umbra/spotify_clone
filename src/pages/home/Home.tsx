import LeftAside from "../../layout/leftAside/LeftAside";
import style from "./Home.module.css";
import PlayingSong from "../../layout/playingSong/PlayingSong";
import { useEffect, useState } from "react";
import Top from "../../layout/Top/Top";
import MixRetangle from "../../components/MixRetangle/MixRetangle";

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
          <span>{timeText}</span>
          <div className={style.mixes_container}>
            <MixRetangle />
            <MixRetangle />
            <MixRetangle />
            <MixRetangle />
            <MixRetangle />
            <MixRetangle />
          </div>
        </div>
        <div className={style.mixesCategory}></div>
      </main>
      <PlayingSong />
    </div>
  );
}
