import PropTypes from 'prop-types';
import './buttons.css';

const CalculatorBtns = ({ content, handleClick }) => (
  <button
    type="button"
    className="btn"
    onClick={handleClick}
    onKeyDown={handleClick}
    data-testid="button"
  >
    <span>{content}</span>
  </button>
);
CalculatorBtns.propTypes = {
  content: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default CalculatorBtns;
