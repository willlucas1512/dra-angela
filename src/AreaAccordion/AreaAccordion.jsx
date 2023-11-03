import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";
import React from "react";

const AreaAccordion = (props) => {
  return (
    <AccordionItem
      justifySelf={"flex-end"}
      border={"none"}
      borderRadius={"5px"}
      bg={props.trans ? "url('./gradient-trans.png')" : "#D87348"}
      backgroundSize={"cover"}
      w={["100%", "100%", "100%", "400px"]}
    >
      <AccordionButton alignItems={"center"} justifyContent={"space-between"}>
        <Text
          color={props.trans ? "#2f2f2f" : "#fff"}
          textAlign={"left"}
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={"500"}
          lineHeight={"32px"}
          letterSpacing={"0.1px"}
        >
          {props.title}
        </Text>
        <AccordionIcon
          color={props.trans ? "#2f2f2f" : "#fff"}
          h={["50px", "60px"]}
          w={["30px", "40px"]}
        />
      </AccordionButton>

      <AccordionPanel
        borderBottomRadius={"5px"}
        zIndex={"10"}
        bg={"#fff"}
        color={"#2f2f2f"}
      >
        {props.children}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default AreaAccordion;
