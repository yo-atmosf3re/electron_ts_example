import React from 'react';
import { classNames } from '../../../lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconPropsI {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

/**
 * Обёртка для svg-иконок, которая позволяет более удобно управлять цветом, по-умолчанию fill имеет значение primary-color. Входит в комплект UI-kit проекта;
 * @param classname
 * @param SVG - svg, которое нужно обернуть;
 */
export const Icon: React.FC<IconPropsI> = ({
    className, Svg,
}) => (
    <Svg
        className={classNames(cls.icon, {}, [className])}
    />
);
