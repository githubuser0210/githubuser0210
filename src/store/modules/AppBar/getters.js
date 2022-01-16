import { storeGetters } from "../../getters.constants";

const appGetters = {
  [storeGetters.getUsers]: (state) => {
    return state.users;
  },
};

export default { ...appGetters };
