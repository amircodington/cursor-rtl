export type InitOptions = {
    clientVersion?: string;
    extensionVersion?: string;
    channel?: string;
    machineId?: string;
    installScope?: string;
    installSource?: string;
    appName?: string;
    appRoot?: string;
    elevation?: string;
};

/** Telemetry removed in this fork — keep the API so call sites stay unchanged. */
export function init(_opts?: InitOptions): void {
    // no-op
}

export function setCommonProperty(_key: string, _value: string): void {
    // no-op
}

export function action(name: string, props?: Record<string, string>): void {
    console.log('[Cursor RTL]', 'action:', name, props ?? '');
}

export function error(err: unknown, props?: Record<string, string>): void {
    const exception = err instanceof Error ? err : new Error(String(err));
    console.error('[Cursor RTL]', 'error:', exception.name, exception.message, props ?? '');
}

export async function dispose(): Promise<void> {
    // no-op
}
