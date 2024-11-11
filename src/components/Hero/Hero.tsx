import css from "./Hero.module.css";

type Props = {
  heading: string;
};

export function Hero({ heading }: Props) {
  return (
    <section className={css.hero}>
      <div className={css.hero_wrapper}>
        <h1 className={css.hero_title}>{heading}</h1>
        <ul className={css.hero_list}>
          <li className={css.hero_item}>
            <p className={css.hero_text}>Energy Healing</p>
          </li>
          <li className={css.hero_item}>
            <p className={css.hero_text}>Balance</p>
          </li>
          <li className={css.hero_item}>
            <p className={css.hero_text}>Relaxation</p>
          </li>
          <li className={css.hero_item}>
            <p className={css.hero_text}>Support for Healing</p>
          </li>
          <li className={css.hero_item}>
            <p className={css.hero_text}>Self-Discovery</p>
          </li>
        </ul>
        <button className={css.hero_button}>Reserve Your Spot</button>
      </div>
    </section>
  );
}
