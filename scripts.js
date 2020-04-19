const quaranscene = {};

//name space variables
quaranscene.apiKey = 'ffb95a5b116cb8ae246c7c6f51c94ed6'; //the apiKey

quaranscene.baseURL = `https://api.themoviedb.org/3/discover/movie/`;

quaranscene.baseImageURL = `https://image.tmdb.org/t/p/w500`;

quaranscene.userSelection = "mystery";

//deafult genre on load
quaranscene.genre = 9648;

//genre object with required genre_id param for the API
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

//food array
quaranscene.cuisinePairing = [
  {genre: "action",
  food: "Pizza",
  foodImage: "assets/pizza.jpg",
  foodAlt: "A photo of pepperoni pizza.",
  foodCredit: "Alan Hardman on Unsplash."},
  {genre: "adventure",
  food: "Escargot",
  foodImage: "assets/escargot.jpg",
  foodAlt: "A photo of six escargot presented in a cast iron pan on a plate.",
  foodCredit: "Ali Robins on Unsplash."},
  {genre: "animation",
  food:  "Lucky Charms Cereal",
  foodImage: "assets/luckyCharms.jpg",
  foodAlt: "A photo of a box of Lucky Charms cereal.",
  foodCredit: ""},
  {genre: "comedy",
  food:  "Caramel Popcorn",
  foodImage: "assets/caramelPopcorn.jpg",
  foodAlt: "A photo of caramel popcorn in a bowl on a pink and white checkered table.",
  foodCredit: "John Tecuceanu on Unsplash."},
  {genre: "crime",
  food:  "Doughnuts and Coffee",
  foodImage: "assets/doughnuts.jpg",
  foodAlt: "A cardboard box containing 6 varieties of doughnuts sits open on a wooden table beside a cup of coffee.", 
  foodCredit: "Zach Miles on Unsplash."},
  { genre: "documentary",
  food:  "Soft Pretzels",
  foodImage: "assets/pretzel.jpg",
  foodAlt: "A person holds up a large soft pretzel.", 
  foodCredit: "Pierre Gui on Unsplash."},
  {genre: "drama",
  food:  "Wine and Cheese Platter",
  foodImage: "assets/wineCheese.jpg",
  foodAlt: "A picnic of white wine and cheese with bread is laid out on a blanket in the grass.",
  foodCredit: "Alexandra K on Unsplash."},
  {genre: "family",
  food:  "Fast Food",
  foodImage: "assets/fastFood.jpg",
  foodAlt: "A table containing McDonald's fries, ketchup, burgers, and pop waits to be eaten.",
  foodCredit: "Sepet on Unsplash."},
  {genre: "fantasy",
  food:  "Dragonfruit",
  foodImage: "assets/dragon.jpg",
  foodAlt: "A dragon fruit sits on a white plate with a spoon. Half of the dragon fruit has been cut into four slices.", 
  foodCredit: "OhTilly on Unsplash."},
  {genre: "history",
  food:  "Rotisserie Chicken",
  foodImage: "assets/chicken.jpg",
  foodAlt: "A roasted chicken sits in a glass pan.",
  foodCredit: "Jennifer Burk on Unsplash."},
  {genre: "horror",
  food:  "Tomato Soup",
  foodImage: "assets/soup.jpg",
  foodAlt: "A glass bowl containing tomato soup sits on a black table surrounded by spices and two whole tomatoes.",
  foodCredit: "Dennis Klein on Unsplash."},
  {genre: "music",
  food:  "Birthday Cake",
  foodImage: "assets/cake.jpg",
  foodAlt: "A slice of cake made up of layers that match the colours of the rainbow is displayed on a wooden block.",
  foodCredit: "Heino Elnionis on Unsplash."},
  {genre: "mystery",
  food: "Spam",
  foodImage: "assets/spam.jpg",
  foodAlt: "Multiple cases of spam are stacked on top of each other.",
  foodCredit: "Hannes Johnson on Unsplash."},
  {genre: "romance",
  food:  "Spaghetti",
  foodImage: "assets/spaghetti.jpg",
  foodAlt: "A fork wrapped in spaghetti is held above a shallow bowl of spaghetti with a slice of bread.",
  foodCredit: "Keri Iiwi on Unsplash."},
  {genre: "scienceFiction",
  food:  "Freeze-dried Foods",
  foodImage: "assets/astro.jpg",
  foodAlt: "Five packages of freeze-dried foods from the Astronaut brand containing different fruits. A pile of freeze-dried strawberries, bananas, and peaches sits beside the packages.",
  foodCredit: ""},
  {genre: "tvMovie",
  food: "Microwave Dinner",
  foodImage: "assets/microwave.jpg",
  foodAlt: "Nine different microwave dinners are stacked on top of each other on a marble countertop.",
  foodCredit: ""},
  {genre: "thriller",
  food:  "Popcorn",
  foodImage:"assets/popcorn.jpg",
  foodAlt: "A glass bowl filled to the brim with white popcorn.",
  foodCredit: "Alex Munsell on Unsplash."},
  {genre: "war",
  food:  "Canned Food",
  foodImage: "assets/canned.jpg",
  foodAlt: "Three cans of Organic Chili laid on a black and white plaid cloth. From left to right the labels on the cans read: Medium, Spicy and Black Bean.",
  foodCredit: "Andrea Davis on Unsplash."},
  {genre: "western",
  food:  "Steak and Potatoes",
  foodImage: "assets/steak.jpg",
  foodAlt: "A medium rare steak is cut into slices and covered in gravy on a plate beside roasted potatoes, carrots, and broccoli.",
  foodCredit: "Amirali Mirhashemian on Unsplash."}
]

