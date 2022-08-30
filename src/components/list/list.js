import { useContext } from "react";
import { SettingsContext } from "../../context/settings";
import { Button, Card, Elevation } from "@blueprintjs/core";
import { LoginContext } from '../auth/context';
import Auth from "../auth/auth"
export default function List(props) {
  const settings = useContext(SettingsContext);
  // const auth = useContext(LoginContext);
  if (settings.displaySettings) {
    return (

      <Card elevation={Elevation.TWO} key={props.item.id} className='list-card'>
        <p>{props.item.text}</p>
        <p><small>Assigned to: {props.item.assignee}</small></p>
        <p><small>Difficulty: {props.item.difficulty}</small></p>
        <div onClick={() => props.toggleComplete(props.item.id)}>
          Complete: {props.item.complete.toString()}
        </div>
        <br></br>
        <Auth action="delete">
          <Button onClick={() => props.deleteItem(props.item.id)}>Delete Item</Button>
          </Auth>
      </Card>

    )
  } else {
    if (!props.item.complete) {
      return (

        <Card key={props.item.id} className='list-card'>
          <p>{props.item.text}</p>
          <p><small>Assigned to: {props.item.assignee}</small></p>
          <p><small>Difficulty: {props.item.difficulty}</small></p>

          <Auth action="update">

          <div onClick={() => props.toggleComplete(props.item.id)}>Complete:
           {props.item.complete.toString()}</div>
          </Auth>


          <br></br>

          <Auth action="delete">
            <Button onClick={() => props.deleteItem(props.item.id)}>Delete Item</Button>
          </Auth>
        </Card>
      )
    }
  }
} 