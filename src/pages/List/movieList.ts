import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { MovieDataService } from './../../service/movieDataService';
import { MovieDataLiteralService } from './../../service/languageService';

@Component({
    selector: 'page-movieList',
    templateUrl: 'movieList.html',
})

export class MovieListComponent {

  val: string = "";
  loadingIndicator: boolean;
  items: any;
  movieListLiterals: any;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public movieDataService: MovieDataService,
              public movieDataLiteralService: MovieDataLiteralService) {

    this.val = navParams.data.query;
    this.loadingIndicator = navParams.data.loadingIndicator;
    this.movieListLiterals = this.movieDataLiteralService.getMovieListPageLiterals();
  }

  ionViewWillLoad(){
    this.movieDataService.getMovieData(this.val)
    .subscribe((data : any) => {
      this.items = data.results;
      this.loadingIndicator = false;
    },
      (err: any) => { //Error handling
       console.log(err);
    });
  }

  dismiss() {
    //closes the search modal and returns to the homepage
    this.viewCtrl.dismiss();
  }

}

