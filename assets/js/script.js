// Form submission handler
function handleSubmit(event) {
    const submitButton = document.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    setTimeout(() => {
        alert('感谢您的留言！我们会尽快回复您。');
        document.querySelector('.contact-form').reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }, 1000);

    return true;
}

function toggleDetails(id) {
    const detail = document.getElementById(id);
    const allDetails = document.querySelectorAll('.app-details');

    allDetails.forEach(d => {
        if (d.id !== id) {
            d.classList.remove('active');
        }
    });

    detail.classList.toggle('active');
}


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Carousel
window.addEventListener("load", () => {
    const firstVideo = document.getElementById('carla-video');
    console.log(firstVideo)

    if (firstVideo) {
        setTimeout(() => {
            console.log('now');
            //firstVideo.play();
            firstVideo.play().catch(() => {
                console.log('fail')
            });
        }, 1000);

    }
});

// let currentSlide = 0;
// const track = document.getElementById('carouselTrack');
// const indicators = document.querySelectorAll('.indicator');
// const totalSlides = document.querySelectorAll('.carousel-item').length;

// function updateCarousel() {
//     track.style.transform = `translateX(-${currentSlide * 100}%)`;

//     indicators.forEach((indicator, index) => {
//         indicator.classList.toggle('active', index === currentSlide);
//     });
// }

// Carousel functionality
let currentSlide = 0;
const track = document.getElementById('carouselTrack');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = document.querySelectorAll('.carousel-item').length;

// Initialize carousel and videos
document.addEventListener('DOMContentLoaded', function () {
    const allCarouselVideos = document.querySelectorAll('.carousel-item video');

    console.log('Found', allCarouselVideos.length, 'videos');

    // Load all videos
    allCarouselVideos.forEach((video, index) => {
        console.log('Video', index, 'src:', video.querySelector('source')?.src);

        video.addEventListener('loadeddata', function () {
            console.log('Video', index, 'loaded successfully');
        });

        video.addEventListener('error', function (e) {
            console.error('Video', index, 'error:', e);
            console.error('Video src:', this.querySelector('source')?.src);
        });

        video.load();
    });

    // Initialize carousel to trigger the first video
    updateCarousel();
});

function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });

    // Play the current video and pause others
    const allVideos = document.querySelectorAll('.carousel-item video');
    allVideos.forEach((video, index) => {
        if (index === currentSlide) {
            video.play().catch(e => console.log('Video play prevented:', e));
        } else {
            video.pause();
        }
    });
}

function moveCarousel(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
    moveCarousel(1);
}, 10000);

// Capabilities Deep Dive functionality
let currentCapability = 0;
const capabilitiesTrack = document.getElementById('capabilitiesTrack');
const capabilityIndicators = document.querySelectorAll('.capability-indicator');
const totalCapabilities = document.querySelectorAll('.capability-slide').length;

function updateCapabilities() {
    capabilitiesTrack.style.transform = `translateX(-${currentCapability * 100}%)`;

    capabilityIndicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentCapability);
    });
}

function moveCapabilities(direction) {
    currentCapability += direction;

    if (currentCapability < 0) {
        currentCapability = totalCapabilities - 1;
    } else if (currentCapability >= totalCapabilities) {
        currentCapability = 0;
    }

    updateCapabilities();
}

function goToCapability(index) {
    currentCapability = index;
    updateCapabilities();
}
