package com.allstate.compozed.movies.model;

import lombok.Builder;
import lombok.Data;

import java.util.List;


@Data
@Builder
public class SearchResponse {
    private List<Movie> movies;
}
