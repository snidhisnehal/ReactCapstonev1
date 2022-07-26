import React from 'react'
import { List3 } from '../Data/data'

const lowerfooter = () => {
  return (
      <>
      <hr/>
    <footer className="aem-Grid aem-Grid--12 aem-Grid--phone--12 container sub-footer">
            {
            List3.map((curElm) => {
          return (
            <>
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12  logo-align"><img src={curElm.Logo2} alt='Logo' className='phn-logo' />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 info">
                <p>{curElm.text}</p>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 details">
                <ul>
                    <li>{curElm.list31}</li>
                    <li>{curElm.list32}</li>
                </ul>
            </div>
              </>
              )
            })
        }

        </footer>
      </>

  )
}

export default lowerfooter
