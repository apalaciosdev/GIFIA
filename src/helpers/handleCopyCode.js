
const handleCopyCode = (url_download) => {
  navigator.clipboard.writeText('<img class="gif-img" src="' + url_download + '"/>')

};

export default handleCopyCode;