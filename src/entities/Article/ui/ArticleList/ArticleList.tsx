import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = ({
    className,
    articles,
    view = ArticleView.PLATE,
    isLoading,
}: ArticleListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {
                    new Array(view === ArticleView.LIST ? 3 : 9)
                        .fill(0)
                        .map((item, index) => (
                            <ArticleListItemSkeleton view={view} key={index} />
                        ))
                }
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem key={article.id} article={article} view={view} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
        </div>
    );
};
