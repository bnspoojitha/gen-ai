export enum chatTypes {
    Answer = "Answer",
    Question = "Question",
  }
  
  export enum reducerTypes {
    ADD_CHAT = "ADD_CHAT",
    CLEAR_CHAT = "CLEAR_CHAT",
  }
  
  export type Chat = {
    text: string;
    type: chatTypes;
  };
  
  export type State = {
    chats: Chat[];
  };
  
  export const init_state_global: State = {
    chats: [],
  };
  
  export type ReducerActions =
    | { type: reducerTypes.ADD_CHAT; payloadGlobal?: Chat | string }
    | { type: reducerTypes.CLEAR_CHAT };
  
  export const globalReducer = (
    state: typeof init_state_global,
    action: ReducerActions
  ): typeof init_state_global => {
    switch (action.type) {
      case reducerTypes.ADD_CHAT:
        return {
          ...state,
          chats: [...state.chats, action.payloadGlobal as Chat],
        };
      case reducerTypes.CLEAR_CHAT:
        return {
          ...state,
          chats: [],
        };
      default:
        return state;
    }
  };
  