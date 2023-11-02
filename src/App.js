import {
  Text,
  Box,
  HStack,
  Link,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Box color={"white"} bg={"url('/gradient.png')"} backgroundSize={"cover"}>
        <HStack justifyContent={"space-evenly"}>
          <Image width={"130px"} height={"110px"} src={"./logo.png"} />
          <Link
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={"24px"}
            letterSpacing={"0.2px"}
          >
            Sobre mim
          </Link>
          <Link
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={"24px"}
            letterSpacing={"0.2px"}
          >
            Avaliações
          </Link>
          <Link
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={"24px"}
            letterSpacing={"0.2px"}
          >
            Publicações
          </Link>
          <Link
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={"24px"}
            letterSpacing={"0.2px"}
          >
            Dinâmica das consultas
          </Link>
          <Link
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={"24px"}
            letterSpacing={"0.2px"}
          >
            Telemedicina
          </Link>
          <Link
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={"24px"}
            letterSpacing={"0.2px"}
          >
            Dúvidas frequentes
          </Link>
          <Button
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"22px"}
            letterSpacing={"0.2px"}
            p={"15px 36px"}
            borderRadius={"0px"}
            bg={"#23A6F0"}
            color={"white"}
          >
            Agendar consulta
          </Button>
        </HStack>
        <HStack alignItems={"flex-end"}>
          <VStack
            alignSelf={"flex-start"}
            p={"104px 104px 104px 180px"}
            alignItems={"flex-start"}
          >
            <Text
              fontSize={"58px"}
              fontStyle={"normal"}
              fontWeight={"800"}
              lineHeight={"80px"}
              letterSpacing={"0.2px"}
            >
              Drª Angela Rodrigues
            </Text>
            <Text
              fontSize={"20px"}
              fontStyle={"normal"}
              fontWeight={"700"}
              lineHeight={"30px"}
              letterSpacing={"0.2px"}
            >
              Psiquiatria | CRM 115876
            </Text>
            <Text my={"32px"}>
              Cuidar da saúde mental é um dos maiores atos de resiliência
            </Text>
            <HStack gap={"12px"}>
              <Button
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"700"}
                lineHeight={"22px"}
                letterSpacing={"0.2px"}
                p={"15px 36px"}
                borderRadius={"0px"}
                bg={"#23A6F0"}
                color={"white"}
              >
                Agendar consulta
              </Button>
              <Button
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"700"}
                lineHeight={"22px"}
                letterSpacing={"0.2px"}
                p={"15px 36px"}
                borderRadius={"0px"}
                color={"white"}
                variant={"outline"}
              >
                Áreas de atuação
              </Button>
            </HStack>
          </VStack>
          <Image mb={"-2px"} w={"340px"} h={"500px"} src={"/angela1.png"} />
        </HStack>
      </Box>
    </Box>
  );
}

export default App;
