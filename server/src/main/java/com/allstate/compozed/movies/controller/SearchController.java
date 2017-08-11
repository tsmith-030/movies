package com.allstate.compozed.movies.controller;

import com.allstate.compozed.movies.model.SearchResponse;
import com.allstate.compozed.movies.service.SearchMovieService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/api/v1/movies")
public class SearchController {

    private SearchMovieService searchMovieService;

    public SearchController(SearchMovieService service) { this.searchMovieService = service; }

    @RequestMapping(value = "/{movieStr}")
    public SearchResponse getMoveListBasedOnSearch(@PathVariable("movieStr") String movieStr) throws Exception {
        return searchMovieService.getMovieList(movieStr);
    }
}
