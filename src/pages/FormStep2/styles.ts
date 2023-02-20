import { Link } from "react-router-dom";
import styled from "styled-components";

export const Conatiner = styled.div``;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #16195c;
  gap: 20px 10px;
  padding-bottom: 25px;
`;

export const Step = styled.p`
  font-size: 13px;
  color: #b8b8d4;
`;

export const Title = styled.h1`
  font-size: 26;
`;

export const Description = styled.div``;

export const Label = styled.label`
  display: block;
  margin-top: 20px;
  font-size: 13px;
`;

export const Input = styled.input`
  margin-top: 7px;
  box-sizing: border-box;
  width: 100%;
  padding: 20px 10px;
  border: 2px solid #25cd89;
  border-radius: 10px;
  color: #fff;
  outline: 0;
  font-size: 15px;
  background-color: #02044a;
`;

export const Back = styled(Link)`
  text-decoration: none;
  background-color: #25cd89;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 20px 40px;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 30px;
  margin-right: 20px;
`;

export const Button = styled.button`
  background-color: #25cd89;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 20px 40px;
  border: 0;
  border-radius: 30px;
  cursor: pointer;
  margin-top: 30px;
`;
