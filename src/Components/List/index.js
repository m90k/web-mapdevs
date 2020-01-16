import React, { useState, useEffect } from "react";
import Api from "./../../Services/Api";

import {
  Container,
  DevList,
  DevItem,
  Header,
  Avatar,
  UserInfo,
  Username,
  Techs,
  Bio,
  Link
} from "./styles";

export default function List() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await Api.get("/devs");
      setDevs(response.data);
    }

    loadDevs();
  }, [devs]);

  return (
    <Container>
      <DevList>
        {devs.map(dev => (
          <DevItem key={dev._id}>
            <Header>
              <Avatar src={dev.avatar_url} />
              <UserInfo>
                <Username>{dev.name}</Username>
                <Techs>{dev.techs.join(" / ")}</Techs>
              </UserInfo>
            </Header>
            <Bio>{dev.bio}</Bio>
            <Link
              target="_blank"
              href={`https://github.com/${dev.github_username}`}
            >
              Acessar Perfil
            </Link>
          </DevItem>
        ))}
      </DevList>
    </Container>
  );
}
