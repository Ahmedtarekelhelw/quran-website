import React from "react";
import { Button, Stack } from "react-bootstrap";
import "./style.scss";
const CardGreeting = ({ header, paragraph, btntext }) => {
  return (
    <Stack>
      <h3>{header}</h3>
      <p className="text-muted">{paragraph}</p>
      <Button>{btntext}</Button>
    </Stack>
  );
};

export default CardGreeting;
