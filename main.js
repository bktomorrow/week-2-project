// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it



// 1: Show me how to calculate the average price of all items.
function question1 () {
	let totalPrice = 0;
 
	for(let i=0; i<data.length;i++){
	  totalPrice += data[i].price;
	}

	console.log("The average price is $" + Number(Math.round((totalPrice/data.length)+'e'+2)+'e-'+2));
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
	let priceRange = [];
  
	for(let i=0; i<data.length;i++){
		if((data[i].price >= 14) && (data[i].price <= 18)){
			priceRange.push(data[i].title);
		}
	}
  
	for(let i=0;i<priceRange.length;i++){
		console.log(priceRange[i]);
	}  
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
	for(let i=0; i<data.length;i++){
		if(data[i].currency_code === "GBP"){
			console.log(data[i].title + " costs " + data[i].price + " pounds.");
		}
	}
}


// 4: Display a list of all items who are made of wood.
function question4 () {
	let ans = [];
	
	for(let i=0; i<data.length;i++){
		for(let j=0; j<data[i].materials.length; j++){
			if(data[i].materials[j] === "wood"){
				ans.push(data[i].title);
			}
		}
	}
	
	for(let i=0;i<ans.length;i++){
		console.log(ans[i] + " is made of wood.");
	}
}


// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5 () {
	let ans = []
	
	for(let i=0; i<data.length;i++){
	  if(data[i].materials.length >= 8){
		  ans.push(data[i]);
	  }
	}
  
	for(let i=0;i<ans.length;i++){
		console.log(ans[i].title + " has " +ans[i].materials.length + " materials:");
		
		for(let j=0; j<ans[i].materials.length;j++){
			console.log("- " + ans[i].materials[j]);
		}
	}
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
	let ans = 0;
	
	for(let i=0; i<data.length;i++){
		if(data[i].who_made === "i_did"){
			ans++;
		}
	}
	
	console.log(ans + " items were made by their sellers.");
}