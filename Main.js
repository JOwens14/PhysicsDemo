// @Author Jacob Owens

//onWindowLoad - Start
window.onload = function() {
   //Main function
   var camera, scene, renderer;
   var world, player, entities;
   var keyboard;

   init();
   animate();
   //End of Main
}



function init() {
  //Camera
  camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 3000 ); //last var is draw distance

  //Creates the Scene
  scene = new THREE.Scene();
  // Set scene background
  scene.background = new THREE.Color('black');

  //entities list creation
  entities = [];
  //world creation
  world = new World(2500,2500);
  //player creation
  player = new Player();
  //keyboard input creation
  keyboard = new Keyboard(player);


  //creates a single box
  box1 = new Box(100, 100, 100);
  entities.push(box1);


  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth - 80, window.innerHeight - 45 ); //reduce render size by 16:9 ratio to fit whole render on a 16:9 screen naturally, without full screen
  document.body.appendChild( renderer.domElement );

  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

  requestAnimationFrame(animate);

  keyboard.Update();
  player.Update();
  // for each entity, update
  entities.forEach(entity => {
        //console.log(entity);
        entity.Update(this);
      });

  renderer.render( scene, camera );

}
