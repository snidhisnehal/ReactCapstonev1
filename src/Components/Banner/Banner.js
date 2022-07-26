import React from 'react'

const Banner = () => {
  return (
    <section>
      <div className="aem-Grid aem-Grid--12 header">
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 hero-container">
          <h1>Men’s</h1>
          <h4 className='subheader'> Outerwear</h4>
          <button className='bar' type='button'></button>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
          <img src={require('../../Images/mens_outerwear.png')} alt='Logo' aria-label='desktop-logo' className='hero-image' />
        </div>
      </div>
    </section>
  )
}

export default Banner
