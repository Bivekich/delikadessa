import PropTypes from "prop-types"; // First, import PropTypes

export const Button = ({ className, style, children, onClick }) => {
  return (
    <button
      style={style || { fontFamily: "Inter" }}
      className={`bg-[#722082] hover:bg-purple-700 text-white font-semibold rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md shadow w-full md:w-auto h-18 ${
        className || "text-lg py-4 px-7"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Add PropTypes validation
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
