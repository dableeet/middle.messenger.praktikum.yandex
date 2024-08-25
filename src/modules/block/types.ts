import Block from '.';

export type Props = {
  [key: string]: unknown;
  settings?: {
    withInternalID: boolean;
  };
  events?: {
    [key: string]: () => void;
  };
};

export type MetaData = Record<string, unknown>;

export type Children = Record<string, Block>;

export type Compile = (
  context: Record<string, unknown>,
  options?: RuntimeOptions,
) => string;
