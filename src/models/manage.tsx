import { Effect, Reducer } from 'umi';

export interface ManageModelState {
  name: string;
}

export interface ManageModelType {
  namespace: 'manage';
  state: manageModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<ManageModelState>;
  };
}

const ManageModel: ManageModelType = {
  namespace: 'manage',

  state: {
    name: 'manage',
  },

  effects: {
    *query({ payload }, { call, put }) {

    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default ManageMdodel;
