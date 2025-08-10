import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: [
        { value: '1', content: 'Item 1' },
        { value: '2', content: 'Item 2' },
        { value: '3', content: 'Item 3' },
    ],
    direction: 'bottom right',
    value: '1',
    onChange: (value) => console.log(value),
    label: 'Select Item',
};
