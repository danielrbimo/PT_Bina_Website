import styled from 'styled-components'

export const FormContainer = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #444442;

`


export const FormContain = styled.div`
align-items: center;
justify-content: center;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
`

export const Submit = styled.div`
float: right;
padding: 7px 35px;
border-radius: 60px;
display: inline-block;
background-color: #4b8cfb;
color: white;
font-size: 18px;
cursor: pointer;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
          0 2px 10px 0 rgba(0,0,0,0.07);
-webkit-transition: all 300ms ease;
transition: all 300ms ease;

    &:hover{
        transform: translateY(1px);
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
        0 1px 1px 0 rgba(0,0,0,0.09);
    }
`


export const StyledInput = styled.div`
float: left;
width: 293px;
margin: 1rem 0;
position: relative;
border-radius: 4px;
width: 650px;
max-width: 100%;


`

export const Input = styled.input`
padding: 30px;
border: 0;
width: 100%;
font-size: 1rem;
background-color: #2d2d2d;
color: white;
border-radius: 4px;

    &:focus {
    outline: none;
  }
`

export const InputButton = styled.input`
float: right;
padding: 7px 35px;
border-radius: 60px;
display: inline-block;
background-color: #86C232;
color: white;
font-size: 18px;
cursor: pointer;
box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
          0 2px 10px 0 rgba(0,0,0,0.07);
-webkit-transition: all 300ms ease;
transition: all 300ms ease;

    &:hover{
        transform: translateY(1px);
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
        0 1px 1px 0 rgba(0,0,0,0.09);
    }


`

export const Label = styled.label`
color: #999;
padding: 1.3rem 30px 1rem 30px;
position: absolute;
top: 10px;
left: 0;
-webkit-transition: all 0.25s ease;
transition: all 0.25s ease;
pointer-events: none;

input:focus ~ &,
input:not(:placeholder-shown).input:not(:focus) ~ .label,
input:valid ~ & {
    font-size: 0.75em;
    color: #999;
    top: -5px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
}


`

export const Textarea = styled.textarea`
width: 100%;
min-height: 15em;
width: 100%;
font-size: 1rem;
background-color: #2d2d2d;
color: white;
border-radius: 4px;
padding: 30px;
border: 0;

&:focus {
    outline: none;
  }
`

export const Label2 = styled.label`
color: #999;
padding: 1.3rem 30px 1rem 30px;
position: absolute;
top: 10px;
left: 0;
-webkit-transition: all 0.25s ease;
transition: all 0.25s ease;
pointer-events: none;

textarea:focus ~ &,
textarea:not(:placeholder-shown).textarea:not(:focus) ~ .label,
textarea:valid ~ & {
    font-size: 0.75em;
    color: #999;
    top: -5px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
}


`
export const H1 = styled.h1`
font-family: 'Poppins', sans-serif, 'arial';
font-weight: 600;
font-size: 72px;
color: white;

`

export const H4 = styled.h4`
font-family: 'Roboto', sans-serif, 'arial';
font-weight: 400;
font-size: 20px;
color: #9b9b9b;
line-height: 1.5;


`


export const InputContainer = styled.div`
width: 650px;
max-width: 100%;
margin: 20px auto 25px auto;

@media screen and (max-width: 768px) {
    width: 400px;
}

@media screen and (max-width: 768px) {
    width: 350px;
}
`
