import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const readonly = useSelector(getProfileReadonly);
    const canEdit = authData?.id === profileData?.id;
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {
                canEdit
                    ? (
                        <div>
                            {readonly
                                ? (
                                    <Button
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onEdit}
                                    >
                                        {t('Редактировать')}
                                    </Button>
                                )
                                : (
                                    <div className={cls.buttons}>
                                        <Button
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={onCancelEdit}
                                        >
                                            {t('Отменить')}
                                        </Button>
                                        <Button
                                            theme={ButtonTheme.OUTLINE}
                                            onClick={onSave}
                                        >
                                            {t('Сохранить')}
                                        </Button>
                                    </div>
                                )}
                        </div>
                    )
                    : null
            }
        </div>
    );
};
