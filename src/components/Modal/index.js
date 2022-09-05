import ReactDOM from 'react-dom';

import './styles.css'

function Modal({children, onClose}) {
    return (
        <div className="modal">
            <div className="modal-content">

                <button
                    onClick={onClose}
                    className="btn"
                >
                    X
                </button>

                {children}

            </div>
        </div>
    )
}

export default function ModalPortal({children, onClose}) {
    return ReactDOM.createPortal(
        <Modal onClose={onClose}>
            {children}
        </Modal>,
        document.getElementById('modal-root')
    )
}
