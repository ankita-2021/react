import './SecondSection.css'
function SecondSection(props){
    return(<div className="section2">
    <h3 className="moreDetail">Staus <br/> <li>{props.Status}</li></h3>
    <h3 className="moreDetail">Door <br/>{props.Door}</h3>
    <h3 className="moreDetail">Time <br/>{props.Time}</h3>
    </div>
    )

}
export default SecondSection;