/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

declare module '*.scss' {

   interface IClassNames {
      [className: string]: string
   }
   const classNames: IClassNames;
   export = classNames;
}

declare module '*.svg' {
   import React from 'react';

   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
   export default SVG;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

// ? Глобальная константа, переменная окружения - нужна для того, чтобы определить какая сборка - dev, prod;
declare const __IS_DEV__: boolean;
// ? Глобальная константа, переменная окружения - определение URL сервера;
declare const __API__: string;
// ? Глобальная константа, переменная окружения - определение среды выполнения кода в зависимости от значения этой переменной;
declare const __PROJECT__: 'storybook' | 'fronted' | 'jest';

/**
 * Собственноручно написанный DeepPartial.
 * DeepPartial даёт возможность частично или полностью скопировать `state`. Некоторые свойства, при их наличии, могут быть полностью скопированы (глубоко) или нет - при их отсутствии;
 */
type DeepPartial<T> = T extends object ? {
   [P in keyof T]?: DeepPartial<T[P]>;
} : T;

/**
 * Describes a location that is the destination of some navigation, either via
 * `history.push` or `history.replace`. May be either a URL or the pieces of a
 * URL path;
 * `Перевод`: Описывает местоположение, которое является местом назначения некоторой навигации, либо через «history.push», либо «history.replace». Это может быть либо URL-адрес, либо фрагменты пути URL-адреса;
 * \
 * `UPD: добавлено сюда, чтобы избежать проблем и багов с типизацией в некоторых местах приложения`
 */
declare type To = string | Partial<{
   pathname: string,
    search: string,
    hash: string,
   }>
