declare module '*.hbs' {
  const content: (props: Record<string, unknown>) => string;
  export default content;
}
