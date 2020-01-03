import { reducerWithInitialState } from "typescript-fsa-reducers";
import moment from 'moment'; 
import * as Actions from '../actions';

export interface INews {
    title: string
    date :number
    place: string
    content: string
    img? :string
}

export interface INewsReducer {
    news: INews[]
}

const initialState: INewsReducer = {
    news: [{
        title: 'test',
        date: moment().unix(),
        place: 'test_place',
        content: 'test_content',
        img: 'test',
    }]
};


export const newsReducer = reducerWithInitialState<INewsReducer>(initialState)
    .case(Actions.setNews, (state: INewsReducer, payload: INews[]) => ({
        ...state,
        news: payload
    }))

