import React, { memo } from 'react';
import { ModsType, classNames } from '../../../lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TEXT_THEME {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TEXT_ALIGN {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TEXT_SIZE {
    S = 'size-s',
    M = 'size-m',
    L = 'size-l',
}

interface TextPropsI {
    className?: string;
    title?: string;
    text?: string;
    theme?: TEXT_THEME;
    align?: TEXT_ALIGN;
    size?: TEXT_SIZE;
}

/**
 * Кастомный текстовый компонент, входящий в комплект UI-kit проекта, который отрисовывает либо яркий и более крупный title, либо более блёклый и мелкий text. Можно отрисовывать то и то;
 *
 * @param className
 * @param title - более яркий и, чуть выше среднего размера, текст;
 * @param text - слегка бледный и обычного размера текст;
 * @param theme - тема текста, для доступа используется TEXT_THEME enum;
 * @param align - выравнивание текста - справа, слева или по-центру, для доступа используется TEXT_ALIGN enum;
 * @param size - размера текста - S, M, L, для доступа используется TEXT_SIZE enum;
 */
export const Text: React.FC<TextPropsI> = memo(({
    className, text, title,
    theme = TEXT_THEME.PRIMARY,
    align = TEXT_ALIGN.LEFT,
    size = TEXT_SIZE.M,
}) => {
    const mods: ModsType = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };
    const additionalClasses: Array<string | undefined> = [
        className,
    ];
    return (
        <div
            data-testid="text-wrapper"
            className={classNames(cls['text-wrapper'], mods, additionalClasses)}
        >
            {
                title
                    ? (
                        <p
                            data-testid="title"
                            className={cls.title}
                        >
                            {title}
                        </p>
                    )
                    : null
            }
            {
                text
                    ? (
                        <p
                            data-testid="text"
                            className={cls.text}
                        >
                            {text}
                        </p>
                    )
                    : null
            }
        </div>
    );
});
