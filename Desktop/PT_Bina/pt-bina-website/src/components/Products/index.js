import React from 'react'
import Icon1 from '../../images/soybean.png'
import Icon2 from '../../images/coffee-beans.png'
import Icon3 from '../../images/vanilla.png'
import line from '../../images/Vertical-Line.png'
import bgd from '../../images/bgd_logo.png'
import { ProductsContainer, ProductsH1, A, ProductsWrapper1, ProductsWrapper2, ProductsCard, ProductsCard2, ProductsIcon, ProductsIcon2, ProductsH2, ProductsP, Column1, Column2, TopLine, TopLine2, VerticalLine, BGDContain, BgdLogo} from './ProductsElements'



const ProductSection = () => {
  return (
    <ProductsContainer id="products">
        <ProductsH1>Our Products</ProductsH1>
        <ProductsWrapper1>
            <TopLine>Imported Products</TopLine>
            <A href='https://braziliangoodsdirect.com/' target="_blank">
            <ProductsCard2>
                <BGDContain>
                <ProductsIcon2 src={Icon1}/>
                <VerticalLine src={line}/>
                <BgdLogo src={bgd}/>
                </BGDContain>
                <ProductsH2>Soy Bean</ProductsH2>
                <ProductsP>Premium Quality Brazilian Soy Beans and Soy Bean Products like Soy Bean Meal and Soy Bean Oil.</ProductsP>
            </ProductsCard2>
            </A>
        </ProductsWrapper1> 
        <TopLine2>Exported Products</TopLine2>
        <ProductsWrapper2>
            <ProductsCard>
                <ProductsIcon src={Icon2}/>
                <ProductsH2>Coffee Bean</ProductsH2>
                <ProductsP>High Quality Indonesian Coffee Beans.</ProductsP>
            </ProductsCard>
            <ProductsCard>
                <ProductsIcon src={Icon3}/>
                <ProductsH2>Vanilla Bean</ProductsH2>
                <ProductsP>High Quality Indonesian Vanilla Beans.</ProductsP>
            </ProductsCard>
        </ProductsWrapper2> 
    </ProductsContainer>
  )
}

export default ProductSection