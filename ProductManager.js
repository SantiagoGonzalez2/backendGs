const fs = require ('fs');
const products = require('./products');




class ProductManager {

    constructor(filepath){
    this.filepath = filepath;
    }

    async readFile() {
        try{
            const content = await fs.promises.readFile(this.filepath, "utf-8")
            const parseContent = JSON.parse(content)

            return parseContent

        }

    
        catch(err) {
            console.log(err)

        }

        
    }

async getProducts () {
    const fileContent = await this.readFile()
    try {
        if (fileContent.lenght === 0) console.log("no hay productos");
        else console.log(fileContent)


    }
    catch(err){
        console.log("not products")
    }
}


 addProducts() {
       

    }


    async getProductsById(id){
        try {
            const fileContent = await this.readFile()
            if(!fileContent.find((obj) => obj.id === id)) throw new Error ("product whit that id not found")
            else console.log(fileContent.find((obj) => obj.id ===id))
        }
        catch(err){
            console.log("product whit that id not found")

            


        }

    }

    async updateProduct(id, obj) {
        try {
        const fileContent = await this.readFile()

        const update = fileContent.map((product) => product.id === id ? {...product, ...obj} : product)
        
        if(!fileContent.find((obj) => obj.id === id)) throw new Error ("product whit that id not found")
        
        else await fs.promises.writeFile(this.filepath, JSON.stringify(update, null, 2))

    } catch(err) {
        console.log("erorr")
    }
    }
    
    async deleteProductsById(id){
       
    const fileContent = await this.readFile()
    const productsFilter = fileContent.filter((product) => product.id !== id)

    if(!fileContent.find((obj) =>obj.id === id)) throw new Error("not product to delate")
    else await fs.promises.writeFile(this.filepath, JSON.stringify(productsFilter, null, 2))
    } catch(err) {
        console.log(err)
    }
 
    



 }




module.exports = ProductManager