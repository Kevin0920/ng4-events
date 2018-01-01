import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { MainService } from './main.service';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { EditEventComponent } from './edit-event/edit-event.component';


// import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
// import { FacebookLoginProvider } from "angular4-social-login";


// let config = new AuthServiceConfig([
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("479236462477287")
//   }
// ]);

// export function provideConfig() {
//   return config;
// }

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    LoginComponent,
    EditComponent,
    ShowComponent,
    EditEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    // SocialLoginModule
  ],
  providers: [ MainService
      // provide: AuthServiceConfig,
      // useFactory: provideConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
