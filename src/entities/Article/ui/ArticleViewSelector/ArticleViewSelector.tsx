import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ListIcon from 'shared/assets/icons/list-icon.svg';
import TiledIcon from 'shared/assets/icons/tiled-icon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView,
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.PLATE,
        icon: TiledIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
        onViewClick(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {
                viewTypes.map((viewType) => (
                    <Button
                        onClick={onClick(viewType.view)}
                        theme={ButtonTheme.CLEAR}
                        key={viewType.view}
                    >
                        <Icon
                            Svg={viewType.icon}
                            className={classNames('', {
                                [cls.selected]: viewType.view === view,
                            }, [])}
                        />
                    </Button>
                ))
            }
        </div>
    );
});
