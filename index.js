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
            thumbnail: this.thumbnail,
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
        if (!product.title || !product.description || !product.price ||

            !product.thumbnail || !product.code || !product.stock) {
  
          throw new Error("All fields are required");
  
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


const onePhone = new ProductManager("Samsung", "22 ULTRA", 1000, "img", 3, 4)

const twoPhone = new ProductManager( "Iphone", "14 PLUS", 1500, "img", 4, 2)


onePhone.addProducts()

twoPhone.addProducts()

getProducts()

getProductsById(2)
