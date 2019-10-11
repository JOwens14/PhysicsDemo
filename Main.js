

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

  scene.background = new THREE.Color('white');

  var texture = new THREE.TextureLoader().load('./textures/crate.gif');

  var material = new THREE.MeshBasicMaterial({map: texture});

  var geometry = new THREE.BoxBufferGeometry(100, 100, 100);

  var material = new THREE.MeshBasicMaterial( { map: texture} );

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
