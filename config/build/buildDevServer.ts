import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        // ! Отключает возможность открывать новую вкладку в браузере;
        open: false,
        historyApiFallback: true,
        hot: true,
    };
}
