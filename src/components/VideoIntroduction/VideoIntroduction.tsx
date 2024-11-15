import ReactPlayer from "react-player";
import css from "./VideoIntroduction.module.css";

type Props = {
  videoUrl: string;
};

export function VideoIntroduction({ videoUrl }: Props) {
  return (
    <section className={`${css.video_introduction} ${css.container}`}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Video Introduction</h1>
        <div className={css.video_player}>
          <ReactPlayer
            style={{ borderRadius: "16px" }}
            width="100%"
            height="100%"
            url={videoUrl}
          />
        </div>
      </div>
    </section>
  );
}
