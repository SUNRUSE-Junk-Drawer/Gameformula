import { h } from "picodom"
import "./browser.css"
import sections from "./sections"
import file from "./file"

export default {
  view: () => <div id="browser">
    {sections.idsInOrder.map(id => <div class="section">
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
        {file.current[id].items.map(item => <div class="item">
          <div class="button" onclick={() => file.deleteItem(id, item)}>❌&#xFE0E;</div>
          <div class="button">🖉&#xFE0E;</div>
          <div class="name">{item.name}</div>
        </div>)}
      </div>}
    </div>)}
  </div>
}