
var items = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11, image: "images/finger-brush.jpg"}, 
  {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57, image: "images/barry-manilow's.jpg"}, 
  {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88, image: "images/ramen_oreo.jpg"},
  {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29, image:"images/Woof-Washer-360.jpeg"}, 
  {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33, image:"images/sauna-pants.jpg"}, 
  {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99, image:"images/hug-me-pillow.jpg"}];

for(var i = 0; i<items.length; i++){

  var productBox = document.createElement("div");
    productBox.className = "products";
    productBox.innerHTML = items[i].product;
    main.appendChild(productBox);

  var descriptionBox = document.createElement("div");
    descriptionBox.className = "descriptions";
    descriptionBox.innerHTML = items[i].description;
    productBox.appendChild(descriptionBox);

  var priceBox = document.createElement("div");
    priceBox.className = "prices";
    priceBox.innerHTML = items[i].price;
    descriptionBox.appendChild(priceBox);

  var displayImg = document.createElement("img");
    displayImg.className = "itemImg";
    displayImg.src = items[i].image;
    priceBox.appendChild(displayImg);

 }

 var imgElem = document.getElementsByClassName("prices");

 for(var i = 0; i<imgElem.length; i++){
  imgElem[i].addEventListener("click", showImg);
 }

  function showImg() {
    var imgBox = this.querySelectorAll(".itemImg")[0];
      if(imgBox.style.display === "none"){
        imgBox.style.display = "block";
      }else {
        imgBox.style.display = "none";
      }
  }
