import authApi from '@/api/auth';

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
};

const mutations = {
  registerStart(state) {
    state.isSubmitting = true;
    state.validationErrors = null;
  },
  registerSuccess(state, payload) {
    state.isSubmitting = false;
    state.currentUser = payload;
    state.isLoggedIn = true;
  },
  registerFailure(state, payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  },
};

const actions = {
  register(context, credentials) {
    return new Promise(resolve => {
      context.commit('registerStart');
      authApi(credentials)
        .then(response => {
          console.log('response ', response);
          context.commit('registerSuccess', response.data.user);
          resolve(response.data.user);
        })
        .catch(error => {
          console.log('error ', error);
          context.commit('registerFailure', error.response.data.errors);
        });
    });
    // setTimeout(() => {
    //   context.commit('registerStartt');
    // }, 100);
  },
};

export default {
  state,
  mutations,
  actions,
};
