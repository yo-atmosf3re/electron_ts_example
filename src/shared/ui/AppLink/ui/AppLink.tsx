import React, { ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '../../../lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum APP_LINK_THEME {
   PRIMARY = 'primary',
   SECONDARY = 'secondary',
   RED = 'red'
}

interface AppLinkPropsI extends LinkProps {
   className?: string;
   theme?: APP_LINK_THEME;
   children?: ReactNode;
}

/**
 * Кастомизированная компонента, входящая в состав UI-kit проекта, для создания ссылок;
 * @param className
 * @param theme - тема ссылки, для доступа используется APP_LINK_THEME enum;
 * @param children
 */
export const AppLink: React.FC<AppLinkPropsI> = memo(({
    className, children, theme = APP_LINK_THEME.PRIMARY, ...otherProps
}) => (
    <Link
        to={otherProps.to}
        className={classNames(cls.appLink, {}, [className, cls[theme]])}
    >
        {children}
    </Link>
));
