/* 
<<<<<<<<<<<<<<<<< TODO Task List <<<<<<<<<<<<<<<<<
    1. Start the application by opening index.html in your browser, and use your debugger to step through the completed findMexicanFood() function
    2. Complete the findItalianFood() function
    3. Complete the searchCuisines() function
    4. Complete the searchIngredients() function
    5. Complete the generateCuisineDishName() function
    6. Adjust the emailMessage() and textMessage() functions so the cuisine and dish name are included in the message
    7. Complete the generateMarketingMessage() function
    8. Call the appropriate function in runApp() to generate a marketing text message
    9. Call the appropriate function in runApp() to generate a marketing email message
    10. Refactor the existing uses of prompt() to use customPrompt()
*/

let dishes = [
  {
    id: 1,
    dishname: "Pizza",
    cuisine: "Italian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 2,
    dishname: "Spaghetti",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 3,
    dishname: "Ravioli",
    cuisine: "Italian",
    servings: 2,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 4,
    dishname: "Enchiladas",
    cuisine: "Mexican",
    servings: 6,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 5,
    dishname: "Tacos",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 6,
    dishname: "Burrito Supreme",
    cuisine: "Mexican",
    servings: 1,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 7,
    dishname: "Elote",
    cuisine: "Mexican",
    servings: 4,
    ingredients: ["corn", "cheese"],
  },
  {
    id: 8,
    dishname: "Crepes",
    cuisine: "French",
    servings: 1,
    ingredients: ["flour", "sugar"],
  },
  {
    id: 9,
    dishname: "Corned Beef & Cabbage",
    cuisine: "Irish",
    servings: 10,
    ingredients: ["beef", "cabbage"],
  },
  {
    id: 10,
    dishname: "Beef Stew",
    cuisine: "Irish",
    servings: 8,
    ingredients: ["beef", "tomato"],
  },
  {
    id: 11,
    dishname: "Lasagna",
    cuisine: "Vegetarian",
    servings: 8,
    ingredients: ["tomato", "cheese"],
  },
  {
    id: 12,
    dishname: "Falafel",
    cuisine: "Vegetarian",
    servings: 1,
    ingredients: ["chickpea", "parsley"],
  },
  {
    id: 13,
    dishname: "Chili",
    cuisine: "Vegetarian",
    servings: 13,
    ingredients: ["tomato", "chickpea"],
  },
  {
    id: 14,
    dishname: "Goulash",
    cuisine: "Hungarian",
    servings: 15,
    ingredients: ["beef", "tomato"],
  },
];
let todaysSpecialDish = {
  id: 7,
  dishname: "Elote",
  cuisine: "Mexican",
  servings: 4,
  ingredients: ["corn", "cheese"],
};

// <<<<<<<<<<<<<<<<< EXAMPLE FUNCTION <<<<<<<<<<<<<<<<<

function findMexicanFood(allDishes) {
  alert("Searching for Mexican dishes...");
  let results = allDishes.filter(function (el) {
    if (el.cuisine === "Mexican") {
      return true;
    } else {
      return false;
    }
  });

  alert("Found all Mexican dishes!  Check the console for full output.");
  return results;
}

// <<<<<<<<<<<<<<<<< MAP & FILTER FUNCTIONS <<<<<<<<<<<<<<<<<

function findItalianFood(allDishes) {
  alert("Searching for Italian dishes...");
  let results = allDishes.filter(function (el) {
    if (el.cuisine === "Italian") {
      return true;
    } else {
      return false;
    }
  });

  alert("Found all Italian dishes!  Check the console for full output");
  return results;
}

function searchCuisines(allDishes) {
  alert("Searching for dishes by cuisine...");
  let userInput = customPrompt(
    "What cuisine would you like to search for? /n (Options are: Italian, Mexican, French, Irish, Vegetarian, Hungarian) "
  );
  let results = allDishes.filter(function (el) {
    if (el.cuisine.includes(userInput)) {
      return true;
    }
  });

  alert(
    "Found all dishes matching the cuisine search term!  Check the console for full output"
  );
  return results;
}

function searchIngredients(allDishes) {
  alert("Searching for dishes by ingredient...");
  let userInput = customPrompt("What ingredient would you like to search by?");
  let results = allDishes.filter(function (el) {
    if (el.ingredients.includes(userInput)) {
      return true;
    }
  });
  alert(
    "Found all dishes that contain the ingredient search term!  Check the console for full output"
  );
  return results;
}
 // TODO #5: Apply the concatenatorFunction to each dish in allDishes, then log to the console the modified result
