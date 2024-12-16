import { PulseLoader } from 'react-spinners';

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <PulseLoader color="#722082" size={20} margin={10} />
    </div>
  );
};

export default Preloader;
