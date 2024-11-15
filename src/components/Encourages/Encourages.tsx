import css from "./Encourages.module.css";

export function Encourages() {
  return (
    <section className={`${css.encourages} ${css.container}`}>
      <h2 className={css.title}>
        “Reiki is the gentle, powerful energy of love that heals and
        transforms.”
      </h2>
      <div className={css.wrapper}>
        <img
          className={css.image}
          src="/images/Home/encourages.jpg"
          alt="group meditation"
        />

        <div className={css.second_wrapper}>
          <h3 className={css.second_title}>Reiki Encourages</h3>
          <img
            className={css.second_image}
            src="/images/Home/encourages1.jpg"
            alt=""
          />
        </div>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.text}>
            <span className={css.accent_title}>Self-Awareness:</span> By
            connecting with your energy, you become more aware of your thoughts
            and feelings, leading to greater emotional clarity.
          </p>
        </li>

        <li className={css.item}>
          <p className={css.text}>
            <span className={css.accent_title}>Holistic Healing:</span> Reiki
            supports not just physical health but also emotional and spiritual
            well-being, creating a comprehensive approach to healing.
          </p>
        </li>

        <li className={css.item}>
          <p className={css.text}>
            <span className={css.accent_title}>Connection:</span> This practice
            emphasizes the interconnectedness of all beings, fostering
            compassion and empathy towards oneself and others.
          </p>
        </li>
      </ul>
    </section>
  );
}
