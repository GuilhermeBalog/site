const jobTitleVariants = [
  'de Software',
  'Web',
  'Front-end',
  'Back-end',
];

const variantsEl = document.querySelector('.hero-section__job-title-variant');

/**
 * @param {string[]} variants
 * @param {HTMLElement} el
 * @param {number} timing
 */
function animateJobTitle(variants, el, timing) {
  let i = 0;
  setInterval(() => {
    i = (i + 1) % variants.length;
    el.innerHTML = variants[i];
  }, timing);
}

animateJobTitle(jobTitleVariants, variantsEl, 1500);
