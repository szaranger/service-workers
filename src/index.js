if ('serviceWorker' in navigator) {
  console.log('CLIENT: registration in progress.');
  navigator.serviceWorker.register('service-worker.js').then(function() {
    console.log('CLIENT: registration complete.');
  }, function(err) {
    console.log('CLIENT: registration failure - ' + err);
  });
}
