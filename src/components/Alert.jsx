const Alert = ({ msg, color }) => {
    return (
        <>
            <div className={`alert alert-${color} my-3`}>
                <p>{msg}</p>
            </div>
        </>
    )
}

export default Alert