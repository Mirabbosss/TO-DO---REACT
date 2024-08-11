import "./style.css";

const index = ({submitFunc, className, children}) => {
    return (
        <form onSubmit={()=> submitFunc ? submitFunc() : null} action="#" className={className ? className : null}>
            {children}
        </form>
    );
};

export default index;