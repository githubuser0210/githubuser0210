import ApiService from "../../../common/http/apiService";
import { storeActions } from "../../actions.constants";
import { storeMutations } from "../../mutations.constants";

const api = new ApiService();

const appActions = {
  [storeActions.fetchDataFromAPI]: (context, payload) => {
    // api.setCustomHeaders("eventId", payload.eventId);
    return api.findAll(`api/users?page=${payload.page}`).then((res) => {
      context.commit(storeMutations.setUsers, res);
      return res;
    });
  },
};

export default { ...appActions };
