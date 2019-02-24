

var properties = [
  {
  type:"Purchase",
  rooms:2,
  pet:"Yes",
  category:"Appartments",
  image:"url(./photos/condo-2618421_640.jpg)",
  c:"1"
},
{
  type:"Purchase",
  rooms:2,
  pet:"Yes",
  category:"Appartments",
  image:"url(./photos/condominium.jpg)",
  c:"2"
},
{
  type:"Purchase",
  rooms:1,
  pet:"Yes",
  category:"Appartments",
  image:"url(./photos/pink-kettlebell.jpeg)",
  c:"3"
},
{
  type:"Purchase",
  rooms:2,
  pet:"Yes",
  category:"Appartments",
  image:"url(./photos/pink-kettlebell.jpeg)",
  c:"5"
}
];

// console.log( typeof properties[0].type );



function byClass(cls) {
  return document.getElementsByClassName(cls);
}


// Creates the divs that will hold the details of each propertie
function createDivs(prop) {

  var filtered = document.getElementById("filtered");
  // Create the div whitch holds the image
  var div = document.createElement("div");
  div.setAttribute("class", "filteredImage");
  filtered.appendChild(div);


  // Hold the classes of the Divs that are beeing created in order to hold the images of each propertie
  var imageDiv = byClass("filteredImage");

  for (var i = 0; i < imageDiv.length; i++) {
    imageDiv[i].style.backgroundImage = prop.image;
  }

  // Create the div whitch holds the type of the property
  var div = document.createElement("div");
  div.setAttribute("class", "type");
  filtered.appendChild(div);


  // Hold the classes of the Divs that are beeing created in order to hold the type of each propertie
  var propertieType = byClass("type");

  // Loop through the properties and and to the DOM the type of each propertie
  for (var i = 0; i < propertieType.length; i++) {
         propertieType[i].innerHTML = prop.type;
  }

  // Create the div whitch holds how many rooms the propertie has
  var div = document.createElement("div");
  div.setAttribute("class", "rooms");
  filtered.appendChild(div);


  // Hold the classes of the Divs that are beeing created in order to hold the number of the rooms each propertie has
  var propertieRooms = byClass("rooms");

  // Loop through the properties and and to the DOM the number of rooms of each propertie
  for (var i = 0; i < propertieRooms.length; i++) {
         propertieRooms[i].innerHTML = prop.rooms  ;
  }

  // Create the div whitch holds the if the properie is pet friendly
  var div = document.createElement("div");
  div.setAttribute("class", "pet");
  filtered.appendChild(div);


  // Hold the classes of the Divs that are beeing created in order to hold if the properties are pet friendly
  var pet = byClass("pet");


  // Loop through the properties and add to the DOM if the properties are pet friendly
  for (var i = 0; i < pet.length; i++) {
         pet[i].innerHTML = prop.pet  ;
  }

  // Create the div whitch holds the category of each propertie
  var div = document.createElement("div");
  div.setAttribute("class", "category");
  filtered.appendChild(div);


  // Hold the classes of the Divs that are beeing created in order to hold the category of the propertie
  var category = byClass("category");

// Loop through the properties and add to the DOM the category of the properties
  for (var i = 0; i < category.length; i++) {
         category[i].innerHTML = prop.category  ;
  }
}


function showSelected() {
    // Select type from filter
    var selector = document.getElementById('selectType');
    var type = selector[selector.selectedIndex].value;
    // console.log( typeof type);


    // Select rooms from filter
    var selector = document.getElementById('selectRooms');
    var rooms = selector[selector.selectedIndex].value;
    parseInt(rooms);
    // console.log( typeof rooms);


    // Select pet friendly from filter
    var selector = document.getElementById('petFriendly');
    var petFriendly = selector[selector.selectedIndex].value;
    // console.log( typeof petFriendly);


    // Select category from filter
    var selector = document.getElementById('selectCategory');
    var category = selector[selector.selectedIndex].value;
     // console.log( typeof category);

     for (var i = 0; i < properties.length; i++) {
         if ( properties[i].type     == type &&
              properties[i].rooms    == rooms &&
              properties[i].pet      == petFriendly &&
              properties[i].category == category){

              document.getElementById("hideContent").style.display = "none";
              document.getElementById("filtered").style.display = "block";

              createDivs(properties[i]);
         } else {
              console.log("No properties");
         }
       }
     }





// document.getElementById('display').innerHTML = value;
 // document.getElementById('btn').addEventListener('click', show_selected);
