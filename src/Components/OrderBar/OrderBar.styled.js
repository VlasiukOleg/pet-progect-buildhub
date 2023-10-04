import styled from 'styled-components';


export const OrderWrap = styled.div`
display: flex;
align-items: center ;
justify-content: space-between;
height: 50px;
margin-top: 20px;
padding: 5px 30px;
color: #ffffff;
background-color: #5F9EA0;
border-radius: 10px;
`

export const WeightWrap = styled.div`
display: flex;
align-items: center ;
justify-content: center;
padding: 5px;
border-radius: 5px;
background-color: #ffffff;
color: #696969;

span {
    font-weight: 700;
    margin-left: 5px;
}
`
export const TotalPriceWrap = styled.div`
display: flex;
align-items: center ;
justify-content: center;

span {
    display: inline-block;
    font-weight: 700;
    margin-left: 5px;
    padding: 5px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #696969;
}

`

export const Sum = styled.div`
margin-left: 2px;
font-size: 18px;`
