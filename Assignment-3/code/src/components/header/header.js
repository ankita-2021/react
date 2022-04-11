import './header.css'
function Header(props){
    return (<header>
        <p className='arrow'>{props.arrow}</p>
        <h3 className='empName'>{props.Name}<br/>{props.EmployeeID}</h3>
        <button className='btn'>Print</button>
    </header>)
}
export default Header;