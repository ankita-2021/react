import './FirstSection.css'
function FirstSection(props){
    return(
        <div className='section1'>
            <h3>Appointment:{props.Appointment}</h3>
            <h3>Email:{props.Email}</h3>
            <h3>Phone:{props.Phone}</h3>
        </div>
    )
}
export default FirstSection;