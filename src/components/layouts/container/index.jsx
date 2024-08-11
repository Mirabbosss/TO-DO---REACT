import "./style.css";

const index = ({children, className}) => {
    return (
        <div className={className ? className : "container"}>
            {children}
        </div>
    );
};

export default index;