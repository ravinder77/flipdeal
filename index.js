const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());





let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];




app.get('/', (req, res) => {
  res.send('Product Listing Api');
 });
 

// routes

// sort by rating

app.get('/products/sort/popularity', (req, res) => {

  function sortPopularity(a, b) {
    return b.rating - a.rating;
  }
 
try {
 const sortedProducts = products.sort(sortPopularity);

 if(sortedProducts.length === 0) {
   return res.status(404).json({
     message: "No products found"
   })
 }

 res.status(200).json({
   products: sortedProducts
 })

} catch (error) {
  res.status(500).json({
    message: error.message
  })
}

});


// sort by price high-to-low

app.get('/products/sort/price-high-to-low', (req, res) => {

  function sortPriceHighToLow(a, b) {
    return b.price - a.price;
  }

 try {
    const sortedProducts = products.sort(sortPriceHighToLow);

    if(sortedProducts.length === 0) {
      return res.status(404).json({
        message: "No products found"
      })
    }


    res.status(200).json({
      products: sortedProducts
    })
  } catch (error) {
  res.status(500).json({
    message: error.message
  })
 } 


});


// sort by price low-to-high

app.get('/products/sort/price-low-to-high', (req, res) => {

  const sortPriceLowToHigh = (a, b) => {
    return a.price - b.price;
  }

  try {
    const sortedProducts = products.sort(sortPriceLowToHigh);

    if(sortedProducts.length === 0) {
      return res.status(404).json({
        message: "No products found"
      })
    }

    res.status(200).json({
      products: sortedProducts
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
});


// sort by ram

app.get('/products/filter/ram', (req, res) => {

 function filterByRam(product, ram) {
   return product.ram === ram;
 }

try {
const ram = parseFloat(req.query.ram);
const filteredProducts = products.filter(product => filterByRam(product, ram));

if(filteredProducts.length === 0) {
  return res.status(404).json({
    message: "No products found"
  })
}


res.status(200).json({
  products: filteredProducts
})
} catch(error) {
  res.status(500).json({
    message: error.message
  })
}

});

// filter by brand

app.get('/products/filter/brand', (req, res) => {

  function filterByBrand(product, brand) {
    return product.brand.toLowerCase() === brand.toLowerCase();
  }


  try{
     const brand = req.query.brand;
     const filteredProducts = products.filter(product => filterByBrand(product, brand));

     if(filteredProducts.length === 0) {
       return res.status(404).json({
         message: "No products found"
       })
     }

     res.status(200).json({
       products: filteredProducts
     })
  } catch(error) {
    res.status(500).json({
      message: error.message
    })
  }
});


// filter by os

app.get('/products/filter/os', (req, res) => {
  
  function filterByOs(product, os) {
    return product.os.toLowerCase() === os.toLowerCase();
  }


  try {
    const os = req.query.os;
    const filteredProducts = products.filter(product => filterByOs(product, os));


    if(filteredProducts.length === 0) {
      return res.status(404).json({
        message: "No products found"
      })
    }

    res.status(200).json({
      products: filteredProducts
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }

})



// filter by price

app.get('/products/filter/price', (req, res) => {

  function filterByPrice(product, price) {
    return product.price === price;
  }

   try {
     const price = parseFloat(req.query.price);
     const filteredProducts = products.filter(product => filterByPrice(product, price));

     if(filteredProducts.length === 0) {
       return res.status(404).json({
         message: "No products found"
       })
     }
     res.status(200).json({
       products: filteredProducts
     })
   } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
});



// get all products

app.get('/products', (req, res) => {
  try {
    res.status(200).json({
      products
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
});




app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
