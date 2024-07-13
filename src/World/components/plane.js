import { PlaneGeometry, MeshBasicMaterial, Mesh } from 'three';

function generateUniversePlane() {
    const width = 1024;
    const height = 1024;
    const geometry = new PlaneGeometry(10, 10);
    const material = new MeshBasicMaterial({ color: 0x6600ff });
    const plane = new Mesh(geometry, material);
    return plane;
}

export { generateUniversePlane };