import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`;
export const Form = styled.div`
  all: unset;
  width: 94vw;
  height: 94vh;
  padding: 2.5%;
  background: linear-gradient(#0b111a, #111b28);
  box-sizing: border-box;
  box-shadow: 0 5px 25px #0dc8f4;
  border-radius: 10px;
  color: white;
  letter-spacing: 0.2em;
`;
export const Heading = styled.span`
  text-align: center;
  font-family: "Inter", sans-serif;
  color: #0dc8f4;
  display: block;
  text-shadow: 0 0 0.28rem#0DC8F4;
`;

export const Input = styled.input`
  background-color: transparent;
  border-color: #0dc8f4;
  font-size: 1.2rem;
  min-width: 150px;
  color: white;
  margin-top: 0.2rem;
  margin-left: 0.8re;
  border-radius: 4px;
  padding: 0.3rem;
  transition: 0.5s;
  letter-spacing: 0.1em;
  &:hover {
    box-shadow: 0 0 2em 0 #0dc8f4;
  }
`;
export const Button = styled.button`
  margin-left: 10px;
  margin-top: 8px;
  padding: 0.5rem;
  color: #0dc8f4;
  background-color: transparent;
  border: solid 2px #0dc8f4;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 3px;
  border-radius: 0.25em;
  transition: 0.5s;
  &:hover {
    background: #0dc8f4;
    color: white;
    box-shadow: 1px 0 3.5em 0 #0dc8f4;
    text-shadow: 0 0 0.2rem white;
  }
`;
export const Table = styled.table`
  border: none;
`;
export const TD = styled.td`
  padding: 8px;
  // border: 1px solid black;
  text-align: left;
`;
export const TH = styled.th`
  font-weight: bold;
`;
