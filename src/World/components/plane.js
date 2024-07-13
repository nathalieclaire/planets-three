import { PlaneGeometry, MeshStandardMaterial, Mesh, TextureLoader } from 'three';

function generateUniversePlane() {
    const imageURL = "textures/pexels-alberlan-barros-7311920.jpg";
    const texture = new TextureLoader().load(imageURL);

    const geometry = new PlaneGeometry(300, 200);
    const material = new MeshStandardMaterial({ map: texture });

    const plane = new Mesh(geometry, material);
    return plane;
}

export { generateUniversePlane };