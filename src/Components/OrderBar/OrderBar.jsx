import { OrderWrap } from "./OrderBar.styled"

import { IoPricetagsOutline } from "react-icons/io5";
import { TbWeight} from "react-icons/tb";


export const OrderBar = ({weight, total}) => {


    return (
        < OrderWrap>
            <div>Всього товарів: 1</div>
            <div><TbWeight size='24px'/> Вага замовлення: {weight} кг</div>
            <div><IoPricetagsOutline size='24px'/> Сума замовлення: {total} грн.</div>
        </OrderWrap>
    )
}