THREE.ImageUtils.crossOrigin = '';
var camera, scene, renderer, mesh;
var mouse, raycaster;

var sprites = [];
var mapFragments = [];

var INTERSECTED;

var isUserInteracting = false,
    onMouseDownMouseX = 0, onMouseDownMouseY = 0,
    lon = 0, onMouseDownLon = 0,
    lat = 0, onMouseDownLat = 0,
    phi = 0, theta = 0;

var arrows = [];
arrows["arrowUp"] = new THREE.TextureLoader().load("arrows/up.png");
arrows["arrowRight"] = new THREE.TextureLoader().load("arrows/right.png");
arrows["arrowLeft"] = new THREE.TextureLoader().load("arrows/left.png");

var radius = 500;
var widthSegments = 60;
var heightSegments = 40;

var geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
geometry.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));

var textureLoader = new THREE.TextureLoader();

init();
animate();

function init() {
    initMapFragments();
    var container;

    // sprites.material.color.setRGB(0, 10, 0);
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.target = new THREE.Vector3(0, 0, 0);

    scene = new THREE.Scene();

    var initialFragment = map["initialFragment"];
    goToFragment(mapFragments[initialFragment]);

    //scene.add(sprite, sprite1, sprite2, sprite3, sprite4, sprite5, sprite6, sprite7);
    //scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    /* we add the renderer element to our HTML document. This is a <canvas> element the renderer uses to display the scene to us*/
    container.appendChild(renderer.domElement);

    document.addEventListener('mousedown', onDocumentMouseDown, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('mouseup', onDocumentMouseUp, false);
    document.addEventListener('mousewheel', onDocumentMouseWheel, false);
    //document.addEventListener( 'DOMMouseScroll', onDocumentMouseWheel, false);

    document.addEventListener('dragover', function(event) {

        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';

    }, false);

    document.addEventListener('dragenter', function(event) {

        document.body.style.opacity = 0.5;

    }, false);

    document.addEventListener('dragleave', function(event) {

        document.body.style.opacity = 1;

    }, false);

    document.addEventListener('drop', function(event) {

        event.preventDefault();

        var reader = new FileReader();
        reader.addEventListener('load', function(event) {

            material.map.image.src = event.target.result;
            material.map.needsUpdate = true;

        }, false);
        reader.readAsDataURL(event.dataTransfer.files[0]);

        document.body.style.opacity = 1;

    }, false);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseDown(event) {

    event.preventDefault();
    isUserInteracting = true;

    onPointerDownPointerX = event.clientX;
    onPointerDownPointerY = event.clientY;

    onPointerDownLon = lon;
    onPointerDownLat = lat;

    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(sprites);

    var INTERSECTED;

    if (intersects.length > 0) {
        var inter = intersects[0].object.fragmentId;
        intersects[0].object.material.color.setRGB(1, 0, 1);
        if (mapFragments[inter] !== undefined)
            goToFragment(mapFragments[inter]);
    }
}

function onDocumentMouseMove(event) {

    if (isUserInteracting === true) {

        lon = (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
        lat = (event.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat;

    }

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function onDocumentMouseUp(event) {

    isUserInteracting = false;
}

function onDocumentMouseWheelStop() {
    
    if(event.wheelDeltaY && camera.fov == 30){
        camera.fov -= event.wheelDeltaY * -0.05; 
    }else if(event.wheelDeltaY && camera.fov == 108){
        camera.fov -= event.wheelDeltaY * -0.05; 
    }
}

function onDocumentMouseWheel(event) {

    // WebKit
    if (event.wheelDeltaY && camera.fov > 30 && camera.fov < 108) {
        camera.fov -= event.wheelDeltaY * 0.05;
        onDocumentMouseWheelStop();
    // Opera / Explorer 9
    } else if (event.wheelDelta && camera.fov > 30 && camera.fov < 108) {
        camera.fov -= event.wheelDelta * 0.05;
        onDocumentMouseWheelStop();
    // Firefox
    } else if (event.detail && camera.fov > 30 && camera.fov < 108) {
        camera.fov += event.detail * 0.05;
        onDocumentMouseWheelStop();
    }
    camera.updateProjectionMatrix();
}

function animate() {
    requestAnimationFrame(animate);
    update();
}

function initMapFragments() {
    for (var i = 0; i < map["map-fragments"].length; i++) {
        var fragment = map["map-fragments"][i];
        mapFragments[fragment["id"]] = {
            id: fragment["id"],
            description: fragment["description"],
            transitions: fragment["transitions"],
            URL: 'panoramas/' + fragment["id"] + '.jpg'
        };
    }
}
function clearSprites(){

    for (var i = 0; i < sprites.length; i++) {
        scene.remove(sprites[i]);
    }
    sprites.length = 0;
}
function goToFragment(fragment) {

    textureLoader.load(
        // resource URL
        fragment.URL,
        
        // Function when resource is loaded
        function(texture) {
            clearSprites();
            var material = new THREE.MeshBasicMaterial({
                map: texture
            });
            mesh = new THREE.Mesh(geometry, material);
            for (i = 0; i < fragment.transitions.length; i++) {
                var t = fragment.transitions[i];
                
                var sprite = new THREE.Sprite(
                    new THREE.SpriteMaterial({
                        map: arrows[t.arrowType],
                        color: 0x4CAF50,
                        fog: false
                    }));
                sprite.position.set(
                    t.position[0],
                    t.position[1],
                    t.position[2]
                );

                sprite.scale.set(t.scale, t.scale, t.scale);
                sprite.fragmentId = t.fragmentId;
                sprites.push(sprite);
                scene.add(sprite);
            }
            scene.add(mesh);

        },
        // Function called when download progresses
        function(xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        // Function called when download errors
        function(xhr) {
            console.log('An error happened');
        }
    );

}

function update() {
    /*if ( isUserInteracting === false) {
  
      lon += 5.0; //for auto rotation
  
    }*/

    lat = Math.max(- 85, Math.min(85, lat));
    phi = THREE.Math.degToRad(90 - lat);
    theta = THREE.Math.degToRad(lon);

    camera.target.x = Math.sin(phi) * Math.cos(theta);
    camera.target.y = Math.cos(phi);
    camera.target.z = Math.sin(phi) * Math.sin(theta);

    camera.lookAt(camera.target);
    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(sprites);
    if (intersects.length > 0) {

        if (INTERSECTED != intersects[0].object) {

            INTERSECTED = intersects[0].object;
            if (INTERSECTED) {
                INTERSECTED.material.color.setRGB(3.0, 142.0, 0.0);
            }
        }
    }
    else {
        if (INTERSECTED) { INTERSECTED.material.color.setRGB(0, 0, 0); }
        INTERSECTED = null;
    }

        renderer.render(scene, camera);
}
