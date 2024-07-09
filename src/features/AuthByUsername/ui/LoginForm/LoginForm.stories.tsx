import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    }),
];

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            error: 'some error',
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
            isLoading: true,
        },
    }),
];
