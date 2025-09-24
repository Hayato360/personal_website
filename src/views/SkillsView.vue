<template>
  <div class="skills-page">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <div class="text-center mb-12">
            <h1 class="display-1 mb-4" style="color: #00ff80; text-shadow: 0 0 20px rgba(0, 255, 128, 0.5);">ทักษะและความสามารถ</h1>
            <p class="title opacity-80" style="color: #00ff99;">เทคโนโลยีและเครื่องมือที่ใช้ในการพัฒนา</p>
          </div>

          <!-- Programming Languages -->
          <v-card class="skill-section mb-8" dark>
            <v-card-title class="justify-center">
              <v-icon left>mdi-code-tags</v-icon>
              ภาษาโปรแกรมมิ่ง
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6" md="3" v-for="lang in programmingLanguages" :key="lang.name">
                  <div class="skill-item text-center">
                    <v-progress-circular
                      :value="lang.level"
                      :color="lang.color"
                      :size="80"
                      :width="8"
                      class="mb-3"
                    >
                      <span class="font-weight-bold" style="color: #00ff80;">{{ lang.level }}%</span>
                    </v-progress-circular>
                    <h4 style="color: #00ff99;">{{ lang.name }}</h4>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <!-- Frameworks & Libraries -->
          <v-card class="skill-section mb-8" dark>
            <v-card-title class="justify-center">
              <v-icon left>mdi-library</v-icon>
              Frameworks & Libraries
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="6" md="4" v-for="framework in frameworks" :key="framework.name">
                  <v-card class="framework-card" outlined>
                    <v-card-text class="text-center">
                      <v-icon :color="framework.color" size="40" class="mb-2">{{ framework.icon }}</v-icon>
                      <h4>{{ framework.name }}</h4>
                      <v-rating
                        :value="framework.rating"
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        readonly
                        small
                      ></v-rating>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <!-- Tools & Software -->
          <v-card class="skill-section mb-8" dark>
            <v-card-title class="justify-center">
              <v-icon left>mdi-tools</v-icon>
              เครื่องมือและซอฟต์แวร์
            </v-card-title>
            <v-card-text>
              <v-chip-group>
                <v-chip
                  v-for="tool in tools"
                  :key="tool.name"
                  :color="tool.color"
                  label
                  class="ma-1"
                >
                  <v-icon left small>{{ tool.icon }}</v-icon>
                  {{ tool.name }}
                </v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>

          <!-- Soft Skills -->
          <v-card class="skill-section" dark>
            <v-card-title class="justify-center">
              <v-icon left>mdi-account-heart</v-icon>
              Soft Skills
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6" v-for="skill in softSkills" :key="skill.name">
                  <div class="d-flex align-center mb-3">
                    <v-icon :color="skill.color" class="mr-3">{{ skill.icon }}</v-icon>
                    <div class="flex-grow-1">
                      <h4 class="white--text">{{ skill.name }}</h4>
                      <v-progress-linear
                        :value="skill.level"
                        :color="skill.color"
                        height="8"
                        rounded
                      ></v-progress-linear>
                    </div>
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
  name: 'SkillsView',
  data() {
    return {
      programmingLanguages: [
        { name: 'JavaScript', level: 85, color: 'yellow' },
        { name: 'Python', level: 75, color: 'blue' },
        { name: 'HTML/CSS', level: 90, color: 'orange' },
        { name: 'PHP', level: 70, color: 'purple' },
        { name: 'Java', level: 60, color: 'red' },
        { name: 'C++', level: 55, color: 'green' }
      ],
      frameworks: [
        { name: 'Vue.js', icon: 'mdi-vuejs', color: 'green', rating: 4.5 },
        { name: 'React', icon: 'mdi-react', color: 'blue', rating: 4 },
        { name: 'Node.js', icon: 'mdi-nodejs', color: 'green', rating: 4 },
        { name: 'Laravel', icon: 'mdi-laravel', color: 'red', rating: 3.5 },
        { name: 'Bootstrap', icon: 'mdi-bootstrap', color: 'purple', rating: 4.5 },
        { name: 'Vuetify', icon: 'mdi-material-design', color: 'blue', rating: 4.5 }
      ],
      tools: [
        { name: 'VS Code', icon: 'mdi-microsoft-visual-studio-code', color: 'blue' },
        { name: 'Git', icon: 'mdi-git', color: 'orange' },
        { name: 'Docker', icon: 'mdi-docker', color: 'blue' },
        { name: 'Figma', icon: 'mdi-vector-square', color: 'purple' },
        { name: 'Photoshop', icon: 'mdi-image-edit', color: 'blue' },
        { name: 'MySQL', icon: 'mdi-database', color: 'orange' },
        { name: 'Firebase', icon: 'mdi-firebase', color: 'yellow' },
        { name: 'AWS', icon: 'mdi-aws', color: 'orange' }
      ],
      softSkills: [
        { name: 'การทำงานเป็นทีม', icon: 'mdi-account-group', color: 'blue', level: 95 },
        { name: 'การสื่อสาร', icon: 'mdi-forum', color: 'green', level: 85 },
        { name: 'การแก้ปัญหา', icon: 'mdi-puzzle', color: 'purple', level: 90 },
        { name: 'ความคิดสร้างสรรค์', icon: 'mdi-lightbulb', color: 'yellow', level: 88 },
        { name: 'การจัดการเวลา', icon: 'mdi-clock', color: 'red', level: 80 },
        { name: 'ความรับผิดชอบ', icon: 'mdi-shield-check', color: 'green', level: 95 }
      ]
    }
  }
}
</script>

<style scoped>
.skills-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0d1b2a 0%, #1a4a3a 50%, #0d1b2a 100%);
  padding: 50px 0;
}

.skill-section {
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(26, 74, 58, 0.6)) !important;
  backdrop-filter: blur(5px);
  border: 1px solid #00ff80;
  border-radius: 15px !important;
  color: #00ff99 !important;
  box-shadow: 0 4px 20px rgba(0, 255, 128, 0.2);
}

.skill-item {
  transition: transform 0.3s ease;
}

.skill-item:hover {
  transform: scale(1.05);
}

.framework-card {
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.7), rgba(26, 74, 58, 0.5)) !important;
  border: 1px solid #00ff80 !important;
  color: #00ff99 !important;
  transition: transform 0.3s ease;
}

.framework-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 255, 128, 0.3);
}

.opacity-80 {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .display-1 {
    font-size: 2.5rem !important;
  }
}

/* Apply Prompt Font */
.skills-page * {
  font-family: 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
}

.skills-page h1,
.skills-page h2,
.skills-page h3,
.skills-page h4,
.skills-page p,
.skills-page .v-card-title,
.skills-page .v-card-text,
.skills-page .v-progress-circular,
.skills-page .font-weight-bold {
  font-family: 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
}
</style>