import React, { 
  Fragment, 
  Children, 
  cloneElement, 
  useRef, 
  useEffect 
} from 'react';
import { createPortal } from 'react-dom';
import M from 'materialize-css';

const Modal = ({ 
  actions, 
  header, 
  children, 
  trigger, 
  options, 
  open, 
  root, 
  ...props 
}) => {
  console.log('HEADER: ', header);
  console.log('CHILDREN: ', children);
  console.log('TRIGGER: ', trigger);
  console.log('OPTIONS: ', options);
  console.log('OPEN: ', open);
  console.log('ROOT: ', root);
  console.log('...PROPS: ', {...props});

  const _modalRoot = useRef(null);
  const _modalInstance = useRef(null);
  const _modalRef = useRef(null);
  if (root === null) {
    console.warn('Root should be a valid node element to render a Modal.');
  }

  useEffect(() => {
    const modalRoot = _modalRoot.current;
    _modalInstance.current = M.Modal.init(_modalRef.current, options);

    return () => {
      console.log('root: ', root);
      console.log('modalRoot: ', modalRoot);
      root.removeChild(modalRoot);
      _modalInstance.current.destroy();
    };
  }, [options, root/*, children*/]); //children isn't here in the previous version of React-Materialize. This seems to keep the modal from re-rendering when the GiftForm state changes due to hooks on text input fields

  useEffect(() => {
    if (open) {
      showModal();
    } else {
      hideModal();
    }
  }, [open]);

  const showModal = e => {
    e && e.preventDefault();
    _modalInstance.current && _modalInstance.current.open();
  };

  const hideModal = e => {
    e && e.preventDefault();
    _modalInstance.current && _modalInstance.current.close();
  };

  const renderModalPortal = () => {
    if (!_modalRoot.current) {
      _modalRoot.current = document.createElement('div');
      root.appendChild(_modalRoot.current);
    }
    return createPortal(
      <div className='modal' ref={_modalRef} {...props}>
        <div className='modal-content'>
          <h4>Modal header goes here!</h4>
          <p>Modal content will go here! La da da.</p>
        </div>
        <div className='modal-footer'>{Children.toArray(actions)}</div>
      </div>,
      _modalRoot.current
    );
  };

  //Fragment vs div: Fragments let you group a list of children without adding extra nodes to the DOM
  return (
    <Fragment> 
      {trigger && cloneElement(trigger, { onClick: showModal })}
      {renderModalPortal()}
    </Fragment>
  );
};

Modal.defaultProps = {
  root: typeof window !== 'undefined' ? document.body : null,
  open: false,
  options: {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true,
    dismissible: true,
    startingTop: '4%',
    endingTop: '10%'
  },
  // fixedFooter: false,
  // bottomSheet: false,
  actions: [
    <button className='btn modal-close' waves='green' /*modal='close'*/ flat='true'>
      Close
    </button>
  ]
};

export default Modal;