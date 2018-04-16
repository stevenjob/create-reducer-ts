export type ActionHandlers<
  State,
  ActionType extends string,
  Action extends { type: string }
> = { readonly [P in ActionType]?: (state: State, action: Action) => State };

export function createReducer<
  State,
  ActionType extends string,
  Action extends { type: ActionType }
>(
  initialState: State,
  actionHandlers: ActionHandlers<State, ActionType, Action>
) {
  return function(state: State = initialState, action: Action) {
    const actionHandler = actionHandlers[action.type];
    return actionHandler ? actionHandler(state, action) : state;
  };
}

export default createReducer;
