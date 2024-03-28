import { Logo, Nav, PhoneLink, MainLink } from './Navigation.styled';

import { FcPhoneAndroid } from 'react-icons/fc';
import { PiBuildingsDuotone } from 'react-icons/pi';

export const Navigation = () => {
  return (
    <>
      <Logo to="/">
        <PiBuildingsDuotone />
        Build<span>Hub</span>
      </Logo>
      <Nav>
        <ul>
          <li>
            <MainLink to="/materials">Матеріали</MainLink>
          </li>
          <li>
            <MainLink>О проекті</MainLink>
          </li>
          <li>
            <MainLink>Контакти</MainLink>
          </li>
        </ul>
      </Nav>
      <PhoneLink to="tel:+380632790437">
        <FcPhoneAndroid size="24px" />
        (063) 279 04 37
      </PhoneLink>
    </>
  );
};
