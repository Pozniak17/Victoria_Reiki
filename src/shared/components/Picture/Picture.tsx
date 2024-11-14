export const Picture = ({
	defaultImage,
	alt = '',
	width = '',
	height = '',
	pictureClassName,
	...props
}) => (
	<img
		src={defaultImage}
		alt={alt}
		width={width}
		height={height}
		className={pictureClassName}
		loading="lazy"
		{...props}
	/>
);
