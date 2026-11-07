import React from 'react'
import PropTypes from 'prop-types';
import Confetti from '../Confetti';
import HeroPortrait from '../HeroPortrait';

const VictoryScreen = ({ result, exp1, exp2, hero, onClose, onRestart }) => {
  const isDraw = result === 'draw';
  const muslimWon = result === 'muslim';
  const qurayshWon = result === 'quraysh';

  const modeClass = isDraw ? 'draw' : muslimWon ? 'win-muslim' : 'defeat';

  return (
    <div className={`victory ${modeClass}`}>
      {!qurayshWon && (
        <>
          <div className="victory-rays" />
          <Confetti />
        </>
      )}

      <div className="victory-box">
        {qurayshWon ? (
          <h2 className="defeat-text">İslam ordusu məğlub oldu</h2>
        ) : (
          <>
            <div className="victory-trophy">{isDraw ? '🤝' : '🏆'}</div>
            <h2 className="victory-title">
              {isDraw ? 'Bərabərlik!' : 'İslam ordusu qalib gəldi!'}
            </h2>
            <p className="victory-score">{exp1} : {exp2}</p>

            {muslimWon && <HeroPortrait hero={hero} />}
          </>
        )}

        <div className="victory-actions">
          <button className="btn-new" onClick={onClose}>Bağla</button>
          <button className="btn-new" onClick={onRestart}>Yeni oyun</button>
        </div>
      </div>
    </div>
  )
}

export default VictoryScreen

VictoryScreen.propTypes = {
  result: PropTypes.oneOf(['muslim', 'quraysh', 'draw']).isRequired,
  exp1: PropTypes.number.isRequired,
  exp2: PropTypes.number.isRequired,
  hero: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
}