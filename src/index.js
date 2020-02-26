import { h } from "preact";
import { setPragma } from "goober";
import habitat from 'preact-habitat';
import VerticalNavigation from "./components/VerticalNavigation";

setPragma(h);

let _habitat = habitat(VerticalNavigation);

if(process.env.NODE_ENV === 'development') {
  _habitat.render({
    selector: '[data-widget-host="habitat"]',
    clean: true
  });
}
export default _habitat;