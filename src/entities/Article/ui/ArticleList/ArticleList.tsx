import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

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
    const { t } = useTranslation('article');

    const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.LIST ? 3 : 9)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton view={view} key={index} />
        ));

    const renderArticle = (article: Article) => (
        <ArticleListItem key={article.id} article={article} view={view} />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text className={cls.notFound} title={t('Статьи не найдены')} align={TextAlign.CENTER} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                articles?.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
            {
                isLoading && getSkeletons(view)
            }
        </div>
    );
};
