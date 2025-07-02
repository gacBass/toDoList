import './show.css';
import PropTypes from 'prop-types';
import { useEditTask } from '../hooks/useEditTask';
import { useTranslation } from 'react-i18next'; // Add this import

const ShowSth = ({ sth, onRemoveTask, editTask }) => {
    const { t } = useTranslation(); // Add this line
    const {
        editingId,
        editValue,
        handleEditClick,
        handleEditChange,
        handleEditSave,
        handleEditCancel,
    } = useEditTask(editTask);

    if (!sth || sth.length === 0) {
        return <div className='no-tasks'>{t('no_tasks')}</div>; // Use translation
    }

    return (
        <div className='show-container'>
            <h2>{t('notes')}</h2>
            <ul>
                {sth.map(item => (
                    <li className="task-item" key={item.id}>
                        {editingId === item.id ? (
                            <>
                                <input
                                    className="edit-input"
                                    value={editValue}
                                    onChange={handleEditChange}
                                    autoFocus
                                />
                                <button className='save-button' onClick={() => handleEditSave(item.id)}>{t('save')}</button>
                                <button className='cancel-button' onClick={handleEditCancel}>{t('cancel')}</button>
                            </>
                        ) : (
                            <>
                                <span className="task-text">{item.title}</span>
                                <span className="button-group">
                                    <button className='edit-button' onClick={() => handleEditClick(item.id, item.title)}>{t('edit')}</button>
                                    <button className='remove-button' onClick={() => onRemoveTask(item.id)}>{t('remove_task')}</button>
                                </span>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

ShowSth.propTypes = {
    sth: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ShowSth;