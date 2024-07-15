// export const getImageUrl = (path) => {
//   return new URL(`/assets/${path}`, import.meta.url).href;
// };
// Export the getImageUrl function so it can be used in other modules
export const getImageUrl = (path) => {
  // Create a new URL object using the relative path and the base URL of the current module
  // The relative path is constructed by concatenating '/assets/' with the provided path parameter
  // import.meta.url provides the URL of the current module, which acts as the base URL
  const url = new URL(`/assets/${path}`, import.meta.url);
  
  // Return the href property of the URL object, which is the full URL as a string
  return url.href;
};

// Example usage
//const imageUrl = getImageUrl('logo.png');
//console.log(imageUrl); // Logs the full URL to the console, e.g., http://localhost:3000/assets/logo.png (depending on your development server's URL)
