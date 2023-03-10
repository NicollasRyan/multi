import styled from "styled-components";

export const Conatiner = styled.div<{ selected: boolean }>`
  display: flex;
  border: 2px solid ${(props) => (props.selected ? "#15cd89" : "#16295c")};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 2px solid #fff;
  }
`;

export const Icon = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #191a59;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

export const Ifon = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #b8b8d4;
`;
