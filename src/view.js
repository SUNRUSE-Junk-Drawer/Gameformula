import { h } from "picodom"
import toolbar from "./toolbar.js"
import browser from "./browser.js"

export default () => <div>
  {toolbar.view()}
  {browser.view()}
</div>