import {
    ChangeEvent, InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps =
    Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (_value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        disabled,
        ...otherProps
    } = props;

    const ref = useRef() as MutableRefObject<HTMLInputElement>;
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        setCaretPosition(event.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (event: any) => {
        setCaretPosition(event?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.inputWrapper, { [cls.disabled]: disabled }, [className])}>
            {
                placeholder && (
                    <div className={cls.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )
            }
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    disabled={disabled}
                    {...otherProps}
                />
                {
                    isFocused && !disabled && (
                        <span
                            className={cls.caret}
                            style={{ left: `${caretPosition * 8.8}px` }}
                        />
                    )
                }
            </div>
        </div>
    );
});
