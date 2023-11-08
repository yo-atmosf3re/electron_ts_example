/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { ModsType, classNames } from '../../../lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputPropsType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputPropsI extends HTMLInputPropsType {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

interface SelectHandlerI extends React.ChangeEventHandler<HTMLInputElement> {
    target?: EventTarget & HTMLInputElement
}

/**
 * Компонента-кастомный инпут, входящая в комплект UI-kit проекта;
 * @param className
 * @param value
 * @param onChange
 * @param autofocus - флаг отвечающий за фокус на инпуте;
 * @param readonly - передаёт этот флаг в свойство readOnly самого инпута (для чтения инпут или нет);
 */
export const Input: React.FC<InputPropsI> = memo(({
    className, value, onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);
    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlurHandler = () => {
        setIsFocused(false);
    };

    const onFocusHandler = () => {
        setIsFocused(true);
    };

    const onSelectHandler: SelectHandlerI = (e) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const mods: ModsType = {
        [cls.readonly]: readonly,
    };

    const angleBracketCondition = readonly
        ? <>{`${placeholder}\u00A0`}</>
        : (
            <>
                {`${placeholder}`}
                <span className={cls['angle-bracket']}>{'>'}</span>
            </>
        );

    return (
        <div
            className={classNames(cls['input-wrapper'], mods, [className])}
        >
            {
                placeholder
                    ? (
                        <div className={cls.placeholder}>
                            {
                                angleBracketCondition
                            }
                        </div>
                    )
                    : null
            }
            <div className={cls['caret-wrapper']}>
                <input
                    type={type}
                    value={value}
                    readOnly={readonly}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    onFocus={onFocusHandler}
                    onSelect={onSelectHandler}
                    className={cls.input}
                    {...otherProps}
                />
                {
                    isCaretVisible
                        ? (
                            <span
                                className={cls.caret}
                                style={{ left: `${caretPosition * 9}px` }}
                            />
                        )
                        : null
                }
            </div>
        </div>
    );
});
