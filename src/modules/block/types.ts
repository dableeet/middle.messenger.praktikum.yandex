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

type GenericObj<T> = Record<string, T>;

export type MetaData = GenericObj<unknown>;
export type Children = GenericObj<Block>;

export type Compile = (
  context: Record<string, unknown>,
  options?: RuntimeOptions,
) => string;
