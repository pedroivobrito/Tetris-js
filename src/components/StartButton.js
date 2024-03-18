import React from "react";
import { StyledStartButtom } from "./styles/StyledStartButton";

const StartButtom = ({ callback }) => (
    <StyledStartButtom onClick={callback}>Start Game</StyledStartButtom>
)

export default StartButtom;