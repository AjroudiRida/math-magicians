import PropTypes from 'prop-types';

const CalculatorBtns = ({ content }) => (
  <div className="btn">
    <span>{content}</span>
  </div>
);

CalculatorBtns.propTypes = {
  content: PropTypes.string.isRequired,
};

export default CalculatorBtns;
