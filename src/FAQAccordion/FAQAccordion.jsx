import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";
import React from "react";

const FAQAccordion = (props) => {
  return (
    <AccordionItem
      boxShadow={"base"}
      mb={"16px"}
      border={"none"}
      borderRadius={"5px"}
      bg={"#fff"}
      w={"100%"}
    >
      <AccordionButton
        borderBottom={"1px solid #2f2f2f"}
        borderBottomRadius={"5px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text
          color={"#2f2f2f"}
          textAlign={"left"}
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={"700"}
          lineHeight={"24px"}
          letterSpacing={"0.1px"}
        >
          {props.title}
        </Text>
        <AccordionIcon
          color={"#2f2f2f"}
          h={["50px", "60px"]}
          w={["30px", "40px"]}
        />
      </AccordionButton>

      <AccordionPanel
        maxW={"100%"}
        borderBottomRadius={"5px"}
        color={"#2f2f2f"}
        mt={"16px"}
      >
        {props.children}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default FAQAccordion;
