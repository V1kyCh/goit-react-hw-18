import './Header.scss'
export const Header = ({changePage}) => {
    return <div className="header">
        <button className="header-button" onClick={changePage}>Reviews widget </button>
        <button  className="header-button"onClick={changePage}>Contact book</button>
    </div>
}