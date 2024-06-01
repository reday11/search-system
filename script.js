let products = [
  {
    name: "Iphone 14 pro ",
    price: 1100,
    rating: 4.5,
    category: "phone",
    image:
      "https://www.zdnet.com/a/img/resize/ce0b89a2bca7d6dcae89323b8ab9abdc5d41bda1/2022/09/07/4f6b3cc8-bd81-48e4-9678-089025b8cb5b/iphone-14-pro-purple.jpg?auto=webp&fit=crop&height=1200&width=1200",
  },
  {
    name: "Samsung s23 ultra ",
    price: 1200,
    rating: 4.0,
    category: "phone",
    image:
      "https://www.samsungmobilepress.com/file/96BC5058B2D90757F88741FE064FF3E2B56A886DCF39C1BEBCB8410D97D5BB169CC1129A70F71DD4772DC894268BAD2F2D08DA521FCFD4960FE28D7AC228C3A399257940C3297BD8262B033538A2443820D0F587D09578A68693189D05093CB5A40F654B441CC8BA22F09886F46475CBD316273ED9FD1BF313EDCF2CF8EC3323C56154CB292B12EED59C426749DB73C7",
  },
  {
    name: "Huawi Nova 9",
    price: 890,
    rating: 4.1,
    category: "phone",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzB9UOv6bTInyB-bqthpNpt_2ZkYmy1LSFA&s",
  },
  {
    name: "Pants for men",
    price: 25.99,
    rating: 3.9,
    category: "clothes ",
    image: "https://m.media-amazon.com/images/I/618AK-jOZQL._AC_UY1000_.jpg",
  },
  {
    name: "T-shirt for men",
    price: 15.99,
    rating: 2.8,
    category: "clothes ",
    image:
      "https://www.thewalkdeal.com/cdn/shop/products/Belive-Black.jpg?v=1640675713",
  },
  {
    name: "Shoes for men",
    price: 66.99,
    rating: 2.8,
    category: "clothes ",
    image:
      "https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_WHT-SIL-B.ORG.jpg?v=1705644651",
  },
]

let products_div = document.querySelector(".product-container")
let search_btn = document.querySelectorAll(".search-btn")

// show the products
function showProducts() {
  products_div.innerHTML = products
    .map((product) => {
      return `
    <div class="card">
        <img src="${product.image}" >
        <div class="card-content">
            <div class="card-title">${product.name}</div>
            <div class="card-price">${product.price}$</div>
            <div class="card-rating">${product.rating} ⭐</div>
            <button>add</button>
        </div>
    </div>
    `
    })
    .join("")
}

showProducts()

// search by name function

function searchByName(input) {
  let newProductsArray = products.filter((product) =>
    product.name.toLowerCase().includes(input.value.toLowerCase())
  )

  products_div.innerHTML = newProductsArray
    .map((product) => {
      return `
        <div class="card">
            <img src="${product.image}" >
            <div class="card-content">
                <div class="card-title">${product.name}</div>
                <div class="card-price">${product.price}$</div>
                <div class="card-rating">${product.rating} ⭐</div>
                <button>add</button>
            </div>
        </div>`
    })
    .join("")
}

//search  by category

function searchByCategory(input) {
  let newProductsArray = products.filter((product) =>
    product.category.toLowerCase().includes(input.value.toLowerCase())
  )

  products_div.innerHTML = newProductsArray
    .map((product) => {
      return `
        <div class="card">
            <img src="${product.image}" >
            <div class="card-content">
                <div class="card-title">${product.name}</div>
                <div class="card-price">${product.price}$</div>
                <div class="card-rating">${product.rating} ⭐</div>
                <button>add</button>
            </div>
        </div>`
    })
    .join("")
}

// reset the products
function resetProducts() {
  showProducts()
  search_btn.forEach(btn=>{
    btn.classList.remove('search-color')
  })
}

// search by rating

function searchByRating(rate) {
  if (rate >= 4.5) {
    products_div.innerHTML = products.map((product) => {
        if(product.rating >=4.5){
            return `
            <div class="card">
                <img src="${product.image}" >
                <div class="card-content">
                    <div class="card-title">${product.name}</div>
                    <div class="card-price">${product.price}$</div>
                    <div class="card-rating">${product.rating} ⭐</div>
                    <button>add</button>
                </div>
            </div>`
        }
    }).join("")
  }else if(rate >= 3.5){
    products_div.innerHTML = products.map((product) => {
        if(product.rating >=3.5){
            return `
            <div class="card">
                <img src="${product.image}" >
                <div class="card-content">
                    <div class="card-title">${product.name}</div>
                    <div class="card-price">${product.price}$</div>
                    <div class="card-rating">${product.rating} ⭐</div>
                    <button>add</button>
                </div>
            </div>`
        }
    }).join("")
  }else if(rate >= 2.5){
    products_div.innerHTML = products.map((product) => {
        if(product.rating >=2.5){
            return `
            <div class="card">
                <img src="${product.image}" >
                <div class="card-content">
                    <div class="card-title">${product.name}</div>
                    <div class="card-price">${product.price}$</div>
                    <div class="card-rating">${product.rating} ⭐</div>
                    <button>add</button>
                </div>
            </div>`
        }
    }).join("")
  }
}

//search by price 

function searchByPrice(searchPrice){
    if(searchPrice <= 30){
        products_div.innerHTML = products.map((product) => {
            if(product.price <= 30){
                return `
                <div class="card">
                    <img src="${product.image}" >
                    <div class="card-content">
                        <div class="card-title">${product.name}</div>
                        <div class="card-price">${product.price}$</div>
                        <div class="card-rating">${product.rating} ⭐</div>
                        <button>add</button>
                    </div>
                </div>`
            }
        }).join("")
    }else if(searchPrice <= 100){
        products_div.innerHTML = products.map((product) => {
            if(product.price <= 100){
                return `
                <div class="card">
                    <img src="${product.image}" >
                    <div class="card-content">
                        <div class="card-title">${product.name}</div>
                        <div class="card-price">${product.price}$</div>
                        <div class="card-rating">${product.rating} ⭐</div>
                        <button>add</button>
                    </div>
                </div>`
            }
        }).join("")
    }else if(searchPrice <= 500){
        products_div.innerHTML = products.map((product) => {
            if(product.price <= 500){
                return `
                <div class="card">
                    <img src="${product.image}" >
                    <div class="card-content">
                        <div class="card-title">${product.name}</div>
                        <div class="card-price">${product.price}$</div>
                        <div class="card-rating">${product.rating} ⭐</div>
                        <button>add</button>
                    </div>
                </div>`
            }
        }).join("")
    }
}

// add the style to the search buttons when click

search_btn.forEach(button=>{
    button.addEventListener('click',()=>{
        button.classList.toggle("search-color")
    })
})