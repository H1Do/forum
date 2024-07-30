import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import ArticlesIcon from 'shared/assets/icons/article-icon.svg';
import MainIcon from 'shared/assets/icons/main-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import { SibebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: SibebarItemType[] = [
            {
                path: RoutePath.main,
                icon: MainIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                icon: AboutIcon,
                text: 'О сайте',
            },
            {
                path: `${RoutePath.profile}${userData?.id}`,
                icon: ProfileIcon,
                text: 'Страница профиля',
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                icon: ArticlesIcon,
                text: 'Статьи',
                authOnly: true,
            },
        ];

        return SidebarItemsList;
    },
);
