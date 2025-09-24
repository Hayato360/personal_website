<template>
  <div class="profile-page">
    <!-- Three.js Canvas Container -->
    <div ref="threeContainer" class="three-container"></div>

    <!-- Profile Content Overlay -->
    <v-container class="profile-content">
      <v-row>
        <v-col cols="12" md="6" lg="6">
          <v-card class="profile-card" elevation="12" transparent>
            <v-card-text class="text-center">
              <!-- Profile Header -->
              <div class="profile-header mb-6">
                <v-avatar size="120" class="mb-4">
                  <v-img
                    src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/484103564_2167153990382618_7381342178307467101_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHzQzoLRRH58q4eM0AtzY7FFA5xF4Ge7nIUDnEXgZ7ucvU3ci7IKXQFIdoK7-HzlYUgAQByajX4P54YXCr8oM_K&_nc_ohc=jRUm2hdM610Q7kNvwEo-g0Z&_nc_oc=AdmvqlJhpSTCMrsqr9Ty9hnvlcpKRbMEZCMzbecFT4-V8VRIX5xzXhRIrGnymFVr2As&_nc_zt=23&_nc_ht=scontent.fbkk29-1.fna&_nc_gid=vJKWheccXlUmK5-RW0XsFw&oh=00_AfYXmYdvnjyGs8osv-06E_gS5O6XOgGQsAhEDcoR-UqDPA&oe=68D8357C"
                    alt="Profile Picture"
                  ></v-img>
                </v-avatar>
                <h1 class="white--text mb-2">กิตติพัทธ์ กิ่งพุดซา</h1>
                <h3 class="white--text opacity-80 mt-7">ชื่อเล่น: ทิว</h3>
                <p class="white--text opacity-60"></p>
              </div>

              <!-- Education -->
              <v-card class="info-card mb-4" dark>
                <v-card-title class="justify-center">
                  <v-icon left>mdi-school</v-icon>
                  การศึกษา
                </v-card-title>
                <v-card-text>
                  <p>จบการศึกษาจากมหาวิทยาลัยเทคโนโลยีสุรนารี</p>
                  <p><strong>สาขา:</strong> วิศวกรรมคอมพิวเตอร์</p>
                  <p><strong>เกรดเฉลี่ย:</strong> 2.85</p>
                  <p><strong>ปีที่จบ:</strong> 2567</p>
                </v-card-text>
              </v-card>

              <!-- Hobbies & Interests -->
              <v-card class="info-card mb-4" dark>
                <v-card-title class="justify-center">
                  <v-icon left>mdi-heart</v-icon>
                  งานอดิเรกและสิ่งที่ชอบ
                </v-card-title>
                <v-card-text class="d-flex justify-center">
                  <v-chip-group>
                    <v-chip color="primary">เขียนโปรแกรม</v-chip>
                    <v-chip color="secondary">เล่นเกมส์</v-chip>
                    <v-chip color="warning">ดูหนัง</v-chip>
                  </v-chip-group>
                </v-card-text>
              </v-card>

              <!-- Dislikes -->
              <v-card class="info-card mb-4" dark>
                <v-card-title class="justify-center">
                  <v-icon left>mdi-thumb-down</v-icon>
                  สิ่งที่ไม่ชอบ
                </v-card-title>
                <v-card-text class="d-flex justify-center">
                  <v-chip-group>
                    <v-chip color="warning">อาหารเผ็ดมาก</v-chip>
                    <v-chip color="pink darken-2">อากาศร้อน</v-chip>
                  </v-chip-group>
                </v-card-text>
              </v-card>

              <!-- Strengths -->
              <v-card class="info-card mb-4" dark>
                <v-card-title class="justify-center">
                  <v-icon left>mdi-star</v-icon>
                  จุดแข็ง
                </v-card-title>
                <v-card-text>
                  <v-list dark transparent>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="yellow">mdi-check-circle</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title
                          >เรียนรู้สิ่งใหม่ได้เร็ว</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="green">mdi-check-circle</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title
                          >มีความคิดสร้างสรรค์</v-list-item-title
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="blue">mdi-check-circle</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>แก้ปัญหาได้ดี</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>

              <v-card class="info-card mb-4" dark>
                <v-card-title class="justify-center">
                  <v-icon left>mdi-music</v-icon>
                  วง K-POP ที่ชอบ
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col
                      cols="6"
                      md="6"
                      class="mb-3"
                      v-for="group in kpopGroups"
                      :key="group.name"
                    >
                      <div class="d-flex align-center kpop-group-item">
                        <v-avatar
                          class="mr-3 kpop-avatar"
                          size="60"
                          :style="group.fallbackStyle"
                        >
                          <v-img
                            v-if="group.logo && !group.imageError"
                            :src="group.logo"
                            :alt="group.name + ' logo'"
                            @error="handleImageError(group)"
                            class="kpop-logo"
                          />
                          <span
                            v-else
                            :style="group.textStyle"
                            class="kpop-text"
                          >
                            {{ group.abbreviation }}
                          </span>
                        </v-avatar>
                        <div class="kpop-info">
                          <h4 class="kpop-name">{{ group.name }}</h4>
                          <p class="mb-0 caption kpop-type">{{ group.type }}</p>
                          <p class="caption mb-0 kpop-description">
                            {{ group.description }}
                          </p>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>

              <!-- Free Design Section -->
             
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Roblox 3D Model Column -->
        <v-col cols="12" md="6" lg="6">
          <v-card class="model-card" elevation="12" transparent>
            <v-card-title class="justify-center" style="color: #00ff80">
              <v-icon left color="#00ff80">mdi-account-box</v-icon>
              Roblox Avatar
            </v-card-title>
            <v-card-text class="text-center">
              <div ref="avatarContainer" class="avatar-container">
                <div
                  v-if="!avatarModel"
                  class="loading-overlay d-flex align-center justify-center"
                >
                  <div class="text-center">
                    <v-progress-circular
                      indeterminate
                      color="#00ff80"
                      size="50"
                      class="mb-3"
                    ></v-progress-circular>
                    <p style="color: #00ff99">Loading Roblox Avatar...</p>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>

          <v-card class="info-card mb-4" dark>
            <v-card-title class="justify-center">
              <v-icon left>mdi-trophy-variant</v-icon>
              ผลงานและความสำเร็จ
            </v-card-title>
            <v-card-text>
              <!-- การแข่งขันและรางวัล -->
            

              <!-- โปรเจคเด่น -->
              <div class="projects-section mt-4">
                <h4
                  style="
                    color: #00ff80;
                    margin-bottom: 15px;
                    text-align: center;
                  "
                >
                  💻 โปรเจคเด่น
                </h4>

                <v-row>
                  <!-- Personal Website -->
                  <v-col cols="12" sm="6" class="mb-3">
                    <div class="project-card">
                      <div class="project-image-container">
                        <v-img
                          src="../../public/AA.png"
                          height="150"
                          class="project-image"
                          :alt="'Personal Website Project'"
                        >
                          <template v-slot:placeholder>
                            <div class="project-placeholder">
                              <v-icon size="35" color="#00ff80">mdi-web</v-icon>
                            </div>
                          </template>
                        </v-img>
                      </div>
                      <div class="project-info pa-2">
                        <h5 style="color: #00ff80; margin-bottom: 5px">
                          MEE AI Chatbot for Mental Health Support
                        </h5>
                        <p class="mb-0 caption" style="color: #00ff99">
                          Python, Next.js, Go, Gin, ChatGPT API
                        </p>
                      </div>
                    </div>
                  </v-col>

                  <!-- E-commerce Project -->
                  <v-col cols="12" sm="6" class="mb-3">
                    <div class="project-card">
                      <div class="project-image-container">
                        <v-img
                          src="../../public/BB.png"
                          height="150"
                          class="project-image"
                          :alt="'E-commerce Project'"
                        >
                          <template v-slot:placeholder>
                            <div class="project-placeholder">
                              <v-icon size="35" color="#00ff80"
                                >mdi-shopping</v-icon
                              >
                            </div>
                          </template>
                        </v-img>
                      </div>
                      <div class="project-info pa-2">
                        <h5 style="color: #00ff80; margin-bottom: 5px">
                          ProofByte
                        </h5>
                        <p class="mb-0 caption" style="color: #00ff99">
                          Python, PyTorch, WGAN-GP, NextJS, Go
                        </p>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>

              

              <!-- สถิติ -->
              
            </v-card-text>

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
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default {
  name: "ProfileView",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      particles: null,
      animationId: null,
      mouseX: 0,
      mouseY: 0,
      windowHalfX: 0,
      windowHalfY: 0,
      // Avatar 3D model properties
      avatarScene: null,
      avatarCamera: null,
      avatarRenderer: null,
      avatarModel: null,
      avatarAnimationId: null,
      avatarControls: null,
      // K-POP Groups data - You can easily add your own logo URLs here!
      frameworks: [
        { name: 'Go', icon: 'mdi-language-go', color: 'blue', rating: 4.5 },
        { name: 'Python', icon: 'mdi-language-python', color: 'blue', rating: 4.5 },
        { name: 'Lua', icon: 'mdi-language-lua', color: 'blue', rating: 4.5 },
        { name: 'Node.js', icon: 'mdi-nodejs', color: 'green', rating: 4 },
        { name: 'Next.js', icon: 'mdi-react', color: 'green', rating: 4.5 },
      ],
      kpopGroups: [
        {
          name: "Stray Kids",
          abbreviation: "SKZ",
          type: "Boy Group",
          // description: "Stray Kids everywhere all around the world!",
          // Simply paste any image URL from the internet here:
          logo: "https://logos-world.net/wp-content/uploads/2020/12/Stray-Kids-Logo.png",
          fallbackStyle:
            "background: linear-gradient(45deg, #A82525, #E74C3C);",
          textStyle: "color: white; font-weight: bold; font-size: 12px;",
          imageError: false,
        },
        {
          name: "BTS",
          abbreviation: "BTS",
          type: "Boy Group",
          // description: "💜 ARMY Forever!",
          // Simply paste any image URL from the internet here:
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BTS_logo_%282017%29.png/1024px-BTS_logo_%282017%29.png",
          fallbackStyle:
            "background: linear-gradient(45deg, #663399, #cc99ff);",
          textStyle: "color: white; font-weight: bold; font-size: 12px;",
          imageError: false,
        },
        {
          name: "ITZY",
          abbreviation: "ITZY",
          type: "Girl Group",
          // description: "✨ IT'Z MIDZY!",
          // Simply paste any image URL from the internet here:
          logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Itzy-logo.png",
          fallbackStyle:
            "background: linear-gradient(45deg, #ff8c00, #ffd700);",
          textStyle: "color: black; font-weight: bold; font-size: 12px;",
          imageError: false,
        },
        {
          name: "ATEEZ",
          abbreviation: "ATEEZ",
          type: "Boy Group",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG34t9GpA-sk9Ejw5hNl17lHI48N-qF9IXxw&s",
          fallbackStyle:
            "background: linear-gradient(45deg, #1C1C1C, #FF4500);",
          textStyle: "color: white; font-weight: bold; font-size: 12px;",
          imageError: false,
        },
      ],
    };
  },
  mounted() {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.initThreeJS();

    // Delay avatar initialization to ensure DOM is ready
    setTimeout(() => {
      this.initAvatarModel();
    }, 100);

    window.addEventListener("resize", this.handleResize);
    window.addEventListener("mousemove", this.handleMouseMove);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("mousemove", this.handleMouseMove);
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.avatarAnimationId) {
      cancelAnimationFrame(this.avatarAnimationId);
    }
    if (this.avatarControls) {
      this.avatarControls.dispose();
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.avatarRenderer) {
      this.avatarRenderer.dispose();
    }
  },
  methods: {
    handleImageError(group) {
      console.log(`Image failed to load for ${group.name}: ${group.logo}`);
      console.log(`Using text fallback: ${group.abbreviation}`);
      group.imageError = true;
      this.$forceUpdate(); // Force re-render to show fallback text
    },

    initThreeJS() {
      // Scene setup
      this.scene = new THREE.Scene();
      this.scene.fog = new THREE.FogExp2(0x000000, 0.0008);

      // Camera setup with better positioning
      this.camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.set(0, 0, 8);

      // Renderer setup with better quality
      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.$refs.threeContainer.appendChild(this.renderer.domElement);

      // Add ambient lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
      this.scene.add(ambientLight);

      // Add directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(10, 10, 5);
      directionalLight.castShadow = true;
      this.scene.add(directionalLight);

      // Create spectacular effects
      this.createParticles();

      // Start animation
      this.animate();
    },

    createParticles() {
      const geometry = new THREE.BufferGeometry();
      const particlesCount = 500;
      const positions = new Float32Array(particlesCount * 3);
      const colors = new Float32Array(particlesCount * 3);
      const sizes = new Float32Array(particlesCount);

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;

        // Create spiral galaxy effect
        const radius = Math.random() * 25;
        const angle = Math.random() * Math.PI * 2;
        const spiralAngle = radius * 0.3;

        positions[i3] = Math.cos(angle + spiralAngle) * radius;
        positions[i3 + 1] = (Math.random() - 0.5) * 10;
        positions[i3 + 2] = Math.sin(angle + spiralAngle) * radius;

        // Green-themed colors based on position
        const greenHue = 0.3 + Math.random() * 0.2; // Green spectrum (0.3-0.5)
        const color = new THREE.Color().setHSL(greenHue, 0.9, 0.6);
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;

        // Random sizes
        sizes[i] = Math.random() * 0.3 + 0.1;
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        size: 0.2,
        transparent: true,
        opacity: 0.9,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });

      this.particles = new THREE.Points(geometry, material);
      this.scene.add(this.particles);

      // Add more spectacular effects
      this.addGeometricShapes();
      this.addFloatingSpheres();
      this.addEnergyRings();
      this.addFloatingCrystals();
      this.addLightBeams();
    },

    addGeometricShapes() {
      // Floating diamond crystals
      for (let i = 0; i < 12; i++) {
        const geometry = new THREE.OctahedronGeometry(0.4, 2);
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.3 + Math.random() * 0.2, 0.9, 0.7),
          transparent: true,
          opacity: 0.6,
          wireframe: true,
        });
        const crystal = new THREE.Mesh(geometry, material);

        crystal.position.x = (Math.random() - 0.5) * 20;
        crystal.position.y = (Math.random() - 0.5) * 20;
        crystal.position.z = (Math.random() - 0.5) * 20;

        crystal.userData = {
          originalPosition: crystal.position.clone(),
          speed: Math.random() * 0.02 + 0.01,
          rotationSpeed: Math.random() * 0.03 + 0.01,
          amplitude: Math.random() * 3 + 1,
        };

        this.scene.add(crystal);
      }

      // Pulsating cubes with glow effect
      for (let i = 0; i < 8; i++) {
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(
            0.25 + Math.random() * 0.25,
            0.8,
            0.6
          ),
          transparent: true,
          opacity: 0.7,
        });
        const cube = new THREE.Mesh(geometry, material);

        cube.position.x = (Math.random() - 0.5) * 18;
        cube.position.y = (Math.random() - 0.5) * 18;
        cube.position.z = (Math.random() - 0.5) * 18;

        cube.userData = {
          originalScale: cube.scale.clone(),
          originalPosition: cube.position.clone(),
          speed: Math.random() * 0.02 + 0.01,
          rotationSpeed: Math.random() * 0.02 + 0.01,
          pulseSpeed: Math.random() * 0.05 + 0.02,
        };

        this.scene.add(cube);
      }

      // Complex geometric shapes
      for (let i = 0; i < 6; i++) {
        const geometry = new THREE.IcosahedronGeometry(0.3, 1);
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.25 + (i / 6) * 0.2, 0.8, 0.6),
          transparent: true,
          opacity: 0.5,
          wireframe: true,
        });
        const icosahedron = new THREE.Mesh(geometry, material);

        icosahedron.position.x = Math.cos((i / 6) * Math.PI * 2) * 8;
        icosahedron.position.y = Math.sin((i / 6) * Math.PI * 2) * 8;
        icosahedron.position.z = (Math.random() - 0.5) * 10;

        icosahedron.userData = {
          originalPosition: icosahedron.position.clone(),
          speed: 0.01,
          rotationSpeed: 0.02,
          orbitRadius: 8,
        };

        this.scene.add(icosahedron);
      }
    },

    addFloatingSpheres() {
      // Energy orbs with pulsing effect
      for (let i = 0; i < 10; i++) {
        const geometry = new THREE.SphereGeometry(0.2, 16, 12);
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.3 + Math.random() * 0.15, 0.9, 0.7),
          transparent: true,
          opacity: 0.8,
          wireframe: true,
        });
        const sphere = new THREE.Mesh(geometry, material);

        sphere.position.x = (Math.random() - 0.5) * 25;
        sphere.position.y = (Math.random() - 0.5) * 25;
        sphere.position.z = (Math.random() - 0.5) * 25;

        sphere.userData = {
          originalPosition: sphere.position.clone(),
          speed: Math.random() * 0.015 + 0.005,
          rotationSpeed: Math.random() * 0.03 + 0.01,
          amplitude: Math.random() * 4 + 2,
          pulseSpeed: Math.random() * 0.1 + 0.05,
        };

        this.scene.add(sphere);
      }
    },

    addEnergyRings() {
      // Rotating energy rings
      for (let i = 0; i < 5; i++) {
        const geometry = new THREE.TorusGeometry(2 + i * 0.5, 0.1, 8, 32);
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.25 + (i / 5) * 0.2, 0.8, 0.6),
          transparent: true,
          opacity: 0.4,
          wireframe: true,
        });
        const ring = new THREE.Mesh(geometry, material);

        ring.position.set(0, 0, 0);
        ring.rotation.x = Math.random() * Math.PI;
        ring.rotation.y = Math.random() * Math.PI;
        ring.rotation.z = Math.random() * Math.PI;

        ring.userData = {
          rotationSpeedX: (Math.random() - 0.5) * 0.02,
          rotationSpeedY: (Math.random() - 0.5) * 0.02,
          rotationSpeedZ: (Math.random() - 0.5) * 0.02,
          originalOpacity: 0.4,
        };

        this.scene.add(ring);
      }
    },

    addFloatingCrystals() {
      // Complex crystal formations
      for (let i = 0; i < 15; i++) {
        const shapes = [
          () => new THREE.TetrahedronGeometry(0.3, 1),
          () => new THREE.DodecahedronGeometry(0.25, 0),
          () => new THREE.IcosahedronGeometry(0.2, 1),
        ];

        const geometry = shapes[Math.floor(Math.random() * shapes.length)]();
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.25 + Math.random() * 0.2, 0.7, 0.8),
          transparent: true,
          opacity: 0.6,
          wireframe: Math.random() > 0.5,
        });
        const crystal = new THREE.Mesh(geometry, material);

        // Position in a spiral pattern
        const angle = (i / 15) * Math.PI * 4;
        const radius = 5 + i * 0.5;
        crystal.position.x = Math.cos(angle) * radius;
        crystal.position.y = Math.sin(angle * 0.5) * 8;
        crystal.position.z = Math.sin(angle) * radius;

        crystal.userData = {
          originalPosition: crystal.position.clone(),
          speed: 0.005 + Math.random() * 0.01,
          rotationSpeed: Math.random() * 0.04 + 0.01,
          floatAmplitude: Math.random() * 2 + 1,
          orbitSpeed: 0.001 + Math.random() * 0.005,
        };

        this.scene.add(crystal);
      }
    },

    addLightBeams() {
      // Laser beam effects
      for (let i = 0; i < 8; i++) {
        const geometry = new THREE.CylinderGeometry(0.02, 0.02, 15, 8);
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.3 + (i / 8) * 0.15, 1, 0.5),
          transparent: true,
          opacity: 0.3,
        });
        const beam = new THREE.Mesh(geometry, material);

        beam.position.x = (Math.random() - 0.5) * 20;
        beam.position.y = (Math.random() - 0.5) * 20;
        beam.position.z = (Math.random() - 0.5) * 20;

        beam.rotation.x = Math.random() * Math.PI;
        beam.rotation.z = Math.random() * Math.PI;

        beam.userData = {
          rotationSpeed: Math.random() * 0.02 + 0.01,
          pulseSpeed: Math.random() * 0.1 + 0.05,
          originalOpacity: 0.3,
        };

        this.scene.add(beam);
      }
    },

    animate() {
      this.animationId = requestAnimationFrame(this.animate);

      const time = Date.now() * 0.001;

      // Camera follows mouse for parallax effect
      this.camera.position.x +=
        (this.mouseX * 0.001 - this.camera.position.x) * 0.05;
      this.camera.position.y +=
        (-this.mouseY * 0.001 - this.camera.position.y) * 0.05;
      this.camera.lookAt(this.scene.position);

      // Animate galaxy spiral particles
      if (this.particles) {
        this.particles.rotation.y += 0.003;
        this.particles.rotation.x += 0.001;

        // Create wave effect on particles
        const positions = this.particles.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const z = positions[i + 2];
          positions[i + 1] += Math.sin(time * 2 + x * 0.1 + z * 0.1) * 0.02;
        }
        this.particles.geometry.attributes.position.needsUpdate = true;

        // Animate particle colors for green spectrum effect
        const colors = this.particles.geometry.attributes.color.array;
        for (let i = 0; i < colors.length; i += 3) {
          const greenHue = 0.25 + Math.sin(time * 0.1 + i * 0.01) * 0.15; // Green spectrum animation
          const color = new THREE.Color().setHSL(greenHue, 0.9, 0.6);
          colors[i] = color.r;
          colors[i + 1] = color.g;
          colors[i + 2] = color.b;
        }
        this.particles.geometry.attributes.color.needsUpdate = true;
      }

      // Animate all objects in scene
      this.scene.children.forEach((child, index) => {
        if (child.userData) {
          const userData = child.userData;

          // Diamond crystals with complex movement
          if (userData.originalPosition && userData.amplitude > 2) {
            child.rotation.x += userData.rotationSpeed;
            child.rotation.y += userData.rotationSpeed * 0.7;
            child.rotation.z += userData.rotationSpeed * 0.5;

            child.position.x =
              userData.originalPosition.x +
              Math.sin(time * userData.speed) * userData.amplitude;
            child.position.y =
              userData.originalPosition.y +
              Math.cos(time * userData.speed * 0.7) * userData.amplitude * 0.5;
            child.position.z =
              userData.originalPosition.z +
              Math.sin(time * userData.speed * 0.3) * userData.amplitude * 0.3;

            // Green color morphing
            if (child.material && child.material.color) {
              const greenHue = 0.25 + Math.sin(time * 0.2 + index * 0.1) * 0.15;
              child.material.color.setHSL(greenHue, 0.9, 0.6);
            }
          }

          // Pulsating cubes with enhanced effects
          if (userData.pulseSpeed && userData.originalScale) {
            const pulseScale = 1 + Math.sin(time * userData.pulseSpeed) * 0.5;
            child.scale.setScalar(pulseScale);

            child.rotation.x += userData.rotationSpeed;
            child.rotation.y += userData.rotationSpeed;
            child.rotation.z += userData.rotationSpeed;

            // Enhanced green glow effect
            if (child.material) {
              child.material.opacity =
                0.7 + Math.sin(time * userData.pulseSpeed) * 0.3;
              const greenHue = 0.3 + Math.sin(time * 0.3 + index * 0.15) * 0.1;
              child.material.color.setHSL(greenHue, 0.9, 0.7);
            }
          }

          // Orbiting icosahedrons with trails
          if (userData.orbitRadius) {
            const orbitAngle = time * userData.speed + index;
            child.position.x = Math.cos(orbitAngle) * userData.orbitRadius;
            child.position.z = Math.sin(orbitAngle) * userData.orbitRadius;
            child.position.y =
              userData.originalPosition.y + Math.sin(time * 0.5) * 3;

            child.rotation.x += userData.rotationSpeed;
            child.rotation.y += userData.rotationSpeed;
            child.rotation.z += userData.rotationSpeed * 0.5;
          }

          // Energy rings with enhanced rotation and effects
          if (userData.rotationSpeedX !== undefined) {
            child.rotation.x +=
              userData.rotationSpeedX * (1 + Math.sin(time) * 0.5);
            child.rotation.y +=
              userData.rotationSpeedY * (1 + Math.cos(time) * 0.5);
            child.rotation.z +=
              userData.rotationSpeedZ * (1 + Math.sin(time * 0.7) * 0.5);

            // Multi-layered pulsing opacity
            if (child.material) {
              child.material.opacity =
                userData.originalOpacity +
                Math.sin(time * 3) * 0.3 +
                Math.cos(time * 5) * 0.2;
            }
          }

          // Floating crystals with enhanced spiral orbit
          if (userData.orbitSpeed && userData.floatAmplitude) {
            child.rotation.x += userData.rotationSpeed;
            child.rotation.y += userData.rotationSpeed * 0.8;
            child.rotation.z += userData.rotationSpeed * 0.6;

            const spiralTime = time * userData.orbitSpeed;
            const radius = Math.sqrt(
              userData.originalPosition.x ** 2 +
                userData.originalPosition.z ** 2
            );
            child.position.x =
              Math.cos(spiralTime) * radius + Math.sin(time * 2) * 1;
            child.position.z =
              Math.sin(spiralTime) * radius + Math.cos(time * 2) * 1;
            child.position.y =
              userData.originalPosition.y +
              Math.sin(time * userData.speed * 5) * userData.floatAmplitude +
              Math.cos(time * userData.speed * 3) *
                userData.floatAmplitude *
                0.5;
          }

          // Light beams with enhanced animation
          if (userData.pulseSpeed && userData.originalOpacity !== undefined) {
            child.rotation.y +=
              userData.rotationSpeed * (1 + Math.sin(time * 2) * 0.3);
            child.rotation.x += userData.rotationSpeed * 0.5;
            child.rotation.z += userData.rotationSpeed * 0.3;

            // Complex pulsing with color shifts
            if (child.material) {
              child.material.opacity =
                userData.originalOpacity +
                Math.sin(time * userData.pulseSpeed) * 0.4 +
                Math.cos(time * userData.pulseSpeed * 0.7) * 0.2;

              // Green color shifting
              const greenHue = 0.25 + Math.sin(time * 0.5 + index * 0.2) * 0.2;
              child.material.color.setHSL(greenHue, 1, 0.6);
            }
          }

          // Energy spheres with ultra-complex animation
          if (
            userData.pulseSpeed &&
            userData.amplitude &&
            userData.amplitude < 5
          ) {
            child.rotation.x +=
              userData.rotationSpeed * (1 + Math.sin(time * 3) * 0.5);
            child.rotation.y +=
              userData.rotationSpeed * 0.8 * (1 + Math.cos(time * 2) * 0.3);
            child.rotation.z += userData.rotationSpeed * 0.6;

            // Ultra-complex floating pattern with multiple sine waves
            child.position.x =
              userData.originalPosition.x +
              Math.sin(time * userData.speed * 2) * userData.amplitude +
              Math.cos(time * userData.speed * 1.5) * userData.amplitude * 0.3;
            child.position.y =
              userData.originalPosition.y +
              Math.cos(time * userData.speed * 1.5) * userData.amplitude +
              Math.sin(time * userData.speed * 2.5) * userData.amplitude * 0.5;
            child.position.z =
              userData.originalPosition.z +
              Math.sin(time * userData.speed * 0.8) * userData.amplitude * 0.5 +
              Math.cos(time * userData.speed * 1.2) * userData.amplitude * 0.3;

            // Enhanced pulsing scale with multiple frequencies
            const pulseScale =
              1 +
              Math.sin(time * userData.pulseSpeed) * 0.4 +
              Math.cos(time * userData.pulseSpeed * 1.3) * 0.2 +
              Math.sin(time * userData.pulseSpeed * 0.7) * 0.1;
            child.scale.setScalar(Math.max(0.1, pulseScale));
          }
        }
      });

      this.renderer.render(this.scene, this.camera);
    },

    handleMouseMove(event) {
      this.mouseX = event.clientX - this.windowHalfX;
      this.mouseY = event.clientY - this.windowHalfY;
    },

    initAvatarModel() {
      this.$nextTick(() => {
        const container = this.$refs.avatarContainer;
        if (!container) {
          console.error("Avatar container not found");
          return;
        }

        // Avatar Scene setup
        this.avatarScene = new THREE.Scene();
        this.avatarScene.background = new THREE.Color(0x0d1b2a);

        // Camera setup - positioned to look directly at avatar
        const width = container.clientWidth || 400;
        const height = container.clientHeight || 400;
        this.avatarCamera = new THREE.PerspectiveCamera(
          50,
          width / height,
          0.1,
          1000
        );

        // Start with camera positioned to look at avatar from a reasonable distance
        this.avatarCamera.position.set(0, 0, 3); // Move camera closer initially
        this.avatarCamera.lookAt(0, 0, 0); // Look at center where avatar will be

        // Renderer setup
        this.avatarRenderer = new THREE.WebGLRenderer({ antialias: true });
        this.avatarRenderer.setSize(width, height);
        this.avatarRenderer.setClearColor(0x0d1b2a, 1);
        container.appendChild(this.avatarRenderer.domElement);

        // OrbitControls setup with better defaults
        this.avatarControls = new OrbitControls(
          this.avatarCamera,
          this.avatarRenderer.domElement
        );
        this.avatarControls.enableDamping = true;
        this.avatarControls.dampingFactor = 0.1;

        // Set target to center where avatar will be positioned
        this.avatarControls.target.set(0, 0, 0);

        // Better distance limits
        this.avatarControls.minDistance = 1.5; // Allow getting closer
        this.avatarControls.maxDistance = 8; // Reasonable max distance

        // Enable all controls
        this.avatarControls.enableZoom = true;
        this.avatarControls.enablePan = true;
        this.avatarControls.enableRotate = true;
        this.avatarControls.autoRotate = false;

        // Initial camera position and update
        this.avatarControls.update();

        // Enhanced lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.avatarScene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0x00ff80, 1.0);
        directionalLight.position.set(2, 2, 2);
        this.avatarScene.add(directionalLight);

        const backLight = new THREE.DirectionalLight(0x00ff99, 0.3);
        backLight.position.set(-1, 1, -1);
        this.avatarScene.add(backLight);

        // Load the avatar model
        this.loadAvatarModel();

        // Start animation
        this.animateAvatar();
      });
    },

    loadAvatarModel() {
      console.log("Starting to load avatar model...");

      const mtlLoader = new MTLLoader();
      mtlLoader.load(
        "/Avartar.mtl",
        (materials) => {
          console.log("MTL file loaded successfully");
          materials.preload();

          Object.values(materials.materials).forEach((material) => {
            material.transparent = false;
            material.opacity = 1.0;
            material.side = THREE.DoubleSide;
          });

          const objLoader = new OBJLoader();
          objLoader.setMaterials(materials);
          objLoader.load(
            "/Avartar.obj",
            (object) => {
              console.log("OBJ file loaded successfully");

              // Clear existing objects
              while (this.avatarScene.children.length > 3) {
                this.avatarScene.remove(this.avatarScene.children[3]);
              }

              // Calculate proper centering and scaling
              const box = new THREE.Box3().setFromObject(object);
              const center = box.getCenter(new THREE.Vector3());
              const size = box.getSize(new THREE.Vector3());

              // Calculate scale to fit avatar nicely in view
              const maxDim = Math.max(size.x, size.y, size.z);
              const targetSize = 2.0; // Desired size in scene units
              const scale = targetSize / maxDim;

              // Apply scale
              object.scale.setScalar(scale);

              // Center the avatar at origin
              object.position.set(
                -center.x * scale,
                -center.y * scale,
                -center.z * scale
              );

              // Face forward
              object.rotation.set(0, Math.PI, 0);

              // Apply green theme materials
              object.traverse((child) => {
                if (child.isMesh) {
                  child.visible = true;
                  child.frustumCulled = false;

                  if (child.material) {
                    if (Array.isArray(child.material)) {
                      child.material.forEach((mat) => {
                        mat.emissive = new THREE.Color(0x001100);
                        mat.emissiveIntensity = 0.1;
                      });
                    } else {
                      child.material.emissive = new THREE.Color(0x001100);
                      child.material.emissiveIntensity = 0.1;
                    }
                  }
                }
              });

              this.avatarModel = object;
              this.avatarScene.add(object);

              // After loading, position camera to look at avatar optimally
              this.positionCameraForAvatar();
            },
            undefined,
            (error) => {
              console.error("Error loading OBJ file:", error);
              this.createFallbackAvatar();
            }
          );
        },
        undefined,
        (error) => {
          console.error("Error loading MTL file:", error);
          this.createFallbackAvatar();
        }
      );
    },

    positionCameraForAvatar() {
      if (!this.avatarModel || !this.avatarControls) return;

      // Calculate the avatar's actual bounding box in world space
      const box = new THREE.Box3().setFromObject(this.avatarModel);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Set controls target to avatar center
      this.avatarControls.target.copy(center);

      // Position camera to view avatar nicely
      const distance = Math.max(size.x, size.y, size.z) * 1.5;
      this.avatarCamera.position.set(
        center.x,
        center.y + size.y * 0.1, // Slightly above center
        center.z + distance
      );

      // Update controls and camera
      this.avatarControls.update();
      this.avatarCamera.lookAt(center);

      console.log("Camera positioned optimally for avatar");
    },

    animateAvatar() {
      this.avatarAnimationId = requestAnimationFrame(() =>
        this.animateAvatar()
      );

      // Update controls
      if (this.avatarControls) {
        this.avatarControls.update();
      }

      // Keep avatar static - no rotation
      if (this.avatarModel) {
        // Keep facing forward
        this.avatarModel.rotation.y = Math.PI;
      }

      // Render
      if (this.avatarRenderer && this.avatarScene && this.avatarCamera) {
        this.avatarRenderer.render(this.avatarScene, this.avatarCamera);
      }
    },

    handleResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      // Handle avatar renderer resize
      if (this.avatarRenderer && this.$refs.avatarContainer) {
        const container = this.$refs.avatarContainer;
        this.avatarCamera.aspect =
          container.clientWidth / container.clientHeight;
        this.avatarCamera.updateProjectionMatrix();
        this.avatarRenderer.setSize(
          container.clientWidth,
          container.clientHeight
        );
      }
    },
  },
};
</script>

