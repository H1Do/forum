import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                type="text"
                name="username"
                maxLength={16}
                autoFocus
                placeholder={t('Введите логин')}
                className={cls.input}
            />
            <Input
                type="password"
                name="password"
                maxLength={16}
                placeholder={t('Введите пароль')}
                className={cls.input}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginButton}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
