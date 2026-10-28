import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), 
    provideClientHydration(),

    provideAnimationsAsync(),

    providePrimeNG({
      theme: {
        preset: Aura
      },
      license: 'eyJpZCI6IjgxOGRlZjYzLTFjMWEtNGVlOC1iMjQ0LWI0NTE4OWI0MzE2NCIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODgwNDUyNzQsImV4cCI6MTgxOTU4MTI3NH0._joLa6y-RGBZdzgft5RlZ4ZcoiWh1Gvo5Vz4Gg-VNpldNmqOo0XtFqpUlKvPdvqIJpKhOg-aBfpe1-9O6LteCg'
    })
  ]
};
