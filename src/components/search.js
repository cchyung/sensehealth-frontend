import styled from 'styled-components';

import SearchIconSVG from "../assets/search_icon.svg";

const Search = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  padding: 24px 85px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 56, 128, 0.1);
  background-image: url(${SearchIconSVG});
  background-repeat: no-repeat;
  background-width: 40px;
  background-height: 40px;
  background-position: 50px 24px;

  &::placeholder {
    color: #C2CFE0;
  }
`;

export default Search;