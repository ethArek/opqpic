import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { switchTheme } from '../actions';
import { StoreState } from '../reducers';
import { Colors } from '../contants/colors';

function ThemeSwitcher() {
  const dispatch = useDispatch();
  const { activeTheme } = useSelector((state: StoreState) => state.theme);
  const themeToSet = activeTheme === 'dark' ? 'light' : 'dark';

  return (
    <Wrapper>
      <span>Dark mode</span>
      <input
        id="theme-switcher"
        type="checkbox"
        onChange={() => dispatch(switchTheme(themeToSet))}
        checked={activeTheme === 'dark'}
      />
      <label htmlFor="theme-switcher" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  right: 40px;
  text-align: center;

  @media screen and (max-width: 992px) {
    position: static;
    width: 80px;
    margin: 20px 40px 0 auto;
  }

  span {
    display: inline-block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) =>
      theme.theme === 'light' ? Colors.DARK_GRAY : Colors.WHITE};
  }

  input {
    display: none;
  }

  input:checked {
    & + label {
      background-color: ${Colors.PRIMARY};

      &::before {
        left: 50px;
      }
    }
  }

  label {
    cursor: pointer;
    display: block;
    width: 80px;
    height: 30px;
    border-radius: 30px;
    background-color: ${Colors.DARK_GRAY};
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      background-color: ${Colors.WHITE};
      border-radius: 50%;
      transition: all 0.4s;
    }
  }
`;

export default ThemeSwitcher;
