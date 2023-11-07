'use client';
import { useFormState } from 'react-dom';
import { updateMessageDone } from '../actions';
import { useRef, useOptimistic } from 'react';

export interface DoneProps {
	message: any;
}

export function Done({ message }: DoneProps) {
	const ref = useRef<HTMLFormElement>(null);
	const [optimisticMessage, addOptimisticMessage] = useOptimistic(
		message,
		(state: any, newMessage: any) => ({ ...state, ...newMessage })
	);

	return (
		<form
			ref={ref}
			action={async (formData: FormData) => {
				const id = formData.get('id');
				const done = JSON.parse(formData.get('done')?.toString() ?? 'false');
				addOptimisticMessage({ id, done });
				await updateMessageDone({ id, done });
			}}
		>
			<input type="hidden" name="id" value={optimisticMessage.id} />
			<input
				type="checkbox"
				checked={optimisticMessage.done}
				name="done"
				value={optimisticMessage.done ? 'false' : 'true'}
				onChange={() => {
					ref.current?.requestSubmit();
				}}
			/>
		</form>
	);
}
