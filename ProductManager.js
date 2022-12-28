const fs = require('fs');


const products = []


class ProductManager {

    static id = 1

    constructor(title, description, price, thumbnail, code, stock) {
        this.filepath = 'data.json';
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
         ProductManager.id
    }

    async readFile() {
        try {
            const content = await fs.promises.readFile(this.filepath, "utf-8")
            const parseContent = JSON.parse(content)

            return parseContent

        }


        catch (err) {
            console.log(err)

        }


    }

    async getProducts() {
        // const fileContent = await this.readFile()
        // try {
        //     if (fileContent.lenght === 0) console.log("no hay productos");
        //     else 
        //      console.log(fileContent)


        // }
        // catch (err) {
        //     console.log("not products")
        // }
        return JSON.parse(fs.readFileSync(this.filepath, "utf-8"))
    }

    async checkCode(code) {
        const fileContent = await this.readFile();
        return fileContent.find((obj) => obj.code === code)

    }


     addProducts() {
        const fileContent =  this.readFile()
        
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

            console.log(products)
        }
        if (!product.title || !product.description || !product.price ||

            !product.thumbnail || !product.code || !product.stock) {
  
          throw new Error("All fields are required");
  
        }
            
    }

    guardaEnArchivo(){
        try{
            fs.writeFileSync(this.filepath, JSON.stringify(products));
    
        }catch(err){
            throw new Error (err);
    
        }
    
    }
    
        

                

    async getProductsById(id) {
        try {
            const fileContent = await this.readFile()
            if (!fileContent.find((obj) => obj.id === id)) throw new Error("product whit that id not found")
            else console.log(fileContent.find((obj) => obj.id === id))
        }
        catch (err) {
            console.log("product whit that id not found")




        }

    }

    async updateProduct(id, obj) {
        try {
            const fileContent = await this.readFile()

            const update = fileContent.map((product) => product.id === id ? { ...product, ...obj } : product)

            if (!fileContent.find((obj) => obj.id === id)) throw new Error("product whit that id not found")

            else await fs.promises.writeFile(this.filepath, JSON.stringify(update, null, 2))

        } catch (err) {
            console.log("erorr")
        }
    }

    async deleteProductsById(id) {

        const fileContent = await this.readFile()
        const productsFilter = fileContent.filter((product) => product.id !== id)

        if (!fileContent.find((obj) => obj.id === id)) throw new Error("not product to delate")
        else await fs.promises.writeFile(this.filepath, JSON.stringify(productsFilter, null, 2))
    } 




}




module.exports = ProductManager