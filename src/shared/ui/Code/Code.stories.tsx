import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator }
    from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: "import { ComponentStory, ComponentMeta } from '@storybook/react';\n"
+ 'import { ThemeDecorator }\n'
+ "    from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';\n"
+ "import { Theme } from 'app/providers/ThemeProvider';\n"
+ "import { Code } from './Code';\n"
+ '\n'
+ 'export default {\n'
+ "    title: 'shared/Code',\n"
+ '    component: Code,\n'
+ '} as ComponentMeta<typeof Code>;\n'
+ '\n'
+ 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;',
};
Primary.decorators = [];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    text: "import { ComponentStory, ComponentMeta } from '@storybook/react';\n"
+ 'import { ThemeDecorator }\n'
+ "    from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';\n"
+ "import { Theme } from 'app/providers/ThemeProvider';\n"
+ "import { Code } from './Code';\n"
+ '\n'
+ 'export default {\n'
+ "    title: 'shared/Code',\n"
+ '    component: Code,\n'
+ '} as ComponentMeta<typeof Code>;\n'
+ '\n'
+ 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;',
};
PrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const PrimaryOrange = Template.bind({});
PrimaryOrange.args = {
    text: "import { ComponentStory, ComponentMeta } from '@storybook/react';\n"
+ 'import { ThemeDecorator }\n'
+ "    from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';\n"
+ "import { Theme } from 'app/providers/ThemeProvider';\n"
+ "import { Code } from './Code';\n"
+ '\n'
+ 'export default {\n'
+ "    title: 'shared/Code',\n"
+ '    component: Code,\n'
+ '} as ComponentMeta<typeof Code>;\n'
+ '\n'
+ 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;',
};
PrimaryOrange.decorators = [
    ThemeDecorator(Theme.ORANGE),
];
