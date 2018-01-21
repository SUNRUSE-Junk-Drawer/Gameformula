import { h } from "picodom"
import toolbar from "./toolbar.js"
import browser from "./browser.js"
import sections from "./sections.js"
import file from "./file.js"

export default () => <div>
  {
    file.current.focusedSection
      ? sections.byId[file.current.focusedSection].view()
      : <div class="nothing-selected">
        <div class="first-line">There is currently nothing selected.</div>
        <div class="second-line">Please select an item from the browser on the left.</div>
      </div>
  }
  {toolbar.view()}
  {browser.view()}
</div>