import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { ApplicationInsights } from '@microsoft/applicationinsights-web'

// const appInsights = new ApplicationInsights({ config: {
//   instrumentationKey: '06cb6361-b98d-4003-bf0c-8e5b7f80c74b',
//   distributedTracingMode: 2
//   /* ...Other Configuration Options... */
// } });
const appInsights = new ApplicationInsights({ config: {
  instrumentationKey: '06cb6361-b98d-4003-bf0c-8e5b7f80c74b'
    /* ...Other Configuration Options... */
} });
appInsights.loadAppInsights();
appInsights.trackPageView(); // Manually call trackPageView to establish the current user/session/pageview


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
