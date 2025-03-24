import React, { useState } from 'react';
import { detailedExplanations, USCIS_TEXTBOOK_URL } from '../data/detailedExplanations';
import './DetailedExplanation.css';

interface DetailedExplanationProps {
  question: string;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
}

const DetailedExplanation: React.FC<DetailedExplanationProps> = ({ 
  question, 
  selectedAnswer, 
  isCorrect 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const explanation = detailedExplanations[question];
  
  if (!explanation) {
    return (
      <div className="detailed-explanation detailed-explanation-placeholder">
        <p>Detailed explanation for this question is coming soon.</p>
        <p>
          <a 
            href={USCIS_TEXTBOOK_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="textbook-link"
          >
            <span className="reference-icon">📚</span> 
            View USCIS Civics Textbook
          </a>
        </p>
      </div>
    );
  }
  
  return (
    <div className="detailed-explanation">
      <button 
        className={`explanation-toggle-button ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded ? 'true' : 'false'}
        aria-controls="detailed-explanation-content"
      >
        {isExpanded ? 'Hide Detailed Explanation' : 'Show Detailed Explanation'}
        <span className="toggle-icon">{isExpanded ? '▲' : '▼'}</span>
      </button>
      
      <div 
        id="detailed-explanation-content" 
        className={`explanation-content ${isExpanded ? 'expanded' : ''}`}
      >
        <div className="explanation-section">
          <h3 className="explanation-section-title">Why is this the correct answer?</h3>
          <p className="explanation-text">{explanation.correctAnswerExplanation}</p>
        </div>
        
        {!isCorrect && selectedAnswer && explanation.incorrectAnswerExplanations && explanation.incorrectAnswerExplanations[selectedAnswer] && (
          <div className="explanation-section incorrect-explanation">
            <h3 className="explanation-section-title">Why your answer was incorrect:</h3>
            <p className="explanation-text">{explanation.incorrectAnswerExplanations[selectedAnswer]}</p>
          </div>
        )}
        
        {explanation.textbookPageReference && (
          <div className="textbook-reference">
            <p>
              <span className="reference-icon">📚</span> 
              Learn more in the USCIS Civics Textbook, page {explanation.textbookPageReference}
              <a 
                href={`${USCIS_TEXTBOOK_URL}#page=${explanation.textbookPageReference}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="textbook-link"
                aria-label={`View page ${explanation.textbookPageReference} of the USCIS Civics Textbook`}
              >
                View Page
              </a>
            </p>
          </div>
        )}
        
        <div className="explanation-footer">
          <p className="explanation-note">
            <strong>Note:</strong> We're gradually adding detailed explanations for all questions. 
            <a 
              href={USCIS_TEXTBOOK_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="textbook-link"
            >
              View full USCIS Civics Textbook
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailedExplanation;
