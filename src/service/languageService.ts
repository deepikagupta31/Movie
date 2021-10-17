import { Injectable } from '@angular/core';

@Injectable()
export class MovieDataLiteralService {
	constructor() {}

	public getSearchPageLiterals() {
		let searchPageLiterals = {
            searchPageTitleLabel: 'MoviesDB 2.0',
            goLabel: 'GO'
		}
		return searchPageLiterals
    }

    public getMovieListPageLiterals() {
		let movieListPageLiterals = {
            movieListPageTitleLabel: 'Movies List',
            loadingLabel: 'Loading.....,',
            resultFoundLabel: 'Results found for',
            noResultFoundLabel: 'No movies found with the term'
		}
		return movieListPageLiterals
    }
}