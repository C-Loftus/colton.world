
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene.add(camera);

function random(min, max) {
	return (Math.random() * (max - min) ) + min;
  }
// #################################


const geometry = new THREE.CylinderGeometry(5, 5, 20, 6);
 
const material = new THREE.MeshPhongMaterial({
	color:0xD3D3D3 ,
	polygonOffset: true,
	polygonOffsetFactor: 1, // positive value pushes polygon further away
	polygonOffsetUnits: 1
});

let list = [];
for (let i = 0; i < 5; i++) {
	let cylinder = new THREE.Mesh(geometry, material);
	scene.add(cylinder);
	cylinder.rotation.x = Math.PI / 2;
	cylinder.rotation.y = random(0, 1)
	let direction = cylinder.position.clone().sub(camera.position).normalize();
	cylinder.position.add(direction.clone().multiplyScalar(random(0, 10)));
	list.push(cylinder);
}
camera.position.z = 30;
var max = true;
function animate() {
	requestAnimationFrame(animate);

	for (let cylinder of list) {
	var direction = cylinder.position.clone().sub(camera.position).normalize();
	cylinder.position.add(direction.clone().multiplyScalar(random(0, 1)));
	if (max) {
		cylinder.rotation.z += 0.01;
		console.log(cylinder.rotation.z)
		if (cylinder.rotation.z >= .7) {
			max = false;
		}
	}
	else {
		cylinder.rotation.z -= 0.01;
		console.log(cylinder.rotation.z)
		if (cylinder.rotation.z <= 0) {
			max = true;
		}
	} 

	cylinder.rotation.z = cylinder.rotation.z + .1 % .3;
	} 
	
	renderer.render(scene, camera);
};

animate();




















// var test = new THREE.MeshPhongMaterial({
// 	color: 0xff0000,
// 	polygonOffset: true,
// 	polygonOffsetFactor: 1, // positive value pushes polygon further away
// 	polygonOffsetUnits: 1
// });
// var mesh = new THREE.Mesh(geometry, test);
// // scene.add( mesh )

// wireframe
// var geo = new THREE.EdgesGeometry(mesh.geometry); // or WireframeGeometry
// var mat = new THREE.LineBasicMaterial({ color: 0xffffff });
// var wireframe = new THREE.LineSegments(geo, mat);
// mesh.add(wireframe);