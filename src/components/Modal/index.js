import './styles.css'

export default function Modal({children, onClose}) {
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
