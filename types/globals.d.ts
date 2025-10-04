// Type declarations for CSS imports (side-effect imports for global styles)
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";

// For CSS modules (if you use them)
declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.module.scss" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.module.sass" {
  const classes: Record<string, string>;
  export default classes;
}