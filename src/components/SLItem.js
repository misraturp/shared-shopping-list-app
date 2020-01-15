import React from 'react';

const SLItem = ({id, name, slCLicked, image_url}) => {
  return(
          <main onClick={()=>slCLicked(id)} className="mw6 center pointer dim black">
              <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                <div className="dtc w2 w3-ns v-mid">
                  <img src={image_url} alt='list' className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                </div>
                <div className="dtc v-mid pl3">
                  <h1 className="f6 f5-ns fw6 lh-title black mv0">{name} </h1>
                </div>
                <p className='tr moon-gray'> x </p>
              </article>
            </main>
      )

}

export default SLItem;

