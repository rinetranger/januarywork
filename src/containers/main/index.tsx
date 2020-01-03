import React from 'react';
import { INews } from 'src/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'src/store';
import Main from '../../components/main'

interface IProps {}

export interface IMainAction {}
export interface IMainState {
    newsList: INews[]
}

const MainContainer: React.FC<IProps> = (props) => {
    const dispatch = useDispatch()
    const newsList = useSelector((state: AppState) => state.news.news)
    return(
        <Main newsList={newsList}/>
    )
}

export default MainContainer