const maps = document.getElementById("maps");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

const iframs = ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27015.301340738803!2d34.941357979428666!3d32.17962965404427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d39b32151955f%3A0x8e50c5f354fa376a!2z15vXpNeoINeh15HXkA!5e0!3m2!1siw!2sil!4v1693088819557!5m2!1siw!2sil", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.7782449414!2d2.429435809929554!3d48.85893843508712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2z16TXqNeZ15YsINem16jXpNeq!5e0!3m2!1siw!2sil!4v1693109714260!5m2!1siw!2sil", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190028.3544254063!2d12.700807807663267!3d41.91020879225648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2z16jXldee15AsINeQ15nXmNec15nXlA!5e0!3m2!1siw!2sil!4v1693109827384!5m2!1siw!2sil", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.36595585!2d-6.080897037979562!3d53.32441163046791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2z15PXkdec15nXnywg15DXmdeo15zXoNeT!5e0!3m2!1siw!2sil!4v1693109883363!5m2!1siw!2sil"];

let currentIndex = 0;
previous.style.visibility = 'hidden';

previous.addEventListener('click', () => {
    currentIndex = (currentIndex - 1);
    updateMap();
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1);
    updateMap();
});

function updateMap() {
    const iframe = maps.querySelector('#current-map');
    iframe.src = iframs[currentIndex];
    iframe.classList.remove();

    if (currentIndex == iframs.length - 1) {
        next.style.visibility = 'hidden';
    }
    else {
        next.style.visibility = 'visible';
    }

    if (currentIndex == 0) {
        previous.style.visibility = 'hidden';
    }
    else {
        previous.style.visibility = 'visible';
    }
};