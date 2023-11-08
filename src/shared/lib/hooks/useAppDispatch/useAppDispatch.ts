import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider';

/**
 * Кастомный хук, который даёт useDispatch хуку нужную типизацию и возвращает его;
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
