// Action IDs
const prefix = verb => {
  return {
    begin: `BEGIN_${verb}/`,
    initialize: `REQUEST_${verb}/`,
    success: `REQUEST_${verb}_SUCCESS/`,
    error: `REQUEST_${verb}_FAILURE/`,
  };
};
// Action ID CRUD request prefixes
export const createPrefix = prefix('CREATE');
export const readPrefix = prefix('READ');
export const updatePrefix = prefix('UPDATE');
export const deletePrefix = prefix('DELETE');

// generateActionIDs mashes up the prefixes and a given resource.
//
// (param) resource: constant from resources.js that is the resource name
// (returns) object of action names for fetching, initing a request,
// request success, and request failure.
export const generateActionIDs = (prefix, resource) => ({
  // What the component will dispatch
  begin: `${prefix.begin}${resource}`,
  // Parameter finagling here
  // Will emit immediately before api call
  initialize: `${prefix.initialize}${resource}`,
  // Emitted after an OK response
  success: `${prefix.success}${resource}`,
  // Emitted if something went wrong
  error: `${prefix.error}${resource}`,
});

export const generateCreateIDs = resource =>
  generateActionIDs(createPrefix, resource);

export const generateReadIDs = resource =>
  generateActionIDs(readPrefix, resource);

const generateAction = (actionID, desiredArgs = []) => (...args) => {
  const submittedArgs = {};
  desiredArgs.forEach((name, index) => {
    submittedArgs[name] = args[index];
  });
  return { type: actionID, ...submittedArgs };
};

export const generateActions = (actionIDs, options) => {
  const actions = {};
  Object.keys(actionIDs).forEach(name => {
    actions[name] = generateAction(actionIDs[name], options[actionIDs[name]]);
  });
  return actions;
};
