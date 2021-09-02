import Button from "./Button";

function Header({title,showBtn,showButton}) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button showBtn={showBtn} showButton={showButton}/>
        </header>
    )
}

Header.defaultProps = {
    title : "Task Tracker"
}

export default Header
