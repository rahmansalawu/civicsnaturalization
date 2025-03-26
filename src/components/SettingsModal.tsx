import React from 'react';
import './SettingsModal.css';

type DifficultyLevel = 'easy' | 'medium' | 'hard';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  difficultyLevel: DifficultyLevel;
  onDifficultyChange: (difficulty: DifficultyLevel) => void;
  timedMode: boolean;
  onTimedModeChange: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  difficultyLevel,
  onDifficultyChange,
  timedMode,
  onTimedModeChange
}) => {
  if (!isOpen) return null;

  // Handle click outside to close (only if clicking the backdrop)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="settings-modal-backdrop" onClick={handleBackdropClick} aria-modal="true" role="dialog">
      <div className="settings-modal-content">
        <div className="settings-modal-header">
          <h2 className="settings-modal-title">Game Settings</h2>
          <button 
            className="settings-modal-close" 
            onClick={onClose}
            aria-label="Close settings"
          >
            &times;
          </button>
        </div>
        
        <div className="settings-modal-body">
          <div className="settings-section">
            <h3 className="settings-section-title">Difficulty Level</h3>
            
            <div className="difficulty-buttons">
              <button 
                className={`difficulty-button ${difficultyLevel === 'easy' ? 'difficulty-active' : ''}`}
                onClick={() => onDifficultyChange('easy')}
                aria-pressed="true"
                aria-label="Easy difficulty"
              >
                Easy
              </button>
              <button 
                className={`difficulty-button ${difficultyLevel === 'medium' ? 'difficulty-active' : ''}`}
                onClick={() => onDifficultyChange('medium')}
                aria-pressed="true"
                aria-label="Medium difficulty"
              >
                Medium
              </button>
              <button 
                className={`difficulty-button ${difficultyLevel === 'hard' ? 'difficulty-active' : ''}`}
                onClick={() => onDifficultyChange('hard')}
                aria-pressed="true"
                aria-label="Hard difficulty"
              >
                Hard
              </button>
            </div>
            
            <p className="difficulty-description">
              {difficultyLevel === 'easy' 
                ? 'Easy mode: More hearts (7), simpler questions.' 
                : difficultyLevel === 'medium' 
                  ? 'Medium mode: Standard hearts (5), mixed questions.' 
                  : 'Hard mode: Fewer hearts (3), all questions included.'}
            </p>
          </div>
          
          <div className="settings-section">
            <h3 className="settings-section-title">Game Mode</h3>
            <div className="mode-toggle">
              <label className="mode-toggle-label">
                <span className="mode-toggle-text">Timed Mode</span>
                <div className={`toggle-switch ${timedMode ? 'toggle-on' : 'toggle-off'}`} onClick={onTimedModeChange}>
                  <div className="toggle-slider"></div>
                </div>
              </label>
              <p className="mode-description">
                {timedMode 
                  ? 'Timed mode: Answer questions before time runs out.' 
                  : 'Standard mode: Take your time to answer questions.'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="settings-modal-footer">
          <button className="settings-modal-save" onClick={onClose}>
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
