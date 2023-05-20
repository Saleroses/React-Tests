import {reducer, stateType, toggleCollapsed} from "./useReduce";
import React from 'react';

test('reducer change state', () => {
    // data
    const state: stateType = {
        collapsed: false
    }
    // action
    const newState = reducer(state, {type: toggleCollapsed})

    //expect
    expect(newState.collapsed).toBe(true)
})

test('reducer change state Fake type', () => {
    // data
    const state: stateType = {
        collapsed: false
    }
    // action
    const newState = reducer(state, {type: "fake"})

    //expect
    expect(newState.collapsed).toBe(state.collapsed)
})