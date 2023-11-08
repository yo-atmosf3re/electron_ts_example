import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widgets/ErrorPage';

interface ErrorBoundaryPropsI {
   children: ReactNode;
}

interface ErrorBoundaryStateI {
   hasError: boolean;
}

/**
 * Классовая компонента, которая обрабатывает ошибки в дочерних компонентах. Является обёрткой, перехватывает почти любые ошибки. Перехватывает ошибки во время рендеринга компонента, жизненного цикла или обработки события. В данном случае сообщает в консоль содержимое ошибки, отрисовывает ErrorPage;
 */
class ErrorBoundary
    extends React.Component<ErrorBoundaryPropsI, ErrorBoundaryStateI> {
    constructor(props: ErrorBoundaryPropsI) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // eslint-disable-next-line no-console
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <Suspense fallback="">
                    <ErrorPage />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
