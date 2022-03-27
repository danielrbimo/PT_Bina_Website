import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2,
TextWrapper, TextWrapper2, TopLine, TopLine2, Heading, Subtitle, BtnWrap, ImgWrap, Img, Img2} from './InfoElements'



const InfoSection = ({lightBg, id, imgStart, topLine, topLine2, topLine3, description2, description3, lightText, headLine, darkText, description, buttonLabel, img, alt, alt2, img2, primary, dark, dark2}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to="products" smooth={true} duration={500} spyt={true} exact={true} offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                        <TextWrapper2>
                            <TopLine2>{topLine2}</TopLine2>
                            <Subtitle darkText={darkText}>{description2}</Subtitle>
                        </TextWrapper2>
                    <ImgWrap>
                        <Img2 src={img2} alt={alt2}/>
                    </ImgWrap>    
                        <TextWrapper2>
                            <TopLine2>{topLine3}</TopLine2>
                            <Subtitle darkText={darkText}>{description3}</Subtitle>
                        </TextWrapper2>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection