import { useLocation, Navigate } from 'react-router-dom';

/**
 * Функция, которая ограничивает доступ к некоторым роутам в зависимости от наличия авторизационных данных;
 * @param children - содержимое RequireAuth-компоненты, которой оборачивается другая компонента. Дочерний компонент отображается только в случае, если есть авторизационные данные;
 */
export function RequireAuth({ children }: {children: JSX.Element}) {
    const location = useLocation();

    // ! Вставить сюда какие-то авторизационные данные, чтобы конструкция ниже отрабатывала;
    const auth = '';

    if (!auth) {
        return (
            <Navigate
                // ! Для корректной работы расскоментировать;
                // to={ROUTES_PATH.main}
                to=""
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}
