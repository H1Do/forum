import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getScrollRestorationPosition = (state: StateSchema) => state.scrollRestoration.scroll;
export const getScrollRestorationPositionByPath = createSelector(
    getScrollRestorationPosition,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
