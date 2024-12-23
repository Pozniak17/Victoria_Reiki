import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import css from './Slider.module.css';
import Icon from '../Icon/Icon';

export default function Slider({ data, component: Component }) {
	const [swiperInstance, setSwiperInstance] = useState(null);
	const [isPrevDisabled, setIsPrevDisabled] = useState(true);
	const [isNextDisabled, setIsNextDisabled] = useState(false);

	useEffect(() => {
		if (swiperInstance) {
			const handleSlideChange = () => {
				if (!swiperInstance) return;

				setIsPrevDisabled(swiperInstance.isBeginning);
				setIsNextDisabled(swiperInstance.isEnd);
			};

			swiperInstance.on('slideChange', handleSlideChange);
			handleSlideChange();

			return () => {
				swiperInstance.off('slideChange', handleSlideChange);
			};
		}
	}, [swiperInstance]);

	return (
		<div className={css.swiper_container}>
			<Swiper
				grabCursor={true}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 16,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 24,
					},
					1440: {
						slidesPerView: 3,
						spaceBetween: 24,
					},
				}}
				modules={[Navigation]}
				navigation={{
					nextEl: `.${css.swiper_button_next}`,
					prevEl: `.${css.swiper_button_prev}`,
				}}
				onSwiper={setSwiperInstance}
			>
				{data.map((item) => (
					<SwiperSlide key={item.id} className={css.wrapper}>
						<Component {...item} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className={css.swiper_buttons_container}>
				<div
					className={`${css.swiper_button_prev} swiper-button-prev ${
						isPrevDisabled ? css.disabled : ''
					}`}
				>
					<Icon className={css.icon} id="i-arrow-left" width="24" height="24" />
				</div>
				<div
					className={`${css.swiper_button_next} swiper-button-next ${
						isNextDisabled ? css.disabled : ''
					}`}
				>
					<Icon
						className={css.icon}
						id="i-arrow-right"
						width="24"
						height="24"
					/>
				</div>
			</div>
		</div>
	);
}
