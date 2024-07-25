import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
// import cls from './BugButton.module.scss';

// Only for debugging purposes
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
            theme={ButtonTheme.OUTLINE}
        // eslint-disable-next-line i18next/no-literal-string
        >
            {t('throw error')}
        </Button>
    );
};
