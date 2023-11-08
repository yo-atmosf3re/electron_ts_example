import { Suspense, memo, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    AppRoutesPropsType,
    // routeConfig,
} from 'shared/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';
import { RequireAuth } from './RequireAuth';

// ! Для корректной работы сверить типизацию, раскомментировать нужный код;
const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesPropsType) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (

            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly
                        ? <RequireAuth>{element}</RequireAuth>
                        : element
                }
            />
        );
    }, []);

    return (
        <Routes>
            {
                // Object.values(routeConfig).map(renderWithWrapper)
            }
        </Routes>
    );
};

export default memo(AppRouter);
