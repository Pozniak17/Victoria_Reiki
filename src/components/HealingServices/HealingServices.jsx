import Slider from '../../shared/components/Slider/Slider';
import css from './HealingServices.module.css';
import Slide from './Slide/Slide';
import * as images from './data/img/index.js';
import picData from './data/pic.json';

export default function HealingServices() {
	const data = picData.map((item) => {
		return {
			...item,
			url: images[item.url],
			width: item.width,
			height: item.height,
		};
	});

	return (
		<section className={css.container}>
			<h2 className={css.title}>Healing Services Offered</h2>
			<p className={css.description}>
				These are the different ways I can support your wellness journey.
			</p>
			<Slider data={data} component={Slide} />
		</section>
	);
}
