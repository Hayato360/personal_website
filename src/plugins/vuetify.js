import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00ff80',
        secondary: '#00cc66',
        accent: '#00ff99',
        error: '#ff4444',
        warning: '#ffaa00',
        info: '#00ffcc',
        success: '#00ff80',
        background: '#0d1b2a',
        surface: '#1a4a3a'
      },
      dark: {
        primary: '#00ff80',
        secondary: '#00cc66',
        accent: '#00ff99',
        error: '#ff4444',
        warning: '#ffaa00',
        info: '#00ffcc',
        success: '#00ff80',
        background: '#0d1b2a',
        surface: '#1a4a3a'
      }
    }
  }
});
