import { combineReducers } from 'redux';

import appRegistry, { INITIAL_STATE as APP_REGISTRY_STATE } from 'modules/app-registry';
import dataService, { INITIAL_STATE as DS_INITIAL_STATE } from './data-service';
import fields, { INITIAL_STATE as FIELDS_INITIAL_STATE } from './fields';
import namespace, { INITIAL_STATE as NS_INITIAL_STATE, NAMESPACE_CHANGED } from './namespace';
import serverVersion, { INITIAL_STATE as SV_INITIAL_STATE } from './server-version';
import validation, { INITIAL_STATE as VALIDATION_STATE } from './validation';
import sampleDocuments, { INITIAL_STATE as SAMPLE_DOCUMENTS_STATE } from './sample-documents';
import isZeroState, { INITIAL_STATE as ZERO_STATE } from './zero-state';

/**
 * Reset action constant.
 */
export const RESET = 'validation/reset';

/**
 * The intial state of the root reducer.
 */
export const INITIAL_STATE = {
  appRegistry: APP_REGISTRY_STATE,
  dataService: DS_INITIAL_STATE,
  fields: FIELDS_INITIAL_STATE,
  namespace: NS_INITIAL_STATE,
  serverVersion: SV_INITIAL_STATE,
  validation: VALIDATION_STATE,
  sampleDocuments: SAMPLE_DOCUMENTS_STATE,
  isZeroState: ZERO_STATE
};

/**
 * The reducer.
 */
const appReducer = combineReducers({
  appRegistry,
  dataService,
  fields,
  namespace,
  serverVersion,
  validation,
  sampleDocuments,
  isZeroState
});

/**
 * Handle the reset.
 *
 * @returns {Object} The new state.
 */
const doReset = () => ({ ...INITIAL_STATE });

/**
 * Handle the namespace change.
 *
 * @param {Object} state - The state.
 * @param {Object} action - The action.
 *
 * @returns {Object} The new state.
 */
const doNamespaceChanged = (state, action) => {
  const newState = {
    ...INITIAL_STATE,
    dataService: state.dataService,
    appRegistry: state.appRegistry
  };

  return appReducer(newState, action);
};

/**
 * The action to state modifier mappings.
 */
const MAPPINGS = {
  [NAMESPACE_CHANGED]: doNamespaceChanged,
  [RESET]: doReset
};

/**
 * Reset the entire state.
 *
 * @returns {Object} The action.
 */
export const reset = () => ({ type: RESET });

/**
 * The root reducer.
 *
 * @param {Object} state - The state.
 * @param {Object} action - The action.
 *
 * @returns {Object} The new state.
 */
const rootReducer = (state, action) => {
  const fn = MAPPINGS[action.type];

  return fn ? fn(state, action) : appReducer(state, action);
};

export default rootReducer;
