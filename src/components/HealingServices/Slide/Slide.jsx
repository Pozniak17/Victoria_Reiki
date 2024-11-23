import { Picture } from '../../../shared/components/Picture/Picture';
import css from './Slide.module.css';

export default function Slide({ url, alt, width, height, title, descript }) {
	return (
		<div>
			<div className={css.slide__container}>
				<Picture
					defaultImage={url}
					alt={alt}
					width={width}
					height={height}
					pictureClassName={css.pictureWrapper}
				/>
				<h3 className={css.title}>{title}</h3>
				<p className={css.descript}>{descript}</p>
				<button className={css.btn}>Book now</button>
			</div>
		</div>
	);
}