<style scoped>
.profile-page {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #0d1b2a 0%, #1a4a3a 50%, #0d1b2a 100%);
  overflow-x: hidden;
}

.three-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.profile-content {
  position: relative;
  z-index: 1;
  padding-top: 50px;
  padding-bottom: 50px;
  color: #00ff99;
}

.profile-card {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px !important;
}

.info-card {
  background: rgba(0, 0, 0, 0.3) !important;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px !important;
}

.profile-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.profile-header h3 {
  font-size: 1.3rem;
  font-weight: 400;
}

.opacity-80 {
  opacity: 0.8;
}

.v-chip {
  margin: 2px;
}

/* Animation for cards */
.info-card {
  transition: transform 0.3s ease;
  background: linear-gradient(
    145deg,
    rgba(0, 0, 0, 0.8),
    rgba(26, 74, 58, 0.6)
  ) !important;
  border: 1px solid #00ff80;
  color: #00ff99 !important;
  box-shadow: 0 4px 20px rgba(0, 255, 128, 0.2);
}

.info-card:hover {
  transform: translateY(-5px);
  border-color: #00ff80;
  box-shadow: 0 8px 30px rgba(0, 255, 128, 0.3);
}

.info-card .v-card__title {
  color: #00ff80 !important;
  text-shadow: 0 0 10px rgba(0, 255, 128, 0.3);
}

