import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Button } from 'shared/ui/Button/Button';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations.ts/fetchArticleRecommendations';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import {
    getArticleRecommendations,
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    const onSendComment = useCallback((text) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id!} />
                <Text className={cls.commentTitle} title={t('Рекомендуем')} size={TextSize.L} />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    view={ArticleView.PLATE}
                    className={cls.recommendations}
                    target="_blank"
                />
                <Text className={cls.commentTitle} title={t('Комментарии')} size={TextSize.L} />
                <Suspense fallback="">
                    <AddCommentForm onSendComment={onSendComment} />
                </Suspense>
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </Page>
        </DynamicModuleLoader>
    );
});

export default memo(ArticleDetailsPage);
