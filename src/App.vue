<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >


      <v-spacer></v-spacer>

      <!-- Desktop Navigation Menu -->
      <div class="hidden-sm-and-down">


        <v-btn
          to="/profile"
          text
          class="mr-2 nav-btn"
          color="#00ff80"
        >
          <v-icon left>mdi-account-circle</v-icon>
          แนะนำตัว
        </v-btn>

        <v-btn
          to="/skills"
          text
          class="mr-2 nav-btn"
          color="#00ff80"
        >
          <v-icon left>mdi-star</v-icon>
          ทักษะ
        </v-btn>

        <v-btn
          to="/portfolio"
          text
          class="mr-2 nav-btn"
          color="#00ff80"
        >
          <v-icon left>mdi-briefcase</v-icon>
          ผลงาน
        </v-btn>

        <v-btn
          to="/about"
          text
          class="mr-2 nav-btn"
          color="#00ff80"
        >
          <v-icon left>mdi-information</v-icon>
          เกี่ยวกับ
        </v-btn>
      </div>

      <!-- Mobile Menu Button -->
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      color="primary"
      dark
    >
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="item in navigationItems"
            :key="item.title"
            :to="item.route"
            @click="drawer = false"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>

    <!-- Footer -->
    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    navigationItems: [
      { title: 'หน้าแรก', route: '/', icon: 'mdi-home' },
      { title: 'โปรไฟล์', route: '/profile', icon: 'mdi-account' },
      { title: 'ทักษะ', route: '/skills', icon: 'mdi-star' },
      { title: 'ผลงาน', route: '/portfolio', icon: 'mdi-briefcase' },
      { title: 'เกี่ยวกับ', route: '/about', icon: 'mdi-information' }
    ],
    footerIcons: [
      { name: 'facebook', icon: 'mdi-facebook', url: '#', color: '#00ff80' },
      { name: 'instagram', icon: 'mdi-instagram', url: '#', color: '#00cc66' },
      { name: 'twitter', icon: 'mdi-twitter', url: '#', color: '#00ff99' },
      { name: 'linkedin', icon: 'mdi-linkedin', url: '#', color: '#00e673' },
      { name: 'github', icon: 'mdi-github', url: '#', color: '#1a1a1a' }
    ]
  }),
};
</script>

<style>
#app {
  background: linear-gradient(135deg, #0d1b2a 0%, #1a4a3a 50%, #0d1b2a 100%);
  min-height: 100vh;
}

.v-application {
  background: linear-gradient(135deg, #0d1b2a 0%, #1a4a3a 50%, #0d1b2a 100%) !important;
}

.v-app-bar {
  background: linear-gradient(90deg, #000000 0%, #1a4a3a 50%, #000000 100%) !important;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #00ff80;
}

.v-navigation-drawer {
  background: linear-gradient(180deg, #000000 0%, #1a4a3a 50%, #000000 100%) !important;
  border-right: 2px solid #00ff80;
}

.v-list-item {
  color: #00ff99 !important;
  transition: all 0.3s ease;
}

.v-list-item:hover {
  background-color: rgba(0, 255, 128, 0.1) !important;
  color: #00ff80 !important;
}

.v-list-item--active {
  background-color: rgba(0, 255, 128, 0.2) !important;
  color: #00ff80 !important;
  border-right: 3px solid #00ff80;
}

.v-footer {
  background: linear-gradient(90deg, #000000 0%, #1a4a3a 50%, #000000 100%) !important;
  border-top: 2px solid #00ff80;
}

.footer-content {
  color: #00ff99;
}

.social-icon {
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
  filter: brightness(1.3);
}

/* Navigation title styling */
.v-toolbar__title {
  color: #00ff80 !important;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(0, 255, 128, 0.3);
}

/* Mobile menu button */
.v-app-bar__nav-icon {
  color: #00ff80 !important;
}

/* Navigation buttons */
.nav-btn {
  color: #00ff99 !important;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background-color: rgba(0, 255, 128, 0.1) !important;
  color: #00ff80 !important;
}

.nav-btn.v-btn--active {
  background-color: rgba(0, 255, 128, 0.2) !important;
  color: #00ff80 !important;
}

/* Footer card styling */
.v-footer .v-card {
  background: transparent !important;
}

.v-footer .v-card-text {
  color: #00ff99 !important;
}

.v-footer .v-btn {
  transition: all 0.3s ease;
}

.v-footer .v-btn:hover {
  transform: scale(1.2);
  filter: brightness(1.3);
}

/* Global Prompt Font Application */
* {
  font-family: 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
}

.v-application {
  font-family: 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
}

.v-application .text-h1,
.v-application .text-h2,
.v-application .text-h3,
.v-application .text-h4,
.v-application .text-h5,
.v-application .text-h6,
.v-application .text-subtitle-1,
.v-application .text-subtitle-2,
.v-application .text-body-1,
.v-application .text-body-2,
.v-application .text-button,
.v-application .text-caption,
.v-application .text-overline {
  font-family: 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
}

h1, h2, h3, h4, h5, h6,
p, span, div, button,
.v-btn, .v-card-title, .v-card-text, .v-list-item-title,
.v-chip, .v-tab, .v-toolbar-title {
  font-family: 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
}
</style>
