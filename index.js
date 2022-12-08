const products = []

class ProductManager {
    
    static id = 1
    
    constructor (title, description, price, thumbnail, code, stock){
       
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
         ProductManager.id
        

    }
    addProducts() {
     
      
    

      
        let product= ({
            title: this.title,
            description: this.description,
            price: this.price,
            thumnail: this.thumbnail,
            code: this.code,
            stock: this.stock,
            id:ProductManager.id
            
          
        })
         
        const verifyCode = products.find(element => element.code === product.code)
         
        if(verifyCode) {
            console.log("ERR")
        }
        else {
            products.push(product)
            ProductManager.id++
            
        }
        

    
       
        
      
      
    }

  

}

const getProducts = () =>  {

    console.log(products)

}




const getProductsById = (id) => {

    const search = products.find(product => product.id === id)

  if (search == undefined) {
    console.log( "There are no products with that code.")
  }
  else {
    console.log(search)
  }
}






const yerba = new ProductManager("yerba", "rica", 22, "img", 3, 3)

const cafe = new ProductManager("dolca", "fuerte", 33, "img", 4, 2)


yerba.addProducts()

cafe.addProducts()

getProducts()

getProductsById(2)
