import type { Metadata } from 'next';
import { Fira_Code, Courier_Prime } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { cx, sva } from 'styled-system/css';
import './global.css';

const body = Courier_Prime({ weight: '400', subsets: ['latin'] });
const code = Fira_Code({ subsets: ['latin'], variable: '--font-code' });

export const metadata: Metadata = {
	title: 'ćelija',
	description: `U svijetu gdje su granice između umjetnosti i administracije zamagljene, gdje birokracija
		često zasjenjuje kreativnost, "ĆELIJA" propitkuje bit kulture, ulogu umjetnosti u
		našim životima i dihotomije koje definiraju opće razumijevanje umjetničkog izražavanja. Je
		li "ĆELIJA" kritika administrativnih zavrzlama koje određuju sudbinu kulture ili
		je oda otpornosti mladih umjetnika koji se usuđuju prkositi statusu quo? Umjetnost se ne
		pridržava uvijek naših predrasuda. Ima moć šokiranja, često nas ostavi zbunjenima, a u nekim
		slučajevima, propitujući sama svoju bit. "ĆELIJA" nas podsjećajuća da je umjetnost
		ipak subjektivno područje, otvoreno za tumačenje svima. S tim na umu, umjetnicima uvijek
		treba pomoć, a kulturu gradimo skupa.`,
};

const styles = sva({
	slots: ['main', 'header', 'showcase'],
	base: {
		header: {
			bg: { base: 'bg.canvas', lg: 'transparent' },
			display: 'flex',
			flexDirection: 'column',
			left: '0',
			position: 'fixed',
			right: '0',
			top: '0',
			zIndex: 'sticky',
			borderBottomWidth: { base: '1px', lg: '0px' },
		},
		main: {
			display: 'flex',
			flexDirection: 'column',
			flex: '1',
			justifyContent: 'center',
			pt: '16',
			overflow: { lg: 'hidden' },
		},
		showcase: {
			height: { base: 'auto', lg: 'calc(100vh - 96px)' },
			width: '1312px',
			px: { base: '4', md: '6' },
			transform: { base: 'none', lg: 'rotate(8deg) translateX(50px)' },
		},
	},
})();

const RootLayout = (props: PropsWithChildren) => {
	const { children } = props;
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
				<meta property="og:image" content="/opengraph-image?<generated>" />
				<meta property="og:image:alt" content="ćelija" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
			</head>
			<body className={cx(body.className, code.variable)}>{children}</body>
		</html>
	);
};

export default RootLayout;
