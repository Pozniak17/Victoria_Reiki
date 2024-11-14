import { Benefits } from '../../components/Benefits';
import { HealingServices } from '../../components/HealingServices/HealingServices';
import { Hero } from '../../components/Hero';
import { Introduce } from '../../components/Introduce';
import { VideoIntroduction } from '../../components/VideoIntroduction';

export function Home() {
	return (
		<div>
			<Hero heading="Viсtoria’s Healing Flow" />
			<Introduce text="Viktoria, Reiki Master" />
			<HealingServices />
			<Benefits />
			<VideoIntroduction />
		</div>
	);
}
