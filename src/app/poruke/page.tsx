"use client";

import { Container, Flex, VStack } from "styled-system/jsx";
import { Logo } from "~/components/elements/logo";
import { Heading, Text } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { ContributionForm } from "~/components/elements/contribution-form";
import { Badge } from "~/components/ui/badge";

export default function Home() {
  return (
    <Container py={{ base: "12", md: "16" }} maxW="md">
      <Heading fontSize="2xl">Poruke:</Heading>
      <VStack gap="2" alignItems="stretch">
        <VStack
          gap="2"
          alignItems="flex-start"
          shadow="md"
          borderRadius="md"
          border="1px solid token(colors.gray.200)"
          p="2"
        >
          <Text textAlign="justify">Sloboda</Text>
          <Badge>Visoka</Badge>
        </VStack>

        <VStack
          gap="2"
          alignItems="flex-start"
          shadow="md"
          borderRadius="md"
          border="1px solid token(colors.gray.200)"
          p="2"
        >
          <Text textAlign="justify">Sloboda</Text>
          <Badge>Srednja</Badge>
        </VStack>
      </VStack>
    </Container>
  );
}
