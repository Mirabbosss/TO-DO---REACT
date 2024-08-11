import "./style.css";

const index = ({type, className, fun, children, title}) => {
    return (
        <button type={type ? type : null} className={className ? className : null} onClick={fun ? fun : null}>
            {children ? children : (title ? title : '')}
        </button>
    );
};

export default index;