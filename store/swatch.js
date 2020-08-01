// Defining the States
const state = () => ({
  colorSwatch: null
})

// Defining Getters
const getters = {}

// Defining Mutations
const mutations = {
  SET_COLOR_SWATCH (state, payload) {
    state.colorSwatch = payload
  }
}

// Defining Actions
const actions = {
  /**
   * SET_COLOR_SWATCH
   * @param {Object} context 
   * @param {Object} payload 
   * An action to save the color
   * swatch
  */
  SET_COLOR_SWATCH (context, payload) {
    context.commit('SET_COLOR_SWATCH', payload)
  }
}

// Exporting Methods
export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state
}