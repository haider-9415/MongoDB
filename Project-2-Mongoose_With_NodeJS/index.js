const mongoose = require('mongoose')

const url = 'mongodb+srv://haider:PagalgadhA@cluster0.g1ysmjc.mongodb.net/shop?retryWrites=true&w=majority'

mongoose.connect(url)

// we will create schema
const productSchema = new mongoose.Schema({
    name : String,
    company : String,
    price : Number,
    colors : [String],
    image : String,
    category : String,
    isFeatured : Boolean
})

// data for inserting
const data1 = [
    {
    name : 'abcd4321',
    company : '19283jhdbnfurb384785',
    price : 3500,
    colors : ['#000000', '#fff444', '#cc00ff'],
    image : '/images/product-abcd.png',
    category : '947tbnghu8585gmght',
    isFeatured : true
    }
]

// now will create a model
const Product = new mongoose.model('Product', productSchema)


// now we will do crud operations
const main = async () => {
    try {

        /* to read data */
        // const data = await Product.find({price : 1999})
        // console.log(data);


        /* to insert data */
        // await Product.insertMany(data1)


        /* to update data */
        // await Product.updateOne(
        //     { name : 'abcd4321' },
        //     { $set : { price : 5000 } }
        // )


        /* to delete data */
        // await Product.deleteOne({ price : 5000 })

    } catch (error) {
        console.log(error);
    }finally {
        mongoose.connection.close()
    }
}

main()
