'use client';

import { Container } from 'styled-system/jsx';
import { Logo } from '~/components/elements/logo';
import { Heading, Text } from '~/components/ui/typography';
import { Button } from '~/components/ui/button';
import { ContributionForm } from '~/components/elements/contribution-form';

export default function Home() {
	return (
		<Container py={{ base: '12', md: '16' }} maxW="3xl">
			<Logo />

			<Text mt="10" textAlign="justify">
				U svijetu gdje su granice između umjetnosti i administracije zamagljene, gdje birokracija
				često zasjenjuje kreativnost, "ĆELIJA" propitkuje bit kulture, ulogu umjetnosti u našim
				životima i dihotomije koje definiraju opće razumijevanje umjetničkog izražavanja. Je li
				"ĆELIJA" kritika administrativnih zavrzlama koje određuju sudbinu kulture ili je oda
				otpornosti mladih umjetnika koji se usuđuju prkositi statusu quo? Umjetnost se ne pridržava
				uvijek naših predrasuda. Ima moć šokiranja, često nas ostavi zbunjenima, a u nekim
				slučajevima, propitujući sama svoju bit. "ĆELIJA" nas podsjećajuća da je umjetnost ipak
				subjektivno područje, otvoreno za tumačenje svima. S tim na umu, umjetnicima uvijek treba
				pomoć, a kulturu gradimo skupa. Razmisli što je tebi bitno za kulturu i umjetnost;
				metaforički ili konkretno, ostavljamo ti da sam procijeniš, i niže ispuni svoju ĆELIJU
				jednom riječi. Npr. Sloboda, financiranje, kreativnost, protokol… Svoj doprinos pronađi u
				Galeriji Matice hrvatske na otvorenju ĆELIJE 14.11. u 19h.
			</Text>

			<Heading mt="10" fontSize="xl">
				Pridruite nam se u live streamu....
			</Heading>
			<Text textAlign="justify">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna justo, mattis vitae
				posuere quis, hendrerit ut turpis. Praesent eget facilisis eros.
			</Text>

			<Button>Link na Google Sheet</Button>

			<Heading mt="10" fontSize="xl">
				Pridruzite nam se
			</Heading>
			<Text textAlign="justify">
				Ako zelite doprinjeti nasem projektu javite se porukom ovdje...
			</Text>

			<ContributionForm>
				<Button>Otvori Obrazac</Button>
			</ContributionForm>
		</Container>
	);
}
