import { SphereGeometry, MeshStandardMaterial, Mesh, TextureLoader } from 'three';

function createPlanets() {
    const geometry1 = new SphereGeometry(20, 32, 16);
    const texture1 = new TextureLoader().load("textures/2k_mars.jpg");
    const material1 = new MeshStandardMaterial({ map: texture1 });
    const planet1 = new Mesh(geometry1, material1);
    planet1.position.set(-20, 10, 30);

    const geometry2 = new SphereGeometry(15, 32, 16); // er hier bejommt noch n ring
    const texture2 = new TextureLoader().load("textures/2k_neptune.jpg");
    const material2 = new MeshStandardMaterial({ map: texture2 });
    const planet2 = new Mesh(geometry2, material2);
    planet2.position.set(30, -30, 30);

    const geometry3 = new SphereGeometry(14, 32, 16);
    // const texture3 = new TextureLoader().load("textures/2k_sun.jpg");
    const material3 = new MeshStandardMaterial({ color:0xff90f2 });
    const planet3 = new Mesh(geometry3, material3);
    planet3.position.set(35, 50, 30);

    const geometry4 = new SphereGeometry(13, 32, 16);
    const texture4 = new TextureLoader().load("textures/2k_venus_surface.jpg");
    const material4 = new MeshStandardMaterial({ map: texture4 });
    const planet4 = new Mesh(geometry4, material4);
    planet4.position.set(-90, -40, 30);

    const geometry5 = new SphereGeometry(27, 32, 16);
    const texture5 = new TextureLoader().load("textures/2k_saturn.jpg");
    const material5 = new MeshStandardMaterial({ map: texture5 });
    const planet5 = new Mesh(geometry5, material5);
    planet5.position.set(100, 0, 30);

    const geometry6 = new SphereGeometry(30, 32, 16);
    // const texture6 = new TextureLoader().load("textures/2k_saturn.jpg");
    const material6 = new MeshStandardMaterial({ color: 0x8844ff });
    const planet6 = new Mesh(geometry6, material6);
    planet6.position.set(-85, 50, 30);

    const geometry7 = new SphereGeometry(23, 32, 16);
    // const texture6 = new TextureLoader().load("textures/2k_saturn.jpg");
    const material7 = new MeshStandardMaterial({ color: 0x99ffcc });
    const planet7 = new Mesh(geometry7, material7);
    planet7.position.set(-40, -70, 30);

    return { planet1, planet2, planet3, planet4, planet5, planet6, planet7 };
}

export { createPlanets };