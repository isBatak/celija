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
import { PropsWithChildren, useRef } from 'react';
import {
	// @ts-ignore
	experimental_useFormState as useFormState,
	// @ts-ignore
	experimental_useFormStatus as useFormStatus,
} from 'react-dom';
import { Input } from '../ui/input';

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

export const ContributionForm = ({ children }: PropsWithChildren) => {
	const [state, formAction] = useFormState(sendMessage, initialState);
	const ref = useRef<HTMLFormElement>(null);

	console.log(state);

	return (
		<Dialog>
			{({ close }) => (
				<>
					<DialogTrigger asChild>{children}</DialogTrigger>
					<Portal>
						<DialogBackdrop />
						<DialogContainer>
							<DialogContent>
								<form
									ref={ref}
									action={async (formData) => {
										const data = await formAction(formData);

										console.log(data?.errors);

										if (!(data?.errors?.lengts > 0)) {
											ref.current?.reset();
											close();
										}
									}}
								>
									<Stack gap="8" p="6">
										<Stack gap="1">
											<DialogTitle>Poruka</DialogTitle>

											<DialogDescription>
												Unesite jednu riječ koju bi ste željeli da se nađe u ćeliji.
												<br />
												Primjer poruke: &quot;Sloboda&quot;
											</DialogDescription>
											<Input name="message" placeholder="Unesite poruku" />

											<Label>Važnost:</Label>
											<RadioButtonGroup w="full" name="importance">
												{importanceOptions.map((importanceOption, id) => (
													<Radio key={id} value={importanceOption} px="0" flex="1 0 auto">
														<RadioControl />
														<RadioLabel>{importanceOption}</RadioLabel>
													</Radio>
												))}
											</RadioButtonGroup>
										</Stack>
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
				</>
			)}
		</Dialog>
	);
};
