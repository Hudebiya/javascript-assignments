             //    
var beautyProruct = {
    skinCare : {
       Vaseline : {
         "Body Lotion" : {
            Name: "Vaseline Lotion",
            price: 500,
            src: "https://greenvalley.pk/cdn/shop/files/Vaseline_Body_Lotion_Total_Moisture_Nourishing_100Ml.webp?v=1754552311",
            vol: 100,
            Description:"Vaseline Pro VitaB3 Serum Burst Lotion Luminous Glow Healthy, Glowing Skin, Lightweight 10x Antioxidant Power of Vitamin C with Vitamin B3, Hyaluronic Acid & Vitamin E, 7.5 Fl Oz",
         },
         "Lip Balm" : {
            Name : "Vaseline Lip Balm",
            price: 500,
            src: "https://www.catchnpack.pk/wp-content/uploads/2024/12/Vaseline-Lip-Therapy-Creme-Brulee-Mini-7g.jpg",
            vol: 100,
            Description:"Vaseline Pro VitaB3 Serum Burst Lotion Luminous Glow Healthy, Glowing Skin, Lightweight 10x Antioxidant Power of Vitamin C with Vitamin B3, Hyaluronic Acid & Vitamin E, 7.5 Fl Oz",
         },
         "Healing Jelly" : {},
       },
       Nivea : {
         "Nivea Cream" : {},

       },
       Ponds : {},
       Olay : {},
       "Saeed Ghani" : {},
    },
    hairCare : {
       Dove : {},
       Sunsilk : {},
       Pantene : {},
       "L'Oreal Paris" : {},
       Tresemme : {},
       "Head & Shoulders" : {},
    },
    Makeup : {
       Maybelline : {},
       "Huda Beauty" : {},
       "MAC Cosmetics" : {},
       NYX : {},
       Revlon : {},
    },
    Fragnance : {
       "Victoria's Secret" : {},
       Channel : {},
       Dior : {},
       Gucci : {},
    },
   }


var productMenu = document.getElementById("productMenu");
var allProducts = document.getElementById("allProducts");
for (product in beautyProducts) {
  console.log(product);
  productMenu.innerHTML += `
            <option value="${product}">${product.toUpperCase()}</option>

    `;
  for (brand in beautyProducts[product]) {
    // console.log(beautyProducts[product][brand].name);

    allProducts.innerHTML += `
 <div class="col">
          <div class="card">
            <img
              src=${beautyProducts[product][brand].src}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${beautyProducts[product][brand].name}</h5>
              <p class="card-text">${beautyProducts[product][brand].description}</p>
            </div>
            <div class="card-footer">
              <h5 class="price">Rs.${beautyProducts[product][brand].price}/- </h5>
            </div>
          </div>
        </div>`;
  }
}
var brandMenu = document.getElementById("brandMenu");
function productChange() {
  brandMenu.innerHTML = ` <option selected>Select Brand</option>`;
  console.log(beautyProducts[productMenu.value]);
  for (brand in beautyProducts[productMenu.value]) {
    // console.log(brand);
    brandMenu.innerHTML += `
                <option value="${brand}">${brand.toUpperCase()}</option>

    `;
  }
}
function viewAll() {
  console.log("all products");

  //   for(brand in beautyProducts[product]){
  //         console.log(beautyProducts[product][brand].name);

  // allProducts.innerHTML += `
  //  <div class="col">
  //           <div class="card">
  //             <img
  //               src=${beautyProducts[product][brand].src}
  //               class="card-img-top"
  //               alt="..."
  //             />
  //             <div class="card-body">
  //               <h5 class="card-title">${beautyProducts[product][brand].name}</h5>
  //               <p class="card-text">${beautyProducts[product][brand].description}</p>
  //             </div>
  //             <div class="card-footer">
  //               <h5 class="price">Rs.${beautyProducts[product][brand].price}/- </h5>
  //             </div>
  //           </div>
  //         </div>`

  //     }
}
function filterProduct() {
  allProducts.innerHTML = "";
  // console.log(beautyProducts[productMenu.value][brandMenu.value].name);
  var productData = beautyProducts[productMenu.value][brandMenu.value];
  allProducts.innerHTML += `
   
 <div class="col">
          <div class="card">
            <img
              src=${productData.src}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${productData.name}</h5>
              <p class="card-text">${productData.description}</p>
            </div>
            <div class="card-footer">
              <h5 class="price">Rs.${productData.price}/- </h5>
            </div>
          </div>
        </div>
         <div class="col btnCol">
        <button onclick="viewAll()" class="btn allBtn btn-outline-success" type="button">
                View All Products
              </button>
               </div>
        `;
}