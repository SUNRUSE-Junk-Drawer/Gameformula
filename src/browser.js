import { h } from "picodom"
import "./browser.css"
import sections from "./sections"
import file from "./file"

export default {
  view: () => <div id="browser">
    {sections.idsInOrder.map(id => <div class={"section" + (sections.byId[id].focusable ? " focusable" : "")}>
      <div class="header">
        <div class="button" onclick={() => file.createItem(id)}>＋&#xFE0E;</div>
        <div class="name" onclick={() => file.toggleSection(id)}>
          {
            file.current[id].expanded
              ? <div class="icon">▼&#xFE0E;</div>
              : <div class="icon">►&#xFE0E;</div>
          }
          {sections.byId[id].plural}
        </div>
      </div>
      {file.current[id].expanded && <div class="items">
        {Object
          .keys(file.current[id].items)
          .map(itemId => <div class={"item" + (file.current.focusedSection == id && file.current.focusedItem == itemId ? " focused" : "")}>
            <div class="button" onclick={() => file.deleteItem(id, itemId)}>❌&#xFE0E;</div>
            <div class="button">🖉&#xFE0E;</div>
            <div class="name" onclick={sections.byId[id].focusable && (() => file.focusItem(id, itemId))}>{file.current[id].items[itemId].name}</div>
          </div>)
        }
      </div>}
    </div>)}
  </div>
}