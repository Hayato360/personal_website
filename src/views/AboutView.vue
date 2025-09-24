<template>
  <div class="about-page">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <div class="text-center mb-12">
            <h1 class="display-1 mb-4" style="color: #00ff80; text-shadow: 0 0 20px rgba(0, 255, 128, 0.5);">เกี่ยวกับเว็บไซต์นี้</h1>
            <p class="title opacity-80" style="color: #00ff99;">เทคโนโลยีและการพัฒนา</p>
          </div>

          <!-- Project Info -->
          <v-card class="info-card mb-8" dark>
            <v-card-title class="justify-center">
              <v-icon left>mdi-web</v-icon>
              โปรเจคนี้
            </v-card-title>
            <v-card-text>
              <p class="body-1 mb-4">
                เว็บไซต์แนะนำตัวนี้ถูกสร้างขึ้นโดยใช้เทคโนโลยีที่ทันสมัย เพื่อแสดงความสามารถ
                ในการพัฒนา Web Application ที่สวยงามและใช้งานง่าย
              </p>
              
              <v-divider class="mb-4"></v-divider>
              
              <h3 class="white--text mb-3">เทคโนโลยีหลักที่ใช้:</h3>
              
              <v-list dark transparent>
                <v-list-item v-for="tech in mainTechnologies" :key="tech.name">
                  <v-list-item-avatar>
                    <v-icon :color="tech.color">{{ tech.icon }}</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ tech.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ tech.description }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>

          <!-- Features -->
          <v-card class="info-card mb-8" dark>
            <v-card-title class="justify-center">
              <v-icon left>mdi-star-four-points</v-icon>
              คุณสมบัติเด่น
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6" v-for="feature in features" :key="feature.title">
                  <div class="feature-item">
                    <v-icon :color="feature.color" size="30" class="mb-2">{{ feature.icon }}</v-icon>
                    <h4 class="white--text mb-2">{{ feature.title }}</h4>
                    <p class="caption opacity-80">{{ feature.description }}</p>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <!-- Contact Info -->
          <v-card class="info-card" dark>
            <v-card-title class="justify-center">
              <v-icon left>mdi-contact-mail</v-icon>
              ติดต่อได้ที่
            </v-card-title>
            <v-card-text>
              <v-row justify="center">
                <v-col cols="12" md="8">
                  <div class="contact-info text-center">
                    <v-btn
                      large
                      color="blue"
                      class="ma-2"
                      href="mailto:somchai@example.com"
                    >
                      <v-icon left>mdi-email</v-icon>
                      อีเมล
                    </v-btn>
                    
                    <v-btn
                      large
                      color="green"
                      class="ma-2"
                      href="https://line.me/ti/p/~somchai"
                    >
                      <v-icon left>mdi-chat</v-icon>
                      Line
                    </v-btn>
                    
                    <v-btn
                      large
                      color="purple"
                      class="ma-2"
                      href="https://github.com/somchai"
                    >
                      <v-icon left>mdi-github</v-icon>
                      GitHub
                    </v-btn>
                    
                    <v-btn
                      large
                      color="indigo"
                      class="ma-2"
                      href="https://linkedin.com/in/somchai"
                    >
                      <v-icon left>mdi-linkedin</v-icon>
                      LinkedIn
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      mainTechnologies: [
        {
          name: 'Vue.js 2',
          icon: 'mdi-vuejs',
          color: 'green',
          description: 'Progressive JavaScript Framework สำหรับสร้าง User Interface'
        },
        {
          name: 'Vuetify',
          icon: 'mdi-material-design',
          color: 'blue',
          description: 'Material Design Component Library สำหรับ Vue.js'
        },
        {
          name: 'Three.js',
          icon: 'mdi-cube-outline',
          color: 'purple',
          description: 'JavaScript Library สำหรับสร้างกราฟิก 3D บนเว็บบราวเซอร์'
        },
        {
          name: 'JavaScript ES6+',
          icon: 'mdi-language-javascript',
          color: 'yellow',
          description: 'ภาษาโปรแกรมมิ่งหลักที่ใช้ในการพัฒนา'
        }
      ],
      features: [
        {
          title: 'Responsive Design',
          icon: 'mdi-responsive',
          color: 'blue',
          description: 'ออกแบบให้รองรับทุกขนาดหน้าจอ'
        },
        {
          title: '3D Graphics',
          icon: 'mdi-cube-outline',
          color: 'purple',
          description: 'เอฟเฟค 3D ที่สวยงามด้วย Three.js'
        },
        {
          title: 'Modern UI/UX',
          icon: 'mdi-palette',
          color: 'pink',
          description: 'ดีไซน์ที่ทันสมัยตาม Material Design'
        },
        {
          title: 'Fast Performance',
          icon: 'mdi-lightning-bolt',
          color: 'orange',
          description: 'โหลดเร็วและใช้งานลื่นไหล'
        },
        {
          title: 'SEO Friendly',
          icon: 'mdi-search-web',
          color: 'green',
          description: 'เป็นมิตรกับเครื่องมือค้นหา'
        },
        {
          title: 'Cross Browser',
          icon: 'mdi-web',
          color: 'red',
          description: 'รองรับเบราว์เซอร์ทุกประเภท'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0d1b2a 0%, #1a4a3a 50%, #0d1b2a 100%);
  padding: 50px 0;
}

.info-card {
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(26, 74, 58, 0.6)) !important;
  backdrop-filter: blur(5px);
  border: 1px solid #00ff80;
  border-radius: 15px !important;
  color: #00ff99 !important;
  box-shadow: 0 4px 20px rgba(0, 255, 128, 0.2);
}

.feature-item {
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.contact-info {
  padding: 20px;
}

.opacity-80 {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .display-1 {
    font-size: 2.5rem !important;
  }
  
  .feature-item {
    padding: 10px;
  }
}
</style>
