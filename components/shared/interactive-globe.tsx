"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function InteractiveGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 10;

    // WebGL Renderer with Alpha
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Light System
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25); // Subtle environment light
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.2); // Bright sun light
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    // Procedural Earth Texture Map Generator
    const createEarthTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      // 1. Oceans (Soothing Light Slate/Blue)
      ctx.fillStyle = "#e0f2fe"; // Light sky blue
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Continents: drawing organic land shapes procedurally
      ctx.fillStyle = "#ffffff"; // Minimal white landmasses for luxury design
      ctx.shadowBlur = 4;
      ctx.shadowColor = "rgba(0, 0, 0, 0.05)";

      // America (North & South)
      ctx.beginPath();
      ctx.moveTo(150, 80);
      ctx.bezierCurveTo(200, 100, 220, 150, 180, 220); // North America
      ctx.bezierCurveTo(160, 250, 200, 280, 210, 310); // Central Link
      ctx.bezierCurveTo(230, 340, 260, 420, 220, 470); // South America
      ctx.bezierCurveTo(190, 480, 150, 420, 160, 350);
      ctx.bezierCurveTo(170, 320, 130, 310, 120, 280);
      ctx.bezierCurveTo(100, 240, 80, 140, 110, 90);
      ctx.closePath();
      ctx.fill();

      // Eurasia + Africa
      ctx.beginPath();
      ctx.moveTo(450, 80);
      ctx.bezierCurveTo(550, 60, 750, 50, 850, 90); // Northern coast
      ctx.bezierCurveTo(900, 120, 850, 220, 800, 240); // East Asia
      ctx.bezierCurveTo(750, 260, 720, 210, 650, 230); // India/Middle East
      ctx.bezierCurveTo(620, 240, 580, 210, 540, 250); // Mediterranean
      ctx.bezierCurveTo(560, 280, 620, 330, 600, 420); // South Africa
      ctx.bezierCurveTo(570, 460, 520, 450, 480, 380);
      ctx.bezierCurveTo(460, 340, 430, 280, 440, 250); // West Africa
      ctx.bezierCurveTo(450, 220, 400, 200, 420, 130); // Europe
      ctx.closePath();
      ctx.fill();

      // Australia
      ctx.beginPath();
      ctx.arc(800, 380, 45, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();

      // Antarctica
      ctx.beginPath();
      ctx.rect(0, 490, canvas.width, 22);
      ctx.closePath();
      ctx.fill();

      return new THREE.CanvasTexture(canvas);
    };

    // Procedural Clouds Generator
    const createCloudTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render soft wispy clouds
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      for (let i = 0; i < 25; i++) {
        const x = Math.random() * canvas.width;
        const y = 80 + Math.random() * 320;
        const radiusX = 80 + Math.random() * 150;
        const radiusY = 15 + Math.random() * 35;
        
        ctx.beginPath();
        ctx.ellipse(x, y, radiusX, radiusY, 0, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      return new THREE.CanvasTexture(canvas);
    };

    const earthTexture = createEarthTexture();
    const cloudTexture = createCloudTexture();

    // 1. Earth Sphere Mesh
    const earthGeometry = new THREE.SphereGeometry(3.6, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.8,
      metalness: 0.1,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthMesh.receiveShadow = true;
    earthMesh.castShadow = true;
    scene.add(earthMesh);

    // 2. Cloud Layer Sphere Mesh (Slightly larger sphere with transparency)
    const cloudGeometry = new THREE.SphereGeometry(3.68, 64, 64);
    const cloudMaterial = new THREE.MeshStandardMaterial({
      alphaMap: cloudTexture,
      transparent: true,
      blending: THREE.NormalBlending,
      opacity: 0.7,
      color: 0xffffff,
      depthWrite: false, // Prevents cloud sorting issues
    });
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(cloudMesh);

    // Atmosphere Glow effect ring
    const atmosphereGeometry = new THREE.SphereGeometry(3.72, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphereMesh);

    // Animation & Scroll variables
    let animationFrameId: number;
    let targetRotationY = 0;
    let currentRotationY = 0;

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
      targetRotationY = scrollPercent * Math.PI * 2;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Animation Render Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Lerp (linear interpolation) for smooth scroll spin transition
      currentRotationY += (targetRotationY - currentRotationY) * 0.08;

      // Rotate Earth (scroll linked + constant spin)
      earthMesh.rotation.y = currentRotationY + Date.now() * 0.00008;
      
      // Rotate Clouds slightly faster for parallax depth
      cloudMesh.rotation.y = currentRotationY + Date.now() * 0.00014;
      cloudMesh.rotation.x = Date.now() * 0.00003;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      earthGeometry.dispose();
      earthMaterial.dispose();
      if (earthTexture) earthTexture.dispose();
      cloudGeometry.dispose();
      cloudMaterial.dispose();
      if (cloudTexture) cloudTexture.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full min-h-[400px] flex items-center justify-center relative cursor-grab active:cursor-grabbing"
    />
  );
}
