// Defining the States
import Vue from 'vue'
const state = () => ({
  colorSwatch: null,
  colorPalettes: [
    {color_one: "#383e56", color_two: "#f69e7b", color_three: "#eedad1", color_four: "#d4d5b0"},
    {color_one: "#e4e3e3", color_two: "#8489ac", color_three: "#3b6978", color_four: "#204051"},
    {color_one: "#ffdbc5", color_two: "#cf1b1b", color_three: "#900d0d", color_four: "#423144"},
    {color_one: "#383e56", color_two: "#f69e7b", color_three: "#eedad1", color_four: "#d4d5b0"},
    {color_one: "#ebecf1", color_two: "#206a5d", color_three: "#1f4068", color_four: "#1b1c25"},
    {color_one: "#1b262c", color_two: "#0f4c75", color_three: "#3282b8", color_four: "#bbe1fa"},
    {color_one: "#111d5e", color_two: "#c70039", color_three: "#f37121", color_four: "#ffbd69"},
    {color_one: "#f4f6ff", color_two: "#fbd46d", color_three: "#4f8a8b", color_four: "#07031a"},
    {color_one: "#092532", color_two: "#89c9b8", color_three: "#c7e2b2", color_four: "#e1ffc2"},
    {color_one: "#333a7b", color_two: "#4b6982", color_three: "#70c6c7", color_four: "#b4ffd8"},
    {color_one: "#086972", color_two: "#01a9b4", color_three: "#87dfd6", color_four: "#fbfd8a"},
    {color_one: "#184d47", color_two: "#96bb7c", color_three: "#d6efc7", color_four: "#eebb4d"},
    {color_one: "#fa1616", color_two: "#12cad6", color_three: "#0fabbc", color_four: "#e4f9ff"},
    {color_one: "#1b262c", color_two: "#0f4c75", color_three: "#3282b8", color_four: "#bbe1fa"},
    {color_one: "#24a19c", color_two: "#6ebfb5", color_three: "#ffc7c7", color_four: "#ff5f40"},
    {color_one: "#eeecda", color_two: "#f08a5d", color_three: "#b83b5e", color_four: "#6a2c70"}
  ]
})

// Defining Mutations
const mutations = {
  SET_COLOR_SWATCH (state, payload) {
    state.colorSwatch = payload
  },
  RESET_ACTIVE_COLOR (state, payload) {
    Vue.set(state.colorPalettes[payload.index], 'color_one_active', false)
    Vue.set(state.colorPalettes[payload.index], 'color_two_active', false)
    Vue.set(state.colorPalettes[payload.index], 'color_three_active', false)
    Vue.set(state.colorPalettes[payload.index], 'color_four_active', false)
  },
  SET_ACTIVE_COLOR (state, payload) {
    if (payload.swatch === 1) {
      Vue.set(state.colorPalettes[payload.index], 'color_one_active', true)
      Vue.set(state.colorPalettes[payload.index], 'color_two_active', false)
      Vue.set(state.colorPalettes[payload.index], 'color_three_active', false)
      Vue.set(state.colorPalettes[payload.index], 'color_four_active', false)
    } else if (payload.swatch === 2) {
      Vue.set(state.colorPalettes[payload.index], 'color_one_active', false)
      Vue.set(state.colorPalettes[payload.index], 'color_two_active', true)
      Vue.set(state.colorPalettes[payload.index], 'color_three_active', false)
      Vue.set(state.colorPalettes[payload.index], 'color_four_active', false)
    } else if (payload.swatch === 3) {
      Vue.set(state.colorPalettes[payload.index], 'color_one_active', false)
      Vue.set(state.colorPalettes[payload.index], 'color_two_active', false)
      Vue.set(state.colorPalettes[payload.index], 'color_three_active', true)
      Vue.set(state.colorPalettes[payload.index], 'colorFourActive', false)
    } else if (payload.swatch === 4) {
      Vue.set(state.colorPalettes[payload.index], 'color_one_active', false)
      Vue.set(state.colorPalettes[payload.index], 'color_two_active', false)
      Vue.set(state.colorPalettes[payload.index], 'color_three_active', false)
      Vue.set(state.colorPalettes[payload.index], 'color_four_active', true)
    }
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
  },
  /**
   * SET_ACTIVE_COLOR
   * @param {Object} context 
   * @param {Object} payload 
   * An action to set the active
   * color
  */
  SET_ACTIVE_COLOR (context, payload) {
    context.commit('SET_ACTIVE_COLOR', payload)
  },
  /**
   * RESET_ACTIVE_COLOR
   * @param {Object} context 
   * @param {Object} payload 
   * An action to reset the active
   * color
  */
  RESET_ACTIVE_COLOR (context, payload) {
    context.commit('RESET_ACTIVE_COLOR', payload)
  }
}

// Defining Getters
const getters = {
  /**
   * getColorPalettes
   * Method which returns the
   * color Palettes
  */
  getColorPalettes: (state) => {
    return state.colorPalettes
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