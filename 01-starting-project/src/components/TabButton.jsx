export default function TabButton(props) {
 function handleClick() {

 }
    return (
            <li>
                <button onClick={props.onSelect}>{props.lable}</button>
            </li>
    )
}