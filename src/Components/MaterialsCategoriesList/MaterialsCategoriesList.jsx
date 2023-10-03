import { CategoryWrap, CategoryNumber, CategoryTitle, CategoryInnerWrap, MaterialsWrap} from "./MaterialsCategoriesList.styled"
import mp75 from '../../images/mp75.jpg'

export const MaterialsCategoriesList = () => {
    return (
        <>
            <CategoryWrap>
                <CategoryInnerWrap>
                    <CategoryNumber>1</CategoryNumber>
                    <CategoryTitle>Штукатурка гіпсова машиного та ручного нанесення</CategoryTitle>
                </CategoryInnerWrap>
                <button type="button">Свернуть</button>
            </CategoryWrap>
            <MaterialsWrap>
                <img src={mp75} alt="" width={200} height={200}/>
                <div>
                    <h2>KNAUF MP-75 (КНАУФ МП 75)</h2>
                    <p>Knauf MP 75, штукатурка гіпсова машинного нанесення застосовується для штукатурення різних мінеральних поверхонь, як правило, машинним способом. У кінцевому результаті отримаємо міцний шар, який в подальшому може бути оброблений декоративною штукатуркою або цементної шпаклівкою.</p>
                    <p>Цена: 299 грн.</p>
                </div>
                <div>
                    <button>-</button>
                    <input type="text"/>
                    <button>+</button>
                </div>
                <div>
                    0,00 грн.
                </div>
                
            </MaterialsWrap>
            
        </>
        
    )
}