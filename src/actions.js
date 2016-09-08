import "whatwg-fetch";

export const FETCH_INFO_LIST_REQUEST = "FETCH_INFO_LIST_REQUEST" //获取列表数据
export const FETCH_INFO_LIST_SUCCESS = "FETCH_INFO_LIST_SUCCESS" //成功
export const FETCH_INFO_LIST_ERROR = "FETCH_INFO_LIST_ERROR" //错误

export function getInitInfo(title,page,url){

        return function(dispatch,getState)
        {
            dispatch({type:FETCH_INFO_LIST_REQUEST,title:title});
            fetch(url+"?page="+page,{"method":"GET","mode":"cors","cache":"default"})
            .then((response)=>{ 
                if(response.ok){
                    return response.json();
                }
                else
                {
                    throw new Error("error");
                }
            }).then((responseData)=>{
              dispatch({type:FETCH_INFO_LIST_SUCCESS,data:responseData,title:title});
            }).catch((error)=>{
               dispatch({type:FETCH_INFO_LIST_ERROR,title:title});
            }) 
 
        }
    
}