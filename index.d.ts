export declare type ActionHandlers<State, ActionType extends string, Action extends {
    type: string;
}> = {
    readonly [P in ActionType]?: (state: State, action: Action) => State;
};
export declare function createReducer<State, ActionType extends string, Action extends {
    type: ActionType;
}>(initialState: State, actionHandlers: ActionHandlers<State, ActionType, Action>): (state: State | undefined, action: Action) => State;
export default createReducer;
