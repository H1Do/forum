import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import {
    memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return (
            <nav className={classNames(cls.navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onShowModal}
                >
                    {t('Войти')}
                </Button>
                {
                    isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                }
            </nav>
        );
    }

    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <AppLink to={RoutePath.main} className={cls.mainLink}>
                <Text className={cls.appName} title={t('HidoSocials')} theme={TextTheme.INVERTED} />
            </AppLink>
            <AppLink to={RoutePath.article_create} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
                {t('Создать статью')}
            </AppLink>
            <Dropdown
                items={[
                    {
                        content: t('Профиль'),
                        href: RoutePath.profile + authData.id,
                    },
                    {
                        content: t('Выйти'),
                        onClick: onLogout,
                    },
                ]}
                direction="bottom left"
                className={cls.dropdown}
                trigger={<Avatar size={30} src={authData.avatar} />}
            />
        </nav>
    );
});
