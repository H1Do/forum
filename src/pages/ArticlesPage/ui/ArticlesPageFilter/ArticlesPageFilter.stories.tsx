import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesPageFilter } from './ArticlesPageFilter';

export default {
    title: 'pages/Article/ArticlesPageFilter',
    component: ArticlesPageFilter,
    decorators: [
        StoreDecorator(),
    ],
} as ComponentMeta<typeof ArticlesPageFilter>;

const Template: ComponentStory<typeof ArticlesPageFilter> = (args) => <ArticlesPageFilter {...args} />;

export const Primary = Template.bind({});
Primary.args = { };
Primary.decorators = [];
