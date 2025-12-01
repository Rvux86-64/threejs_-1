import * as root from 'three';
const scene = new root.Scene();
const camera = new root.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const rend = new root.WebGLRenderer();
rend.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rend.domElement);
const geometry = new root.BoxGeometry(1, 1, 1);
const material = new root.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new root.Mesh(geometry, material);
scene.add(cube);
function animate()
{
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  rend.render(scene, camera);
}
animate();
