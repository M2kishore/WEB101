let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let loadImage = (src, callback) => {
  let img = document.createElement("img");
  img.onload = () => callback(img);
  img.src = src;
};
let imagePath = (frameNumber, animation) => {
  return "./images/" + animation + "/" + frameNumber + ".png";
};

let frames = {
  idle: [1, 2, 3, 4, 5, 6, 7, 8],
  kick: [1, 2, 3, 4, 5, 6, 7],
  punch: [1, 2, 3, 4, 5, 5, 6, 7],
};

let loadImages = (callback) => {
  //callback an array of images
  let images = {
    idle: [],
    kick: [],
    punch: [],
  };
  let imagesToLoad = 0;
  ["idle", "kick", "punch"].forEach((animation) => {
    let animationFrames = frames[animation];
    imagesToLoad += animationFrames.length;

    animationFrames.forEach((frameNumber) => {
      let path = imagePath(frameNumber, animation);
      loadImage(path, (image) => {
        images[animation][frameNumber - 1] = image;
        imagesToLoad -= 1;
        if (imagesToLoad === 0) {
          callback(images);
        }
      });
    });
  });
};

let animate = (ctx, images, animation, callback) => {
  images[animation].forEach((image, index) => {
    setTimeout(() => {
      ctx.clearRect(0, 0, 500, 500);
      ctx.drawImage(image, 0, 0, 500, 500);
    }, index * 100);
  });
  setTimeout(callback, images[animation].length * 100);
};

loadImages((images) => {
  let queueAnimation = [];
  let aux = () => {
    let selectedAnimation;
    if (queueAnimation.length === 0) {
      selectedAnimation = "idle";
    } else {
      selectedAnimation = queueAnimation.shift();
    }
    animate(ctx, images, selectedAnimation, aux);
  };
  aux();
  document.getElementById("btn_kick").onclick = () => {
    queueAnimation.push("kick");
  };
  document.getElementById("btn_punch").onclick = () => {
    queueAnimation.push("punch");
  };

  document.addEventListener("keyup", function (event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    switch (key) {
      case "ArrowRight":
        queueAnimation.push("punch");
        break;
      case "ArrowLeft":
        queueAnimation.push("kick");
        break;
    }
  });
});