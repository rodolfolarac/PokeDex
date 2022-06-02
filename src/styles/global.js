import styled, { createGlobalStyle, css } from "styled-components";

export const ThemeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  padding: 1rem;
`;

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;

    }
    ul,ol,li{
        margin:0;
        padding: 0;
        list-style: none;
    }
    button{
        cursor: pointer;
    }
    img{
        max-width: 100%;
    }

`;

export const ThemeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  font-weight: 600;

  padding: 0 1rem;
  height: 52px;
  margin: 10px;

  ${(props) => {
    if (props.disabled) {
      return css`
        cursor: not-allowed;

        border: 2px solid gray;
        background-color: #cecece;
        opacity: calc() 0.6;
      `;
    } else {
      return css`
        border: 2pxc solid ${props.color || "red"};
        color: #000;

        &:hover {
          background: red;
          color: white;

          filter: brightness(1.1);
        }
      `;
    }
  }}
`;
