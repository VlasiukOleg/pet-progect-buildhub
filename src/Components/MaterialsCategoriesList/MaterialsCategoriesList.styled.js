import styled from 'styled-components';


export const CategoryWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
`

export const CategoryInnerWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

export const CategoryNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #5F9EA0;
    color:  #FFFFFF;
    font-weight: 500;
    margin-right: 10px;
`

export const CategoryTitle = styled.div`
    color: #696969;
    font-weight: 500;
`


export const MaterialsWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ImgWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 150px;
height: 150px;
border-radius: 5px;
border: 1px solid #5F9EA0;
overflow: hidden;
`

export const InfoWrap = styled.div`
max-width: 500px;

h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

p {
    font-size: 14px;
    margin-bottom: 10px;
    color: #696969;
}

`


export const Price = styled.div`
font-size: 20px;
font-weight: 500;
`

export const IncreaseBtn = styled.button`
    width: 24px;
    height: 24px;
    border-radius: 2px;
    background-color: #5F9EA0;
    font-weight: 700;
    color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
`

export const DecreaseBtn = styled.button`
    width: 24px;
    height: 24px;
    font-weight: 700;
    border-radius: 2px;
    background-color: #5F9EA0;
    color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;

`

export const Input = styled.input`
    max-width: 60px;
    font-size: 32px;
    outline: none;
    border: none;
    text-align: center;

    
`


export const QuantityWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`