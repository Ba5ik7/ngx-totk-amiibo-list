import { Injectable, NgZone } from '@angular/core';
import * as THREE from 'three';
import { THREEx } from '@ar-js-org/ar.js-threejs';
import { ArToolkitSource } from '@ar-js-org/ar.js-threejs/types/ArToolkitSource';
import { ArToolkitContext } from '@ar-js-org/ar.js-threejs/types/ArToolkitContext';
import { ArMarkerControls } from '@ar-js-org/ar.js-threejs/types/ArMarkerControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
@Injectable({
  providedIn: 'root'
})
export class ArService {
  error = '';
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.Camera;
  private arToolkitSource!: ArToolkitSource; 
  private arToolkitContext!: ArToolkitContext; 
  private arMarker!: ArMarkerControls;
  private resizeListener!: () => void;

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
    this.renderer.setSize(390, 640);
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = '96px';
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
      sourceWidth: 390,
      sourceHeight: 640,
      displayWidth: 390,
      displayHeight : 640
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
      });``

      // this.onResize();
      // setTimeout(() => {
      //   this.onResize();
      // }, 2000);
    }, () => { console.log('error') });

    this.resizeListener = () => {
      this.onResize();
    };
    window.addEventListener('resize', this.resizeListener);
  }

  private onResize() {
    this.arToolkitSource.onResizeElement();
    this.arToolkitSource.copyElementSizeTo(this.renderer.domElement);
    if (this.arToolkitContext.arController !== null) {
      this.arToolkitSource.copyElementSizeTo(this.arToolkitContext.arController.canvas);
    }
  }

  private initArToolkitContext() {
    this.arToolkitContext = new THREEx.ArToolkitContext({
      cameraParametersUrl: 'assets/img/camera_para.dat',
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
      patternUrl: '/assets/img/Link-SSB.patt',
      changeMatrixMode: 'cameraTransformMatrix'
    });



    this.scene.visible = false;

    const video = document.getElementById('arjs-video');
    video?.style.setProperty('top', '96px');

    this.createObjects();
    this.animate();
  }

  private createObjects() {
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshNormalMaterial({
    //   transparent: true,
    //   opacity: 0.5,
    //   side: THREE.DoubleSide
    // });
    // const mesh = new THREE.Mesh(geometry, material);
    // mesh.position.y = geometry.parameters.height / 2;
    // this.scene.add(mesh);

    var loader = new GLTFLoader();

    loader.load(
      // URL to the GLB/GLTF file
      'assets/img/mario_3d_scan.glb',
      // 'assets/img/amiibo_zelda_twilight_princess.glb',
      // called when the resource is loaded
      (gltf) => {
        gltf.scene.scale.set(30, 30, 30);
        gltf.scene.rotation.y = 140;
        this.scene.add(gltf.scene);
      },
      // called while loading is progressing
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      // called when loading has errors
      (error) => {
        console.log('An error happened:', error);
      }
    );
    
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

  dispose() {
    // remove the event listener when cleaning up
    if(this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }

    // Cleanup THREE.js and AR.js
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
    }

    if (this.scene) {
      while(this.scene.children.length > 0){ 
        const object = this.scene.children[0]; 
        object.parent?.remove(object); 
      }
      this.scene.remove(this.camera);
    }

    if (this.arToolkitSource) {
      this.arToolkitSource.domElement = null;
    }

    if (this.arToolkitContext) {
      this.arToolkitContext.arController = null;
    }

    if (this.arMarker) {
      this.arMarker.dispose();
    }

    // Remove this dom element from the body #arjs-video
    const video = document.getElementById('arjs-video');
    if (video) {
      video.remove();
    }
    // Remove this dom element from the body canvas
    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.remove();
    }

  }
}
