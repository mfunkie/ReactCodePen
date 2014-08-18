
if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', runScripts, false);
} else {
  window.attachEvent('onload', runScripts);
}

function runScripts() {
  Array.prototype.forEach.call(document.querySelectorAll('body script:not([src])'), function(element) {
    element.setAttribute('type', 'text/jsx');    
  });
};
