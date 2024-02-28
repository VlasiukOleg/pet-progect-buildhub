import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import {
  CategoryWrap,
  CategoryInnerWrap,
  CategoryNumber,
  CategoryTitle,
  ToogleCategoryBtn,
} from './CategoryBar.styled';

export const CategoryBar = ({
  number,
  title,
  isCategoryOpen,
  index,
  onCategoryOpen,
}) => {
  return (
    <CategoryWrap>
      <CategoryInnerWrap>
        <CategoryNumber>{number}</CategoryNumber>
        <CategoryTitle>{title}</CategoryTitle>
      </CategoryInnerWrap>
      <ToogleCategoryBtn onClick={() => onCategoryOpen(index)} type="button">
        {!isCategoryOpen ? 'Розгорнути' : 'Згорнути'}
        {!isCategoryOpen ? (
          <BiSolidDownArrow size="18px" />
        ) : (
          <BiSolidUpArrow size="18px" />
        )}
      </ToogleCategoryBtn>
    </CategoryWrap>
  );
};
