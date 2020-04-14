const quaranscene = {};

//name space variables
quaranscene.apiKey = 'ffb95a5b116cb8ae246c7c6f51c94ed6'; //the apiKey

quaranscene.baseURL = `https://api.themoviedb.org/3/discover/movie`;

quaranscene.genre =27;

quaranscene.movieRequest = () => {

    $.ajax({
      url: quaranscene.baseURL,
      method: "GET",
      dataType: "json",
      data: {
        api_key: quaranscene.apiKey,
        language: "en-US",
        include_adult: false,
        with_genres: `${quaranscene.genre}`,
      },
    }).then(function (result) {
      console.log(result);
    });

}




// Start app
quaranscene.init = function() {
    quaranscene.movieRequest();
};

$(function() {
    quaranscene.init();
});


