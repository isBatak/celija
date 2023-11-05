import { sql } from '@vercel/postgres';
import { Container, Flex, VStack } from 'styled-system/jsx';
import { Logo } from '~/components/elements/logo';
import { Heading, Text } from '~/components/ui/typography';
import { Button } from '~/components/ui/button';
import { ContributionForm } from '~/components/elements/contribution-form';
import { Badge } from '~/components/ui/badge';
import { Label } from '~/components/ui/label';

export const runtime = 'edge';
export const preferredRegion = 'home';

export default async function Messages() {
	let data = await sql`SELECT * FROM messages`;
	const { rows: messages } = data;

	return (
		<Container py={{ base: '12', md: '16' }} maxW="md">
			<Heading fontSize="2xl">Poruke:</Heading>
			<VStack gap="2" alignItems="stretch">
				{messages.length === 0 && (
					<Flex justifyContent="center" alignItems="center" flexDirection="column" gap="2" h="full">
						<Text textAlign="center">
							Trenutno nema poruka. Budite prvi koji će poslati poruku.
						</Text>
						<ContributionForm>
							<Button>Pošalji poruku</Button>
						</ContributionForm>
					</Flex>
				)}
				{messages.map((message) => (
					<VStack
						key={message.id}
						gap="2"
						alignItems="flex-start"
						shadow="md"
						borderRadius="md"
						border="1px solid token(colors.gray.200)"
						p="2"
					>
						<Text textAlign="justify">{message.message}</Text>
						<Flex align="baseline">
							<Label>Važnost:</Label>
							<Badge>{message.importance}</Badge>
						</Flex>
					</VStack>
				))}
			</VStack>
		</Container>
	);
}
