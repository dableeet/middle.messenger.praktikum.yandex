declare module '*.hbs' {
  const content: (
    context: Record<string, unknown>,
    options?: RuntimeOptions,
  ) => string;
  export default content;
}
