"use client";

import { Container, Flex } from "styled-system/jsx";
import { Text } from "~/components/ui/typography";

export default function Home() {
  return (
    <Container py={{ base: "12", md: "16" }} maxW="3xl">
      <Flex align="center" justify="center" mb="6">
        <img src="/celija.svg" width="300" />
      </Flex>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna
        justo, mattis vitae posuere quis, hendrerit ut turpis. Praesent eget
        facilisis eros. Maecenas eu ante hendrerit, feugiat est in, tempus
        tellus. Ut molestie quam eget risus mollis, sit amet ultricies metus
        accumsan. Nam a blandit nisl, ac volutpat nisi. Nullam viverra volutpat
        mattis. Vivamus at bibendum elit. Suspendisse potenti. Maecenas vitae
        sapien interdum, porta turpis at, vehicula lorem. In sed accumsan mi. In
        posuere facilisis quam ut pulvinar. Donec ullamcorper tempus metus ac
        malesuada.
      </Text>
    </Container>
  );
}
