import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
        {
            block.title && <Text title={block.title} className={cls.title} />
        }
        {
            block.paragraphs.map((paragraph) => (
                <Text text={paragraph} key={paragraph} className={cls.paragraph} />
            ))
        }
    </div>
));
