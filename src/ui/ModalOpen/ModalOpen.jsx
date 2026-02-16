// import { useEffect, useRef } from 'react';
import './ModalOpen.scss'

const ModalOpen = ({
  placeholder="Input your note..." ,
  value, 
  onChange,
  onKeyDown,
  onCancel,
  onApply,
  autoFocus = false

}) => { 
    
// const inputRef = useRef(null);

// useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
// }, []);

  return (
    <div className="modal">
        <div className="modal__content">
            <h2 className="modal__title">NEW NOTE</h2>
                <input 
                    autoFocus={autoFocus}
                    className="modal__input"
                    type="text" 
                    placeholder={placeholder}
                    value={value} 
                    onChange={onChange} 
                    onKeyDown={onKeyDown}
                />
            <div className="modal__actions">
                <button className="modal__btn__cancel" onClick={onCancel}>CANCEL</button>
                <button className="modal__btn__apply" onClick={onApply}>APPLY</button>
            </div>
        </div>
    </div>
    );
};

export default ModalOpen;