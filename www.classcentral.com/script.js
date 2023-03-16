//report script
  const div1 = document.querySelector('[data-menu-dropdown="report"]');
  const div2 = document.querySelector('[data-name="BLANKET"]');
  const rbutton = document.querySelector('[data-name="NAV_DROPDOWN"]');

  rbutton.addEventListener('mouseover', function() {
    div1.classList.replace('animate-fade-hidden', 'animate-fade-entered');
    div2.classList.replace('animate-fade-hidden', 'animate-fade-entered');
  });

  rbutton.addEventListener('mouseout', function() {
    div1.classList.replace('animate-fade-entered', 'animate-fade-hidden');
    div2.classList.replace('animate-fade-entered', 'animate-fade-hidden');
  });


//button script
const but2 = document.querySelector('[aria-label="Close Lists menu"]');
const ibutton = document.querySelector('[aria-label="Your lists"]');
const div3 = document.querySelector('[data-menu-dropdown="lists"]');

ibutton.addEventListener('click', function() {
  but2.classList.replace('animate-fade-hidden', 'animate-fade-entered');
  ibutton.classList.replace('animate-fade-entered', 'animate-fade-hidden');
  div3.classList.replace('animate-fade-hidden', 'animate-fade-entered');
  div2.classList.replace('animate-fade-hidden', 'animate-fade-entered');
});

but2.addEventListener('click', function() {
  but2.classList.replace('animate-fade-entered', 'animate-fade-hidden');
  ibutton.classList.replace('animate-fade-hidden', 'animate-fade-entered');
  div3.classList.replace('animate-fade-entered', 'animate-fade-hidden');
  div2.classList.replace('animate-fade-entered', 'animate-fade-hidden');
});


//course script
  const nav1 = document.querySelector('.js-main-nav-dropdown');
  const div21 = document.querySelector('[data-name="BLANKET"]');
  const html_foot = document.querySelector('.sticky-footer');
  const cbutton = document.querySelector('[data-name="LARGE_UP_MAIN_NAV_TRIGGER"]');
  const cbutton_container = document.querySelector('[data-name="MAIN_NAV_TRIGGER_CONTAINER"]');

  cbutton.addEventListener('mouseover', function() {
    nav1.classList.add('is-open');
    html_foot.classList.add('nav-open')
    div21.classList.replace('animate-fade-hidden', 'xxx');
  });


  var divs = document.querySelectorAll("a[data-detail]");
  var currentDiv = null;

  divs.forEach(function(element , i)
  {
    var element = divs[i];
    
    if (element.getAttribute("data-detail").indexOf("\"childListId\"") !== -1)
    { 
      var data = JSON.parse(element.dataset.detail);
      var childListId = data.childListId;
      var div = document.querySelector(`[data-list-id="${childListId}"]`);
      
      element.addEventListener("mouseover", function() {
        // Change the class name of the currently hovered div back to the old class name
        if (currentDiv !== null) {
          currentDiv.classList.remove("is-selected");
          currentDiv.setAttribute('hidden','')
          nav1.classList.remove('has-visibile-subsection');
        }
        
        // Change the class name of the hovered div to the new class name
        div.classList.add('is-selected');
        div.removeAttribute('hidden')
        nav1.classList.add('has-visibile-subsection');
        //console.log(div);
        
        // Set the currently hovered div to this div
        currentDiv = div;
      });

    } 
});

  cbutton_container.addEventListener('mouseleave', function() {
    nav1.classList.remove('is-open');
    html_foot.classList.remove('nav-open')
    div21.classList.replace('xxx', 'animate-fade-hidden');
    // Change the class name of the currently hovered div back to the old class name
    if (currentDiv !== null) {
      currentDiv.classList.remove("is-selected");
      currentDiv.setAttribute('hidden','')
      nav1.classList.remove('has-visibile-subsection');
    }
  });

// lazy loading
function loadImage(element) {
  const src = element.getAttribute('data-src');
  if (!src) return;
  element.setAttribute('src', src);
  element.removeAttribute('data-src');
}

document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach((img) => {

    loadImage(img);
  });
});