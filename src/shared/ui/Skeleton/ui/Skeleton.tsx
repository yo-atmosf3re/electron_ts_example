import React, { CSSProperties } from 'react';
import { ModsType, classNames } from '../../../lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonPropsI {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

/**
 * Кастомный и полностью настраиваемый скелетон, входящий в комплект UI-kit проекта;
 * @param className
 * @param height - высота, указывается в процентах или в пикселях (например 100, или '50%');
 * @param width - ширина, указывается в процентах или в пикселях (например 100, или '50%');
 * @param border - border-radius (принимает значения в px, % и так далее), по-умолчанию 6px;
 * @returns
 */
export const Skeleton: React.FC<SkeletonPropsI> = ({
    className, height, width,
    border = '6px',
}) => {
    const mods: ModsType = {

    };
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };
    return (
        <div
            className={classNames(cls.skeleton, mods, [className])}
            style={styles}
        />
    );
};
