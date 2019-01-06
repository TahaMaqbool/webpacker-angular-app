import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BooksModule } from './books.module';

document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic().bootstrapModule(BooksModule);
});
