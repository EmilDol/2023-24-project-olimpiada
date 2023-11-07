import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RegisterComponent } from './app/register/register.component';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
