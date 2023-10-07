const express = require("express")
const app = express()

require("dotenv").config()
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error=>  console.log(error))
db.once('open', ()=> console.log('Happy Connection succesfull with mongodb'))

// require folder database
const Data = require('./models/Data')


// all api you need
// get one    ==> GET
app.get('/ab/:id', getDatayId, async (req, res)=>{
    // res.send(req.AllData.aze)
    try {
      res.send(req.params.id)
      
    } catch (error) {
        send(error)
    }
})



// get All    ==> GET
app.get('/a/get',  async (req, res)=>{
    try {
        const AllData = await Data.find()
        res.send(AllData)
    } catch (error) {
        console.log(error)   
    }
})



// create one ==> POST
app.post('/a/post', async (req, res)=>{

    const Companys = new Data({
        aze: "google ",
      })
      try {
        const newCompanys = Companys.save()
        res.status(201).json(newCompanys)
        res.send(newCompanys)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})



// delete one ==> DELETE
app.delete('delete/:id', getDatayId, async (req, res)=>{
    res.datas.remove()

})




// update one ==> PUT

// app.patch('/', (req, res)=>{

// })


async function getDatayId(req, res, next) {
  let datas
    try {
      const datas = await Data.findById(req.params.id)
      if (datas == null) {
          return res.status(404).json({message: " makanch DATA "})
      }

    } catch (error) {
          return res.status(500).json({message : error.message})
    }

    res.datas = datas
    next()
}
app.listen(3000, 
    
    console.log("Happy server start succesfull")
    )