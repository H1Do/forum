import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarPlaceholderImg from 'shared/assets/images/avatar-placeholder.jpg';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '1',
        text: 'text',
        user: {
            id: '1',
            username: 'username',
            avatar: AvatarPlaceholderImg,
        },
    },
};
Primary.decorators = [];
