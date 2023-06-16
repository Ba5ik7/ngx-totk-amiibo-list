import { Injectable, NgZone } from '@angular/core';
import * as THREE from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';

@Injectable({
  providedIn: 'root'
})
export class ArService {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;

  constructor(private ngZone: NgZone) { }

  initialize(container: HTMLElement): void {
    this.initThree(container);
    this.initAr();
  }

  private initThree(container: HTMLElement): void {
    // Initialize renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(container.offsetWidth, container.offsetHeight);
    this.renderer.xr.enabled = true;
    container.appendChild(this.renderer.domElement);

    // Initialize scene
    this.scene = new THREE.Scene();
    
    // Initialize camera
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);
  }

  private initAr(): void {
    // Initialize AR session
    document.body.appendChild(ARButton.createButton(this.renderer));

    // Animate
    this.ngZone.runOutsideAngular(() => {
      this.renderer.setAnimationLoop((timestamp, frame) => {
        // Handle frame logic
        this.renderer.render(this.scene, this.camera);
      });
    });
  }
}
