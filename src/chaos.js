{data&&data.map((d)=><>
    {d.likelihood&&d.likelihood>3&&2===5&&
      <div className='card'>
      <h5>{d.country&&d.country.split(' ')[0]}</h5>
      <h5>{d.pestle&&d.pestle}</h5>
      <p>{d.title&&d.title}</p>
      <p>{d.region&&d.region}</p>
      <h5>{d.intensity&&d.intensity}</h5>
      <h5>{d.likelihood&&d.likelihood}</h5>
      </div>
    }
    <div className='card'>
    <h1>{
      d.published&&d.published.split('-')[1]>6&&d.published.split('-')[1]
    }
    </h1>
    <h1>{
     d.published&&d.published.replaceAll('-','/').replaceAll(':','/')
    }
    </h1>
</div>
</>)}