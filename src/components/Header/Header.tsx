import { HeaderButton, HeaderContainer, HeaderLink, HeaderToggle, HeaderWrapper } from "./Header.styled";
import { useDispatch } from "react-redux";
import { toggleThemeAction } from "../../features/themeList";


export const Header = () => {
  const dispatch = useDispatch()

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLink to="/">ToDo</HeaderLink>
        <HeaderLink to="/list">List</HeaderLink>

        <HeaderToggle>
          <HeaderButton onClick={() => dispatch(toggleThemeAction())}>Theme</HeaderButton>
        </HeaderToggle>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
