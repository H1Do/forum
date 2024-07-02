import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator }
    from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageLoader } from './PageLoader';

export default {
    title: 'shared/PageLoader',
    component: PageLoader,
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => (
    <PageLoader {...args} />
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];
