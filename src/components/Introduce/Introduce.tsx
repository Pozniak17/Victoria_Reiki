import css from "./Introduce.module.css";

type Props = {
  text: string;
};

export function Introduce({ text }: Props) {
  return (
    <section className={css.introduce_section}>
      <div className={css.photo_wrapper}>
        <img
          className={css.photo}
          src="/images/Home/Viktoria_Avatar-desktop.jpg"
          alt="Victoria Reiki profile"
        />
      </div>

      <div className={css.wrapper}>
        <h2 className={css.title}>{text}</h2>
        <p className={css.text}>
          I help you find balance and inner strength, guiding you on a journey
          of self-discovery through healing and support.
        </p>

        <ul className={css.list}>
          <li className={css.item}>
            <button className={`${css.button} ${css.violet}`}>
              Free consultation
            </button>
          </li>
          <li className={css.item}>
            <button className={`${css.button} ${css.green}`}> Services</button>
          </li>
        </ul>
      </div>
    </section>
  );
}
