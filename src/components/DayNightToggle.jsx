
import { DarkModeSwitch } from 'react-night-toggle';

function NightToggle({ dark, onToggle }) {
  return (
    <div className="day-night-toggle" title={dark ? 'Switch to light theme' : 'Switch to dark theme'}>
      <DarkModeSwitch
        checked={dark}
        onChange={onToggle}
        sunColor="orange"
        moonColor="white"
      />
    </div>
  );
}

export default NightToggle