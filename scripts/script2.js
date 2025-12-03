import * as root from "https://unpkg.com/three@0.161.0/build/three.module.js";

console.error("three js imported");

const sc = new root.Scene();

const cam = new root.PerspectiveCamera(
    34, 
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
/* The camera needs some options as parameters:

the first option is the FOV (Field Of View) and is intended as degrees. We might choose an open angle of 180 degrees or a very close angle of 30 degrees, like photo lenses.
As Bruno experience, he recommends to stay in a range that goes from 40 degrees to a maximum of 70 degrees, so we will use an angle of 55 degrees.

the second required option is the aspect ratio: since we want to cover the whole background of our page, we will insert the width and the height of our viewport, and in JS we can retrieve these sizes with window.innerWidth and window.innerHeight.

TL/DR: The aspect ratio is just the width divided by the height. */
sc.add(cam);

/* This class automatically knows that it should create the cubes points once it receives its required parameters, which are the width, the height and the depth*/
const geo = new root.TorusGeometry(4, 1, 1000, 1000);

// Now it's time to add the material that our cube will use when it renders. For this first experiment we want our cube to be completely red. So we add the following:
const mat = new root.MeshNormalMaterial();

const mesh = new root.Mesh(geo, mat);
sc.add(mesh);

// We declare a renderer using the most common WebGL renderer, the "WebGLRenderer":
const rend = new root.WebGLRenderer({ antialias: true });



// Our renderer needs to know a size, and as we said before, we want our scene to take the full viewport width. So we can tell it to the renderer:
rend.setSize(window.innerWidth, window.innerHeight);

/*In order to see our scene, we now need to draw inside a canvas 🎨.
Looking at our renderer variable we can notice that our canvas is contained inside the domElement property. At this point we will let ThreeJS create our canvas and append it inside the <body> of the page; we can do it by adding the following line: */
document.body.appendChild(rend.domElement);

/*We still can't see the cube because we are inside the cube.

You may be wondering now: shouldn't I see everything red around me since the cube is red?
The answer is no: by default we cannot see the "inside" of the geometry. We can see the face, but not its reverse side.

So, now that we know the above, we should move the camera position outside of the cube. Moving up where we defined the camera variable, we add the following below that line:*/
cam.position.z = 30;
var ind = .01;
mesh.rotation.y = 0.5;
function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += ind;
    mesh.rotation.y += ind;
    mesh.rotation.z += ind;

    rend.render(sc, cam);

    console.log(ind);
    ind += .001;
}

animate();
