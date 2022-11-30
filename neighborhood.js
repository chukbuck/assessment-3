const placeBut = document.querySelector('#placeNeighb')

placeBut.addEventListener('mouseover', () => {
	placeBut.style.backgroundColor = 'blue'
    placeBut.style.color = 'white'
})

placeBut.addEventListener('mouseout', () => {
	placeBut.style.backgroundColor = 'darkgoldenrod'
    placeBut.style.color = 'darkblue'
})

placeBut.addEventListener('click', () => {

    let restaurants = [
        "https://www.yelp.com/biz/silver-beach-pizza-saint-joseph",
        "https://www.yelp.com/biz/kilwins-saint-joseph-2",
        "https://www.yelp.com/biz/nardos-pizza-st-joseph-3",
        "https://www.yelp.com/biz/cabanas-saint-joseph",
        "https://www.yelp.com/biz/caffe-tosi-saint-joseph-2",
        "https://www.yelp.com/biz/221-main-restaurant-and-cocktail-house-saint-joseph",
        "https://www.yelp.com/biz/tims-too-saint-joseph",
        "https://www.yelp.com/biz/ryebelles-st-joseph",
    ]
    var restaurant = restaurants[Math.floor(Math.random()*restaurants.length)];
	return window.location=restaurant
})