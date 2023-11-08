import React from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderPropsI {
   className?: string;
}

/**
 * Компонента-лоудер, входящая в состав UI-kit проекта;
 * @param className
 */
export const Loader: React.FC<LoaderPropsI> = ({
    className,
}) => (
    <div className={classNames(cls.loader, {}, [className])}>
        <div className={cls['loadingio-spinner-pulse-968omdk8qim']}>
            <div className={cls['ldio-sua4x21xnrr']}>
                <div />
                <div />
                <div />
            </div>
        </div>
    </div>
);
