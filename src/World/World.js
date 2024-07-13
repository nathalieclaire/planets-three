import { createCamera } from './components/camera.js';
import { createCube } from './components/cube_test.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { generateUniversePlane } from './components/plane.js'; 

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);
    const light = createLights();

    // Create and add the Mandelbrot plane to the scene
    const plane = generateUniversePlane();

    scene.add(plane, light);

    loop.updatables.push(controls);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
