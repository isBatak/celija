import { FC } from "react";
import { Flex } from "styled-system/jsx";
import { Heading } from "../ui/typography";

export interface ILogoProps {}

export const Logo: FC<ILogoProps> = () => {
  return (
    <Flex
      border="solid 4px black"
      align="center"
      justify="center"
      pos="relative"
      maxW={{ base: "none", md: 'sm' }}
      mx="auto"
      _before={{
        content: '""',
        position: "absolute",
        inset: "-30px -4px",
        zIndex: "-1",
        borderWidth: "4px",
        borderStyle: "solid",
        borderImageSlice: 1,
        borderImageSource: 'linear-gradient(0deg, rgba(201,201,201,0) 0%, rgba(201,201,201,1) 30%, rgba(201,201,201,1) 70%, rgba(201,201,201,0) 100%)',
        borderTop: 0,
        borderBottom: 0,
      }}
      _after={{
        content: '""',
        position: "absolute",
        inset: "-4px -30px ",
        zIndex: "-1",
        borderWidth: "4px",
        borderStyle: "solid",
        borderImageSlice: 1,
        borderImageSource: 'linear-gradient(90deg, rgba(201,201,201,0) 0%, rgba(201,201,201,1) 7%, rgba(201,201,201,1) 95%, rgba(201,201,201,0) 100%)',
        borderLeft: 0,
        borderRight: 0,
      }}
    >
      <Heading as="h1" fontWeight="500" fontSize="6xl" lineHeight="1" mt="3">
        Ćelija
      </Heading>
    </Flex>
  );
};
