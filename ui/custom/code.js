function extractCode(code) {
  // fixme
  return $.trim(code).replace(/^[ \t]{14}/mg, '');
}

$(function() {
  $('script[type=example]').each(function(index, el) {
    var
      code = extractCode(el.innerHTML),
      div = document.createElement('div'),
      button = div.appendChild(document.createElement('button')),
      pre = div.appendChild(document.createElement('pre')),
      codeEl = pre.appendChild(document.createElement('code'));
    div.className = 'example-code';
    button.className = 'run-example';
    button.innerHTML = 'Run';
    $(button).click(function(ev) {
      eval(code);
      ev.preventDefault();
      return false;
    });
    if (!$(el).hasClass('runnable')) {
      $(button).css('display', 'none');
    }
    codeEl.innerHTML = code;
    $(div).insertBefore(el);
  });
});
