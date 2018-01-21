import { h } from "picodom"
import "./toolbar.css"
import history from "./history"

export default {
  view: () => <div id="toolbar">
    {
      history.canUndo()
        ? <div class="enabled button" onclick={history.undo}>↺&#xFE0E;</div>
        : <div class="button">↺&#xFE0E;</div>
    }
    {
      history.canRedo()
        ? <div class="enabled button" onclick={history.redo}>↻&#xFE0E;</div>
        : <div class="button">↻&#xFE0E;</div>
    }
  </div>
}