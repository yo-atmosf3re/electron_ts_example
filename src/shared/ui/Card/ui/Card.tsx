import React, { HTMLAttributes, ReactNode } from 'react';
import { ModsType, classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardPropsI extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

/**
 * Компонента-карточка, входящая в состав UI-kit проекта. Стилизует children этой компоненты в подобие блока в виде карточки-блока;
 * @param className
 * @param children
 * @returns
 */
export const Card: React.FC<CardPropsI> = ({
    className, children, ...otherProps
}) => {
    const mods: ModsType = {};
    const additionalClasses: Array<string | undefined> = [
        className,
    ];
    return (
        <div
            className={classNames(cls.card, mods, additionalClasses)}
            {...otherProps}
        >
            {children}
        </div>
    );
};
