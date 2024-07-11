import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';

export interface SibebarItemType {
    path: string;
    text: string;
    icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SibebarItemType[] = [
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
        path: RoutePath.profile,
        icon: ProfileIcon,
        text: 'Страница профиля',
    },
];
