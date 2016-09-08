import {
    FETCH_INFO_LIST_REQUEST,
    FETCH_INFO_LIST_SUCCESS,
    FETCH_INFO_LIST_ERROR
} from './actions';
import {merge} from 'lodash';

let defaultListInfo = {
    all:{
        isFetching:false,
        page:0,
        dt:[]
    }
}

let getInfoList = function(state=defaultListInfo,action)
{
    switch (action.type)
    {
        case FETCH_INFO_LIST_REQUEST:{
            let listInfo = merge({},state);
            listInfo[action.title].isFetching = false;
            return listInfo;
        }
        case FETCH_INFO_LIST_SUCCESS:{
            let listInfo = merge({},state);
            let info = listInfo[action.title];
            info.dt = info.dt.concat(action.data);
            info.page++;
            info.isFetching = false;
             console.log("FETCH_INFO_LIST_SUCCESS",action,info);
            return listInfo;
        }
        case FETCH_INFO_LIST_ERROR:{
            let listInfo = merge({},state);
            listInfo[action.title].isFetching = false;
            return listInfo;
        }
        default:
            return state;
    }
}
const reducers = {
    getInfoList
}
export default reducers;