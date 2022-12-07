const products = []

class ProductManager {
    
    
    constructor (title, description, price, thumbnail, code, stock, newId){
       
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        

    }
    addProducts() {
     
      
    

      
        let product= ({
            title: this.title,
            description: this.description,
            price: this.price,
            thumnail: this.thumbnail,
            code: this.code,
            stock: this.stock,
          
        })
         
         
        products.push(product)
        

    
       
        
      
      
    }

  

}

const getProducts = () =>  {

    console.log(products)

}




const getProductsByCode = (code) => {

    const search = products.find(product => product.code === code)

  if (search == undefined) {
    console.log( "There are no products with that code.")
  }
  else {
    console.log(search)
  }
}

const isInProducts = (code) => {
    products.find (prod => prod.code === code)
}




const yerba = new ProductManager("yerba", "rica", 22, "img", "3", 3)

const cafe = new ProductManager("dolca", "fuerte", 33, "img", "3", 2)


yerba.addProducts()

cafe.addProducts()

getProducts()





