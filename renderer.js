export function onLoad() {
  const interval = setInterval(() => {
    const element = document.querySelector("#app > div.container > aside > div.sidebar__upper > div.nav.sidebar__nav > div:nth-child(3)");
    if (element) {
      element.parentNode.removeChild(element);
      clearInterval(interval);
    }
  }, 1);
}
