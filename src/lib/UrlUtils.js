export const isValidUrl = url => {
  if (!url) return false;
  return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
    url
  );
};

export const getDirectLink = url => {
  const matches = url.match(/(id=|d\/)([^\/]+)(\/|$)/);
  if (matches && matches.length > 2)
    return `https://docs.google.com/uc?export=download&id=${matches[2]}`;
  return null;
};
