import parse5, { DefaultTreeParentNode } from 'parse5';

import { DefaultTreeElement, DefaultTreeTextNode } from 'parse5';

const isDefaultTreeTextNode = (
  node: DefaultTreeTextNode | DefaultTreeElement,
): node is DefaultTreeTextNode =>
  (node as DefaultTreeTextNode).value !== undefined;

export const parseWordPage = (wordPage: string) => {
  const body = (parse5.parse(wordPage) as any).childNodes[1].childNodes[2];

  const isAllowed =
    body.childNodes
      .find((node: DefaultTreeElement) => node.nodeName === 'p')
      .childNodes[0].value.trim() === 'dopuszczalne w grach';

  const description = isAllowed
    ? body.childNodes[19].childNodes.reduce(
        (acc: string, node: DefaultTreeElement | DefaultTreeTextNode) =>
          `${acc}${isDefaultTreeTextNode(node) ? node.value : '\n'}`,
        '',
      )
    : undefined;

  return {
    isAllowed,
    description,
  };
};
