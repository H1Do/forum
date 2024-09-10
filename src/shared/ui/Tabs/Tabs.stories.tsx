import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        { value: '1', content: 'Tab 1' },
        { value: '2', content: 'Tab 2' },
        { value: '3', content: 'Tab 3' },
    ],
    value: '1',
    onTabClick: action('onTabClick'),
};
Primary.decorators = [];