import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'text',
            user: {
                id: '1',
                username: 'username',
            },
        },
        {
            id: '2',
            text: 'text',
            user: {
                id: '1',
                username: 'username',
            },
        },
        {
            id: '3',
            text: 'text',
            user: {
                id: '1',
                username: 'username',
            },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    comments: [],
    isLoading: false,
};
