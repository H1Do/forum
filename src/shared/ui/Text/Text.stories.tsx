import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure autem provident cumque tempore quidem cum modi deserunt omnis. Minima, repudiandae aliquam? Consectetur aliquid incidunt maxime eius veritatis molestiae tempore praesentium!',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure autem provident cumque tempore quidem cum modi deserunt omnis. Minima, repudiandae aliquam? Consectetur aliquid incidunt maxime eius veritatis molestiae tempore praesentium!',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem ipsum dolor',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure autem provident cumque tempore quidem cum modi deserunt omnis. Minima, repudiandae aliquam? Consectetur aliquid incidunt maxime eius veritatis molestiae tempore praesentium!',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure autem provident cumque tempore quidem cum modi deserunt omnis. Minima, repudiandae aliquam? Consectetur aliquid incidunt maxime eius veritatis molestiae tempore praesentium!',
};
PrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title lorem ipsum dolor',
};
OnlyTitleDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure autem provident cumque tempore quidem cum modi deserunt omnis. Minima, repudiandae aliquam? Consectetur aliquid incidunt maxime eius veritatis molestiae tempore praesentium!',
};
OnlyTextDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure autem provident cumque tempore quidem cum modi deserunt omnis. Minima, repudiandae aliquam? Consectetur aliquid incidunt maxime eius veritatis molestiae tempore praesentium!',
    size: TextSize.L,
};
