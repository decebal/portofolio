const baseURL = "decebaldobrica.com";

const routes = {
  "/": true,
  "/about": true,
  "/work": false,
  "/blog": false,
  "/gallery": true,
};

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {};

const effects = {
  gradient: true,
  dots: true,
  lines: false,
};

const style = {
  theme: "dark", // dark | light
  neutral: "slate", // sand | gray | slate
  brand: "aqua", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "moss", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast
  solidStyle: "plastic", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
};

const display = {
  location: true,
  time: true,
};

const mailchimp = {
  //TODO
  action: "https://url/subscribe/post?parameters",
  effects: {
    gradient: true,
    dots: false,
    lines: true,
  },
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };
