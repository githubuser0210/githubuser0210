import { storeMutations } from "../../mutations.constants";

const appMutations = {
  [storeMutations.setUsers]: (state, res) => {
    state.users = [...res.data.data];
  },
};

export default { ...appMutations };
