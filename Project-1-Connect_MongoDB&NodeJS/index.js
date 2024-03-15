const {MongoClient} = require('mongodb')

const url = "mongodb://127.0.0.1"

const client = new MongoClient(url)

const data1 = {
    name : 'abcdefgh',
    company : 'ahsgtr73gdbfje909',
    price : 3466,
    colors : ['#000000', '#cc44ff', '#663342'],
    image : "/image/product-qwer.png",
    category : '8364ghdgb84850rjfnb',
    isFeatured : true

}

const main = async () => {
    await client.connect()
    const db = client.db("shop")
    const collection =  db.collection('products')
    // await collection.insertOne(data1)
    const data = await collection.find({ price : {$eq : 3466} }).toArray()
    console.log(data);
    return "Done :)"

}

main()
    .then(console.log())
    .catch((e) => console.log(e))
    .finally(() => client.close())


