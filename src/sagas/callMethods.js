export const loginRequest = (data) => {
  return {
    url: "https://demo-api.it-shatle.by/auth/signIn",
    method: "post",
    data,
  };
};
