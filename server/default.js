

import { products } from "./constansts/data.js";
import product from "./model/product_schema.js";


const DefaultData = async () => {
    try {

        await product.insertMany(products)
        console.log("Data inserted successfully")

    }
    catch (error) {
        console.log("error while inserting the data", error)

    }
}

export default DefaultData