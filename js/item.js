var item = document.querySelectorAll('.All');
var images = ['walnut.jpg', 'orange.jpg', 'meat.jpg', 'cauliflower.jpg'];
var categoryItems = ['FrozenFood', 'FrozenFood', 'MeatFish', 'MeatFish']
var price = [25,34,50,58];
var description = [`The Kashmiri walnut, known for its rich flavor and distinct taste, is highly prized in
culinary circles, contributing to the region's reputation for producing some of the finest and most
sought-after walnuts in the world`,
    `The orange fruit,juicy citrus delight, is celebrated for its refreshing taste. Its bright
color and sweet, tangy flavor make it a popular choice for fresh consumption and a versatile ingredient in
various culinary creations.`,
    `In a botanical sense, a fruit is the fleshy or dry ripened ovary of a flowering plant,
enclosing the seeds. Apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers,
and (in their shells) acorns and almonds.`,
    `Meat, a diverse category of animal flesh, serves as a primary protein source in diets
          worldwide. It undergoes cooking processes to enhance flavor, making it a central element in cultural cuisines
          and a nutritional cornerstone for many.`,
          
];
var title = ['Walnut', 'Oranges', 'Marshmallow Candy', 'Raw Meat'];
var itemListing = document.querySelector('.itemListing');
var items = '';
for (var i = 0; i < images.length; i++) {
    items += `  <div class="card m-0 mt-5 border-0 ${categoryItems[i]} All" style="width: 20rem;">
    <img src="./Images/${images[i]}" class="card-img-top" alt="...">
    <div class="card-body">
      <h3 class="card-title">${title[i]}</h3>
      <p class="card-text">${description[i]}</p>
      <div class="stars">
        <i class="bi text-warning bi-star-fill"></i>
        <i class="bi text-warning bi-star-fill"></i>
        <i class="bi text-warning bi-star-fill"></i>
        <i class="bi text-warning bi-star-fill"></i>
        <i class="bi text-warning bi-star-half"></i>
      </div><br>
      <div class="price-button">
        <i class="bi bi-currency-dollar"></i><b>${price[i]}</b>
        <span class="btnblockClode"><button type="button" class="btn">Add to Cart</button></span>
        <div style="height: 37px;" class="butForAdd">
          <button class="b1 b12"><b>-</b></button>
          <p>1</p>
          <button style="margin-left: 0;" class="b1 b11"><b>+</b></button>
        </div>

      </div>

    </div>
    
  </div>`
}
items+=`<div class="notAvail">
<h3>items Not Available</h3><br>

</div>`
itemListing.innerHTML = items;
// this was for the cards inthe body


// inside toggle
var priceButton=document.querySelectorAll('.price-button span button');
var offcanvasBody=document.querySelector('.offcanvas-body');

var toggleItems='';
var toggleImages=['walnut.jpg','orange.jpg','meat.jpg','cauliflower.jpg'];
var toggleTitle=['Kashmiri Walnut','Oranges','Raw Meat','Marshmallow Candy'];
var togglePrice=['25','34','50','58'];
var toggleQnty=['1','1','1','1'];


priceButton.forEach(function(ele,i){
  
  priceButton[i].addEventListener("click",(i)=>{
    toggleItems+=`<div class="insideToggle">
  <img src="./Images/${toggleImages[i]}" alt="">
  <div class="namePrice">
    <h4>${toggleTitle[i]}</h4><i class="bi bi-currency-dollar"></i><b>${togglePrice[i]}</b> <p> x ${toggleQnty[i]}</p>
  </div>
</div>`
  });
});




// toggle closes