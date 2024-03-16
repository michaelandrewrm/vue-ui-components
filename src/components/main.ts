import type { App } from 'vue';
import { CButton, CCarousel } from '@/components';

export default {
	install: (app: App) => {
		app.component('c-button', CButton);
		app.component('c-carousel', CCarousel);
	},
};

export { CButton, CCarousel };
