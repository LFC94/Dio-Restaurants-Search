import ReactDOM from 'react-dom';

const PortalModel = ({ children }) => {
  const portal = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, portal);
};

export default PortalModel;
