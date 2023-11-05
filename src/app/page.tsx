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

			<Text mb="10" fontSize="xl" textAlign="center">
				Iris Poljan & Josip Kresović
			</Text>

			<Text mt="10" textAlign="justify">
				U svijetu gdje su granice između umjetnosti i administracije zamagljene, gdje birokracija
				često zasjenjuje kreativnost, &quot;ĆELIJA&quot; propitkuje bit kulture, ulogu umjetnosti u
				našim životima i dihotomije koje definiraju opće razumijevanje umjetničkog izražavanja. Je
				li &quot;ĆELIJA&quot; kritika administrativnih zavrzlama koje određuju sudbinu kulture ili
				je oda otpornosti mladih umjetnika koji se usuđuju prkositi statusu quo? Umjetnost se ne
				pridržava uvijek naših predrasuda. Ima moć šokiranja, često nas ostavi zbunjenima, a u nekim
				slučajevima, propitujući sama svoju bit. &quot;ĆELIJA&quot; nas podsjećajuća da je umjetnost
				ipak subjektivno područje, otvoreno za tumačenje svima. S tim na umu, umjetnicima uvijek
				treba pomoć, a kulturu gradimo skupa.
			</Text>

			<Text mt="10" textAlign="justify">
				Razmisli što je tebi bitno za kulturu i umjetnost; metaforički ili konkretno, ostavljamo ti
				da sam procijeniš, i niže ispuni svoju ĆELIJU jednom riječi. Npr. Sloboda, financiranje,
				kreativnost, protokol…
			</Text>

			<Text mt="10" mb="2" textAlign="justify">
				Svoj doprinos pronađi u Galeriji Matice hrvatske na otvorenju ĆELIJE 14.11. u 19h.
			</Text>

			<ContributionForm>
				<Button>Otvori obrazac</Button>
			</ContributionForm>

			<Text mt="10" mb="2" textAlign="justify">
				Performans uživo pratite na ovom linku:
			</Text>
			<Button>Link na live performans</Button>
		</Container>
	);
}
