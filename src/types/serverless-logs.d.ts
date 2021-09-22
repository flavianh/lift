declare module "@serverless/utils/log" {
    class Logger {
        debug(message: string): void;
        info(message: string): void;
        notice: ((message?: string) => void) & {
            success(message: string): void;
        };
        warn(message: string): void;
        error(message: string): void;
    }
    class Progress {
        notice(message?: string): void;
        info(message: string): void;
        remove(): void;
    }

    export function getPluginWriters(pluginName: string): {
        log: Logger;
        progress: {
            get(name: string): Progress;
        };
    };
}
