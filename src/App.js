import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  HStack,
  Link,
  Button,
  Image,
  VStack,
  useMediaQuery,
  IconButton,
  Stack,
  Accordion,
  Center,
  Grid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import AreaAccordion from "./AreaAccordion";
import ConsultaStep from "./ConsultaStep";
import FAQAccordion from "./FAQAccordion";
import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import EvaluationCard from "./EvaluationCard";
import PublicationCard from "./PublicationCard";
import CalendlyWidget from "./CalendlyWidget";

function App() {
  const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenSideMenu,
    onOpen: onOpenSideMenu,
    onClose: onCloseSideMenu,
  } = useDisclosure();

  return (
    <Box>
      {/* Header */}
      <Box
        w={"100vw"}
        color={"white"}
        bg={"url('/gradient.png')"}
        backgroundSize={"cover"}
      >
        {isSmallerThan1200 ? (
          <HStack
            zIndex={"3"}
            bg={"url('/gradient.png')"}
            position={"fixed"}
            w={"100%"}
            top={"0"}
            mt={"-5px"}
            p={"16px"}
            justifyContent={"space-between"}
          >
            {" "}
            <Image
              mt={"-10px"}
              width={"263px"}
              height={"64px"}
              src={"./logo2.svg"}
            />{" "}
            <IconButton
              _hover={{ bg: "rgba(255,255,255, 0.4)" }}
              onClick={onOpenSideMenu}
              bg={"transparent"}
            >
              <Image
                // pr={["16px", "32px", "40px"]}
                width={"22px"}
                height={"13px"}
                src={"./iconmenu.svg"}
              />
            </IconButton>
          </HStack>
        ) : (
          <>
            <Image
              mt={"8px"}
              zIndex={"4"}
              position={"fixed"}
              left={"40px"}
              width={"300px"}
              height={"90px"}
              src={"./logo2.svg"}
            />
            <VStack
              gap={"16px"}
              position={"fixed"}
              w={"100%"}
              top={"0px"}
              mt={"-5px"}
              bg={"url('/gradient.png')"}
              backgroundSize={"cover"}
              zIndex={"3"}
              pl={"340px"}
              pt={"24px"}
              pb={"24px"}
              pr={"40px"}
              boxShadow={"base"}
            >
              <HStack w={"100%"} justifyContent={"flex-end"} gap={"40px"}>
                <Link
                  href={"#sobremim"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"24px"}
                  letterSpacing={"0.2px"}
                >
                  Sobre mim
                </Link>
                <Link
                  href={"#telemedicina"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"24px"}
                  letterSpacing={"0.2px"}
                >
                  Telemedicina
                </Link>
                <Link
                  href={"#dinamica"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"24px"}
                  letterSpacing={"0.2px"}
                >
                  Dinâmica das consultas
                </Link>

                <Button
                  onClick={onOpen}
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
              <HStack w={"100%"} justifyContent={"flex-end"} gap={"40px"}>
                {/* <Link
                  href={"#avaliacoes"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"24px"}
                  letterSpacing={"0.2px"}
                >
                  Avaliações
                </Link> */}
                <Link
                  href={"#publicacoes"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"24px"}
                  letterSpacing={"0.2px"}
                >
                  Publicações
                </Link>
                <Link
                  href={"#instagram"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"24px"}
                  letterSpacing={"0.2px"}
                >
                  Instagram
                </Link>
                <Link
                  href={"#duvidas"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"600"}
                  lineHeight={"24px"}
                  letterSpacing={"0.2px"}
                >
                  Dúvidas frequentes
                </Link>
              </HStack>
            </VStack>
          </>
        )}

        <Stack
          px={["0", "0", "0", "120px"]}
          pt={["82px", "180px"]}
          flexDirection={["column", "column", "column", "row", "row"]}
          alignItems={["center", "center", "flex-end"]}
        >
          <VStack
            alignSelf={"flex-start"}
            p={"5% 10% 16px 5%"}
            alignItems={"flex-start"}
          >
            <Text
              fontSize={["50px", "56px"]}
              fontStyle={"normal"}
              fontWeight={"100"}
              lineHeight={"80px"}
              letterSpacing={"0.2px"}
            >
              Drª Angela Rodrigues
            </Text>
            <Text
              fontSize={"20px"}
              fontStyle={"normal"}
              fontWeight={"200"}
              lineHeight={"30px"}
              letterSpacing={"0.2px"}
            >
              Médica | Psiquiatria | CRM/RJ 129605-1
            </Text>
            <Text zIndex={"1"} my={"32px"}>
              Cuidar da saúde mental é um dos maiores atos de resiliência
            </Text>
            <Stack flexDirection={["column", "row"]} gap={"12px"}>
              <Button
                onClick={onOpen}
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
                as={Link}
                href={"#areasdeatuacao"}
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
            </Stack>
          </VStack>
          <Image
            zIndex={"0"}
            mb={"0"}
            w={["300px", "300px", "330px"]}
            h={["400px", "400px", "450px"]}
            src={"/angela1.png"}
          />
        </Stack>
      </Box>
      {/* Áreas de atuação */}
      <Box
        id={"areasdeatuacao"}
        scrollMarginTop={["82px", "103px"]}
        p={["16px", "16px", "16px", "16px", "32px 120px"]}
        bg={"url('/bg-areas.png')"}
        backgroundSize={"cover"}
        color={"white"}
      >
        <Center>
          <Text
            textAlign={"center"}
            my={"16px"}
            fontSize={"28px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"57px"}
            letterSpacing={"0.2px"}
          >
            Áreas de atuação
          </Text>
        </Center>

        <Stack
          flexDirection={["column", "column", "row"]}
          gap={["16px", "16px", "120px"]}
          justifyContent={"center"}
          alignItems={[
            "center",
            "center",
            "flex-start",
            "flex-start",
            "flex-start",
          ]}
        >
          <Accordion
            gap={"16px"}
            display={"flex"}
            flexDirection={"column"}
            allowToggle
          >
            <AreaAccordion title={"Ansiedade"}>
              A <b>ansiedade</b> desproporcional é uma resposta emocional que
              ocorre em situações de estresse, preocupação ou antecipação. Ela
              geralmente envolve sentimentos de inquietação, apreensão e tensão,
              muitas vezes acompanhados por sintomas como{" "}
              <b>
                batimentos cardíacos acelerados, suor, tremores, ânsia, fadiga e
                cansaço
              </b>
              . O tratamento pode envolver terapia, medicamentos e estratégias
              de manejo do estresse.
            </AreaAccordion>

            <AreaAccordion title={"Burnout"}>
              O <b>burnout</b> é uma condição de esgotamento físico e emocional
              resultante do <b>estresse crônico</b> no ambiente de trabalho. Os
              sentimentos são de <b>exaustão física e emocional</b>, aliado a{" "}
              <b>queda no desempenho profissional</b>. Essa condição ocorre
              quando uma pessoa está sobrecarregada, muitas vezes devido a altas
              demandas no trabalho, longas horas de trabalho, falta de
              equilíbrio entre vida pessoal e profissional, e outros fatores
              estressantes. O tratamento geralmente envolve descanso, apoio
              emocional e psicoterapia.
            </AreaAccordion>

            <AreaAccordion title={"Transtorno de Ansiedade Social"}>
              A <b>ansiedade social</b>, também conhecida como{" "}
              <b>fobia social</b>, é um transtorno de ansiedade caracterizado
              por um medo intenso e persistente de situações sociais ou de
              desempenho, nas quais a pessoa{" "}
              <b>teme ser julgada ou avaliada negativamente</b> pelos outros.
              Isso pode levar a um alto grau de desconforto e evitação de
              situações sociais, prejudicando a vida pessoal e profissional da
              pessoa afetada. Os sintomas físicos são:{" "}
              <b>
                tremores, sudorese, batimentos cardíacos acelerados e sensação
                de desespero
              </b>
              , entre outros. O tratamento geralmente envolve terapia
              cognitivo-comportamental, medicação e estratégias de
              enfrentamento.
            </AreaAccordion>

            <AreaAccordion title={"Transtorno de Personalidade Borderline"}>
              O <b>Transtorno de Personalidade Borderline</b> é caracterizado
              por instabilidade emocional, impulsividade, relações interpessoais
              turbulentas, autoimagem instável e frequentemente experimentam
              flutuações extremas de humor e podem ter dificuldade em controlar
              seus impulsos. Seus sentimentos apresentados podem incluir{" "}
              <b>comportamentos impulsivos</b>, como gastos excessivos,{" "}
              <b>
                abuso de substâncias, comportamento sexual de risco ou
                autolesão; Sentimentos crônicos de vazio; raiva intensa e
                dificuldade em controlar a raiva; mudanças rápidas e intensas de
                humor; medo intenso de abandono
              </b>
              ; entre outros. O principal tratamento é a terapia, como a Terapia
              Cognitivo-Comportamental (TCC) ou a Terapia de Aceitação e
              Compromisso (ACT). Os medicamentos podem auxiliar em sintomas
              específicos como depressão e ansiedade.
            </AreaAccordion>

            <AreaAccordion title={"Transtornos Alimentares"}>
              <b>Transtornos alimentares</b> são condições que afetam a relação
              de uma pessoa com a comida, o peso corporal e a imagem corporal.
              Eles podem resultar em{" "}
              <b>
                comportamentos alimentares prejudiciais, preocupações excessivas
                com o peso e a forma corporal, bem como problemas físicos e
                emocionais
              </b>
              . Alguns dos transtornos alimentares mais comuns incluem a{" "}
              <b>
                anorexia, bulimia, compulsão alimentar, alimentação seletiva
              </b>
              , entre outros. Os transtornos alimentares podem ser graves e
              potencialmente fatais. Eles afetam tanto o corpo quanto a mente e
              requerem tratamento especializado. O tratamento geralmente envolve
              uma equipe de profissionais de saúde, incluindo terapeutas,
              nutricionistas e médicos. O tratamento visa ajudar a pessoa a
              desenvolver uma relação saudável com a comida, melhorar a imagem
              corporal e abordar quaisquer problemas emocionais subjacentes que
              possam contribuir para o transtorno alimentar.
            </AreaAccordion>

            <AreaAccordion title={"Transtorno Bipolar"}>
              O <b>Transtorno Bipolar</b>, também conhecido como Transtorno
              Bipolar do Humor, é um transtorno mental caracterizado por{" "}
              <b>mudanças extremas de humor e energia</b>. Pessoas com
              transtorno bipolar experimentam episódios de mania (ou hipomania)
              e episódios de depressão, com períodos de humor normal entre eles.
              Os sintomas do transtorno bipolar podem variar, mas geralmente
              incluem, na fase de mania ou hipomania:{" "}
              <b>
                humor elevado, aumento da energia, pensamentos acelerados, fala
                rápida, aumento da autoestima, redução da necessidade de sono,
                impulsividade, comportamentos de risco
              </b>
              . Na fase de depressão:{" "}
              <b>
                tristeza profunda, perda de interesse ou prazer em atividades,
                fadiga, alterações no sono e apetite, sentimentos de culpa ou
                inutilidade, pensamentos de suicídio
              </b>
              . O tratamento geralmente envolve uma combinação de medicamentos,
              como estabilizadores de humor e/ou antipsicóticos.
            </AreaAccordion>

            <AreaAccordion
              trans={true}
              title={"Terapia hormonal para pessoas trans"}
            >
              A <b>terapia hormonal para pessoas transgênero</b> é um tratamento
              que auxilia indivíduos transgênero a alinharem suas
              características físicas com sua identidade de gênero. O objetivo
              da terapia hormonal é promover{" "}
              <b>
                mudanças corporais que estejam mais de acordo com a identidade
                de gênero
              </b>
              , aliviando a disforia de gênero (a angústia associada à
              incongruência entre a identidade de gênero e as características
              corporais). As terapias hormonais para pessoas transgênero
              geralmente envolvem a{" "}
              <b>
                administração de hormônios e a realização de exames
                laboratoriais
              </b>
              . A terapia hormonal pode ser utilizada tanto por homens quanto
              por mulheres. A dosagem e os efeitos colaterais dos hormônios
              podem variar de pessoa para pessoa, e um{" "}
              <b>acompanhamento médico regular é essencial</b> para garantir a
              segurança e a eficácia do tratamento. Além disso, a terapia
              hormonal é muitas vezes apenas uma parte do processo de transição
              de gênero, que pode incluir terapia psicológica, cirurgias de
              confirmação de gênero e outros aspectos do cuidado de saúde para
              pessoas transgênero.{" "}
              <b>
                Cada pessoa transgênero é única em sua jornada de transição, e o
                tratamento é adaptado às suas necessidades e objetivos
                específicos.
              </b>
            </AreaAccordion>
          </Accordion>
          <Accordion
            maxW={["400px", "400px", "400px", "400px", "none"]}
            gap={"16px"}
            display={"flex"}
            flexDirection={"column"}
            allowToggle
          >
            <AreaAccordion title={"Depressão"}>
              A <b>depressão</b> é um distúrbio mental comum que afeta o estado
              de ânimo, os pensamentos e o comportamento de uma pessoa.
              Caracteriza-se por uma <b>tristeza</b> profunda e persistente,{" "}
              <b>perda de interesse ou prazer em atividades</b> que costumavam
              ser gratificantes, <b>sentimentos de desesperança</b>,{" "}
              <b>falta de energia</b> e uma variedade de sintomas físicos e
              emocionais. Além da tristeza e da falta de interesse, os sintomas
              comuns da depressão incluem{" "}
              <b>
                alterações no apetite e no sono, dificuldade de concentração,
                sentimentos de inutilidade ou culpa, pensamentos de suicídio e
                irritabilidade
              </b>
              . O tratamento envolve pode incluir terapia psicológica,
              medicamentos ou uma combinação de ambos.
            </AreaAccordion>

            <AreaAccordion title={"Insônia"}>
              A <b>insônia</b> é um distúrbio do sono caracterizado pela
              dificuldade em adormecer, manter o sono durante a noite ou acordar
              muito cedo e não ser capaz de voltar a dormir. A insônia pode ser
              causada por uma variedade de fatores, incluindo{" "}
              <b>
                estresse, ansiedade, depressão, preocupações, condições médicas,
                uso de certos medicamentos, hábitos de sono inadequados e
                fatores ambientais
              </b>
              . E quando presente traz a sensação de cansaço durante o dia,
              irritabilidade, dificuldade de concentração e desempenho
              comprometido nas atividades diárias. O tratamento da insônia
              inclui mudanças de hábitos e higiene do sono. Além disso, ser
              necessário uma investigação mais detalhada para rastreio de outros
              transtornos e até mesmo o uso de medicamentos.
            </AreaAccordion>

            <AreaAccordion title={"Transtorno Obsessivo-Compulsivo (TOC)"}>
              O <b>Transtorno Obsessivo-Compulsivo</b>, comumente abreviado como{" "}
              <b>TOC</b>, é caracterizado pela presença de{" "}
              <b>obsessões e compulsões</b>. As obsessões são pensamentos,
              imagens ou impulsos indesejados e intrusivos que causam ansiedade
              significativa. As compulsões são comportamentos repetitivos ou
              atos mentais realizados em resposta às obsessões, com o objetivo
              de reduzir a ansiedade ou prevenir um evento temido. Alguns
              exemplos de obsessões comuns no TOC incluem{" "}
              <b>
                medo de contaminação, preocupação com ordem e simetria,
                pensamentos agressivos ou sexuais intrusivos e preocupações com
                a segurança
              </b>
              . As compulsões podem incluir{" "}
              <b>
                lavagem excessiva das mãos, verificação constante, organização
                repetitiva e contagem compulsiva
              </b>
              . O tratamento do TOC envolve uma abordagem combinada de terapia
              cognitivo-comportamental (TCC) e medicamentos, como inibidores
              seletivos da recaptação de serotonina (ISRS).
            </AreaAccordion>

            <AreaAccordion
              title={"Transtorno de Estresse Pós-Traumático (TEPT)"}
            >
              O <b>Transtorno de Estresse Pós-Traumático</b>, <b>TEPT</b>, é um
              transtorno de ansiedade que pode ocorrer após uma pessoa ter sido
              exposta a um evento traumático que envolveu ameaça à vida,
              integridade física ou bem-estar emocional. O TEPT pode afetar
              qualquer pessoa que tenha vivenciado um trauma significativo, como
              sobreviventes de desastres naturais, vítimas de agressão, roubo,
              abuso ou outros eventos traumáticos. Os sintomas comuns do TEPT
              incluem a{" "}
              <b>
                revivência involuntária do evento traumático, pesadelos
                relacionados ao trauma, estar constantemente alerta e assustado,
                dificuldade para dormir, alterações no humor, incluindo
                ansiedade, depressão e raiva
              </b>
              . O tratamento geralmente envolve psicoterapia. Medicamentos
              também podem ser prescritos em alguns casos.
            </AreaAccordion>

            <AreaAccordion title={"Síndrome do Pânico"}>
              A <b>Síndrome do Pânico</b>, é um transtorno de ansiedade
              caracterizado por ataques de pânico recorrentes e inesperados.
              Esses ataques são{" "}
              <b>episódios súbitos de medo intenso ou desconforto</b>, que podem
              ser acompanhados por sintomas físicos e emocionais intensos. As
              pessoas com síndrome do pânico muitas vezes vivenciam uma{" "}
              <b>sensação avassaladora de terror</b>, que pode surgir sem motivo
              aparente. Os sintomas físicos incluem{" "}
              <b>
                batimentos cardíacos acelerados, sensação de sufocamento ou
                falta de ar, tremores ou sensação de formigamento nas
                extremidades, suores frios, tontura ou vertigem, náusea ou
                desconforto abdominal e medo de morrer
              </b>
              . O tratamento para a síndrome do pânico pode incluir medicação,
              como os antidepressivos ou os benzodiazepínicos, pode ser
              prescrita para reduzir a gravidade dos ataques de pânico. Além de
              acompanhamento com psicoterapia.
            </AreaAccordion>

            <AreaAccordion
              title={"Transtorno de Déficit de Atenção e Hiperatividade (TDAH)"}
            >
              O <b>Transtorno do Déficit de Atenção e Hiperatividade (TDAH)</b>{" "}
              é um transtorno neurobiológico que afeta a atenção, o controle de
              impulsos e a hiperatividade. As características mais comuns são
              <b>
                dificuldade em manter o foco, excesso de energia, inquietação,
                ações impulsivas que podem resultar em problemas sociais e
                comportamentais
              </b>
              , entre outros. O tratamento geralmente envolve uma abordagem
              multimodal, que pode incluir medicamentos, mudança no estilo de
              vida, estratégias de apoio educacionais e terapia.
            </AreaAccordion>
          </Accordion>
        </Stack>
      </Box>

      {/* Sobre mim */}
      <Stack
        id={"sobremim"}
        scrollMarginTop={["82px", "103px"]}
        flexDirection={["column", "column", "row", "row"]}
        justifyContent={["center", "center", "flex-start", "flex-start"]}
        alignItems={["center", "center", "flex-end"]}
        bg={"rgba(194, 96, 5, 0.54)"}
        gap={"-20px"}
        // px={["16px", "120px"]}
      >
        <Image
          w={["100%", "100%", "550px"]}
          h={["100%", "100%", "400px", "450px"]}
          src={"/angela2.png"}
        />
        <VStack
          filter={"drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))"}
          borderRadius={"5px"}
          m={["16px", "16px", "16px", "24px 0"]}
          maxW={["100%", "100%", "100%", "60%"]}
          p={["24px", "24px", "24px", "48px"]}
          color={"#fff"}
          bg={"rgba(47, 47, 47, 0.5)"}
        >
          <Text
            fontSize={"24px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"57px"}
            letterSpacing={"0.2px"}
          >
            Sobre mim
          </Text>{" "}
          <Text
            filter={"none !important"}
            textAlign={"justify"}
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"300"}
            lineHeight={"30px"}
            letterSpacing={"1px"}
          >
            Sou <b>médica</b> formada pela Universidade Federal do Rio de
            Janeiro (UFRJ).{" "}
            <b>
              Doutoranda em Ciências Médicas com Ênfase em Psiquiatria pelo
              Instituto D'Or de Pesquisa e Ensino (IDOR)
            </b>
            , atuo como pesquisadora colaboradora no{" "}
            <b>Programa de Ansiedade, Obsessões e Compulsões</b> do Instituto de
            Psiquiatria (IPUB-UFRJ). Membro da Associação Brasileira de
            Psiquiatria - ABP.
          </Text>
          <Text
            filter={"none !important"}
            textAlign={"justify"}
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"300"}
            lineHeight={"30px"}
            letterSpacing={"1px"}
            mb={"24px"}
          >
            {" "}
            Minha expertise abrange o estudo do{" "}
            <b>
              cérebro e do comportamento humano, com ênfase na Psiquiatria
            </b>.{" "}
          </Text>
          <Text
            filter={"none !important"}
            textAlign={["justify", "center"]}
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"30px"}
            letterSpacing={"1px"}
          >
            Meu objetivo é oferecer um cuidado integral e individualizado aos
            pacientes, combinando conhecimentos da Neurociência, Clínica e
            Psiquiatria.
          </Text>
        </VStack>
      </Stack>

      {/* Telemedicina */}
      <Box
        id={"telemedicina"}
        scrollMarginTop={["82px", "103px"]}
        px={["16px", "16px", "16px", "120px"]}
        bg={"url('./bg-telemed.png')"}
        backgroundSize={"cover"}
      >
        <Center flexDirection={"column"}>
          <Text
            color={"white"}
            textAlign={"center"}
            mt={"32px"}
            fontSize={"28px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"57px"}
            letterSpacing={"0.2px"}
          >
            Telemedicina (Consultas Online)
          </Text>
          <Box m={["16px", "32px"]} p={["24px", "48px"]} bg={"#fff"}>
            <Text
              fontSize={"16px"}
              fontStyle={"normal"}
              fontWeight={"500"}
              lineHeight={"30px"}
              letterSpacing={"0.2px"}
              mb={"24px"}
            >
              O atendimento psiquiátrico realizado online segue os mesmos
              processos e padrão de qualidade dos atendimentos presenciais.
              Quando necessário, podem ser solicitados exames e prescritos
              medicamentos, com assinatura digital válida em todo o país. Apenas
              para medicamentos de faixa azul e amarela (que são a minoria), a
              receita é enviada via correios, devido às normas do conselho
              nacional de medicina.
            </Text>
            <Stack
              gap={"16px"}
              alignItems={[
                "center",
                "center",
                "center",
                "flex-start",
                "flex-start",
              ]}
              justifyContent={["center"]}
              flexDirection={["column", "column", "column", "row"]}
            >
              <HStack gap={"16px"} alignItems={"flex-start"} maxW={"400px"}>
                <Image src={"/relogio.png"} />
                <Text
                  fontSize={"16px"}
                  fontStyle={"normal"}
                  fontWeight={"500"}
                  lineHeight={"30px"}
                  letterSpacing={"0.2px"}
                >
                  15 minutos antes do horário da consulta, você receberá um link
                </Text>
              </HStack>
              <HStack gap={"16px"} alignItems={"flex-start"} maxW={"400px"}>
                <Image src={"/wi-fi.png"} />
                <Text
                  fontSize={"16px"}
                  fontStyle={"normal"}
                  fontWeight={"500"}
                  lineHeight={"30px"}
                  letterSpacing={"0.2px"}
                >
                  Providencie uma boa conexão de internet
                </Text>
              </HStack>
              <HStack gap={"16px"} alignItems={"flex-start"} maxW={"400px"}>
                <Image h={"60px"} w={"60px"} src={"/webcam.png"} />
                <Text
                  fontSize={"16px"}
                  fontStyle={"normal"}
                  fontWeight={"500"}
                  lineHeight={"30px"}
                  letterSpacing={"0.2px"}
                >
                  Prepare uma câmera para a consulta
                </Text>
              </HStack>
            </Stack>
          </Box>
        </Center>
      </Box>

      {/* Dinâmica das consultas */}
      <Box id={"dinamica"} scrollMarginTop={["82px", "103px"]}>
        {" "}
        <Center flexDirection={"column"}>
          <Text
            color={"#E77C40"}
            textAlign={"center"}
            my={"32px"}
            fontSize={"28px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"57px"}
            letterSpacing={"0.2px"}
          >
            Dinâmica das consultas
          </Text>
          <Grid
            mb={"32px"}
            gap={"16px"}
            gridTemplateColumns={[
              "300px",
              "300px",
              "repeat(2, 300px)",
              "repeat(2, 300px)",
              "repeat(3, 300px)",
            ]}
          >
            <ConsultaStep
              number={"1"}
              text={
                "Entre em contato ou preencha o formulário no site para agendar sua consulta"
              }
            />

            <ConsultaStep
              number={"2"}
              text={
                "Preencher, antes da consulta, um questionário de pré-consulta"
              }
            />
            <ConsultaStep
              number={"3"}
              text={"Comparecer à consulta no dia e horário agendado"}
            />
            <ConsultaStep
              number={"4"}
              text={
                "Receber um atendimento humanizado, integrado e individualizado"
              }
            />
            <ConsultaStep
              number={"5"}
              text={
                "Conversaremos sobre sua história clínica, sintomas e fatores de risco e será feito rastreio das comorbidades psiquiátricas"
              }
            />
            <ConsultaStep
              number={"6"}
              text={
                "Caso necessário, serão solicitados exames complementares (laboratoriais, imagem, neuropsicológicos)"
              }
            />
            <ConsultaStep
              number={"7"}
              text={
                "Será elaborado um plano de tratamento que pode incluir medicamentos, terapia ou uma combinação dos dois"
              }
            />
            <ConsultaStep
              number={"8"}
              text={
                "Serão programadas consultas de acompanhamento para monitorar o seu progresso e ajustar o plano de tratamento conforme necessário."
              }
            />
            <ConsultaStep
              number={"9"}
              text={
                "Será disponibilizado um canal para caso você tenha dúvidas referentes ao tratamento, ou orientações feitas na consulta, e também para emergências."
              }
            />
          </Grid>
        </Center>
      </Box>

      {/* Dúvidas frequentes */}
      <Box
        id={"duvidas"}
        scrollMarginTop={["82px", "103px"]}
        pb={"32px"}
        px={["16px", "120px"]}
        bg={"#fafafa"}
      >
        <Center flexDirection={"column"}>
          <Text
            color={"#2f2f2f"}
            textAlign={"center"}
            my={"32px"}
            fontSize={"28px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"57px"}
            letterSpacing={"0.2px"}
          >
            Dúvidas frequentes
          </Text>
          <Accordion allowToggle>
            <FAQAccordion title={"Como posso agendar uma consulta?"}>
              <Text>
                Para agendar uma consulta, clique <Link>aqui</Link> ou entre em
                contato por Whatsapp no (21) 96795-8731.
              </Text>
            </FAQAccordion>
            <FAQAccordion
              title={"Quais são as formas de pagamento do valor da consulta?"}
            >
              <Text>PIX, cartão de débito e crédito, MercadoPago.</Text>
            </FAQAccordion>
            <FAQAccordion title={"Qual o tempo de duração das consultas?"}>
              <Text>
                A primeira consulta tem uma duração de 1 hora e 30 minutos para
                garantir que tenhamos tempo suficiente para abordar suas
                necessidades de forma abrangente. As consultas subsequentes
                geralmente têm uma duração de cerca de 50 minutos.
              </Text>
            </FAQAccordion>
            <FAQAccordion
              title={"O que devo esperar durante a consulta com a Drª Angela?"}
            >
              <Text>
                Em sua consulta psiquiátrica, você pode esperar uma abordagem
                atenciosa e abrangente para cuidar da sua saúde mental e
                bem-estar geral. Embora seu foco seja a psiquiatria, minha
                abordagem considera todos os aspectos da sua saúde. Realizaremos
                uma avaliação abrangente para identificar qualquer comorbidade
                e, se necessário, encaminharei você a especialistas apropriados.
                Durante nossa consulta, haverá momentos dedicados à escuta
                atenta, ao exame físico, à avaliação psiquiátrica e à reflexão,
                tudo com o objetivo de desenvolver um plano terapêutico
                personalizado. É importante mencionar que a primeira consulta
                tem uma duração de 1 hora e 30 minutos para garantir que
                tenhamos tempo suficiente para explorar suas necessidades de
                maneira detalhada. Meu objetivo é criar um vínculo de confiança,
                onde você se sinta genuinamente acolhido. Este é um espaço
                seguro onde não há espaço para julgamentos morais; você pode
                compartilhar o que estiver pronto para discutir. Estou aqui para
                apoiá-lo em sua jornada em direção ao bem-estar emocional e
                mental.
              </Text>
            </FAQAccordion>
          </Accordion>
        </Center>
      </Box>

      {/* Avaliações */}
      {/* <Box id={"avaliacoes"} scrollMarginTop={["82px", "103px"]} mb={"32px"}>
        {" "}
        <Center flexDirection={"column"}>
          <Text
            color={"#E77C40"}
            textAlign={"center"}
            my={"32px"}
            fontSize={"28px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"57px"}
            letterSpacing={"0.2px"}
          >
            Avaliações
          </Text>
          <Box w={"80%"}>
            <ReactCaroussel
              slidesToShow={isSmallerThan1200 ? 1 : 3}
              slidesToScroll={isSmallerThan1200 ? 1 : 3}
              infinite={true}
              autoplay={true}
              speed={5}
              display={{
                arrows: true,
                dots: false,
              }}
            >
              <EvaluationCard
                name={"John Doe"}
                src={"/avatar1.png"}
                text={
                  "Doutora linda demais! E muito inteligente, uma combinação muito rara hoje em dia."
                }
              />
              <EvaluationCard
                name={"John Doe"}
                src={"/avatar2.png"}
                text={"Consulta muito boa, me senti completamente atendido."}
              />
              <EvaluationCard
                text={"Doutora muito boa, tá de parabéns. Voltarei sempre."}
                name={"John Doe"}
                src={"/avatar3.png"}
              />

              <EvaluationCard
                name={"John Doe"}
                src={"/avatar3.png"}
                text={
                  "A Dra. Angela é uma médica incrível! Ela é atenciosa, compreensiva e me fez sentir à vontade desde o primeiro momento. Recomendo-a a todos"
                }
              />
              <EvaluationCard
                name={"John Doe"}
                src={"/avatar1.png"}
                text={
                  "Estou muito satisfeito com o tratamento da Dra. Angela. Ela é uma profissional extremamente competente e dedicada. "
                }
              />
              <EvaluationCard
                text={
                  "A Dra. Angela é uma médica excepcional. Suas habilidades médicas são impressionantes. Estou muito grato por tê-la como minha médica."
                }
                name={"John Doe"}
                src={"/avatar2.png"}
              />
            </ReactCaroussel>
          </Box>
        </Center>
      </Box> */}

      {/* Publicações */}
      <Box
        id={"publicacoes"}
        scrollMarginTop={["82px", "103px"]}
        pb={"32px"}
        bg={"url('./bg-publicacoes.png')"}
        backgroundSize={"cover"}
      >
        {" "}
        <Center flexDirection={"column"}>
          <Text
            color={"#fff"}
            textAlign={"center"}
            my={"32px"}
            fontSize={"28px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"57px"}
            letterSpacing={"0.2px"}
          >
            Publicações
          </Text>
          <Box w={"80%"}>
            <ReactCaroussel
              slidesToShow={isSmallerThan1200 ? 1 : 3}
              slidesToScroll={isSmallerThan1200 ? 1 : 3}
              infinite={true}
              autoplay={true}
              speed={5}
              display={{
                arrows: true,
                dots: false,
              }}
            >
              <PublicationCard
                title={
                  "Percepção de responsáveis sobre o envolvimento de crianças e adolescentes diabéticos em ocupações durante o distanciamento social devido à pandemia por covid-19."
                }
                revista={"Revisbrato"}
                link={
                  "https://revistas.ufrj.br/index.php/ribto/article/view/41749"
                }
              />
              <PublicationCard
                title={
                  "Forensic electrochemistry: Electrochemical study and quantification of xylazine in pharmaceutical and urine samples. s"
                }
                revista={"Electrochimica Acta"}
                link={
                  "https://www.sciencedirect.com/science/article/abs/pii/S0013468618323600"
                }
              />
              <PublicationCard
                title={
                  "Antioxidant N-Acetyl-L-Cysteine Restores the Behavioral Deficits in a Neurodevelopmental Model of Schizophrenia Through a Mechanism That Involves Nitric Oxide.  "
                }
                revista={"Frontiers in Pharmacology"}
                link={"https://pubmed.ncbi.nlm.nih.gov/35903343/"}
              />

              <PublicationCard
                title={
                  "Desafios impostos pelo isolamento social na pandemia de COVID-19 ao acompanhamento de diabéticos e expostos ou infectados por HIV em um hospital universitário pediátrico."
                }
                revista={"Residência Pediátrica (RP)"}
                link={"https://residenciapediatrica.com.br/detalhes/783"}
              />
              <PublicationCard
                title={
                  "Influência da Microbiota Intestinal no Transtorno Obsessivo Compulsivo e nos Transtornos Relacionados: Protocolo de Revisão de Escopo"
                }
                revista={"Jornal Brasileiro de Psiquiatria"}
              />
              <PublicationCard
                title={
                  "Plasma Cytokine Profiles In Adult Patients With Obsessive-Compulsive Disorder"
                }
                revista={"Journal Brain, Behavior, and Immunity"}
              />
              <PublicationCard
                title={
                  "Investigation of Lifestyle Using the WHOQOL-100 Scale in Patients and Relatives Affected by Obsessive-Compulsive Disorder"
                }
                link={"https://pubmed.ncbi.nlm.nih.gov/35903343/"}
              />
              <PublicationCard
                title={
                  "Estudos de Esquizofrenia com modelos animais: Papel do neurodesenvolvimento"
                }
                revista={"Boletim SBNp"}
                link={"http://sbnp.com.br/site/wp-con"}
              />
            </ReactCaroussel>
          </Box>
        </Center>
      </Box>

      {/* Instagram */}
      <Box
        id={"instagram"}
        scrollMarginTop={["82px", "103px"]}
        pb={"40px"}
        bg={"rgba(194, 96, 5, 0.54)"}
      >
        <Center flexDirection={"column"}>
          <Text
            color={"#fff"}
            textAlign={"center"}
            my={"32px"}
            fontSize={"28px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"57px"}
            letterSpacing={"0.2px"}
          >
            Instagram
          </Text>
          <iframe
            width="75%"
            height="440"
            src="https://www.instagram.com/angelarodrigues.psiq/embed/"
          ></iframe>
        </Center>
      </Box>

      {/* Footer 1 */}
      <Stack
        justifyContent={"space-evenly"}
        pt={"32px"}
        px={"16px"}
        flexDirection={["column", "column", "column", "column", "row"]}
        alignItems={["center", "center", "center", "center", "flex-start"]}
      >
        <VStack
          alignItems={["center", "center", "center", "center", "flex-start"]}
          mb={["16px", "0px"]}
        >
          <Text
            color={"#2f2f2f"}
            fontSize={"24px"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"32px"}
            letterSpacing={"0.1px"}
            mb={"16px"}
          >
            Consultórios
          </Text>
          <Grid
            gap={"24px !important"}
            gridTemplateColumns={[
              "1fr",
              "1fr",
              "1fr 1fr",
              "1fr 1fr",
              "1fr 1fr 1fr",
            ]}
          >
            <VStack
              pb={"32px"}
              borderBottom={["1px solid #E2E8F0", "none"]}
              alignItems={["flex-start", "center"]}
            >
              <HStack mr={"40px"} alignItems={"flex-start"}>
                <Image src={"/google-maps.png"} />
                <Text
                  maxW={"250px"}
                  color={"#2f2f2f"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"500"}
                  lineHeight={"24px"}
                  letterSpacing={"0.2px"}
                >
                  Rua Conde de Bonfim, 44, Tijuca, Rio de Janeiro
                </Text>
              </HStack>
              <iframe
                src="https://maps.google.com/maps?q=/Rua+Conde+de+Bonfim,+44+-+Tijuca,+Rio+de+Janeiro+-+RJ,+20520-053&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                width="300"
                height="150"
                allowFullScreen
              ></iframe>
            </VStack>

            <VStack
              pb={"32px"}
              borderBottom={["1px solid #E2E8F0", "none"]}
              alignItems={["flex-start", "center"]}
            >
              <HStack alignItems={"flex-start"}>
                <Image src={"/google-maps.png"} />
                <Text
                  maxW={"250px"}
                  color={"#2f2f2f"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"500"}
                  lineHeight={"24px"}
                  letterSpacing={"0.2px"}
                >
                  Rua Almirante Pereira Guimarães, 72, Leblon, Rio de Janeiro
                </Text>
              </HStack>
              <iframe
                src="https://maps.google.com/maps?q=R.+Alm.+Pereira+Guimarães,+72+-+Leblon,+Rio+de+Janeiro+-+RJ,+22440-005&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                width="300"
                height="150"
                allowFullScreen
              ></iframe>
            </VStack>

            <VStack alignItems={["flex-start", "center"]}>
              <HStack alignItems={"flex-start"}>
                <Image src={"/google-maps.png"} />
                <Text
                  maxW={"250px"}
                  color={"#2f2f2f"}
                  fontSize={"14px"}
                  fontStyle={"normal"}
                  fontWeight={"500"}
                  lineHeight={"24px"}
                  letterSpacing={"0.2px"}
                >
                  Estrada dos Três Rios, 1200, Freguesia - Jacarepaguá, RJ
                </Text>
              </HStack>
              <iframe
                // src="https://maps.google.com/maps?q=Estr.+dos+Três+Rios,+1200+-+Freguesia+(Jacarepaguá),+Rio+de+Janeiro+-+RJ,+22745-005,+Brazil/@-22.9304301,-43.3260163,17z&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3797463753244!2d-43.334954824911!3d-22.936237679234274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd826dce2754d%3A0xc3ca3a3d8c4eaba3!2sEstr.%20dos%20Tr%C3%AAs%20Rios%2C%201200%20-%20Freguesia%20(Jacarepagu%C3%A1)%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022745-005%2C%20Brazil!5e0!3m2!1sen!2sus!4v1712623448079!5m2!1sen!2sus"
                width="300"
                height="150"
                allowFullScreen
              ></iframe>
            </VStack>
          </Grid>
        </VStack>

        <Stack
          justifyContent={["center", "flex-start", "center"]}
          flexDirection={["column", "column", "row", "row", "column"]}
          m={[
            "24px 0 24px 0",
            "24px 0 24px 0",
            "24px 0 24px 0",
            "24px 0 24px 0",
            "0 24px 0 24px",
          ]}
        >
          <VStack
            w={["300px", "300px", "300px", "300px", "auto"]}
            mb={"24px"}
            alignItems={"flex-start"}
          >
            <Text
              color={"#2f2f2f"}
              fontSize={"24px"}
              fontStyle={"normal"}
              fontWeight={"700"}
              lineHeight={"32px"}
              letterSpacing={"0.1px"}
            >
              Redes Sociais
            </Text>
            <HStack>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.instagram.com/angelarodrigues.psiq/"}
              >
                <Image w={"24px"} h={"24px"} src={"/instagram.png"} />
              </a>
              <a
                href={
                  "https://wa.me/5521967958731?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image w={"24px"} h={"24px"} src={"/whatsapp(1).png"} />
              </a>
            </HStack>
          </VStack>
          <VStack
            w={["300px", "300px", "300px", "300px", "auto"]}
            alignItems={"flex-start"}
          >
            <Text
              color={"#2f2f2f"}
              fontSize={"24px"}
              fontStyle={"normal"}
              fontWeight={"700"}
              lineHeight={"32px"}
              letterSpacing={"0.1px"}
            >
              Contato
            </Text>
            <HStack>
              <Image src={"/email.png"} />
              <Text
                color={"#2f2f2f"}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"500"}
                lineHeight={"24px"}
                letterSpacing={"0.2px"}
              >
                angelarodrigues.psiq@gmail.com
              </Text>
            </HStack>
            <HStack>
              <Image src={"/phone-call.png"} />
              <Text
                color={"#2f2f2f"}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"500"}
                lineHeight={"24px"}
                letterSpacing={"0.2px"}
              >
                +55 (21) 96795-8731
              </Text>
            </HStack>
          </VStack>
        </Stack>
      </Stack>

      {/* Footer 2 */}
      <Box bg={"#fafafa"}>
        <Center>
          <Text
            py={"24px"}
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={"24px"}
            letterSpacing={"0.2px"}
          >
            © 2024 WL Software - All Rights Reserved.
          </Text>
        </Center>
      </Box>

      {/* Modal Agende sua consulta */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agende sua consulta</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            mb={"8px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"16px"}
          >
            <CalendlyWidget />
            <Text
              mt={"-16px"}
              color={"#2f2f2f"}
              textAlign={"center"}
              fontSize={"12px"}
              fontStyle={"normal"}
              fontWeight={"300"}
              letterSpacing={"0.2px"}
            >
              Caso prefira agendar pelo Whatsapp, clique aqui:
            </Text>
            <Center>
              <Link
                href={
                  "https://wa.me/5521967958731?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  rightIcon={<img src={"/whatsapp(1).png"} />}
                  color={"white"}
                  bgColor={"#29a71a"}
                >
                  Agendar pelo Whatsapp
                </Button>
              </Link>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Side menu */}
      <Drawer
        isOpen={isOpenSideMenu}
        placement="right"
        onClose={onCloseSideMenu}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#D87348"}>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader>
            <Image
              mt={"-16px"}
              width={"247px"}
              height={"69px"}
              src={"./logo2.svg"}
            />
          </DrawerHeader>

          <DrawerBody
            gap={"16px"}
            color={"white"}
            display={"flex"}
            flexDirection={"column"}
          >
            {" "}
            <Link
              onClick={onCloseSideMenu}
              href={"#sobremim"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"500"}
              lineHeight={"24px"}
              letterSpacing={"0.2px"}
            >
              Sobre mim
            </Link>
            <Link
              onClick={onCloseSideMenu}
              href={"#telemedicina"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"500"}
              lineHeight={"24px"}
              letterSpacing={"0.2px"}
            >
              Telemedicina
            </Link>
            <Link
              onClick={onCloseSideMenu}
              href={"#dinamica"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"500"}
              lineHeight={"24px"}
              letterSpacing={"0.2px"}
            >
              Dinâmica das consultas
            </Link>
            <Link
              onClick={onCloseSideMenu}
              href={"#duvidas"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"500"}
              lineHeight={"24px"}
              letterSpacing={"0.2px"}
            >
              Dúvidas frequentes
            </Link>
            <Link
              onClick={onCloseSideMenu}
              href={"#avaliacoes"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"500"}
              lineHeight={"24px"}
              letterSpacing={"0.2px"}
            >
              Avaliações
            </Link>
            <Link
              onClick={onCloseSideMenu}
              href={"#publicacoes"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"500"}
              lineHeight={"24px"}
              letterSpacing={"0.2px"}
            >
              Publicações
            </Link>
            <Link
              onClick={onCloseSideMenu}
              href={"#instagram"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"500"}
              lineHeight={"24px"}
              letterSpacing={"0.2px"}
            >
              Instagram
            </Link>
            <Button
              onClick={() => {
                onOpen();
                onCloseSideMenu();
              }}
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* CTA Whatsapp */}
      <Link
        zIndex={"10"}
        href={
          "https://wa.me/5521967958731?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
        }
        target="_blank"
        rel="noopener noreferrer"
        position={"fixed"}
        right={"16px"}
        bottom={"16px"}
      >
        <Image
          filter={"drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))"}
          h={["50px", "75px"]}
          w={["50px", "75px"]}
          src={"/whatsapp.png"}
        />
      </Link>
    </Box>
  );
}
export const runtime = "edge";
export default App;
