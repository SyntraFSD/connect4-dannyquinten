const newSlider = document.querySelector('.super-slider');


function slide (ssSlide, bullets, width, index) {

  // make the image slide:
  // change index of ssSlide
  // change left of ssSlide
  // set active class on correct .ss-bullet

  ssSlide.style.left = -(width * index) + 'px';
  ssSlide.dataset.index = index;
  for (let i = 0; i < bullets.children.length; i++) {
    const bullet = bullets.children[i];
    if (parseInt(bullet.dataset.index) === index) {
      bullet.classList.add('active');
    }
    else {
      bullet.classList.remove('active');
    }
  }

}
function resizeImg(imgElement, containerWidth) {
  // set imgElement.syle.width and -height
  // set imgElement.width
  // set imgElement.height
  const originalWidth = imgElement.width;
  const originalHeight = imgElement.height;
  imgElement.style.width = containerWidth + 'px';
  imgElement.style.height = (containerWidth * originalHeight / originalWidth) + 'px';

}
function resizeImages(element, containerWidth ) {
  // resizeImg for all images
  // return images
  // loop all image
  const images = element.querySelectorAll("img");
  for (let i=0; i<images.length; i++){
    // or images.forEach(function(img))
    let img = images[i];
    resizeImg(img, containerWidth);
  }
  return images;
}
function makeSsSlide(element, images) {
  const ssSlide = document.createElement("div");
  ssSlide.classList.add('ss-slide');
  ssSlide.dataset.index ='0';
  ssSlide.style.width = (element.clientWidth * images.length) + 'px';
  for (let i=0; i < images.length; i++){
    const image = images[i];
    ssSlide.appendChild(image);
  }
  ssSlide.style.width = (element.clientWidth * images.length) +'px';
  return ssSlide;
}
function makeArrow(leftRight) {
  const arrow = document.createElement("div");
  arrow.classList.add('ss-arrow', 'ss-' + leftRight);
  arrow.innerHTML  = '<i class = "fas fa-angle-' + leftRight + ' fa-5x"> </i>';
  return arrow;
}
function makeBullets(count) {
  const bulletContainer = document.createElement('div');
  bulletContainer.classList.add('ss-bullets');
  for (let i = 0; i < count; i++) {
    const bullet = document.createElement('div');
    bullet.classList.add('ss-bullet');
    if (i === 0) {
      bullet.classList.add('active');
    }
    bullet.dataset.index = i;
    bulletContainer.appendChild(bullet);
  }
  return bulletContainer;
}

/**
 * @param element {Element}
 */
function init(element) {
  element.classList.remove('loading');
  const containerWidth = element.clientWidth;
  const images = resizeImages(element, containerWidth);
  const ssSlide = element.appendChild(makeSsSlide(element, images));
  const leftArrow = element.appendChild(makeArrow('left'));
  const rightArrow = element.appendChild(makeArrow('right'));
  const bullets = element.appendChild(makeBullets(images.length));
  // const ssSlide = element.appendChild(makeSsSlide(element, images));

  leftArrow.addEventListener('click', function () {
    if (parseInt(ssSlide.dataset.index) > 0) {
      const newIndex = parseInt(ssSlide.dataset.index) - 1;
      console.log(ssSlide.dataset.index);
      slide(ssSlide, bullets, containerWidth, newIndex);
    } else {
      slide(ssSlide, bullets, containerWidth, images.length - 1);
    }
  });

  rightArrow.addEventListener('click', function () {
    if (parseInt(ssSlide.dataset.index) < images.length - 1) {
      const newIndex = parseInt(ssSlide.dataset.index) + 1;
      console.log(ssSlide.dataset.index);
      slide(ssSlide, bullets, containerWidth, newIndex);
    } else {
      slide(ssSlide, bullets, containerWidth, 0);
    }
  });


  bullets.addEventListener('click', function (event) {
    console.log(event.target);
    if (event.target.matches('.ss-bullet')) {
      slide(ssSlide, bullets, containerWidth, parseInt(event.target.dataset.index));
    }
  });
}
/**
 * @param element {Element}
 */
function preLoad(element) {
  // add loading icon when images are still loading
  // no need to edit
  element.classList.add('ss-container', 'loading');
}

/**
 * @param element {Element}
 */
function superSlider(element) {
  // checks if all images are loaded then initiates superSlider
  // no need to edit
  preLoad(element);
  const images = element.querySelectorAll('img');
  let imagesLoaded = 0;
  images.forEach(function (img) {
    if (img.complete) {
      imagesLoaded++;
      if (imagesLoaded === images.length) {
        init(element);
      }
    } else {
      img.addEventListener('load', function () {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          init(element);
        }
      });
    }
  });
}


document.addEventListener('DOMContentLoaded', function () {
  superSlider(newSlider);
});