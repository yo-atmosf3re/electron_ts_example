import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const App = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={classNames('app', {}, [])}>
            Application
        </div>
    );
};

export default App;
