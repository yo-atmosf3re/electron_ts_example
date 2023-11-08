import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPagePropsI {
   className?: string;
}

export const ErrorPage: React.FC<ErrorPagePropsI> = ({
    className,
}) => {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <div className={cls.errorText}>
                Oops!
            </div>
            <div className={cls.errorDescription}>
                Что-то пошло не так, попробуйте обновить страницу
            </div>
            <Button
                onClick={reloadPage}
                className={cls['error-button']}
            >
                Обновить страницу
            </Button>
        </div>
    );
};
