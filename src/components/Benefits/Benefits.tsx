import css from "./Benefits.module.css";

export function Benefits() {
  return (
    <section className={css.benefits}>
      <div className={css.benefits_wrapper}>
        <ul className={css.image_wrapper}>
          <li className={css.image_item}>
            <img
              className={css.image}
              src="/images/Home/yog.png"
              alt="yog in meditation"
            />
          </li>
          <li className={css.image_item}>
            <img
              className={css.image}
              src="/images/Home/lavanda-benefits.jpg"
              alt="lavanda"
            />
          </li>
        </ul>

        <div>
          <h2 className={css.benefits_title}>Key Benefits</h2>
          <ul className={css.text_wrapper}>
            <li className={css.benefits_item}>
              <p className={css.text}>
                <span className={css.accent_text}>
                  Reduces Stress and Anxiety
                </span>
                – Reiki calms the nervous system, promoting relaxation and
                relieving anxiety.
              </p>
            </li>
            <li className={css.benefits_item}>
              <p className={css.text}>
                <span className={css.accent_text}>
                  Enhances Emotional Health
                </span>{" "}
                – Helps release emotional blockages, promoting peace and inner
                harmony.
              </p>
            </li>
            <li className={css.benefits_item}>
              <p className={css.text}>
                <span className={css.accent_text}>
                  Supports Physical Healing
                </span>{" "}
                – Assists the body’s natural healing processes, easing physical
                pain and discomfort.
              </p>
            </li>
            <li className={css.benefits_item}>
              <p className={css.text}>
                <span className={css.accent_text}>Boosts Energy Levels</span> –
                Balances and restores energy flow, helping clients feel more
                vibrant and revitalized.
              </p>
            </li>
            <li className={css.benefits_item}>
              <p className={css.text}>
                <span className={css.accent_text}>
                  Strengthens Immune System
                </span>{" "}
                – Helps balance the body’s energy field, supporting a healthier
                immune response.
              </p>
            </li>
            <li className={css.benefits_item}>
              <p className={css.text}>
                <span className={css.accent_text}>Enhances Mental Clarity</span>{" "}
                – Clears the mind, reducing mental fog and increasing focus and
                clarity.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
