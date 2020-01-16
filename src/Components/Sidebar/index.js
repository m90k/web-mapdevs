import React, { useState, useEffect } from "react";
import Api from "./../../Services/Api";
import {
  Wrapper,
  Form,
  GroupBlock,
  Group,
  TitleForm,
  Label,
  Input,
  Button
} from "./styles";

export default function Sidebar() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.log(error);
      },
      { timeout: 3000 }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await Api.post("/devs", {
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername("");
    setTechs("");

    console.log(response);
  }

  return (
    <Wrapper>
      <TitleForm>Cadastrar</TitleForm>
      <Form onSubmit={handleSubmit}>
        <GroupBlock>
          <Label htmlFor="github_username">Usuario do Github</Label>
          <Input
            name="github_username"
            id="github_username"
            placeholder="Username do Github"
            required
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
          />
        </GroupBlock>

        <GroupBlock>
          <Label htmlFor="techs">techs</Label>
          <Input
            name="techs"
            id="techs"
            required
            placeholder="Tecnologias de sua skills "
            value={techs}
            onChange={e => setTechs(e.target.value)}
          />
        </GroupBlock>

        <Group>
          <GroupBlock>
            <Label htmlFor="latitude">latitude</Label>
            <Input
              name="latitude"
              id="latitude"
              required
              placeholder="sua latitude"
              disabled
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
            />
          </GroupBlock>

          <GroupBlock>
            <Label htmlFor="longitude">longitude</Label>
            <Input
              name="longitude"
              id="longitude"
              required
              placeholder="sua longitude"
              disabled
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
            />
          </GroupBlock>
        </Group>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Wrapper>
  );
}
