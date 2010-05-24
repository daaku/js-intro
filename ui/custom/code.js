function formatCode(code) {
  // fixme
  return $.trim(code).replace(/^[ \t]{14}/mg, '');
}

$(function() {
  $('script[type=example]').each(function(index, el) {
    var
      pre = document.createElement('pre'),
      code = pre.appendChild(document.createElement('code'));
    pre.className = 'example-code';
    code.innerHTML = formatCode(el.innerHTML);
    $(pre).insertBefore(el);
  });
});