function generateCuisineDishName(allDishes) {
  alert("Combining cuisine and dish names...");
  let result = allDishes.map(function (el){
    return `${el.dishname} ${el.cuisine}`
  });
  alert(
    "Successfully combined cuisine and dish names!  Check the console for full output."
  );

return result;
}
// <<<<<<<<<<<<<<<<< EMAIL AND TEXT MARKETING MESSAGES <<<<<<<<<<<<<<<<<

function emailMessage(dishOfTheDay) {
  // TODO #6: Adjust the message below so the cuisine and name of the dish are displayed
  let message = `
    Hello valued customer!

    Thank you for subscribing to email alert messages!
    Today's Dish of the day is:

    ${todaysSpecialDish.dishname}

    We hope to see you in soon!

    Kindly,
    Master Chef David

    (To unsubscribe hit the 'unsubscribe' button below)
    `;

  return message;
}

function textMessage(dishOfTheDay) {
  // TODO #6: Adjust the message below so the cuisine and name of the dish are displayed
  let message = `
    Master Chef -

    This is an automated text message alert.
    Today's Dish of the day is:

    ${todaysSpecialDish.dishname}

    We hope to see you in soon!

    Kindly,
    Master Chef David

    Text STOP to stop all future messages.
    
    `;
  return message;
}

 // TODO #7: Call the passed-in callback function on the dishOfTheDay.  Save the result as a variable
  // Then, log that result to the console

function generateMarketingMessage(dishOfTheDay, messageTypeCallback) {
  let message=messageTypeCallback(dishOfTheDay)
  alert("Sending final message to all 389 customers...");
  console.log(message)
  alert(
    "Success!  Check the console for a copy of the final marketing message!"
  );
}

// <<<<<<<<<<<<<<<<< CUSTOM PROMPT FUNCTION <<<<<<<<<<<<<<<<<

function customPrompt(promptQuestion, arrayOfValidResponses) {
  // TODO #10: Replace all instances of prompt() in the above functions with customPrompt()
  let response;
  while (!arrayOfValidResponses.includes(response)) {
    response = prompt(promptQuestion);
  }
  return response;
}

// <<<<<<<<<<<<<<<<< MAIN MENU FUNCTION <<<<<<<<<<<<<<<<<

function todaysMessage(){
  console.log("Hello! Todays dish of the day is:")
}


function runApp(allDishes, specialDish) {
  alert("Welcome to the Recipe Searching Application!");
  let userChoice = customPrompt(
    `Press 1 to search for Mexican dishes.
    Press 2 to search for Italian dishes.    
    Press 3 to search for dishes by cuisine.
    Press 4 to search for dishes by ingredient.
    Press 5 to see a list of cuisines & dish names.
    Press 6 to send a marketing text message for Today's Special Dish.
    Press 7 to send a marketing email message for Today's Special Dish.
    Enter "Exit" to quit the application.`,
    ["1", "2", "3", "4", "5", "6", "7", "Exit"]
  );
  switch (userChoice) {
    case "1":
      let mexicanDishes = findMexicanFood(allDishes);
      console.log(mexicanDishes);
      break;
    case "2":
      let italianDishes = findItalianFood(allDishes);
      console.log(italianDishes);
      break;
    case "3":
      let cuisineSearchResults = searchCuisines(allDishes);
      console.log(cuisineSearchResults);
      break;
    case "4":
      let ingredientSearchResults = searchIngredients(allDishes);
      console.log(ingredientSearchResults);
      break;
    case "5":
      let concatenatedDishes = generateCuisineDishName(allDishes);
      console.log(concatenatedDishes);
      break;
    case "6":
      generateMarketingMessage(todaysSpecialDish, textMessage);
      console.log(generateMarketingMessage)
      break;
    case "7":
      generateMarketingMessage(todaysSpecialDish, emailMessage);
      console.log(generateMarketingMessage)
      break;
    case "Exit":
      alert("Thank you for using the Recipe Searching Application!  Goodbye!");
      return;
    default:
      alert("Invalid choice, please try your selection again!");
      return runApp(allDishes, specialDish);
  }
}

runApp(dishes, todaysSpecialDish);
