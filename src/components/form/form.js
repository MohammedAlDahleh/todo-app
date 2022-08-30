import useForm from '../../hooks/form.js';
import { SettingsContext } from '../../context/settings.js';
import { LoginContext } from '../auth/context';
import { useContext } from 'react';
import { Switch } from "@blueprintjs/core";
import { When } from 'react-if';


export default function Form(props) {
  const { handleChange, handleSubmit } = useForm(props.addItem);
  const setting = useContext(SettingsContext);
  const auth = useContext(LoginContext);
  const handleClick = () => {
    setting.setDisplaySettings(!setting.displaySettings);
    console.log(setting.displaySettings);
  }
  const handleNChange = (e) => {
    setting.setNumberItems(parseInt(e.target.value));
  }
  const storageHandler = (e) => {
    localStorage.setItem('settings', JSON.stringify(setting));
  }

  return (
    <div>
      <When condition={auth.loginStatus}>

        <When condition={auth.canDo('create')}>
          <form onSubmit={handleSubmit}>

            <h2>Add To Do Item</h2>

            <label>
              <span>To Do Item</span>
              <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
            </label>
            <br></br>
            <br></br>

            <label>
              <span>Assigned To</span>
              <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
            </label>
            <br></br>
            <br></br>

            <label>
              <span>Difficulty</span>
              <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
            </label>
            <br></br>
            <br></br>

            <label>
              <button type="submit">Add Item</button>
            </label>
          </form>

        </When>

        <Switch checked={setting.displaySettings} onClick={handleClick}>
          Display completed Items
        </Switch>
        <button onClick={props.handleSort} className='sortB'>
          Sort by Difficulty
        </button>
        <br></br><br></br>
        <input onChange={handleNChange} placeholder={`Tasks/Page${setting.numberItems}`}
          type="number" min={1} />
        <br></br><br></br>
        <button onClick={storageHandler} className='sortB'>
          Save Settings
        </button>
      </When>
    </div>
  )
}