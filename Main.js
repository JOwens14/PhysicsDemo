

window.onload = function() {
   //Main function
   var camera, scene, renderer;
   var mesh;

   init();
   animate();

   //End of Main

}



function init() {

  //Camera
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.z = 400;

  //Creates the Scene
  scene = new THREE.Scene();
  // Set scene background
  scene.background = new THREE.Color('skyblue');

  //Textures
  var loader = new THREE.TextureLoader();

  var material;

  // load a resource
loader.load(
    // resource URL
    'textures/crate.gif',
    // Function when resource is loaded
    function ( texture ) {
        // do something with the texture
        material = new THREE.MeshBasicMaterial( {
            map: texture
         } );
    },
    // Function called when download progresses
    function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    },
    // Function called when download errors
    function ( xhr ) {
        console.log( 'An error happened' );
        console.log(xhr);
    }
);



  //console.log(texture.image);
  //var material = new THREE.MeshBasicMaterial({map: texture});

  var geometry = new THREE.BoxBufferGeometry(100, 100, 100);

  mesh = new THREE.Mesh( geometry, material );

  scene.add(mesh);



  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

  requestAnimationFrame( animate );

  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;

  renderer.render( scene, camera );

}