.info-card .v-card__text {
  color: #00ff99 !important;
}

.v-chip {
  background: linear-gradient(45deg, #00ff80, #00cc66) !important;
  color: #000000 !important;
  font-weight: bold;
}

.v-chip:hover {
  background: linear-gradient(45deg, #00cc66, #00ff80) !important;
  transform: scale(1.05);
}

/* Avatar Model Styles */
.model-card {
  background: linear-gradient(
    145deg,
    rgba(0, 0, 0, 0.8),
    rgba(26, 74, 58, 0.6)
  ) !important;
  border: 1px solid #00ff80;
  color: #00ff99 !important;
  box-shadow: 0 4px 20px rgba(0, 255, 128, 0.2);
}

.avatar-container {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background: linear-gradient(135deg, #0d1b2a 0%, #1a4a3a 50%, #0d1b2a 100%);
  border: 2px solid #00ff80;
  box-shadow: inset 0 0 20px rgba(0, 255, 128, 0.2);
  position: relative;
  overflow: hidden;
}

.avatar-container canvas {
  border-radius: 8px;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 27, 42, 0.9);
  border-radius: 8px;
  z-index: 10;
}

/* Responsive Design */
@media (max-width: 768px) {
  .avatar-container {
    height: 300px;
    margin-top: 20px;
  }

  .profile-content {
    padding-top: 20px;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .profile-header h1 {
    font-size: 2rem;
  }

  .profile-content {
    padding-top: 20px;
  }
}

/* Apply Prompt Font */
.profile-page * {
  font-family: "Prompt", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif !important;
}

/* K-POP Groups Styles */
.kpop-group-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 8px;
  border-radius: 12px;
  background: rgba(0, 255, 128, 0.05);
  border: 1px solid rgba(0, 255, 128, 0.2);
}

.kpop-group-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 255, 128, 0.3);
  background: rgba(0, 255, 128, 0.1);
}

