import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImage from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 21,
        country: Country.Russia,
        lastname: 'Latypov',
        first: 'Niyaz',
        city: 'Ufa',
        currency: Currency.RUB,
        avatar: AvatarImage,
    },
    readonly: true,
};

export const InEdit = Template.bind({});
InEdit.args = {
    data: {
        username: 'admin',
        age: 21,
        country: Country.Russia,
        lastname: 'Latypov',
        first: 'Niyaz',
        city: 'Ufa',
        currency: Currency.RUB,
        avatar: AvatarImage,
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'Some error',
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
