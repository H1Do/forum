import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../Text/Text';
import { Card, CardTheme } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="Title" text="Text" />,
    theme: CardTheme.NORMAL,
};
Normal.decorators = [];

export const Outlined = Template.bind({});
Outlined.args = {
    children: <Text title="Title" text="Text" />,
    theme: CardTheme.OUTLINED,
};
Outlined.decorators = [];