//ajax call to the API
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
    console.log(id);
    quaranscene.movieList = result;
    //when a result comes back, update the screen
    quaranscene.displayMovieResult(quaranscene.movieList);
    console.log(result);
  });
}

//event listener for user selection 
$('select').on('change', function () {
 quaranscene.userSelection = $(this).val();
quaranscene.genre = quaranscene.genreOptions[quaranscene.userSelection];
console.log(
  "changed! userSelection: " + quaranscene.userSelection  + " q.genre: " + quaranscene.genre
);
})

//event listener for user ssubmit
$('.bell').on('click', function () {
  //open the covers to reveal suggestions, if its already open then close to show new suggestions
  // if($('.moviePlateCover').hasClass('movieOpenState')) {
  //   console.log("closing")
  //   $('.moviePlateCover').removeClass('movieOpenState');
  //   $('.moviePlateCover').removeClass('movieCoverOpen');
  //   $('.moviePlateCover').addClass('movieCoverClose');
  //   setTimeout(function () {
  //     $(".moviePlateCover").addClass("movieClosedState");
  //   }, 2000);
  // }
  //   //else we are alwas opening since the plate starts off as closed
  //         console.log("opening");
  //         $(".moviePlateCover").removeClass("movieClosedState");
  //         $(".moviePlateCover").removeClass("movieCoverClose");
  //         $(".moviePlateCover").addClass("movieCoverOpen");
  //         setTimeout(function() {
  //           $(".moviePlateCover").addClass("movieOpenState")
  //         }, 2000);

  // second attempt
  if($('.movieResult .fakeCover').hasClass('movieOpenState')) {
    $(".movieResult .fakeCover").removeClass("movieOpenState");
    $(".movieResult .fakeCover").addClass("movieClosedState");
  }
    $(".movieResult .fakeCover").removeClass("movieClosedState");
    $(".movieResult .fakeCover").addClass("movieOpenState");
  
  // $(".moviePlateCover").removeClass("movieClosedState");
  // $(".moviePlateCover").addClass("movieCoverOpen");
  // setTimeout(function() {
  //           $(".moviePlateCover").addClass("movieOpenState")
  //         }, 2000);


  //make api call on click




    quaranscene.movieRequest(quaranscene.genre);
})

//select movie title and poster from api array using random index
quaranscene.displayMovieResult = (movieList) => {
  console.log(movieList);
  const movieRNG = quaranscene.rng(0, movieList["results"].length - 1 );
  console.log("this is random " + movieRNG);
  quaranscene.movieTitle = movieList.results[movieRNG].title;
  quaranscene.moviePoster = movieList.results[movieRNG].poster_path;
  //Retrieve genre matching food pairing
  quaranscene.filteredFood = quaranscene.cuisinePairing.filter((data) => {
    return data.genre === quaranscene.userSelection;
  });
  console.log(quaranscene.filteredFood[0].food);
  //Add content to the DOM

  //append the movie results
  let htmlToAppend = 
  `<h2>${quaranscene.movieTitle}</h2>
  <img src="${quaranscene.baseImageURL}${quaranscene.moviePoster}" alt="">`;
  $(".movieResult").empty();
  $(".movieResult").append(htmlToAppend);

//append the dinner results
  htmlToAppend = 
  `<h2>${quaranscene.filteredFood[0].food}</h2>
  <img src="${quaranscene.filteredFood[0].foodImage}" alt="${quaranscene.filteredFood[0].foodAlt}">`;
  
  $(".dinnerResult").empty();
  $(".dinnerResult").append(htmlToAppend);
  //append the credits
  htmlToAppend = `<p>Photo credits: Waiter hand with plate designed by <a href="www.freepik.com">Freepik</a>. Plate cover. Food picture ${quaranscene.filteredFood[0].foodCredit}`
  $(".photoCredit").empty();
  $(".photoCredit").append(htmlToAppend);
};

//random number for index
quaranscene.rng = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

// Start app
quaranscene.init = function() {
    // quaranscene.movieRequest();
    quaranscene.movieRequest(quaranscene.genre);
    // quaranscene.displayMovieResult(quaranscene.movieList);
};

//document ready
$(function() {
    quaranscene.init();
});


