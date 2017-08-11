package com.allstate.compozed.movies.model;

import javax.annotation.sql.DataSourceDefinition;

@Data
@Builder
public class SearchResponse {
    private List<Movies> movies;
}
