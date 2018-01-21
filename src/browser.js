import { h } from "picodom"
import "./browser.css"
import file from "./file"

export default {
  view: () => <div id="browser">
    <div class="section">
      <div class="header">
        <div class="button" onclick={file.createSheet}>＋&#xFE0E;</div>
        <div class="name" onclick={file.toggleSheets}>
          {
            file.current.sheets.expanded
              ? <div class="icon">▼&#xFE0E;</div>
              : <div class="icon">►&#xFE0E;</div>
          }
          Sheets
        </div>
      </div>
      {file.current.sheets.expanded && <div class="items">
        {file.current.sheets.items.map(sheet => <div class="item">
          <div class="button">❌&#xFE0E;</div>
          <div class="button">🖉&#xFE0E;</div>
          <div class="name">{sheet.name}</div>
        </div>)}
      </div>}
    </div>
    <div class="section">
      <div class="header">
        <div class="button" onclick={file.createRange}>＋&#xFE0E;</div>
        <div class="name" onclick={file.toggleRanges}>
          {
            file.current.ranges.expanded
              ? <div class="icon">▼&#xFE0E;</div>
              : <div class="icon">►&#xFE0E;</div>
          }
          Ranges
        </div>
      </div>
      {file.current.ranges.expanded && <div class="items">
        {file.current.ranges.items.map(range => <div class="item">
          <div class="button">❌&#xFE0E;</div>
          <div class="button">🖉&#xFE0E;</div>
          <div class="name">{range.name}</div>
        </div>)}
      </div>}
    </div>
  </div>
}