.kpop-avatar {
  position: relative;
  border: 2px solid #00ff80;
  box-shadow: 0 0 10px rgba(0, 255, 128, 0.4);
  transition: all 0.3s ease;
}

.kpop-avatar:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(0, 255, 128, 0.6);
}

.kpop-logo {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  border-radius: 50%;
}

.kpop-text {
  font-family: "Prompt", sans-serif !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.kpop-info {
  flex: 1;
}

.kpop-name {
  color: #00ff80 !important;
  font-family: "Prompt", sans-serif !important;
  font-weight: 700;
  text-shadow: 0 0 5px rgba(0, 255, 128, 0.3);
  margin-bottom: 4px;
  font-size: 1.1rem;
}

.kpop-type {
  color: #00ff99 !important;
  font-family: "Prompt", sans-serif !important;
  opacity: 0.8;
  font-weight: 500;
}

.kpop-description {
  color: #ffffff !important;
  font-family: "Prompt", sans-serif !important;
  font-weight: 400;
  text-shadow: 0 0 3px rgba(0, 255, 128, 0.2);
}

.profile-page h1,
.profile-page h2,
.profile-page h3,
.profile-page h4,
.profile-page p,
.profile-page .v-card-title,
.profile-page .v-card-text,
.profile-page .v-list-item-title,
.profile-page .v-chip,
.profile-page .v-btn,
.profile-page .white--text {
  font-family: "Prompt", -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif !important;
}
</style>