import React from 'react'
import Slider from '../Slider/Slider'
import img from '../../images/farm1.png'
import { DiscoverTitle, DiscoverContainer, DiscoverWrapper1, DiscoverWrapper2, DiscoverHead, DiscoverP1, DiscoverP2, DiscoverContentWrapper, Img} from './DiscoverElements'

const DiscoverSection = () => {
  return (
    <>
    <DiscoverContainer id="discover">
        <DiscoverTitle> Discover Our Products </DiscoverTitle>
        <DiscoverContentWrapper>
          <DiscoverWrapper1>
            <DiscoverHead>Our Soybean Partner: Brazilian Goods Direct</DiscoverHead>
            <DiscoverP1>Soybean is Brazil's most important and profitable export products. Our partner, Brazilian Goods Direct, is one of the leading exporters in Brazil and have 
              experience in exporting soy bean to South East Asian countries like Vietnam and Malaysia. As an upcoming marketing agency, we hope to make known Brazilian soy bean in Indonesia.
            </DiscoverP1>
          </DiscoverWrapper1>
          <Slider/>
        </DiscoverContentWrapper>
        <DiscoverContentWrapper>
        <Img src={img} alt='farm1'/>
          <DiscoverWrapper2>
            <DiscoverHead>Agriculture in Indonesia</DiscoverHead>
            <DiscoverP2>Indonesia is one of the largest producers and exporters of agricultural products supplying the world with products such as palm oil, 
              rubber, cocoa, coffee, rice and spices like vanilla. Soybean is considered a staple ingredient in Indonesian cuisine.  
              To leverage on Indonesia's strengths and needs, we hope to invite business partners in unlocking Indonesia's agricultural potential.
            </DiscoverP2>
          </DiscoverWrapper2>
        </DiscoverContentWrapper>
    </DiscoverContainer>
    </>
  )
}

export default DiscoverSection