console.log(document.querySelectorAll('body script:not([src])'));
Array.prototype.forEach.call(document.querySelectorAll('body script:not([src])'), function(element) {
  element.attributes.type = 'text/jsx';
});
