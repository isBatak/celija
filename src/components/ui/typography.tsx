import type { PropsWithChildren } from 'react';
import { styled, type HTMLStyledProps } from 'styled-system/jsx';

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TextProps = PropsWithChildren<{
	as?: TagVariants;
}> &
	HTMLStyledProps<TagVariants>;

export const Text = (props: TextProps) => {
	const { as = 'p', ...rest } = props;

	const Component = styled(as);
	return <Component {...rest} />;
};

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = PropsWithChildren<{
	as?: HeadingTags;
}> &
	HTMLStyledProps<TagVariants>;

export const Heading = (props: HeadingProps) => {
	const { as = 'h2', children, ...rest } = props;

	return (
		<Text as={as} fontWeight="bold" {...rest}>
			{children}
		</Text>
	);
};
