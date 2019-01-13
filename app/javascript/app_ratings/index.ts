import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RatingsModule } from './ratings.module';

document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic().bootstrapModule(RatingsModule);
});
