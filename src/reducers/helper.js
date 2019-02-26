/*
Options are per action IDs
Sample option Object
if none is defined it will use default
{
    onInitialize: () => {},
    onSuccess: () => {},
    onError: () => {},
}
*/
export const initialState = {
  byID: {},
  fetchingByID: {},
  errorByID: {},
};
const getHandlerKey = name =>
  `on${name.charAt(0).toUpperCase()}${name.slice(1)}`;

/*
    Maps reducer update handler to actions
*/
export const actionsMapper = (actionIDs = {}, options = {}) => {
  const perActionHandler = {};
  Object.keys(actionIDs).forEach(name => {
    perActionHandler[actionIDs[name]] = options[getHandlerKey(name)];
  });
  return perActionHandler;
};

export const createReducer = (initialState, handlers) => (
  state = initialState,
  action,
) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};

// TODO use reduce
export const mapArrayToObjectID = list => {
  const obj = {};
  list.forEach(item => {
    obj[item.id] = item;
  });
  return obj;
};
