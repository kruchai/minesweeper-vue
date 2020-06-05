import Vue from 'vue';
import Vuex from 'vuex';
//then you use Vuex
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		savedSingleUserConnections: {}
	},
	mutations: {
		saveSingleUserConnections: (state, connections) =>
		{state.savedSingleUserConnections = connections;}
	}
});
