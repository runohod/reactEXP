import { useState } from 'react';
import './ModalOpen.scss'
import { useOutsideClick } from '../../hooks/useOutsideClick';

const ModalOpen = ({
  placeholder="Input your note..." ,
  value, 
  onChange,
//   onKeyDown,
  onCancel,
  onApply,
  autoFocus = false

}) => { 

const modalRef = useOutsideClick(onCancel);
const [isError, setIsError] = useState(false);

const handleSubmit = () => {
  if (!value.trim()) {
    setIsError(true);
  } else {
    setIsError(false);
    onApply();
  }
};

const handleTextChange = (e) => {
  if (isError) {
    setIsError(false);
  }
  onChange(e);
};

  return (
    <div className="modal">
        <div className="modal__content" ref={modalRef}>
            <h2 className="modal__title">NEW NOTE</h2>
                <input 
                    autoFocus={autoFocus}
                    className={`modal__input ${isError ? 'modal__input--error' : ''}`}
                    type="text" 
                    placeholder={placeholder}
                    value={value} 
                    onChange={handleTextChange} 
                    onKeyDown={(e) => {if (e.key === 'Enter') {handleSubmit(); }}}
                />
                {isError && <p className="modal__error-text">Вы забыли написать задачу!</p>}
            <div className="modal__actions">
                <button className="modal__btn__cancel" onClick={onCancel}>CANCEL</button>
                <button className="modal__btn__apply" onClick={handleSubmit}>APPLY</button>
            </div>
        </div>
    </div>
    );
};

export default ModalOpen;