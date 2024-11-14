import css from './HealingServices.module.css';

export function HealingServices() {
	return (
		<section className={`${css.blog} ${css.container}`}>
			<h2 className={css.title}>Healing Services Offered</h2>
			<p className={css.text}>
				These are the different ways I can support your wellness journey.
			</p>

			<div className={css.wrapper}>
				<div>
					<img src="" alt="" />
					<img
						className={css.image}
						src="/images/Home/blog-photo1.jpg"
						alt="blog photo"
					/>
					<h3 className={css.wrapper_title}>Group Sessions</h3>
					<p className={css.wrapper_text}>
						Reiki is a unique method of energy healing rooted in ancient
						Japanese traditions. In group sessions, I, as a Reiki practitioner,
						help clients restore their energy and harmony through touch,
						meditation, and alignment with positive vibrations.
					</p>
				</div>

				<button className={css.button}>Book now</button>
			</div>
		</section>
	);
}
