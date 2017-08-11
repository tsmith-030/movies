package com.allstate.compozed.movies.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup;

@RunWith(MockitoJUnitRunner.class)
public class SearchControllerTest {

    @Mock
    SearchMovieService searchMovieService;

    @InjectMocks
    private SearchController searchController;

    private MockMvc mockMvc;

    @Before
    public void setUp() throws Exception {
        mockMvc = standaloneSetup(searchController).build();
    }

    @Test
    public void getMovieStringQueryAndReturnAMovieList() throws Exception {
        SearchResponse searchResponse = SearchResponse.build().build();

        when(searchMovieService.getMovieList(any(String.class))).thenReturn(searchResponse);

        mockMvc.perform(get("/api/v1/movies/X")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is2xxSuccessful());

        verify(searchMovieService).getMovieList("X");
    }
}