import Taro, { NodesRef } from '@tarojs/taro';

export default function useRect() {
  const getRect = (selector, inNode?, all?) => {
    console.log('getRect...', selector);
    console.log('getRect...', inNode);
    return new Promise<NodesRef.BoundingClientRectCallbackResult>((resolve) => {
      Taro.nextTick(() => {
        Taro.createSelectorQuery()
          [all ? 'selectAll' : 'select'](selector)
          .boundingClientRect((rect) => {
            console.log('boundingClientRect...', rect)
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          })
          .exec();
      })
    });
  };

  return {
    getRect,
  };
}
