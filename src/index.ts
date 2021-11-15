/*
 * title: useReduxHydrate hook
 * description: Hook that dispatches HYDRATE on the client.
 *
 * creation date: 15/11/2021
 *
 * authors: SlagterJ
 *
 * license: MIT License
 */

import { EnhancedStore as ReduxToolkitStore } from "@reduxjs/toolkit";
import { Store as ReduxCoreStore } from "redux";
import { useEffect } from "react";

/**
 * Store type used in the useReduxHydrate hook, can be either a Redux Toolkit
 * store or a Redux core store.
 */
export type Store = ReduxToolkitStore | ReduxCoreStore;

/**
 * All arguments used in the useReduxHydrate hook.
 */
export interface UseReduxHydrateArguments {
  store: Store;
}

/**
 * The HYDRATE action that gets dispatched on the client.
 * @returns HYDRATE Action
 */
const hydrate = () => {
  const action = {
    type: "HYDRATE",
  };

  return action;
};

/**
 * The HYDRATE action, can be used in reducers (or extraReducers on toolkit) to
 * change or initialise the value on the client.
 */
export const HYDRATE = hydrate().type;

/**
 * Hook that dispatches HYDRATE on the client. Use this in your _app page
 * to dispatch it on every hit.
 * @param {UseReduxHydrateArguments} Arguments
 */
export const useReduxHydrate = ({ store }: UseReduxHydrateArguments) => {
  const dispatch = store.dispatch;

  useEffect(() => {
    // Make sure we're actually on the client. This shouldn't ever return true,
    // but it's here just in case.
    if (typeof window.location === undefined) return;
    dispatch(hydrate());
  }, []);
};

export default useReduxHydrate;
