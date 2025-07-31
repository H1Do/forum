import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (_value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.England, content: Country.England },
    { value: Country.Japan, content: Country.Japan },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Germany, content: Country.Germany },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.France, content: Country.France },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = (value: string) => {
        onChange?.(value as Country);
    };

    return (
        <ListBox
            value={value}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            label={t('Страна')}
            className={classNames('', {}, [className])}
        />
    );
});
