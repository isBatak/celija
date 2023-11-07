'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface RefresherProps {
	timeout?: number;
}

export const Refresher = ({ timeout = 1000 }: RefresherProps) => {
	const router = useRouter();

	useEffect(() => {
		const interval = setInterval(() => {
			router.refresh();
		}, timeout);

		return () => {
			clearInterval(interval);
		};
	}, [router, timeout]);

	return null;
};
