import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { InMemoryScrollingFeature, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

interface InMemoryScrollingOptions {
  anchorScrolling?: "disabled" | "enabled";
  scrollPositionRestoration?: "disabled" | "enabled" | "top";
}

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, inMemoryScrollingFeature)]
};
