import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator }
    from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>div 1</div>
            <div>div 2</div>
            <div>div 3</div>
        </>
    ),
};
Row.decorators = [];

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>div 1</div>
            <div>div 2</div>
            <div>div 3</div>
        </>
    ),
};
Column.decorators = [];

export const RowGap24 = Template.bind({});
RowGap24.args = {
    children: (
        <>
            <div>div 1</div>
            <div>div 2</div>
            <div>div 3</div>
        </>
    ),
    gap: '24',
};
RowGap24.decorators = [];

export const ColumnGap24 = Template.bind({});
ColumnGap24.args = {
    direction: 'column',
    children: (
        <>
            <div>div 1</div>
            <div>div 2</div>
            <div>div 3</div>
        </>
    ),
    gap: '24',
};
ColumnGap24.decorators = [];
