export const useGoogleReviews = async () => {
  const { data } = await useFetch("../api/googleReviews");
  return data;
};
