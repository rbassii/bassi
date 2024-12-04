document.addEventListener("DOMContentLoaded", function() {
  const metas = document.getElementsByTagName('meta');

  if (navigator.userAgent.match(/iPhone/i)) {
    Array.from(metas).forEach(meta => {
      if (meta.name === "viewport") {
        meta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      }
    });

    document.addEventListener("gesturestart", function() {
      Array.from(metas).forEach(meta => {
        if (meta.name === "viewport") {
          meta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
        }
      });
    }, false);
  }
});
