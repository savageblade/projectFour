const quaranscene = {};

//name space variables
quaranscene.apiKey = 'ffb95a5b116cb8ae246c7c6f51c94ed6'; //the apiKey

quaranscene.baseURL = `https://api.themoviedb.org/3/discover/movie/`;

quaranscene.baseImageURL = `https://image.tmdb.org/t/p/w500`;

quaranscene.userSelection = "mystery";

quaranscene.genreOptions = {
  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
  documentary: 99,
  drama: 18,
  family: 10751,
  fantasy: 14,
  history: 36,
  horror: 27,
  music: 10402,
  mystery: 9648,
  romance: 10749,
  scienceFiction: 878,
  tvMovie: 10770,
  thriller: 53,
  war: 10752,
  western: 37
}

quaranscene.movieRequest = (id) => {

    $.ajax({
      url: quaranscene.baseURL,
      method: "GET",
      dataType: "json",
      data: {
        api_key: quaranscene.apiKey,
        language: "en-US",
        include_adult: false,
        with_genres: `${id}`,
      },
    }).then(function (result) {
      quaranscene.movieList = result;
    });

}

//event listener for user selection 
$('select').on('change', function () {
 quaranscene.userSelection = $(this).val();
quaranscene.genre = quaranscene.genreOptions[quaranscene.userSelection];
})

//event listener for user ssubmit
$('.bell').on('click', function () {
 //make api
 quaranscene.movieRequest(quaranscene.genre);
 quaranscene.displayMovieResult(quaranscene.movieList);
})

quaranscene.displayMovieResult = (movieList) => {
  console.log(movieList);
  const movieRNG = quaranscene.rng(0, movieList["results"].length);
  console.log("this is random " + movieRNG);
  quaranscene.movieTitle = movieList.results[movieRNG].title;
  quaranscene.moviePoster = movieList.results[movieRNG].poster_path;
  const htmlToAppend = `<li class="movieResult"> <h2>${quaranscene.movieTitle}</h2> <img src="${quaranscene.baseImageURL}${quaranscene.moviePoster}" alt=""> </li>`;
  $('.resultUl').empty();
  $(".resultUl").append(htmlToAppend);
}


quaranscene.rng = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

// Start app
quaranscene.init = function() {
    // quaranscene.movieRequest();
    quaranscene.movieRequest(9648);
    quaranscene.displayMovieResult(quaranscene.movieList);
};

$(function() {
    quaranscene.init();
});


