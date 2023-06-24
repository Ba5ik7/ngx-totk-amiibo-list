import { Injectable, NgZone } from '@angular/core';
import * as THREE from 'three';
import { THREEx } from '@ar-js-org/ar.js-threejs';
import { ArToolkitSource } from '@ar-js-org/ar.js-threejs/types/ArToolkitSource';
import { ArToolkitContext } from '@ar-js-org/ar.js-threejs/types/ArToolkitContext';
import { ArMarkerControls } from '@ar-js-org/ar.js-threejs/types/ArMarkerControls';

@Injectable({
  providedIn: 'root'
})
export class ArService {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.Camera;
  private arToolkitSource!: ArToolkitSource; 
  private arToolkitContext!: ArToolkitContext; 
  private arMarker!: ArMarkerControls;

  constructor(private ngZone: NgZone) { }

  initialize(container: HTMLElement): void {
    this.initThree(container);
    this.initAr().then(() => {

    });
  }

  private initThree(container: HTMLElement): void {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(this.renderer.domElement);
  
    // Set up a perspective camera
    this.camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    
    this.scene = new THREE.Scene();
    this.scene.add(this.camera);
  }  

  private async initAr(): Promise<void> {
    // Create AR source
    this.arToolkitSource = new THREEx.ArToolkitSource({
      sourceType: 'webcam',
      sourceWidth: 640,
      sourceHeight: 480,
    });

    await new Promise<void>(resolve => {
      this.arToolkitSource.init(() => {
        resolve();
      }, () => {
        console.error('Unable to initialize AR toolkit source.');
      });
    });

    console.log('arToolkitSource', this.arToolkitSource);
    
    this.arToolkitSource.domElement.addEventListener('canplay', () => {
      console.log('canplay');
      this.initARContext();
    });    
  }

  private async initARContext(): Promise<void> {
    // Create AR context
    this.arToolkitContext = new THREEx.ArToolkitContext({
      cameraParametersUrl: '/assets/img/camera_para.dat',
      detectionMode: 'mono'
    });
    await new Promise<void>(resolve => {
      this.arToolkitContext.init(() => {
        this.camera.projectionMatrix.copy(this.arToolkitContext.getProjectionMatrix());
        resolve();
      });
    });

    this.initMarker();
    this.animate();
  }


  private initMarker(): void {
    console.log(this.arToolkitContext, this.arToolkitContext.arController.camera);
    
    // Create marker
    this.arMarker = new THREEx.ArMarkerControls(this.arToolkitContext, this.arToolkitContext.arController.camera, {
      type: 'pattern',
      patternUrl: '/assets/patt.hiro',
      changeMatrixMode: 'cameraTransformMatrix'
    });
  }
  
  private animate(): void {
    this.ngZone.runOutsideAngular(() => {
      this.renderer.setAnimationLoop(() => {
        if (this.arToolkitSource.ready) {
          this.arToolkitContext.update(this.arToolkitSource.domElement);
          this.scene.visible = this.arToolkitContext.arController.camera.visible;
        }
        this.renderer.render(this.scene, this.arToolkitContext.arController.camera);
      });
    });
  }
}
