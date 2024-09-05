import { ArticleList, ArticleViewSelector } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    getArticlesPageError,
    getArticlesPageInited,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/ArticlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const initialReduces = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const inited = useSelector(getArticlesPageInited);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    return (
        <DynamicModuleLoader reducers={initialReduces}>
            <Page
                className={classNames(cls.ArticlesPage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
                {error && <Text text={t('Произошла ошибка при загрузке статей')} theme={TextTheme.ERROR} />}
            </Page>
        </DynamicModuleLoader>
    );
});

export default memo(ArticlesPage);
