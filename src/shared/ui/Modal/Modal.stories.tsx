import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid facilis ducimus harum id quaerat architecto consequuntur. Fugit dolores consectetur facilis eum distinctio architecto reiciendis eius, dignissimos, exercitationem hic dolor alias.',
    isOpen: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid facilis ducimus harum id quaerat architecto consequuntur. Fugit dolores consectetur facilis eum distinctio architecto reiciendis eius, dignissimos, exercitationem hic dolor alias.',
    isOpen: true,
    className: Theme.DARK,
};
PrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
];
