import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'


const scene = new THREE.Scene();
const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load('./static/normal-map.png')
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#the-canvas')
})
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
const geometry = new THREE.OctahedronGeometry(10, 0);
const material = new THREE.MeshStandardMaterial();
material.normalMap = normalTexture;
material.color = new THREE.Color(0x0099e6);
const octahedron = new THREE.Mesh( geometry, material);
scene.add(octahedron);
camera.position.setZ(30);
const PointL = new THREE.PointLight(0xffffff);
PointL.position.set(10,10,1);
scene.add(PointL);

const PointL2 = new THREE.PointLight(0xff6666);
PointL2.position.set(-2,-5,1);
scene.add(PointL2);

const PointL3 = new THREE.PointLight(0xffffff);
PointL3.position.set(-2,10,1);
scene.add(PointL3);

window.onresize = function(event) {
  camera.aspect = window.innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
};

function animate(){
  requestAnimationFrame( animate );
  renderer.render(scene, camera);
  octahedron.rotation.x +=0.01;
  octahedron.rotation.y +=0.001;
  octahedron.rotation.z +=0.001;
}
animate()
