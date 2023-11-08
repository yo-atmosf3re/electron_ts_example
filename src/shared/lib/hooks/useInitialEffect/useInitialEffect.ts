import { useEffect } from 'react';

// ! Не факт, что это вообще на этом проекте когда-либо пригодиться! Если не понадобится - удалить;
/**
 * Кастомный хук, который оборачивает коллбэк в useEffect, внутри которого есть проверка на среду выполнения кода, а именно проверка на storybook-окружение;
 * @param callback
 * @returns void
 */
export function useInitialEffect(callback: () => void): void {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
