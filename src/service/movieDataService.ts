import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()

export class MovieDataService{

    movieUrl: string = "https://api.themoviedb.org/3/search/movie?api_key=";
    movieApiKey: string = ""; //Enter API KEY HERE
    paramData: string = "";
    constructor( public http: Http){

    }

    public getMovieData(query : String){
       let params: string = `&query=${query}` ;
       this.paramData = `${params}&language=en-US&include_adult=false&include_video=false&page=1`;
       return this.http.get(this.movieUrl + this.movieApiKey + this.paramData).map(res => res.json());
    }
}