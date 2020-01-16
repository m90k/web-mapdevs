import styled from "styled-components";

export const Wrapper = styled.aside`
  background-color: #fff;
  width: 320px;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 30px 20px;
  margin-right: 15px;
`;

export const TitleForm = styled.strong`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.25em;
  color: #333;
  display: block;
`;

export const Form = styled.form`
  margin-top: 30px;
`;

export const Group = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
`;

export const GroupBlock = styled.aside`
  display: block;
`;

export const Label = styled.label`
  font-size: 0.8em;
  font-weight: bold;
  color: #acacac;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 0.9em;
  border: 0;
  border-bottom: 1px solid #333;
  border-radius: 4px;
  padding: 5px;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #7d40e7;
  text-transform: uppercase;
  margin-top: 30px;
  font-weight: bold;
  font-size: 1em;
  color: #fff;
  padding: 5px;
  cursor: pointer;
  transition: background 0.5s;
  &:hover {
    background: #6931ca;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
`;
