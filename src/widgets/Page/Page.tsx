import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollRestorationPositionByPath, scrollRestorationActions } from 'features/ScrollRestoration';
import {
    MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
    const { t } = useTranslation();
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getScrollRestorationPositionByPath(state, pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd || (() => {}),
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const handleScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
        dispatch(scrollRestorationActions.setScrollPosition({
            path: pathname,
            position: event.currentTarget.scrollTop,
        }));
    }, 500);

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={handleScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
