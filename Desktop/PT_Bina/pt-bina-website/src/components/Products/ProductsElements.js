import styled from 'styled-components'


export const ProductsContainer = styled.div`
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }

`
export const VerticalLine = styled.img `
    display: inline-block;
    height: 100px;
    position: relative;
    padding-left: 35px;

    @media screen and (max-width: 390px) {
        padding-left: 10px;
    }
  `

export const BGDContain = styled.div`
    
`

export const ProductsWrapper1 = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
        padding-bottom: 20px;
    }

    @media screen and (max-width: 390px) {
        width: 370px;
        padding: 0;
        margin-right: 10px;
    }


`
export const ProductsWrapper2 = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 32px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 390px) {
        width: 370px;
        padding: 0;
        margin-right: 3px;
    }
`
export const ProductsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 300px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        width: 400px;
    }

    @media screen and (max-width: 390px) {
        width: 360px;
        margin-right: 10px;
        
    }
`

export const ProductsCard2 = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 300px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        width: 400px;
    }

    @media screen and (max-width: 390px) {
        width: 370px;
        
    }
`
export const ProductsIcon = styled.img`
    height: 100px;
    width: 100px;

    
`
export const ProductsIcon2 = styled.img`
    height: 100px;
    width: 100px;
    margin-left: 10px;

    @media screen and (max-width: 390px) {
        width: 90px;
    }
`
export const A = styled.a`
    text-decoration: none !important;
    color: black;
`

export const BgdLogo = styled.img`
height: 38px;
width: 150px;
margin-bottom: 30px;

@media screen and (max-width: 390px) {
    height: 22px;
    width: 100px;
}
`

export const ProductsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 32px;
    padding-bottom: 10px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }

`

export const ProductsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    
    
`

export const ProductsP = styled.p`
    font-size: 1rem;
    text-align: center;
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 50px;
    grid-area:  col1;

    @media screen and (max-width: 390px) {
        width: 320px;
        margin-right: 140px;
    }
    
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 50px;
    grid-area:  col2;

    @media screen and (max-width: 390px) {
        width: 370px;
        margin-right: 140px;
    }
    
`;

export const TopLine = styled.div`
    color: #86C232;
    font-size: 32px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 32px;
    text-align: center;
    padding-top: 20px;

    @media screen and (max-width: 768px) {
        line-height: 30px;

    }

    @media screen and (max-width: 390px) {
        margin-left: 25px;
    }
    
    
`;

export const TopLine2 = styled.div`
    color: #86C232;
    font-size: 32px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 32px;
    text-align: center;
    padding-top: 20px;

    @media screen and (max-width: 768px) {
        line-height: 30px;

    }

    @media screen and (max-width: 390px) {
        margin-left: 15px;
    }
    
    
`;
