import { sql } from '@vercel/postgres';
import { Circle, Container, Flex, HStack, VStack } from 'styled-system/jsx';
import { Heading, Text } from '~/components/ui/typography';
import { Badge } from '~/components/ui/badge';
import { Label } from '~/components/ui/label';
import { Done } from './Done';

export const runtime = 'edge';
export const preferredRegion = 'home';

export default async function Messages() {
	let data = await sql`SELECT * FROM messages`;
	const { rows: messages } = data;

	return (
		<Container py={{ base: '12', md: '16' }} maxW="md">
			<Heading fontSize="2xl">Poruke:</Heading>
			<VStack gap="2" alignItems="stretch">
				{messages.length === 0 && <Text textAlign="center">Trenutno nema poruka.</Text>}
				{messages.map((message, index) => (
					<HStack
						key={message.id}
						gap="2"
						alignItems="flex-start"
						shadow="md"
						borderRadius="md"
						border="1px solid token(colors.gray.200)"
						p="2"
					>
						<Circle bg="gray.200" w="8" h="8" alignSelf="center">
							<Text>{index + 1}</Text>
						</Circle>

						<VStack gap="2" alignItems="flex-start" flex="1 0 auto">
							<Text>{message.message}</Text>
							<Flex align="baseline">
								<Label>Važnost:</Label>
								<Badge>{message.importance}</Badge>
							</Flex>
						</VStack>

						<Flex alignSelf="center">
							<Done message={message} />
						</Flex>
					</HStack>
				))}
			</VStack>
		</Container>
	);
}
