import { h } from "picodom"
import file from "./file.js"
import "./pages.css"

function ConvertIndexToColumnName(index) {
  if (!index) return "A"
  let columnName = ""
  while (index) {
    const remainder = index % 26
    columnName = String.fromCharCode(65 + remainder) + columnName
    index -= remainder
    index /= 26
  }
  return columnName
}

export default {
  singular: "Page",
  plural: "Pages",
  focusable: true,
  create(name) {
    const page = {
      name: name,
      columns: [],
      rows: []
    }

    while (page.columns.length < 50) page.columns.push({
      width: 7.5
    })

    while (page.rows.length < 50) page.rows.push({
      height: 1.5
    })

    return page
  },
  view: () => {
    const page = file.current.pages.items[file.current.focusedItem]

    let pageHeight = 1.5
    const rowPositions = []
    let index = 0
    while (index < page.rows.length) {
      rowPositions.push(pageHeight)
      pageHeight += page.rows[index].height
      index++
    }

    let pageWidth = 5
    const columnPositions = []
    index = 0
    while (index < page.columns.length) {
      columnPositions.push(pageWidth)
      pageWidth += page.columns[index].width
      index++
    }

    return <div id="page" style={{
      width: `${pageWidth}rem`,
      height: `${pageHeight}rem`
    }}>
      <div class="columns">{page.columns.map((column, index) =>
        <div class="column" style={{
          left: `${columnPositions[index]}rem`,
          width: `${column.width}rem`,
          height: `${pageHeight}rem`
        }}>
          <div class="header">{ConvertIndexToColumnName(index)}</div>
          <div class="outline"></div>
        </div>)
      }</div>

      <div class="rows">{page.rows.map((row, index) =>
        <div class="row" style={{
          top: `${rowPositions[index]}rem`,
          width: `${pageWidth}rem`,
          height: `${row.height}rem`
        }}>
          <div class="header" style={{ "line-height": `${row.height}rem` }}>{index + 1}</div>
          <div class="outline"></div>
        </div>)
      }</div>
    </div>
  }
}