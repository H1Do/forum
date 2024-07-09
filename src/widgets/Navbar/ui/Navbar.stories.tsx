import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator }
    from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widget/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
    <Navbar {...args} />
);

export const Light = Template.bind({});
Light.decorators = [
    StoreDecorator({
        user: {
            authData: undefined,
        },
    }),
];

export const Dark = Template.bind({});
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: undefined,
        },
    }),
];

export const LightLoggedIn = Template.bind({});
LightLoggedIn.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    }),
];

export const DarkLoggedIn = Template.bind({});
DarkLoggedIn.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    }),
];
