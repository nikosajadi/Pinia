export default defineNuxtRouteMiddleware((to, from) => {
  const my_token = useCookie("token");

  if (!my_token.value) {
    return navigateTo("/practice1/login");
  }
});
