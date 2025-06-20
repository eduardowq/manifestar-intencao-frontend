import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { config } from './app/app.config.server';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';

const bootstrap = () => 
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(appRoutes),
      provideHttpClient(),
      ...config.providers  // se houver providers no config
    ]
  });

export default bootstrap;
