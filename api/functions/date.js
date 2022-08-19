const generateDateTime = () => {
    const Today = new Date();
    const options = {
      // year: "numeric",
      month: "short",
      day: "numeric",
    };
    return Today.toLocaleDateString("en-UK", options);
  };
  export default generateDateTime