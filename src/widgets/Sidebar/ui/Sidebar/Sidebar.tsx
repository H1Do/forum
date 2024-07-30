import { getUserAuthData } from 'entities/User';
import {
    memo, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const SidebarItemsList = useSelector(getSidebarItems);
    const isAuth = useSelector(getUserAuthData);

    const onToggle = async () => {
        setCollapsed((collapsed) => !collapsed);
    };

    const itemsList = useMemo(() => SidebarItemsList
        .filter((item) => !(item.authOnly && !isAuth))
        .map((item) => (
            <SidebarItem
                key={item.path}
                item={item}
                collapsed={collapsed}
            />
        )), [collapsed, isAuth, SidebarItemsList]);

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(
                    cls.sidebar,
                    { [cls.collapsed]: collapsed },
                    [className],
                )
            }
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseButton}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {
                    itemsList
                }
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});
