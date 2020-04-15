const quaranscene = {};

//name space variables
quaranscene.apiKey = 'ffb95a5b116cb8ae246c7c6f51c94ed6'; //the apiKey

quaranscene.baseURL = `https://api.themoviedb.org/3/discover/movie`;

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
  quaranscene.movieTitle = (movieList.results[0].title);
  const htmlToAppend = `<li class="movieResult"> ${quaranscene.movieTitle}</li>`;
  $(".resultUl").append(htmlToAppend);
}


// Start app
quaranscene.init = function() {
    // quaranscene.movieRequest();
    quaranscene.movieRequest(9648);
    quaranscene.displayMovieResult(quaranscene.movieList);
};

$(function() {
    quaranscene.init();
});


