/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManagerI } from 'app/providers/StoreProvider';
import { StateSchemaKeyType } from 'app/providers/StoreProvider/config/StateSchema';
import React, { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
    [name in StateSchemaKeyType]?: Reducer;
}

interface DynamicModuleLoaderPropsI {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children?: ReactNode;
}

/**
 * Позволяет использовать RTK-менеджер инкапсулировано, передавая в аргументы этой функции объект с ключём в виде названия редьюсера из StateSchema и значением в виде редьюсера, которому пренадлежит данный ключ-имя, а так же флаг, который указывает на то будет ли удаляться редьюсер или нет при размонтировании UI-компоненты;
 *
 * @param reducers - сам редьюсер;
 * @param removeAfterUnmount - удалять редьюсер при размонтировании UI-компоненты, которая обёрнута в DynamicModuleLoader, или нет. По умолчанию true;
 */
export const DynamicModuleLoader: React.FC<DynamicModuleLoaderPropsI> = ({
    children, reducers, removeAfterUnmount = true,
}) => {
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManagerI;
    useEffect(() => {
        Object.entries(reducers)
            .forEach(([name, reducer]) => {
                // ! При добавлении типизации в схему убрать игнор;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                store.reducerManager.add(name as StateSchemaKeyType, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers)
                    .forEach(([name, reducer]) => {
                        store.reducerManager.remove(name as StateSchemaKeyType);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    });
            }
        };
    }, []);
    return (
        <>
            {
                children
            }
        </>
    );
};
