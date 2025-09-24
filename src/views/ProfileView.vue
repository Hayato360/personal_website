<template>
  <div class="profile-page">
    <!-- Three.js Canvas Container -->
    <div ref="threeContainer" class="three-container"></div>
    
    <!-- Profile Content Overlay -->
    <v-container class="profile-content">
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="profile-card" elevation="12" transparent>
            <v-card-text class="text-center">
              <!-- Profile Header -->
              <div class="profile-header mb-6">
                <v-avatar size="120" class="mb-4">
                  <v-img src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/484103564_2167153990382618_7381342178307467101_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHzQzoLRRH58q4eM0AtzY7FFA5xF4Ge7nIUDnEXgZ7ucvU3ci7IKXQFIdoK7-HzlYUgAQByajX4P54YXCr8oM_K&_nc_ohc=jRUm2hdM610Q7kNvwEo-g0Z&_nc_oc=AdmvqlJhpSTCMrsqr9Ty9hnvlcpKRbMEZCMzbecFT4-V8VRIX5xzXhRIrGnymFVr2As&_nc_zt=23&_nc_ht=scontent.fbkk29-1.fna&_nc_gid=vJKWheccXlUmK5-RW0XsFw&oh=00_AfYXmYdvnjyGs8osv-06E_gS5O6XOgGQsAhEDcoR-UqDPA&oe=68D8357C" alt="Profile Picture"></v-img>
                </v-avatar>
                <h1 class="white--text mb-2">กิตติพัทธ์ กิ่งพุดซา</h1>
                <h3 class="white--text opacity-80">ชื่อเล่น: ทิว</h3>
                <p class="white--text opacity-60">นักพัฒนาเว็บแอปพลิเคชัน</p>
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
                <v-card-text>
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
                <v-card-text>
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
                        <v-list-item-title>มีความรับผิดชอบสูง</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="yellow">mdi-check-circle</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>ทำงานเป็นทีมได้ดี</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="yellow">mdi-check-circle</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>เรียนรู้สิ่งใหม่ได้เร็ว</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon color="green">mdi-check-circle</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>มีความคิดสร้างสรรค์</v-list-item-title>
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

              <!-- Sports Team -->
              <v-card class="info-card mb-4" dark>
                <v-card-title class="justify-center">
                  <v-icon left>mdi-soccer</v-icon>
                  ทีมกีฬาที่ชอบ
                </v-card-title>
                <v-card-text>
                  <div class="d-flex justify-center align-center">
                    <v-avatar class="mr-3">
                      <v-img src="https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-Logo.png" alt="Manchester United Logo"></v-img>
                    </v-avatar>
                    <div>
                      <h4>Manchester United</h4>
                      <p class="mb-0">ฟุตบอลพรีเมียร์ลีก อังกฤษ</p>
                      <p class="caption mb-0">🏆 Red Devils Forever!</p>
                    </div>
                  </div>
                </v-card-text>
              </v-card>

              <!-- Free Design Section -->
              <v-card class="info-card" dark>
                <v-card-title class="justify-center">
                  <v-icon left>mdi-palette</v-icon>
                  ฟรีดีไซน์
                </v-card-title>
                <v-card-text>
                  <p class="mb-3">🎨 ยินดีให้คำปรึกษาด้านการออกแบบเว็บไซต์และ UI/UX ฟรี!</p>
                  <p class="mb-3">💻 พร้อมช่วยเหลือในการพัฒนาเว็บแอปพลิเคชัน</p>
                  <p class="mb-3">📱 ออกแบบ Mobile App UI</p>
                  <div class="text-center">
                    <v-btn small color="primary" class="mr-2">
                      <v-icon left small>mdi-email</v-icon>
                      ติดต่อ
                    </v-btn>
                    <v-btn small color="success">
                      <v-icon left small>mdi-whatsapp</v-icon>
                      Chat
                    </v-btn>
                  </div>
                  <p class="caption text-center mt-3 mb-0">สนใจติดต่อได้ทุกเมื่อ 😊</p>
                </v-card-text>
              </v-card>

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'ProfileView',
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
      windowHalfY: 0
    }
  },
  mounted() {
    this.windowHalfX = window.innerWidth / 2
    this.windowHalfY = window.innerHeight / 2
    this.initThreeJS()
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('mousemove', this.handleMouseMove)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('mousemove', this.handleMouseMove)
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
    if (this.renderer) {
      this.renderer.dispose()
    }
  },
  methods: {
    initThreeJS() {
      // Scene setup
      this.scene = new THREE.Scene()
      this.scene.fog = new THREE.FogExp2(0x000000, 0.0008)
      
      // Camera setup with better positioning
      this.camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      this.camera.position.set(0, 0, 8)
      
      // Renderer setup with better quality
      this.renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      })
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      this.renderer.setClearColor(0x000000, 0)
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
      this.$refs.threeContainer.appendChild(this.renderer.domElement)
      
      // Add ambient lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.3)
      this.scene.add(ambientLight)
      
      // Add directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(10, 10, 5)
      directionalLight.castShadow = true
      this.scene.add(directionalLight)
      
      // Create spectacular effects
      this.createParticles()
      
      // Start animation
      this.animate()
    },
    
    createParticles() {
      const geometry = new THREE.BufferGeometry()
      const particlesCount = 500
      const positions = new Float32Array(particlesCount * 3)
      const colors = new Float32Array(particlesCount * 3)
      const sizes = new Float32Array(particlesCount)
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3
        
        // Create spiral galaxy effect
        const radius = Math.random() * 25
        const angle = Math.random() * Math.PI * 2
        const spiralAngle = radius * 0.3
        
        positions[i3] = Math.cos(angle + spiralAngle) * radius
        positions[i3 + 1] = (Math.random() - 0.5) * 10
        positions[i3 + 2] = Math.sin(angle + spiralAngle) * radius
        
        // Green-themed colors based on position
        const greenHue = 0.3 + (Math.random() * 0.2) // Green spectrum (0.3-0.5)
        const color = new THREE.Color().setHSL(greenHue, 0.9, 0.6)
        colors[i3] = color.r
        colors[i3 + 1] = color.g
        colors[i3 + 2] = color.b
        
        // Random sizes
        sizes[i] = Math.random() * 0.3 + 0.1
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
      
      const material = new THREE.PointsMaterial({
        size: 0.2,
        transparent: true,
        opacity: 0.9,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      })
      
      this.particles = new THREE.Points(geometry, material)
      this.scene.add(this.particles)
      
      // Add more spectacular effects
      this.addGeometricShapes()
      this.addFloatingSpheres()
      this.addEnergyRings()
      this.addFloatingCrystals()
      this.addLightBeams()
    },
    
    addGeometricShapes() {
      // Floating diamond crystals
      for (let i = 0; i < 12; i++) {
        const geometry = new THREE.OctahedronGeometry(0.4, 2)
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.3 + Math.random() * 0.2, 0.9, 0.7),
          transparent: true,
          opacity: 0.6,
          wireframe: true
        })
        const crystal = new THREE.Mesh(geometry, material)
        
        crystal.position.x = (Math.random() - 0.5) * 20
        crystal.position.y = (Math.random() - 0.5) * 20
        crystal.position.z = (Math.random() - 0.5) * 20
        
        crystal.userData = {
          originalPosition: crystal.position.clone(),
          speed: Math.random() * 0.02 + 0.01,
          rotationSpeed: Math.random() * 0.03 + 0.01,
          amplitude: Math.random() * 3 + 1
        }
        
        this.scene.add(crystal)
      }
      
      // Pulsating cubes with glow effect
      for (let i = 0; i < 8; i++) {
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.25 + Math.random() * 0.25, 0.8, 0.6),
          transparent: true,
          opacity: 0.7
        })
        const cube = new THREE.Mesh(geometry, material)
        
        cube.position.x = (Math.random() - 0.5) * 18
        cube.position.y = (Math.random() - 0.5) * 18
        cube.position.z = (Math.random() - 0.5) * 18
        
        cube.userData = {
          originalScale: cube.scale.clone(),
          originalPosition: cube.position.clone(),
          speed: Math.random() * 0.02 + 0.01,
          rotationSpeed: Math.random() * 0.02 + 0.01,
          pulseSpeed: Math.random() * 0.05 + 0.02
        }
        
        this.scene.add(cube)
      }
      
      // Complex geometric shapes
      for (let i = 0; i < 6; i++) {
        const geometry = new THREE.IcosahedronGeometry(0.3, 1)
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.25 + (i / 6) * 0.2, 0.8, 0.6),
          transparent: true,
          opacity: 0.5,
          wireframe: true
        })
        const icosahedron = new THREE.Mesh(geometry, material)
        
        icosahedron.position.x = Math.cos((i / 6) * Math.PI * 2) * 8
        icosahedron.position.y = Math.sin((i / 6) * Math.PI * 2) * 8
        icosahedron.position.z = (Math.random() - 0.5) * 10
        
        icosahedron.userData = {
          originalPosition: icosahedron.position.clone(),
          speed: 0.01,
          rotationSpeed: 0.02,
          orbitRadius: 8
        }
        
        this.scene.add(icosahedron)
      }
    },
    
    addFloatingSpheres() {
      // Energy orbs with pulsing effect
      for (let i = 0; i < 10; i++) {
        const geometry = new THREE.SphereGeometry(0.2, 16, 12)
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.3 + Math.random() * 0.15, 0.9, 0.7),
          transparent: true,
          opacity: 0.8,
          wireframe: true
        })
        const sphere = new THREE.Mesh(geometry, material)
        
        sphere.position.x = (Math.random() - 0.5) * 25
        sphere.position.y = (Math.random() - 0.5) * 25
        sphere.position.z = (Math.random() - 0.5) * 25
        
        sphere.userData = {
          originalPosition: sphere.position.clone(),
          speed: Math.random() * 0.015 + 0.005,
          rotationSpeed: Math.random() * 0.03 + 0.01,
          amplitude: Math.random() * 4 + 2,
          pulseSpeed: Math.random() * 0.1 + 0.05
        }
        
        this.scene.add(sphere)
      }
    },
    
    addEnergyRings() {
      // Rotating energy rings
      for (let i = 0; i < 5; i++) {
        const geometry = new THREE.TorusGeometry(2 + i * 0.5, 0.1, 8, 32)
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.25 + (i / 5) * 0.2, 0.8, 0.6),
          transparent: true,
          opacity: 0.4,
          wireframe: true
        })
        const ring = new THREE.Mesh(geometry, material)
        
        ring.position.set(0, 0, 0)
        ring.rotation.x = Math.random() * Math.PI
        ring.rotation.y = Math.random() * Math.PI
        ring.rotation.z = Math.random() * Math.PI
        
        ring.userData = {
          rotationSpeedX: (Math.random() - 0.5) * 0.02,
          rotationSpeedY: (Math.random() - 0.5) * 0.02,
          rotationSpeedZ: (Math.random() - 0.5) * 0.02,
          originalOpacity: 0.4
        }
        
        this.scene.add(ring)
      }
    },
    
    addFloatingCrystals() {
      // Complex crystal formations
      for (let i = 0; i < 15; i++) {
        const shapes = [
          () => new THREE.TetrahedronGeometry(0.3, 1),
          () => new THREE.DodecahedronGeometry(0.25, 0),
          () => new THREE.IcosahedronGeometry(0.2, 1)
        ]
        
        const geometry = shapes[Math.floor(Math.random() * shapes.length)]()
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.25 + Math.random() * 0.2, 0.7, 0.8),
          transparent: true,
          opacity: 0.6,
          wireframe: Math.random() > 0.5
        })
        const crystal = new THREE.Mesh(geometry, material)
        
        // Position in a spiral pattern
        const angle = (i / 15) * Math.PI * 4
        const radius = 5 + (i * 0.5)
        crystal.position.x = Math.cos(angle) * radius
        crystal.position.y = Math.sin(angle * 0.5) * 8
        crystal.position.z = Math.sin(angle) * radius
        
        crystal.userData = {
          originalPosition: crystal.position.clone(),
          speed: 0.005 + Math.random() * 0.01,
          rotationSpeed: Math.random() * 0.04 + 0.01,
          floatAmplitude: Math.random() * 2 + 1,
          orbitSpeed: 0.001 + Math.random() * 0.005
        }
        
        this.scene.add(crystal)
      }
    },
    
    addLightBeams() {
      // Laser beam effects
      for (let i = 0; i < 8; i++) {
        const geometry = new THREE.CylinderGeometry(0.02, 0.02, 15, 8)
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.3 + (i / 8) * 0.15, 1, 0.5),
          transparent: true,
          opacity: 0.3
        })
        const beam = new THREE.Mesh(geometry, material)
        
        beam.position.x = (Math.random() - 0.5) * 20
        beam.position.y = (Math.random() - 0.5) * 20
        beam.position.z = (Math.random() - 0.5) * 20
        
        beam.rotation.x = Math.random() * Math.PI
        beam.rotation.z = Math.random() * Math.PI
        
        beam.userData = {
          rotationSpeed: Math.random() * 0.02 + 0.01,
          pulseSpeed: Math.random() * 0.1 + 0.05,
          originalOpacity: 0.3
        }
        
        this.scene.add(beam)
      }
    },
    
    animate() {
      this.animationId = requestAnimationFrame(this.animate)
      
      const time = Date.now() * 0.001
      
      // Camera follows mouse for parallax effect
      this.camera.position.x += (this.mouseX * 0.001 - this.camera.position.x) * 0.05
      this.camera.position.y += (-this.mouseY * 0.001 - this.camera.position.y) * 0.05
      this.camera.lookAt(this.scene.position)
      
      // Animate galaxy spiral particles
      if (this.particles) {
        this.particles.rotation.y += 0.003
        this.particles.rotation.x += 0.001
        
        // Create wave effect on particles
        const positions = this.particles.geometry.attributes.position.array
        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i]
          const z = positions[i + 2]
          positions[i + 1] += Math.sin(time * 2 + x * 0.1 + z * 0.1) * 0.02
        }
        this.particles.geometry.attributes.position.needsUpdate = true
        
        // Animate particle colors for green spectrum effect
        const colors = this.particles.geometry.attributes.color.array
        for (let i = 0; i < colors.length; i += 3) {
          const greenHue = 0.25 + Math.sin(time * 0.1 + i * 0.01) * 0.15 // Green spectrum animation
          const color = new THREE.Color().setHSL(greenHue, 0.9, 0.6)
          colors[i] = color.r
          colors[i + 1] = color.g
          colors[i + 2] = color.b
        }
        this.particles.geometry.attributes.color.needsUpdate = true
      }
      
      // Animate all objects in scene
      this.scene.children.forEach((child, index) => {
        if (child.userData) {
          const userData = child.userData
          
          // Diamond crystals with complex movement
          if (userData.originalPosition && userData.amplitude > 2) {
            child.rotation.x += userData.rotationSpeed
            child.rotation.y += userData.rotationSpeed * 0.7
            child.rotation.z += userData.rotationSpeed * 0.5
            
            child.position.x = userData.originalPosition.x + Math.sin(time * userData.speed) * userData.amplitude
            child.position.y = userData.originalPosition.y + Math.cos(time * userData.speed * 0.7) * userData.amplitude * 0.5
            child.position.z = userData.originalPosition.z + Math.sin(time * userData.speed * 0.3) * userData.amplitude * 0.3
            
            // Green color morphing
            if (child.material && child.material.color) {
              const greenHue = 0.25 + Math.sin(time * 0.2 + index * 0.1) * 0.15
              child.material.color.setHSL(greenHue, 0.9, 0.6)
            }
          }
          
          // Pulsating cubes with enhanced effects
          if (userData.pulseSpeed && userData.originalScale) {
            const pulseScale = 1 + Math.sin(time * userData.pulseSpeed) * 0.5
            child.scale.setScalar(pulseScale)
            
            child.rotation.x += userData.rotationSpeed
            child.rotation.y += userData.rotationSpeed
            child.rotation.z += userData.rotationSpeed
            
            // Enhanced green glow effect
            if (child.material) {
              child.material.opacity = 0.7 + Math.sin(time * userData.pulseSpeed) * 0.3
              const greenHue = 0.3 + Math.sin(time * 0.3 + index * 0.15) * 0.1
              child.material.color.setHSL(greenHue, 0.9, 0.7)
            }
          }
          
          // Orbiting icosahedrons with trails
          if (userData.orbitRadius) {
            const orbitAngle = time * userData.speed + index
            child.position.x = Math.cos(orbitAngle) * userData.orbitRadius
            child.position.z = Math.sin(orbitAngle) * userData.orbitRadius
            child.position.y = userData.originalPosition.y + Math.sin(time * 0.5) * 3
            
            child.rotation.x += userData.rotationSpeed
            child.rotation.y += userData.rotationSpeed
            child.rotation.z += userData.rotationSpeed * 0.5
          }
          
          // Energy rings with enhanced rotation and effects
          if (userData.rotationSpeedX !== undefined) {
            child.rotation.x += userData.rotationSpeedX * (1 + Math.sin(time) * 0.5)
            child.rotation.y += userData.rotationSpeedY * (1 + Math.cos(time) * 0.5)
            child.rotation.z += userData.rotationSpeedZ * (1 + Math.sin(time * 0.7) * 0.5)
            
            // Multi-layered pulsing opacity
            if (child.material) {
              child.material.opacity = userData.originalOpacity + 
                Math.sin(time * 3) * 0.3 + 
                Math.cos(time * 5) * 0.2
            }
          }
          
          // Floating crystals with enhanced spiral orbit
          if (userData.orbitSpeed && userData.floatAmplitude) {
            child.rotation.x += userData.rotationSpeed
            child.rotation.y += userData.rotationSpeed * 0.8
            child.rotation.z += userData.rotationSpeed * 0.6
            
            const spiralTime = time * userData.orbitSpeed
            const radius = Math.sqrt(userData.originalPosition.x ** 2 + userData.originalPosition.z ** 2)
            child.position.x = Math.cos(spiralTime) * radius + Math.sin(time * 2) * 1
            child.position.z = Math.sin(spiralTime) * radius + Math.cos(time * 2) * 1
            child.position.y = userData.originalPosition.y + 
              Math.sin(time * userData.speed * 5) * userData.floatAmplitude +
              Math.cos(time * userData.speed * 3) * userData.floatAmplitude * 0.5
          }
          
          // Light beams with enhanced animation
          if (userData.pulseSpeed && userData.originalOpacity !== undefined) {
            child.rotation.y += userData.rotationSpeed * (1 + Math.sin(time * 2) * 0.3)
            child.rotation.x += userData.rotationSpeed * 0.5
            child.rotation.z += userData.rotationSpeed * 0.3
            
            // Complex pulsing with color shifts
            if (child.material) {
              child.material.opacity = userData.originalOpacity + 
                Math.sin(time * userData.pulseSpeed) * 0.4 +
                Math.cos(time * userData.pulseSpeed * 0.7) * 0.2
              
              // Green color shifting
              const greenHue = 0.25 + Math.sin(time * 0.5 + index * 0.2) * 0.2
              child.material.color.setHSL(greenHue, 1, 0.6)
            }
          }
          
          // Energy spheres with ultra-complex animation
          if (userData.pulseSpeed && userData.amplitude && userData.amplitude < 5) {
            child.rotation.x += userData.rotationSpeed * (1 + Math.sin(time * 3) * 0.5)
            child.rotation.y += userData.rotationSpeed * 0.8 * (1 + Math.cos(time * 2) * 0.3)
            child.rotation.z += userData.rotationSpeed * 0.6
            
            // Ultra-complex floating pattern with multiple sine waves
            child.position.x = userData.originalPosition.x + 
              Math.sin(time * userData.speed * 2) * userData.amplitude +
              Math.cos(time * userData.speed * 1.5) * userData.amplitude * 0.3
            child.position.y = userData.originalPosition.y + 
              Math.cos(time * userData.speed * 1.5) * userData.amplitude +
              Math.sin(time * userData.speed * 2.5) * userData.amplitude * 0.5
            child.position.z = userData.originalPosition.z + 
              Math.sin(time * userData.speed * 0.8) * userData.amplitude * 0.5 +
              Math.cos(time * userData.speed * 1.2) * userData.amplitude * 0.3
            
            // Enhanced pulsing scale with multiple frequencies
            const pulseScale = 1 + 
              Math.sin(time * userData.pulseSpeed) * 0.4 +
              Math.cos(time * userData.pulseSpeed * 1.3) * 0.2 +
              Math.sin(time * userData.pulseSpeed * 0.7) * 0.1
            child.scale.setScalar(Math.max(0.1, pulseScale))
          }
        }
      })
      
      this.renderer.render(this.scene, this.camera)
    },
    
    handleMouseMove(event) {
      this.mouseX = event.clientX - this.windowHalfX
      this.mouseY = event.clientY - this.windowHalfY
    },
    
    handleResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
  }
}
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
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.8), rgba(26, 74, 58, 0.6)) !important;
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

/* Responsive design */
@media (max-width: 768px) {
  .profile-header h1 {
    font-size: 2rem;
  }
  
  .profile-content {
    padding-top: 20px;
  }
}
</style>