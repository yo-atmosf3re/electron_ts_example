import React, { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { ModsType, classNames } from '../../../lib/classNames/classNames';
import cls from './Button.module.scss';

export enum BUTTON_THEME {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline-red',
    OUTLINE_INVERTED = 'outline-inverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum BUTTON_SIZE {
    M = 'size_m',
    XL = 'size_xl',
    L = 'size_l',
}

interface ButtonPropsI extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: BUTTON_THEME;
    square?: boolean;
    size?: BUTTON_SIZE;
    disabled?: boolean;
    children: ReactNode;
}

/**
 * Кнопка с возможностью кастомизации, входящая в комплект UI-kit проекта;
 *
 * @param className
 * @param children - содержимое кнопки;
 * @param theme - тема кнопки, для доступа используется BUTTON_THEME enum;
 * @param square - флаг, указывающий, что кнопка должна быть квадратной;
 * @param size - размер кнопки, для доступа используется BUTTON_SIZE enum;
 * @param disabled - возможность отключить кнопку;
 */
export const Button: React.FC<ButtonPropsI> = memo(({
    className, children,
    theme = BUTTON_THEME.OUTLINE,
    size = BUTTON_SIZE.M,
    square,
    disabled,
    ...otherProps
}) => {
    const mods: ModsType = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };
    const additionalClasses: Array<string | undefined> = [
        className, cls[theme],
    ];
    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(cls.button, mods, additionalClasses)}
            {...otherProps}
        >
            {children}
        </button>
    );
});
