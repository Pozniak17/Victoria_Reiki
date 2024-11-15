import { Picture } from '../../../shared/components/Picture/Picture';
import css from './Slide.module.css';

export default function Slide({ url, alt, width, height }) {
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
			</div>
		</div>
	);
}
