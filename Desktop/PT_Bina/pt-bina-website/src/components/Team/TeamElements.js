import styled from 'styled-components'

export const TeamsContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #86C232 45%, grey);
    min-height: 100vh;
    position: relative;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`
export const TeamsH1 = styled.h1`
    font-size: 2.5rem;
    color: #black;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
}
`
export const TeamsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-grap: 10px;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    margin: 40px 0;

    @media screen and (max-width: 1200px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 390px){
        width: 380px;
    }
    
`
export const TeamsCard = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    background: rgba(255, 255, 255, 0.05);
    margin: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);

    @media screen and (max-width: 1200px){
        width: 300px;
        height: 350px;
    }

    @media screen and (max-width: 580px){
        width: 200px;
        height: 350px;
    }

    @media screen and (max-width: 390px){
        width: 155px;
    }
`

export const TeamsContent = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0.5;
    transition: 0.5s;

    &:hover {
        opacity: 1;

    }


    
`

export const Imgbx = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 10px solid rgba(0,0,0,0.25);


`

export const Icons = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const TeamsName = styled.h3`
    color: black;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    margin: 20px 0 10px;
    line-height: 1.1em;

`
export const TeamsJob = styled.span`
    font-size: 12px;
    font-weight: 600;
    text-transform: initial;
    text-align: center;
`
export const Contentbx = styled.div`
    text-align: center;
`;

export const Links = styled.ul`
    position: absolute;
    bottom: 50px;
    display: flex;
`;

export const Link = styled.li`
    list-size: none;
    margin: 0 10px;
    transform: translate(40px);
    transition: 0.5s;
    opacity: 0;

    &:hover {
        transform: translateY(0px);
        opacity: 1;
    }

`

export const A = styled.a`
    color: #fff;
    font-size: 24px;
`

export const Instagram = styled.i`
    color: #fff;
    font-size: 24px;
`