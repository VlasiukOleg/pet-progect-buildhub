import { OrderWrap } from "./OrderBar.styled"

export const OrderBar = ({weight, total}) => {


    return (
        < OrderWrap>
            <div>Всього товарів: 1</div>
            <div>Вага замовлення: {weight} кг</div>
            <div>Сума замовлення: {total} грн.</div>
        </OrderWrap>
    )
}