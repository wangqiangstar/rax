import * as RaxCore from 'rax'; // eslint-disable-line
import Children from 'rax-children';
import isValidElement from 'rax-is-valid-element';
import createFactory from 'rax-create-factory';
import cloneElement from 'rax-clone-element';

const Rax = RaxCore;

Rax.Children = Children;
Rax.isValidElement = isValidElement;
Rax.createFactory = createFactory;
Rax.cloneElement = cloneElement;
Rax.Component.prototype.isReactComponent = {};

export * from 'rax'; // eslint-disable-line
export {
  Children,
  isValidElement,
  createFactory,
  cloneElement,
};
export default Rax;
