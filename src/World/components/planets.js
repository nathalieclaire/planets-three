import { SphereGeometry, MeshBasicMaterial, Mesh } from 'three';

function createPlanets() {
    const geometry = new SphereGeometry(1, 32, 16);
    const material = new MeshBasicMaterial({ color: 0xff66ff });
    const planet = new Mesh(geometry, material);
    planet.position.set(0, 0, 3);
    return planet;
}

export { createPlanets };