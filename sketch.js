let shapeSize = 50;
let pts = [];
let pi = Math.PI;

let colors = ['#b5b991', '#cdd2a7', '#b7bc8f', '#e0e7bb', '#f8f2d2', '#f4ebc1',
'#e8e2b2', '#7c9289', '#a0b6ad', '#cfe5db', '#a1bbb0', '#b9d4c9', '#e1f0cd',
'#a4ba87', '#e2d7ab', '#80a289', '#8cad97', '#c9e3ce', '#bad9c1', '#bed1a2',
'#caddad', '#cddfb5', '#9fae87', '#738286', '#d9eaed', '#9db1b3', '#c1d5d5',
'#a9ccc9', '#9ebfbb', '#8faeaa', '#cfe8e7', '#748f8f'];

function setup() {
  createCanvas(700, 700);
  background(0);
  stroke(255);
  // strokeWeight(15);
  fill('orange');
  // addPointAndCheckNeighbors([0, 0]);
  pts.push([0,0]);
}

function draw() {
  translate(width/2, height/2);

  if (frameCount === 1) {
    for (let pt of pts){
      newPentiles(pt);
    }
  }
}

function pointOnCanvas(pt) {
  let x = pt[0];
  let y = pt[1];
  if (x >= -width/2 && x <= width/2 && y >= -width/2 && y <= width/2){
    return true;
  } else {
    return false;
  }
}

// function addPointAndCheckNeighbors(pt) {
//     if (visited.has(pt)) {
//         return;
//     } else if (pt[0] > width/2 || pt[0] < -width/2 || pt[1] > height/2 || pt[1] < -height/2){
//       return;
//     } else {
//       visited.add(pt);
//       pts.push(pt);
//       let neighbors = [];
//       neighbors[0] = [pt[0]+1.5*shapeSize, pt[1]-5*sqrt(3)/2*shapeSize];
//       neighbors[1] = [pt[0]+4.5*shapeSize, pt[1]-sqrt(3)/2*shapeSize];
//       neighbors[2] = [pt[0]+3*shapeSize, pt[1]+2*sqrt(3)*shapeSize];
//       neighbors[3] = [pt[0]-1.5*shapeSize, pt[1]+5*sqrt(3)/2*shapeSize];
//       neighbors[4] = [pt[0]-4.5*shapeSize, pt[1]+sqrt(3)/2*shapeSize];
//       neighbors[5] = [pt[0]-3*shapeSize, pt[1]-2*sqrt(3)*shapeSize];
//
//       for (let neighbor of neighbors){
//         if (pointOnCanvas(neighbor) && !visited.has(neighbor)){
//           addPointAndCheckNeighbors(neighbor)
//         }
//       }
//     }
// }

function newPentiles(pt) {
  push();
  translate(pt[0], pt[1]);

  for (let i = 0; i < 6; i++){
    newPentile(pt);
    rotate(pi/3);
  }
  pop();
}

function newPentile(pt) {
  let x = pt[0];
  let y = pt[1];

  fill(colors[Math.floor(random(0, colors.length-1))]);
  stroke(255);
  strokeWeight(2);
  beginShape();
  vertex(x,y);
  vertex(x-shapeSize, y-sqrt(3)*shapeSize);
  vertex(x-0.5*shapeSize, y-3*sqrt(3)*shapeSize/2);
  vertex(x+0.5*shapeSize, y-3*sqrt(3)*shapeSize/2);
  vertex(x+shapeSize, y-sqrt(3)*shapeSize);
  vertex(x,y);
  endShape();
  noStroke();

  // fill("white");
  // circle(x,y,shapeSize/3);
  // circle(x - 1 * shapeSize, y-sqrt(3)*shapeSize, shapeSize/3);
  // circle(x - 0.5 * shapeSize, y-3*sqrt(3)*shapeSize/2, shapeSize/3);
  // circle(x + 0.5 * shapeSize, y-3*sqrt(3)*shapeSize/2, shapeSize/3);
  // circle(x +1 * shapeSize, y-sqrt(3)*shapeSize, shapeSize/3);

  // let neighbor = [x+1.5*shapeSize, y-5*sqrt(3)/2*shapeSize];
  //
  // if (pointOnCanvas(neighbor) && pts.indexOf(neighbor) == -1){
  //   pts.push(neighbor);
  // }
}
