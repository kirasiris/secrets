const escapeRegex = string => {
  return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};
