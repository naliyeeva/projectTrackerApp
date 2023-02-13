import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)`
  margin-right: 10px;
  border-radius: 5px;
  padding: 8px 12px;
  background-color: #E0E0E0;
  background-image: linear-gradient(to bottom right, #FBF0F0, #DFD3D3, #B8B0B0, #7C7575);
  text-decoration: none;
  &:visited {
    color: #212121;
  }
`
