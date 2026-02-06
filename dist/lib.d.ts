export type NormalizedState = "pass" | "fail" | "neutral";
export declare function normalizeState(state: string): {
    state: NormalizedState;
    recognized: boolean;
};
export declare function defaultColorForState(state: NormalizedState): string;
