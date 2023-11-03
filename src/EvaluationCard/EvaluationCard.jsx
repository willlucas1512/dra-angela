import { Avatar, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const EvaluationCard = (props) => {
  return (
    <VStack
      borderRadius={"5px"}
      maxW={"400px"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      //   gap={"24px"}
      p={"32px"}
      h={"300px"}
      border={"1px solid #F0AD88"}
    >
      <Image src={"/stars.png"} />
      <Text>{props.text}</Text>
      <Avatar name={props.name} src={props.src} />
    </VStack>
  );
};

export default EvaluationCard;
