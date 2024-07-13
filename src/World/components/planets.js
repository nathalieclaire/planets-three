import { SphereGeometry, MeshBasicMaterial, Mesh } from 'three';

function createPlanets() {
    const geometry1 = new SphereGeometry(10, 32, 16);
    const material1 = new MeshBasicMaterial({ color: 0xff66ff });
    const planet1 = new Mesh(geometry1, material1);
    planet1.position.set(-20, -20, 30);

    const geometry2 = new SphereGeometry(5, 32, 16);
    const material2 = new MeshBasicMaterial({ color: 0xffff66 });
    const planet2 = new Mesh(geometry2, material2);
    planet2.position.set(20, 20, 30);

    return { planet1, planet2 };
}

export { createPlanets };