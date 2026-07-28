export function reveal(node: HTMLElement) {
  node.classList.add('reveal');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('revealed');
        observer.disconnect();
      }
    },
    { threshold: 0.12 }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
