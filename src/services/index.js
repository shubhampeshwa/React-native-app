import axios from "axios";

class API {
    constructor() {
        this.CancelToken = axios.CancelToken;
        this.source = null;
    }

    response = (response) => {
        print("----API RESPONSE----", response.data);
        if (response?.data?.status == 401) {
            // EventRegister.emit(Texts.EVENT.LOGOUT, response);
            return null;
        } else {
            return response.data;
        }
    }

    error = (error) => {
        print("----API ERROR----", error);
        // store.dispatch(apiLoading(false))
        return Promise.reject(error);
    }


    request = async(url) => {
    return await axios.get(url).then(this.response).catch(this.error);
    };
}

export default new API();