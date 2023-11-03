import { HStack, Text } from "@chakra-ui/react";
import React from "react";

const ConsultaStep = (props) => {
  return (
    <HStack>
      <Text
        fontFamily={"'PT Serif', serif"}
        color={"rgba(231, 124, 64, 0.50)"}
        fontSize={"104px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"57px"}
        letterSpacing={"0.2px"}
      >
        {props.number}
      </Text>
      <Text
        maxW={"300px"}
        color={"#000"}
        fontFamily={"Montserrat"}
        fontSize={"14px"}
        fontStyle={"normal"}
        fontWeight={"500"}
        lineHeight={"30px"}
        letterSpacing={"0.2px"}
      >
        {props.text}
      </Text>
    </HStack>
  );
};

export default ConsultaStep;
