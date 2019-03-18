const ACTIONS = {
  LOAD_BEGIN: '<%= name %>/LOAD_BEGIN',
  LOAD_END: '<%= name %>/LOAD_END',
  LOAD_ERROR: '<%= name %>/LOAD_ERROR',
};

const load = () => ({ type: ACTIONS.LOAD_BEGIN });

const loadEnd = () => ({ type: ACTIONS.LOAD_END });

const loadError = () => ({ type: ACTIONS.LOAD_ERROR });

const INITIAL_STATE = {
  loadError: false,
  loading: true,
};

const reducer = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case ACTIONS.LOAD_BEGIN:
      return INITIAL_STATE;
    case ACTIONS.LOAD_END:
      return { ...state, loading: false };
    case ACTIONS.LOAD_ERROR:
      return { ...state, loadError: true, loading: false };
    default:
      return state;
  }
};

export { load, loadEnd, loadError };

export default reducer;
