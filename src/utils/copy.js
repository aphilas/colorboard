function fallback(text) {
  var textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position='fixed';  //avoid scrolling to bottom
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    // console.log(`Fallback: Copying text command was ` + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

function copy(text) {
  if (!navigator.clipboard) {
    fallback(text)
    return
  }

  navigator.clipboard.writeText(text).then(function() {
    // console.log(`Copied ${ text }`)
  }, function(err) {
    console.error('Could not copy text: ', err)
  });
}

export default copy