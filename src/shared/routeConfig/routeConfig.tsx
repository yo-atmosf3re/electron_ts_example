import { RouteProps } from 'react-router-dom';

// ? Объединяем в один тип RoureProps из RRD, добавляем поле authOnly, которое если true, то блокирует роуты;
export type AppRoutesPropsType = RouteProps & {
    authOnly?: boolean;
}

// ? Перечисление названий маршрутов;
export enum APP_ROUTES {
    // ? Основные маршруты;
    MAIN = '/',
    // ? Последний маршрут;
    NOT_FOUND = 'not_found'
}

// ? Вся настройка и объявление роутов происходит с помощью данного функционала ;
// export const ROUTES_PATH: Record<APP_ROUTES, string> = {
//     // ? Пример маршрута;
//     [APP_ROUTES.MAIN]: '/',
//     // ? Последний маршрут;
//     [APP_ROUTES.NOT_FOUND]: '*',
// };

// ! Раскомментить это, удалить пустой routeConfig, добавить всё необходимое в enum и ROUTES_PATH;

// export const routeConfig: Record<APP_ROUTES, AppRoutesPropsType> = {
//     // ? Пример маршрута;
//     [APP_ROUTES.MAIN]: {
//         path: ROUTES_PATH.main,
//         element: <MainPage />,
//     // ? Последний маршрут;
//     // [APP_ROUTES.NOT_FOUND]: {
//     //     path: ROUTES_PATH.not_found,
//     //     element: <NotFoundPage />,
//     // },
// };

export const routeConfig = {

};
