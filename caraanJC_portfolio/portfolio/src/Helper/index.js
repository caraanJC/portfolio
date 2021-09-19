export const scrollToElement = (id) => {
  const el = document.getElementById(id);

  el?.scrollIntoView();
};
