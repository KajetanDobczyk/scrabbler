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

  const comments = body.childNodes
    .find((node: DefaultTreeElement) =>
      node.attrs?.find((attr) => attr.name === 'class' && attr.value === 'z'),
    )
    .childNodes.filter((node: DefaultTreeElement) => node.tagName === 'div')
    .map((node: DefaultTreeElement) => ({
      author: (node.childNodes[0] as any).childNodes[0].value,
      date: (node.childNodes[2] as any).childNodes[1].value,
      content: (node.childNodes[3] as any).childNodes[0].value,
    }));

  return {
    isAllowed,
    description,
    comments,
  };
};
