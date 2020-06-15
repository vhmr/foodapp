export default function apiCall() {
  const url = "http://tutofox.com/foodapp/api.json";
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      const { data } = responseJson;
      const datapi = data.map((image) => {
        isLoading: false;
        Banner: data.banner;
        return datapi;
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
