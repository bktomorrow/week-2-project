// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it



// 1: Show me how to calculate the average price of all items.
function question1 () {
	let totalPrice = 0;
	data.forEach(function(element) {
		totalPrice += element.price;
	})
	console.log("The average price is $" + Number(Math.round((totalPrice/data.length)+'e'+2)+'e-'+2));
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
	let priceRange = [];

	data.forEach(function(element) {
		if((element.price >= 14) && (element.price <= 18)){
			priceRange.push(element.title);
		}
	})

	priceRange.forEach(function(element) {
		console.log(element);
	})
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
	data.forEach(function(element) {
		if(element.currency_code === "GBP"){
			console.log(element.title + " costs " + element.price + " pounds.");
		}
	})
}


// 4: Display a list of all items who are made of wood.
function question4 () {
	let ans = [];

	data.forEach(function(element) {
		for(let j=0; j<element.materials.length; j++){
			if(element.materials[j] === "wood"){
				ans.push(element.title);
			}
		}
	})

	ans.forEach(function(element) {
		console.log(element + " is made of wood.");
	})
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
	let ans = []

	data.forEach(function(element) {
	  if(element.materials.length >= 8){
		  ans.push(element);
	  }
	})

	ans.forEach(function(element) {
		console.log(element.title + " has " +element.materials.length + " materials:");
		element.materials.forEach(function(element2) {
			console.log("- " + element2);
		})
	})
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
	let ans = 0;

	data.forEach(function(element) {
		if(element.who_made === "i_did"){
			ans++;
		}
	})

	console.log(ans + " items were made by their sellers.");
}
