<template>
  <div class="home-page">
    <v-container fluid class="text-center">
      <v-row justify="center" align="center" style="min-height: 80vh;">
        <v-col cols="12" md="8">
          <v-card class="hero-card" elevation="20" transparent>
            <v-card-text>
              <h1 class="display-2 mb-4" style="color: #00ff80; text-shadow: 0 0 20px rgba(0, 255, 128, 0.5);">
                ยินดีต้อนรับสู่เว็บไซต์ของฉัน
              </h1>
              <h2 class="headline mb-6 opacity-80" style="color: #00ff99;">
                สำรวจโลกของเทคโนโลยีและการออกแบบ
              </h2>
              <p class="body-1 mb-8 opacity-70" style="color: #00ff99;">
                เว็บไซต์นี้สร้างด้วย Vue 2, Vuetify และ Three.js 
                เพื่อแสดงประสบการณ์และความสามารถในการพัฒนาเว็บแอปพลิเคชัน
              </p>
              
              <div class="d-flex justify-center flex-wrap">
                <v-btn
                  large
                  class="mr-2 mb-2 green-btn"
                  to="/profile"
                  style="background: linear-gradient(45deg, #00ff80, #00cc66); color: #000000; font-weight: bold;"
                >
                  <v-icon left>mdi-account-circle</v-icon>
                  ดูโปรไฟล์
                </v-btn>
                
                <v-btn
                  large
                  class="mr-2 mb-2 green-btn"
                  to="/skills"
                  style="background: linear-gradient(45deg, #00cc66, #00ff99); color: #000000; font-weight: bold;"
                >
                  <v-icon left>mdi-star</v-icon>
                  ดูทักษะ
                </v-btn>
                
                <v-btn
                  large
                  class="mr-2 mb-2 green-btn"
                  to="/portfolio"
                  style="background: linear-gradient(45deg, #00ff99, #00e673); color: #000000; font-weight: bold;"
                >
                  <v-icon left>mdi-briefcase</v-icon>
                  ดูผลงาน
                </v-btn>
                
                <v-btn
                  large
                  outlined
                  color="white"
                  class="mb-2"
                  to="/about"
                >
                  <v-icon left>mdi-information</v-icon>
                  เรียนรู้เพิ่มเติม
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <!-- Features Section -->
      <v-row class="mt-12">
        <v-col cols="12">
          <h2 class="white--text text-center mb-8">เทคโนโลยีที่ใช้</h2>
        </v-col>
        
        <v-col cols="12" sm="6" md="3" v-for="tech in technologies" :key="tech.name">
          <v-card class="tech-card" dark elevation="10">
            <v-card-text class="text-center">
              <v-avatar size="60" class="mb-4">
                <v-icon size="40" :color="tech.color">{{ tech.icon }}</v-icon>
              </v-avatar>
              <h3>{{ tech.name }}</h3>
              <p class="caption opacity-80">{{ tech.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      technologies: [
        {
          name: 'Vue.js 2',
          icon: 'mdi-vuejs',
          color: 'green',
          description: 'Progressive JavaScript Framework'
        },
        {
          name: 'Vuetify',
          icon: 'mdi-material-design',
          color: 'blue',
          description: 'Material Design Component Library'
        },
        {
          name: 'Three.js',
          icon: 'mdi-cube-outline',
          color: 'purple',
          description: '3D Graphics Library'
        },
        {
          name: 'JavaScript',
          icon: 'mdi-language-javascript',
          color: 'yellow',
          description: 'Programming Language'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0d1b2a 0%, #1a4a3a 50%, #0d1b2a 100%);
  padding: 20px 0;
}

.hero-card {
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(26, 74, 58, 0.6)) !important;
  backdrop-filter: blur(10px);
  border: 2px solid #00ff80;
  border-radius: 20px !important;
  padding: 40px 20px;
  box-shadow: 0 0 30px rgba(0, 255, 128, 0.3);
}

.tech-card {
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(26, 74, 58, 0.4)) !important;
  backdrop-filter: blur(5px);
  border: 1px solid #00ff80;
  border-radius: 15px !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #00ff99 !important;
}

.tech-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 255, 128, 0.3) !important;
  border-color: #00ff80;
}

.opacity-80 {
  opacity: 0.8;
}

.opacity-70 {
  opacity: 0.7;
}

.green-btn {
  transition: all 0.3s ease;
}

.green-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0, 255, 128, 0.5);
}

@media (max-width: 768px) {
  .hero-card {
    padding: 20px 10px;
  }
  
  .display-2 {
    font-size: 2.5rem !important;
  }
}
</style>
