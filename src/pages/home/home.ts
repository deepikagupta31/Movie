import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieListComponent } from './../List/movieList';
import { MovieDataLiteralService } from './../../service/languageService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading: boolean;
  homeLiterals: any;

  constructor(@Inject(NavController) public navCtrl: NavController,
              @Inject(MovieDataLiteralService) public movieDataLiteralService: MovieDataLiteralService) {
  
      this.homeLiterals = this.movieDataLiteralService.getSearchPageLiterals();
  }

  goButtonClicked(value) {
  this.loading = true;
  //Using NavController to navigate to the next page and pass on the query entered by the user
  this.navCtrl.push(MovieListComponent,{query: value, loadingIndicator: this.loading});
  }
}