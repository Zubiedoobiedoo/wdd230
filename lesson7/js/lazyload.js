let images = document.querySelectorAll('img[data-src]');
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px"
};
const observer = new IntersectionObserver((imgElements, observer) => {
    imgElements.forEach(image =>{
        if(!image.isIntersecting){
            return;
        } else{
            loadImage(image.target);
            observer.unobserve(image.target);
        }
    })
}, imgOptions);
const loadImage = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
images.forEach(image => {
    observer.observe(image);
})