const getMusics = async (id) => {
  const request = await fetch(
    `https://itunes.apple.com/lookup?id=${id}&entity=song`
  );
  return request;
};

export default getMusics;
