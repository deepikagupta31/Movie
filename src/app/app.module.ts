import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MovieListComponent } from '../pages/List/movieList'
import { MovieDataService } from '../service/movieDataService';
import { MovieDataLiteralService } from '../service/languageService';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MovieListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MovieDataService,
    MovieDataLiteralService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
