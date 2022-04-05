import React from 'react'
import TarotCard from '../TarotCard/TarotCard'



import './tarotcardcontainer-styles.css'





export const TarotCardContainer = ({Data}) => {

    return (

        <div className='tarotCardContainerMain'>


        {Data.filter(data => +data.id >=1).map((data, index) => <TarotCard key={index} {...data} /> )
        }

        </div>
    )
}
