import { api } from "../../config/apiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";


export const createOrder = (reqData) => async (dispatch) => {

    // console.log("req Data ,", reqData);
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {

        const { data } = await api.post(`/api/orders/`, reqData.address);
        console.log("create order ", data);
        if (data._id) {
            reqData.navigate({search : `step=3&order_id=${data._id}`});
        }
        console.log("created order - ", data);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    } catch (error) {
        // console.log("catch error - ", error);
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });

    }
}

export const getOrderById=(orderId)=> async (dispatch)=>{
    dispatch({type: GET_ORDER_BY_ID_REQUEST});
    try {
        const { data } = await api.get(`/api/orders/${orderId}`,);
        console.log("Get order by id - ", data);
        dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        console.log("Catch error - ", error);
        dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
}
}
