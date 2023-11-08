import React, { CSSProperties, useMemo } from 'react';
import { ModsType, classNames } from '../../../lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarPropsI {
    className?: string;
    src? : string;
    alt?:string;
    size?: number;
}

/**
 * Компонента для передачи аватара, входящая в комплект UI-kit проекта, которую можно настроить под себя различными пропсами;
 *
 * @param className - дополнительный класс для img;
 * @param src - ссылка на img;
 * @param alt - альтернативный текст для изображения;
 * @param size - размер img;
*/
export const Avatar: React.FC<AvatarPropsI> = ({
    className, src, alt, size,
}) => {
    const mods: ModsType = {

    };
    const additionalClasses: Array<string | undefined> = [
        className,
    ];

    // ? Задаём некоторые стили для img инлайново, а чтобы не было лишних перерисовок и объект сохранялся оборачиваем его в useMemo();
    const style: React.CSSProperties | undefined = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            className={classNames(cls.avatar, mods, additionalClasses)}
            src={src}
            alt={alt}
            style={style}
        />
    );
};
