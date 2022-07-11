const puppeteer = require('puppeteer');
const puppeteerdd = require('./koti.json');
var express = require('express')
var app = express()
const mongoose=require('mongoose');
const Data= require('./data')
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
const url = 'http://localhost:3000'
const krl = 'https://stackoverflowclonefrontend.netlify.app'
app.use(cors({ origin: url, credentials: true }))

const uri ='mongodb+srv://rajeshmn47:uni1ver%40se@cluster0.bpxam.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const kri='mongodb://127.0.0.1:27017'

mongoose.Promise = global.Promise
mongoose.connect(
  kri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    if (error) {
      console.log('Error!' + error)
    }
  }
)
console.log(puppeteerdd.length)
async function storedata(){
  for(i=0;i<puppeteerdd.length-1;i++){
      console.log(puppeteerdd[i].likelihood)
      const da=Data({
        end_year: puppeteerdd[i].end_year,
        intensity:    puppeteerdd[i].intensity,
        sector: puppeteerdd[i].sector,
        topic: puppeteerdd[i].topic,
        insight: puppeteerdd[i].insight,
        url: puppeteerdd[i].url,
        region: puppeteerdd[i].region,
        start_year:puppeteerdd[i].start_year,
        impact: puppeteerdd[i].impact,
        added: puppeteerdd[i].added,
        published: puppeteerdd[i].published,
        country: puppeteerdd[i].country,
        relevance: puppeteerdd[i].relevance,
        pestle: puppeteerdd[i].pestle,
        source: puppeteerdd[i].source,
        title: puppeteerdd[i].title,
        likelihood: puppeteerdd[i].likelihood,
      })
      await da.save()
  }
  }

app.get('/', async function (req, res) {
  const d = await Data.find()
  res.status(200).json({
    data: d,
  })
})


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`)
})