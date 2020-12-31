const API = "<API_KEY>";

export default {
    TrendingWeek:`/trending/all/week?api_key=${API}&language=en-US`,
    TrendingDay:`/trending/all/day?api_key=${API}&language=en-US`,
    Comedy:`/movie/top_rated?api_key=${API}&with_genres=35`,
    TopRated:`/movie/top_rated?api_key=${API}&language=en-US`,
    Action:`/movie/top_rated?api_key=${API}&with_genres=28`,
    Horror:`/movie/top_rated?api_key=${API}&with_genres=27`,
    Scifi:`/movie/top_rated?api_key=${API}&with_genres=878`,
    Western:`/movie/top_rated?api_key=${API}&with_genres=37`,
    Animation:`/movie/top_rated?api_key=${API}&with_genres=16`,
    Mystery:`/movie/top_rated?api_key=${API}&with_genres=9648`,
    fetchTV:`/movie/top_rated?api_key=${API}&with_genres=10770`,
}

