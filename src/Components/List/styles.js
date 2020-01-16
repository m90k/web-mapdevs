import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
`;

export const DevList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  list-style: none;
`;

export const DevItem = styled.li`
  background-color: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

export const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  margin-left: 15px;
`;

export const Techs = styled.span`
  color: #999;
  font-size: 0.9em;
`;

export const Username = styled.strong`
  display: block;
  text-transform: uppercase;
  line-height: 15px;
  color: #333;
`;

export const Bio = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #999;
  font-size: 0.925em;
  text-justify: distribute-all-lines;
`;

export const Link = styled.a`
  color: #7d40e7;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
`;
