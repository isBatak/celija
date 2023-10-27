'use client';
import {
	Dialog,
	DialogBackdrop,
	DialogCloseTrigger,
	DialogContainer,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from '~/components/ui/dialog';
import { Portal } from '@ark-ui/react';
import { XIcon } from 'lucide-react';
import { Stack } from 'styled-system/jsx';
import { Button } from '~/components/ui/button';
import { IconButton } from '~/components/ui/icon-button';
import {
	Radio,
	RadioButtonGroup,
	RadioControl,
	RadioLabel,
} from '~/components/ui/radio-button-group';
import { Label } from '../ui/label';
import { sendMessage } from '~/app/actions';
import { PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Input } from '../ui/input';
import { Text } from '../ui/typography';

const initialState = {
	message: null,
	importance: null,
};

export const importanceOptions = ['Manja', 'Srednja', 'Visoka'] as const;

const SubmitButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button width="full" aria-disabled={pending}>
			{pending ? 'Slanje...' : 'Pošalji'}
		</Button>
	);
};

const ErrorMessage = ({ state, name }: { state: any; name: string }) => {
	const { errors } = state;

	const fieldErrors = useMemo(() => {
		if (!errors) return null;

		return errors.filter((error: any) => {
			if (name === 'formError') {
				return !error.path;
			}

			return error.path?.includes(name);
		});
	}, [errors, name]);

	if (!fieldErrors || fieldErrors.length === 0) return null;

	return fieldErrors.map((error: any) => (
		<Text key={error.message} color="red.400">
			{error.message}
		</Text>
	));
};

export const ContributionForm = ({ children }: PropsWithChildren) => {
	const [state, formAction] = useFormState(sendMessage, initialState);
	const ref = useRef<HTMLFormElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!state.errors) {
			ref.current?.reset();
			setIsOpen(false);
		}
	}, [state]);

	return (
		<Dialog
			open={isOpen}
			onClose={() => {
				setIsOpen(false);
				delete state.errors;
			}}
		>
			<DialogTrigger asChild onClick={() => setIsOpen(true)}>
				{children}
			</DialogTrigger>
			<Portal>
				<DialogBackdrop />
				<DialogContainer>
					<DialogContent>
						<form ref={ref} action={formAction}>
							<Stack gap="8" p="6">
								<Stack gap="1">
									<DialogTitle>Poruka</DialogTitle>

									<DialogDescription>
										Unesite jednu riječ koju bi ste željeli da se nađe u ćeliji.
										<br />
										Primjer poruke: &quot;Sloboda&quot;
									</DialogDescription>
									<Input name="message" placeholder="Unesite poruku" />
									<ErrorMessage state={state} name="message" />

									<Label>Važnost:</Label>
									<RadioButtonGroup w="full" name="importance">
										{importanceOptions.map((importanceOption, id) => (
											<Radio key={id} value={importanceOption} px="0" flex="1 0 auto">
												<RadioControl />
												<RadioLabel>{importanceOption}</RadioLabel>
											</Radio>
										))}
									</RadioButtonGroup>
									<ErrorMessage state={state} name="importance" />
								</Stack>

								<ErrorMessage state={state} name="formError" />

								<Stack gap="3" direction="row" width="full">
									<DialogCloseTrigger asChild>
										<Button variant="outline" width="full">
											Odustani
										</Button>
									</DialogCloseTrigger>
									<SubmitButton />
								</Stack>
							</Stack>

							<DialogCloseTrigger asChild position="absolute" top="2" right="2">
								<IconButton aria-label="Close Dialog" variant="ghost" size="sm">
									<XIcon />
								</IconButton>
							</DialogCloseTrigger>
						</form>
					</DialogContent>
				</DialogContainer>
			</Portal>
		</Dialog>
	);
};
