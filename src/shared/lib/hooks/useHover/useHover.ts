import { useCallback, useMemo, useState } from 'react';

interface UseHoverBindI {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverReslutType = [boolean, UseHoverBindI]

/**
 * useHover - кастомный хук, который используется для отслеживания наведения указателя мыши на определенный элемент. Для использования этого хука нужно в блок (div, например) развернуть объект с функциями onMouseEnter, onMouseLeave;
 * @constant isHover - флаг, указывающий, наведён ли указатель мыши на элемент;
 * @function onMouseEnter - функция, которая вызывается, если наведён указатель мыши на элемент;
 * @function onMouseLeave - функция, которая вызывается, если указатель мыши удалён от элемента;
 * @returns возвращает массив, содержащий isHover значение, указывающее, наведён ли указатель мыши на элемент, и объект с функциями onMouseEnter, onMouseLeave;
 */
export const useHover = (): UseHoverReslutType => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const onMouseEnter = useCallback((): void => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback((): void => {
        setIsHover(false);
    }, []);

    return useMemo(() => [
        isHover, { onMouseEnter, onMouseLeave },
    ], [isHover, onMouseEnter, onMouseLeave]);
};
