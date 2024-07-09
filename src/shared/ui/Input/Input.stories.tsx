import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'username',
    defaultValue: 'h1do',
    autoFocus: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    placeholder: 'username',
    defaultValue: 'h1do',
    autoFocus: true,
};
PrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
];
