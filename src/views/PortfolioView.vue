<template>
  <div class="portfolio-page">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="text-center mb-12">
            <h1 class="display-1 mb-4" style="color: #00ff80; text-shadow: 0 0 20px rgba(0, 255, 128, 0.5);">ผลงานของฉัน</h1>
            <p class="title opacity-80" style="color: #00ff99;">โปรเจคและผลงานที่น่าสนใจ</p>
          </div>

          <!-- Project Categories Filter -->
          <div class="text-center mb-8">
            <v-chip-group
              v-model="selectedCategory"
              active-class="primary--text"
              center-active
            >
              <v-chip
                v-for="category in categories"
                :key="category"
                filter
                outlined
                color="white"
                text-color="white"
              >
                {{ category }}
              </v-chip>
            </v-chip-group>
          </div>

          <!-- Projects Grid -->
          <v-row>
            <v-col
              cols="12"
              md="6"
              lg="4"
              v-for="project in filteredProjects"
              :key="project.id"
            >
              <v-card
                class="project-card"
                dark
                elevation="10"
                @click="openProject(project)"
              >
                <v-img
                  :src="project.image"
                  height="200"
                  class="project-image"
                >
                  <div class="project-overlay">
                    <v-btn
                      icon
                      large
                      color="white"
                      class="overlay-btn"
                    >
                      <v-icon>mdi-eye</v-icon>
                    </v-btn>
                  </div>
                </v-img>

                <v-card-title>
                  {{ project.title }}
                </v-card-title>

                <v-card-subtitle>
                  {{ project.category }}
                </v-card-subtitle>

                <v-card-text>
                  <p class="project-description">
                    {{ project.description }}
                  </p>
                  
                  <div class="tech-chips mt-3">
                    <v-chip
                      v-for="tech in project.technologies"
                      :key="tech"
                      small
                      class="mr-1 mb-1"
                      style="background: linear-gradient(45deg, #00ff80, #00cc66); color: #000000; font-weight: bold;"
                    >
                      {{ tech }}
                    </v-chip>
                  </div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    small
                    text
                    color="primary"
                    :href="project.demoUrl"
                    target="_blank"
                    v-if="project.demoUrl"
                  >
                    <v-icon small left>mdi-web</v-icon>
                    Demo
                  </v-btn>
                  
                  <v-btn
                    small
                    text
                    color="secondary"
                    :href="project.githubUrl"
                    target="_blank"
                    v-if="project.githubUrl"
                  >
                    <v-icon small left>mdi-github</v-icon>
                    Code
                  </v-btn>
                  
                  <v-spacer></v-spacer>
                  
                  <v-rating
                    :value="project.rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    readonly
                    small
                    dense
                  ></v-rating>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <!-- Stats Section -->
          <v-row class="mt-12">
            <v-col cols="12">
              <v-card class="stats-card" dark>
                <v-card-title class="justify-center">
                  <v-icon left>mdi-chart-line</v-icon>
                  สถิติการพัฒนา
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="6" md="3" v-for="stat in stats" :key="stat.label">
                      <div class="text-center">
                        <h2 class="display-1" :class="`${stat.color}--text`">
                          {{ stat.value }}
                        </h2>
                        <p class="body-2 opacity-80">{{ stat.label }}</p>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

        </v-col>
      </v-row>
    </v-container>

    <!-- Project Detail Dialog -->
    <v-dialog v-model="projectDialog" max-width="800">
      <v-card dark v-if="selectedProject">
        <v-img
          :src="selectedProject.image"
          height="300"
        ></v-img>
        
        <v-card-title>
          {{ selectedProject.title }}
        </v-card-title>
        
        <v-card-text>
          <h4 class="mb-3">รายละเอียดโปรเจค</h4>
          <p>{{ selectedProject.fullDescription }}</p>
          
          <h4 class="mb-3 mt-4">เทคโนโลยีที่ใช้</h4>
          <v-chip-group>
            <v-chip
              v-for="tech in selectedProject.technologies"
              :key="tech"
              style="background: linear-gradient(45deg, #00ff80, #00cc66); color: #000000; font-weight: bold;"
            >
              {{ tech }}
            </v-chip>
          </v-chip-group>
          
          <h4 class="mb-3 mt-4">คุณสมบัติเด่น</h4>
          <ul>
            <li v-for="feature in selectedProject.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </v-card-text>
        
        <v-card-actions>
          <v-btn
            color="primary"
            :href="selectedProject.demoUrl"
            target="_blank"
            v-if="selectedProject.demoUrl"
          >
            <v-icon left>mdi-web</v-icon>
            ดู Demo
          </v-btn>
          
          <v-btn
            color="secondary"
            :href="selectedProject.githubUrl"
            target="_blank"
            v-if="selectedProject.githubUrl"
          >
            <v-icon left>mdi-github</v-icon>
            ดู Code
          </v-btn>
          
          <v-spacer></v-spacer>
          
          <v-btn text @click="projectDialog = false">
            ปิด
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'PortfolioView',
  data() {
    return {
      selectedCategory: 0,
      projectDialog: false,
      selectedProject: null,
      categories: ['ทั้งหมด', 'เว็บแอป', 'มือถือ', 'เกม', 'UI/UX'],
      projects: [
        {
          id: 1,
          title: 'ระบบจัดการร้านค้าออนไลน์',
          category: 'เว็บแอป',
          description: 'ระบบ E-commerce ที่ครบครันสำหรับร้านค้าออนไลน์',
          fullDescription: 'ระบบจัดการร้านค้าออนไลน์ที่มีครบทุกฟีเจอร์ที่จำเป็น ตั้งแต่การจัดการสินค้า ระบบชำระเงิน ไปจนถึงการวิเคราะห์ยอดขาย',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
          technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe API'],
          rating: 5,
          demoUrl: 'https://demo-ecommerce.com',
          githubUrl: 'https://github.com/somchai/ecommerce',
          features: [
            'ระบบจัดการสินค้าและคลังสินค้า',
            'ระบบชำระเงินออนไลน์',
            'แดชบอร์ดสำหรับผู้ดูแลระบบ',
            'ระบบรีวิวและคะแนน',
            'การแจ้งเตือนทาง Email'
          ]
        },
        {
          id: 2,
          title: 'แอปจัดการงานส่วนตัว',
          category: 'มือถือ',
          description: 'แอปพลิเคชันสำหรับจัดการงานและตารางเวลา',
          fullDescription: 'แอปพลิเคชันมือถือที่ช่วยให้คุณจัดการงานและตารางเวลาได้อย่างมีประสิทธิภาพ',
          image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=200&fit=crop',
          technologies: ['React Native', 'Firebase', 'Redux'],
          rating: 4.5,
          demoUrl: null,
          githubUrl: 'https://github.com/somchai/todo-app',
          features: [
            'สร้างและจัดการรายการงาน',
            'ตั้งแจ้งเตือน',
            'แยกหมวดหมู่งาน',
            'สถิติการทำงาน',
            'ซิงค์ข้อมูลข้ามอุปกรณ์'
          ]
        },
        {
          id: 3,
          title: 'เกมปริศนาสุดท้าทาย',
          category: 'เกม',
          description: 'เกมปริศนาที่สร้างด้วย JavaScript',
          fullDescription: 'เกมปริศนาที่ท้าทายความคิดและความอดทน สร้างด้วยเทคโนโลยีเว็บ',
          image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop',
          technologies: ['JavaScript', 'Canvas API', 'WebGL'],
          rating: 4,
          demoUrl: 'https://puzzle-game.com',
          githubUrl: 'https://github.com/somchai/puzzle-game',
          features: [
            'เลเวลความยากหลากหลาย',
            'ระบบคะแนนและลีดเดอร์บอร์ด',
            'เอฟเฟคเสียงและภาพ',
            'รองรับการเล่นบนมือถือ',
            'ระบบบันทึกความคืบหน้า'
          ]
        },
        {
          id: 4,
          title: 'ระบบจองห้องประชุม',
          category: 'เว็บแอป',
          description: 'ระบบจองห้องประชุมสำหรับองค์กร',
          fullDescription: 'ระบบจองห้องประชุมที่ช่วยให้การจัดการห้องประชุมในองค์กรเป็นไปอย่างมีระบบและมีประสิทธิภาพ',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop',
          technologies: ['Vue.js', 'Laravel', 'MySQL', 'Socket.io'],
          rating: 4.5,
          demoUrl: 'https://meeting-room.com',
          githubUrl: 'https://github.com/somchai/meeting-room',
          features: [
            'จองห้องประชุมล่วงหน้า',
            'ตรวจสอบความพร้อมของห้อง',
            'การแจ้งเตือนแบบเรียลไทม์',
            'ระบบอนุมัติการจอง',
            'รายงานการใช้งาน'
          ]
        },
        {
          id: 5,
          title: 'Dashboard Analytics',
          category: 'UI/UX',
          description: 'ออกแบบ Dashboard สำหรับวิเคราะห์ข้อมูล',
          fullDescription: 'การออกแบบ Dashboard ที่สวยงามและใช้งานง่าย สำหรับการวิเคราะห์และแสดงผลข้อมูลทางธุรกิจ',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
          technologies: ['Figma', 'Adobe XD', 'Principle'],
          rating: 5,
          demoUrl: 'https://analytics-dashboard.com',
          githubUrl: null,
          features: [
            'ออกแบบที่เป็นมิตรกับผู้ใช้',
            'การแสดงผลข้อมูลแบบอินเตอร์แอคทีฟ',
            'รองรับการใช้งานบนทุกอุปกรณ์',
            'ธีมสีที่หลากหลาย',
            'การเข้าถึงที่เป็นมิตรกับผู้พิการ'
          ]
        },
        {
          id: 6,
          title: 'แอปสั่งอาหาร',
          category: 'มือถือ',
          description: 'แอปสั่งอาหารออนไลน์สำหรับร้านอาหาร',
          fullDescription: 'แอปพลิเคชันสั่งอาหารที่เชื่อมต่อร้านอาหารกับลูกค้า พร้อมระบบติดตามการส่งอาหารแบบเรียลไทม์',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=200&fit=crop',
          technologies: ['Flutter', 'Firebase', 'Google Maps API'],
          rating: 4.5,
          demoUrl: null,
          githubUrl: 'https://github.com/somchai/food-delivery',
          features: [
            'เมนูอาหารที่หลากหลาย',
            'ระบบชำระเงินออนไลน์',
            'ติดตามการส่งอาหารแบบเรียลไทม์',
            'ระบบรีวิวและคะแนน',
            'โปรโมชันและคูปองส่วนลด'
          ]
        }
      ],
      stats: [
        { label: 'โปรเจคเสร็จ', value: '15+', color: 'green' },
        { label: 'ลูกค้าพอใจ', value: '98%', color: 'blue' },
        { label: 'ปีประสบการณ์', value: '3', color: 'purple' },
        { label: 'เทคโนโลยี', value: '20+', color: 'orange' }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === 0) {
        return this.projects
      }
      const category = this.categories[this.selectedCategory]
      return this.projects.filter(project => project.category === category)
    }
  },
  methods: {
    openProject(project) {
      this.selectedProject = project
      this.projectDialog = true
    }
  }
}
</script>

<style scoped>
.portfolio-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0d1b2a 0%, #1a4a3a 50%, #0d1b2a 100%);
  padding: 50px 0;
}

.project-card {
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(26, 74, 58, 0.6)) !important;
  backdrop-filter: blur(5px);
  border: 1px solid #00ff80;
  border-radius: 15px !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  color: #00ff99 !important;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 255, 128, 0.3) !important;
  border-color: #00ff80;
}

.project-image {
  position: relative;
  border-radius: 15px 15px 0 0 !important;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-description {
  font-size: 0.9rem;
  line-height: 1.4;
}

.tech-chips {
  min-height: 60px;
}

.stats-card {
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(26, 74, 58, 0.6)) !important;
  backdrop-filter: blur(5px);
  border: 1px solid #00ff80;
  border-radius: 15px !important;
  color: #00ff99 !important;
  box-shadow: 0 4px 20px rgba(0, 255, 128, 0.2);
}

.opacity-80 {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .display-1 {
    font-size: 2.5rem !important;
  }
}
</style>