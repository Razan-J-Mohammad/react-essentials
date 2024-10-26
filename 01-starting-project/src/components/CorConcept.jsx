
export default function CorConcept(props){
    return(
            <li>
                <img src={props.image} alt="images"/>
                <h3>{props.title}</h3>
                <p>{props.description}</p>

            </li>
    );
}