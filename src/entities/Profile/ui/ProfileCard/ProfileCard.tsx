import { CountrySelect } from 'entities/Country';
import { Country } from 'entities/Country/model/types/country';
import { CurrencySelect } from 'entities/Currency';
import { Currency } from 'entities/Currency/model/types/currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname?: (_value: string) => void;
    onChangeLastname?: (_value: string) => void;
    onChangeAge?: (_value: string) => void;
    onChangeCountry?: (_value: Country) => void;
    onChangeCurrency?: (_value: Currency) => void;
    onChangeCity?: (_value: string) => void;
    onChangeUsername?: (_value: string) => void;
    onChangeAvatar?: (_value: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCountry,
        onChangeCurrency,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <VStack gap="8" max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </VStack>
        );
    }

    if (error) {
        return (
            <VStack className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте перезагрузить страницу')}
                />
            </VStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="16" max align="start" className={classNames(cls.ProfileCard, mods, [className])}>
            {
                data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar
                            src={data?.avatar}
                            alt={t('Аватар')}
                        />
                    </div>
                )
            }
            <Input
                value={data?.first}
                placeholder={t('Имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
            />
            <Input
                value={data?.age}
                placeholder={t('Возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                maxLength={3}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Никнейм')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Ссылка на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
        </VStack>
    );
};
