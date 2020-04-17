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

quaranscene.cuisinePairing = [
  {genre: "action",
  food: "Pizza",
  foodImage: `/assets/pizza.jpg`,
  foodAlt: `A photo of pepperoni pizza taken by Alan Hardman on Unsplash.`},
  {genre: "adventure",
  food: "Escargot",
  foodImage: `/assets/escargot.jpg`,
  foodAlt: `A photo of six escargot presented in a cast iron pan on a plate. Photo taken by Ali Robins on Unsplash.`},
  {genre: "animation",
  food:  "Lucky Charms Cereal",
  foodImage: `/assets/luckyCharms.jpg`,
  foodAlt: `A photo of a box of Lucky Charms cereal.`},
  {genre: "comedy",
  food:  "Caramel Popcorn",
  foodImage: `/assets/caramelPopcorn.jpg`,
  foodAlt: `A photo of caramel popcorn in a bowl on a pink and white checkered table. Photo taken by John Tecuceanu on Unsplash.`},
  {genre: "crime",
  food:  "Doughnuts and Coffee",
  foodImage: `/assets/doughnuts.jpg`,
  foodAlt: `A cardboard box containing 6 varieties of doughnuts sits open on a wooden table beside a cup of coffee. Photo by Zach Miles on Unsplash.`},
  { genre: "documentary",
  food:  "Soft Pretzels",
  foodImage: `/assets/pretzel.jpg`,
  foodAlt: `A person holds up a large soft pretzel. Photo by Pierre Gui on Unsplash.`},
  {genre: "drama",
  food:  "Wine and Cheese Platter",
  foodImage: `/assets/wineCheese.jpg`,
  foodAlt: `A picnic of white wine and cheese with bread is laid out on a blanket in the grass. Photo taken by Alexandra K on Unsplash.`},
  {genre: "family",
  food:  "Fast Food",
  foodImage: `/assets/fastFood.jpg`,
  foodAlt: `A table containing McDonald's fries, ketchup, burgers, and pop waits to be eaten. Photo by Sepet on Unsplash.`},
  {genre: "fantasy",
  food:  "Dragonfruit",
  foodImage: `/assets/dragon.jpg`,
  foodAlt: `A dragon fruit sits on a white plate with a spoon. Half of the dragon fruit has been cut into four slices. Photo by OhTilly on Unsplash.`},
  {genre: "history",
  food:  "Rotisserie Chicken",
  foodImage: `/assets/chicken.jpg`,
  foodAlt: `A roasted chicken sits in a glass pan. Photo by Jennifer Burk on Unsplash.`},
  {genre: "horror",
  food:  "Tomato Soup",
  foodImage: `/assets/soup.jpg`,
  foodAlt: `A glass bowl containing tomato soup sits on a black table surrounded by spices and two whole tomatoes. Photo by Dennis Klein on Unsplash.`},
  {genre: "music",
  food:  "Birthday Cake",
  foodImage: `/assets/cake.jpg`,
  foodAlt: `A slice of cake made up of layers that match the colours of the rainbow is displayed on a wooden block. Photo by Heino Elnionis on Unsplash.`},
  {genre: "mystery",
  food: "Spam",
  foodImage: `/assets/spam.jpg`,
  foodAlt: `Multiple cases of spam are stacked on top of each other. Photo by Hannes Johnson on Unsplash.`},
  {genre: "romance",
  food:  "Spaghetti",
  foodImage: `/assets/spaghetti.jpg`,
  foodAlt: `A fork wrapped in spaghetti is held above a shallow bowl of spaghetti with a slice of bread. Photo by Keri Iiwi on Unsplash.`},
  {genre: "scienceFiction",
  food:  "Freeze-dried Foods",
  foodImage: `/assets/astro.jpg`,
  foodAlt: `Five packages of freeze-dried foods from the Astronaut brand containing different fruits. A pile of freeze-dried strawberries, bananas, and peaches sits beside the packages.`},
  {genre: "tvMovie",
  food: "Microwave Dinner",
  foodImage: `/assets/microwave.jpg`,
  foodAlt: `Nine different microwave dinners are stacked on top of each other on a marble countertop.`},
  {genre: "thriller",
  food:  "Popcorn",
  foodImage:`/assets/popcorn.jpg`,
  foodAlt: `A glass bowl filled to the brim with white popcorn. Photo by Alex Munsell on Unsplash.`},
  {genre: "war",
  food:  "Canned Food",
  foodImage: `/assets/canned.jpg`,
  foodAlt: `Three cans of Organic Chili laid on a black and white plaid cloth. From left to right the labels on the cans read: Medium, Spicy and Black Bean Photo by Andrea Davis on Unsplash.`},
  {genre: "western",
  food:  "Steak and Potatoes",
  foodImage: `/assets/steak.jpg`,
  foodAlt: `A medium rare steak is cut into slices and covered in gravy on a plate beside roasted potatoes, carrots, and broccoli. Photo by Amirali Mirhashemian on Unsplash.`}
]
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
  let genre = "";
  for (genre in quaranscene.cuisinePairing) {
    console.log($(this));
    if(genre === quaranscene.genre) {
      
    }
  }
  const htmlToAppend = `<li class="movieResult"> <h2>${quaranscene.movieTitle}</h2> <img src="${quaranscene.baseImageURL}${quaranscene.moviePoster}" alt=""> </li> 
  <li class="dinnerResult"> <h2>${quaranscene.genre}</h2> <img src="${quaranscene.baseImageURL}${quaranscene.moviePoster}" alt=""> </li> `;
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


