/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { preloadedInfo } from '../../public/preload';

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        preloadedInfo();
    }, []);

    return (
        <div className={classNames('app', {}, [])}>
            <h1>Hello World!</h1>
            We are using Node.js <span id="node-version"></span>, Chromium
            <span id="chrome-version"></span>, and Electron
            <span id="electron-version"></span>.
        </div>
    );
};

export default App;
