const express = require("express")
const app = express()

require("dotenv").config()
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error=>  console.log(error))
db.once('open', ()=> console.log('connection DataBase'))

// require folder database
const Data = require('./models/Data')


// all api you need
// get one    ==> GET
// app.get('/:id', (req, res)=>{
//     res.send("nikita")
// })



// get All    ==> GET
app.get('/a', async (req, res)=>{
    try {
        const AllData = await Data.find()
        res.send(AllData)
    } catch (error) {
        console.log(error)   
    }
})



// create one ==> POST
app.post('/p', (req, res)=>{
    const Companys = new Data({
        aze : req.body.aze
    })
    try {
        const newCompany = Companys.save()
        res.status(201).json(newCompany)
        
    } catch (error) {
        res.status(400)
    }
})



// delete one ==> DELETE
app.delete('/:id', (req, res)=>{

})




// update one ==> PUT

app.patch('/', (req, res)=>{

})





















// const Companys = mongoose.model('Companys', { name: String });

// const comapany = ["google", "facebook", "appel", "amazoun"]
// app.get('/', (req, res)=>{
//     Companys.find({}, (err, comp)=>{
//         if (err) {
//             console.log("ererer")
//         } else {
//             res.json(comp)
//         }
//     })
    
// })

app.listen(3000, 
    
    console.log("helllow ya zebi")
    )