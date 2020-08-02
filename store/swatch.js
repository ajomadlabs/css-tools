// Defining the States
import Vue from 'vue'
const state = () => ({
  colorSwatch: null,
  colorPalettes: 
  [
    {
        colorOne: '#383e56',
        colorTwo: '#f69e7b',
        colorThree: '#eedad1',
        colorFour: '#d4d5b0',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#e4e3e3',
        colorTwo: '#8489ac',
        colorThree: '#3b6978',
        colorFour: '#204051',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#ffdbc5',
        colorTwo: '#cf1b1b',
        colorThree: '#900d0d',
        colorFour: '#423144',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#383e56',
        colorTwo: '#f69e7b',
        colorThree: '#eedad1',
        colorFour: '#d4d5b0',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#ebecf1',
        colorTwo: '#206a5d',
        colorThree: '#1f4068',
        colorFour: '#1b1c25',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#1b262c',
        colorTwo: '#0f4c75',
        colorThree: '#3282b8',
        colorFour: '#bbe1fa',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#111d5e',
        colorTwo: '#c70039',
        colorThree: '#f37121',
        colorFour: '#ffbd69',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#f4f6ff',
        colorTwo: '#fbd46d',
        colorThree: '#4f8a8b',
        colorFour: '#07031a',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#092532',
        colorTwo: '#89c9b8',
        colorThree: '#c7e2b2',
        colorFour: '#e1ffc2',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#333a7b',
        colorTwo: '#4b6982',
        colorThree: '#70c6c7',
        colorFour: '#b4ffd8',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#086972',
        colorTwo: '#01a9b4',
        colorThree: '#87dfd6',
        colorFour: '#fbfd8a',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#184d47',
        colorTwo: '#96bb7c',
        colorThree: '#d6efc7',
        colorFour: '#eebb4d',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#fa1616',
        colorTwo: '#12cad6',
        colorThree: '#0fabbc',
        colorFour: '#e4f9ff',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#1b262c',
        colorTwo: '#0f4c75',
        colorThree: '#3282b8',
        colorFour: '#bbe1fa',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#24a19c',
        colorTwo: '#6ebfb5',
        colorThree: '#ffc7c7',
        colorFour: '#ff5f40',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    },
    {
        colorOne: '#eeecda',
        colorTwo: '#f08a5d',
        colorThree: '#b83b5e',
        colorFour: '#6a2c70',
        colorOneActive: false,
        colorTwoActive: false,
        colorThreeActive: false,
        colorFourActive: false
    }
  ]
})

// Defining Mutations
const mutations = {
  SET_COLOR_SWATCH (state, payload) {
    state.colorSwatch = payload
  },
  RESET_ACTIVE_COLOR (state, payload) {
    Vue.set(state.colorPalettes[payload.index], 'colorOneActive', false)
    Vue.set(state.colorPalettes[payload.index], 'colorTwoActive', false)
    Vue.set(state.colorPalettes[payload.index], 'colorThreeActive', false)
    Vue.set(state.colorPalettes[payload.index], 'colorFourActive', false)
  },
  SET_ACTIVE_COLOR (state, payload) {
    if (payload.swatch === 1) {
      Vue.set(state.colorPalettes[payload.index], 'colorOneActive', true)
      Vue.set(state.colorPalettes[payload.index], 'colorTwoActive', false)
      Vue.set(state.colorPalettes[payload.index], 'colorThreeActive', false)
      Vue.set(state.colorPalettes[payload.index], 'colorFourActive', false)
    } else if (payload.swatch === 2) {
      Vue.set(state.colorPalettes[payload.index], 'colorOneActive', false)
      Vue.set(state.colorPalettes[payload.index], 'colorTwoActive', true)
      Vue.set(state.colorPalettes[payload.index], 'colorThreeActive', false)
      Vue.set(state.colorPalettes[payload.index], 'colorFourActive', false)
    } else if (payload.swatch === 3) {
      Vue.set(state.colorPalettes[payload.index], 'colorOneActive', false)
      Vue.set(state.colorPalettes[payload.index], 'colorTwoActive', false)
      Vue.set(state.colorPalettes[payload.index], 'colorThreeActive', true)
      Vue.set(state.colorPalettes[payload.index], 'colorFourActive', false)
    } else if (payload.swatch === 4) {
      Vue.set(state.colorPalettes[payload.index], 'colorOneActive', false)
      Vue.set(state.colorPalettes[payload.index], 'colorTwoActive', false)
      Vue.set(state.colorPalettes[payload.index], 'colorThreeActive', false)
      Vue.set(state.colorPalettes[payload.index], 'colorFourActive', true)
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