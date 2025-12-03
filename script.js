 import * as root from "https://unpkg.com/three@0.161.0/build/three.module.js";
            const sc = new root.Scene();
            sc.background = new root.Color(0xFF0000);
            const cam = new root.PerspectiveCamera(70, window.innerWidth / window.innerHeight, .1, 1000);
            sc.add(cam);
            const mat = new root.MeshNormalMaterial();
            const geo = new root.TorusGeometry(5, 1, 1000, 1000);
            const mesh = new root.Mesh(geo, mat);
            const input = document.getElementById("in");
            sc.add(mesh);
            const rend = new root.WebGLRenderer();
            rend.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(rend.domElement);
            cam.position.z = 30;
            function animate(){
                requestAnimationFrame(animate);
                mesh.rotation.x += .1;
                mesh.rotation.y += .1;
                mesh.rotation.z += .1;
                cam.position.z = parseInt(input.value);
                rend.render(sc, cam);
            }
            animate();
