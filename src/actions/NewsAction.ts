import actionCreatorFactory from 'typescript-fsa';
import { INews } from '../reducers/NewsReducer';

const actionCreator = actionCreatorFactory();

export const setNews = actionCreator<INews[]>('SET_NEWS');