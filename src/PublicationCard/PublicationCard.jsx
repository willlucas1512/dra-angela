import { Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

const PublicationCard = (props) => {
  return (
    <VStack
      mr={"16px"}
      bg={"#fff"}
      borderRadius={"5px"}
      maxW={"400px"}
      h={"350px"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      p={"32px"}
    >
      <Text
        color={"#E77C40"}
        fontFamily={"Montserrat"}
        fontSize={"16px"}
        fontStyle={"normal"}
        fontWeight={"700"}
        lineHeight={"24px"}
        letterSpacing={"0.1px"}
      >
        {props.title}
      </Text>
      <Link
        href={props.link}
        color={"#2f2f2f"}
        fontFamily={"Montserrat"}
        fontSize={"16px"}
        fontStyle={"normal"}
        fontWeight={"500"}
        lineHeight={"24px"}
        letterSpacing={"0.1px"}
      >
        {props.revista}
      </Link>
    </VStack>
  );
};

export default PublicationCard;
