function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri === '/home' || uri === '/home/') {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: { location: { value: '/' } }
    };
  }

  if (uri === '/') {
    request.uri = '/index.html';
  } else if (uri.endsWith('/')) {
    request.uri += 'index.html';
  } else if (!uri.split('/').pop().includes('.')) {
    request.uri += '/index.html';
  }

  return request;
}
