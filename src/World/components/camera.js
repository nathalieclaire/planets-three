import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    5, // near clipping plane
    200, // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 20);

  return camera;
}

export { createCamera };
