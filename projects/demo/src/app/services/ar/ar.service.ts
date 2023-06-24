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
    // this.initThree(container);
    this.initAr(container);
  }

  initAr(container: HTMLElement) {

    this.ngZone.runOutsideAngular(() => {
      this.initRenderer();
      this.initSceneAndCamera(container);
      this.initArToolkitSource();
    });
  }

  private initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    this.renderer.setClearColor(new THREE.Color('lightgrey'), 0);
    this.renderer.setSize(640, 480);
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = '0px';
    this.renderer.domElement.style.left = '0px';
    document.body.appendChild(this.renderer.domElement);
  }

  private initSceneAndCamera(container: HTMLElement) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    this.scene.add(this.camera);
  }

  private initArToolkitSource() {
    this.arToolkitSource = new THREEx.ArToolkitSource({
      sourceType: 'webcam',
      sourceWidth: window.innerWidth > window.innerHeight ? 640 : 480,
      sourceHeight: window.innerWidth > window.innerHeight ? 480 : 640,
    });

    this.arToolkitSource.init(() => {
      this.arToolkitSource.domElement.addEventListener('canplay', () => {
        console.log(
          'canplay',
          'actual source dimensions',
          this.arToolkitSource.domElement.videoWidth,
          this.arToolkitSource.domElement.videoHeight
        );
  
        this.initArToolkitContext();
      });

      // setTimeout(() => {
      //   this.onResize();
      // }, 2000);
    }, () => { console.log('error') });

    // window.addEventListener('resize', () => {
    //   this.onResize();
    // });
  }

  // private onResize() {
  //   this.arToolkitSource.onResizeElement();
  //   this.arToolkitSource.copyElementSizeTo(this.renderer.domElement);
  //   if (this.arToolkitContext.arController !== null) {
  //     this.arToolkitSource.copyElementSizeTo(this.arToolkitContext.arController.canvas);
  //   }
  // }

  private initArToolkitContext() {
    this.arToolkitContext = new THREEx.ArToolkitContext({
      cameraParametersUrl: '/assets/img/camera_para.dat',
      detectionMode: 'mono'
    });

    this.arToolkitContext.init(() => {
      this.camera.projectionMatrix.copy(this.arToolkitContext.getProjectionMatrix());

      this.arToolkitContext.arController.orientation = this.getSourceOrientation();
      this.arToolkitContext.arController.options.orientation = this.getSourceOrientation();

      this.initMarker();
    });
  }

  private getSourceOrientation() {
    if (!this.arToolkitSource) {
      return null;
    }

    if (this.arToolkitSource.domElement.videoWidth > this.arToolkitSource.domElement.videoHeight) {
      return 'landscape';
    } else {
      return 'portrait';
    }
  }

  private initMarker() {
    this.arMarker = new THREEx.ArMarkerControls(this.arToolkitContext, this.camera, {
      type: 'pattern',
      patternUrl: '/assets/img/patt.hiro',
      changeMatrixMode: 'cameraTransformMatrix'
    });

    this.scene.visible = false;

    this.createObjects();
    this.animate();
  }

  private createObjects() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial({
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = geometry.parameters.height / 2;
    this.scene.add(mesh);
  }

  private animate() {
    requestAnimationFrame(() => {
      this.animate();
    });

    if (!this.arToolkitContext || !this.arToolkitSource || !this.arToolkitSource.ready) {
      return;
    }

    this.arToolkitContext.update(this.arToolkitSource.domElement);
    this.scene.visible = this.camera.visible;

    this.renderer.render(this.scene, this.camera);
  }
}
