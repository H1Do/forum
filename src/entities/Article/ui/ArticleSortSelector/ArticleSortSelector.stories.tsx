import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const Primary = Template.bind({});
Primary.args = { };
Primary.decorators = [];
