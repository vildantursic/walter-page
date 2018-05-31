export function parseData (data) {
  let element = document.createElement("div");
  if (Array.isArray(data)) {
    data.forEach(el => {
      if (el.hasOwnProperty('title')) {
        element.innerHTML = el.title.rendered;
        el.title.rendered = element.innerHTML;
      }
    })
  } else {
    if (data.hasOwnProperty('title')) {
      element.innerHTML = data.title.rendered;
      data.title.rendered = element.innerHTML;
    }
  }

  return data;
}
