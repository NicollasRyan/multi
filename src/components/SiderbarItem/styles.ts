import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
  cursor: pointer;
`;

export const LinkSideber = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Info = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 18px;
  color: #fff;
`;

export const Description = styled.div`
  text-align: right;
  font-size: 13px;
  color: #b8b8d4;
`;

export const IconArea = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#25CD89" : "#494A7C")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;
