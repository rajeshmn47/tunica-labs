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
    

    module.exports = mongoose.model("storedata",storedata);