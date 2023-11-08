/* eslint-disable @typescript-eslint/no-unused-vars */
export type ModsType = Record<string, boolean | string | undefined>;

export const classNames = (cls: string, mods: ModsType = {}, additional: Array<string | undefined> = []): string => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
]
    .join(' ');
