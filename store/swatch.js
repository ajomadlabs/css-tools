// Defining the States
import Vue from 'vue'
import gql from 'graphql-tag'

const state = () => ({
  colorSwatch: null,
  colorPalettes: []
})

// Defining Mutations
const mutations = {
  SET_COLOR_SWATCH (state, payload) {
    state.colorSwatch = payload
  },
  ADD_COLOR_SWATCH (state, payload) {
    state.colorPalettes.push(payload)
  },
  SET_COLOR_PALETTES (state, payload) {
    state.colorPalettes = payload
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
   * ADD_COLOR_SWATCH
   * @param {Object} context 
   * @param {Object} payload 
   * An action to save a color
   * swatch
  */
  ADD_COLOR_SWATCH (context, payload) {
    context.commit('ADD_COLOR_SWATCH', payload)
  },
  /**
   * FETCH_COLORS
   * @param {Object} context 
   * An action to fetch all
   * color
  */
  async FETCH_COLOR (context) {
    try {
      const response = await this.app.apolloProvider.defaultClient.query({
        query: gql`
          query {
            colors {
              color_one
              color_two
              color_three
              color_four
              color_one_active
              color_two_active
              color_three_active
              color_four_active
            }
          }
        `
      })
      // console.log("FETCH_COLOR", JSON.stringify(response.data.colors))
      context.commit("SET_COLOR_PALETTES", response.data.colors)
    } catch (error) {
      console.log("Error", error)
    }
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