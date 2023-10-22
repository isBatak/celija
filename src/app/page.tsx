'use client'
import Image from 'next/image'
import { Container, Flex } from 'styled-system/jsx'
import { Text } from '~/components/ui/typography'


export default function Home() {
  return (
    <Container py={{ base: '12', md: '16' }} maxW="3xl">
      <Flex align='center' justify='center'>
        <img src="/celija.svg" width="300" />
      </Flex>

      <Text>test</Text>
      
    </Container>
  )
}
