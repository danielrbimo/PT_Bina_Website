import React from "react";
import styled from 'styled-components'

export const DiscoverContainer = styled.div`
    height: 1150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(to right, #86C232 45%, grey);

    @media screen and (max-width: 900px) {
        height: 1050px;
    }

    @media screen and (max-width: 1000px) {
        height: 1100px;
    }

    @media screen and (max-width: 768px) {
        height: 1400px;
    }

`


export const DiscoverImg = styled.img`
    width: 6em;
    height: 6em;
`

export const DiscoverWrapper1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    display: block;
    width: 400px;
    padding-right: 60px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 1000px) {
        width: 350px;
        padding-bottom: 100px;
    }

    @media screen and (max-width: 900px) {
        width: 350px;
        padding-bottom: 40px;
        
    }

    @media screen and (max-width: 768px) {
        width: 450px;
        text-align: center;
        padding-bottom: 0px;
        margin-bottom: -70px;
    }

`

export const DiscoverWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    display: block;
    width: 400px;
    padding-left: 60px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (max-width: 1000px) {
        width: 350px;
    }

    @media screen and (max-width: 768px) {
        width: 450px;
        text-align: center;
        margin-bottom: -70px;
        padding-left: 0px;
    }

`

export const DiscoverHead = styled.div`
    font-size: 28px;
    color: black;
    font-weight: 700;
    padding-bottom: 20px;

    @media screen and (max-width: 768px) {
        width: 450px;
        text-align: center;
    }

`

export const DiscoverP1 = styled.div`
    font-size: 19px;
    text-align: left;
    color: black;

    @media screen and (max-width: 768px) {
        width: 450px;
        text-align: center;
    }
`

export const DiscoverP2 = styled.div`
    font-size: 19px;
    text-align: left;
    color: black;

    @media screen and (max-width: 768px) {
        width: 450px;
        text-align: center;
    }
`

export const DiscoverTitle = styled.div`
    font-size: 2.5rem;
    color: #black;
    padding-bottom: 30px;
    padding-top: 85px;

    @media screen and (max-width: 768px) {
        width: 450px;
        text-align: center;
    }

`

export const DiscoverContentWrapper = styled.div`
    display: flex;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 20px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        grid-template-columns: 1fr;
    }
`

export const Img = styled.img`
    width: 450px;
    height: 450px;
    padding-left: -20;

    @media screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }
`