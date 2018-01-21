import createNew from "./createNew.js"
import refreshDom from "./refreshDom.js"
import history from "./history"

const exported = {
  current: createNew.file(),
  createSheet() {
    const sheet = createNew.sheet(exported.current)
    history.add(() => {
      exported.current.sheets.items.push(sheet)
      exported.current.sheets.expanded = true
    }, () => {
      exported.current.sheets.items.pop()
    })
  },
  toggleSheets() {
    exported.current.sheets.expanded = !exported.current.sheets.expanded
    refreshDom()
  },
  createRange() {
    const range = createNew.range(exported.current)
    history.add(() => {
      exported.current.ranges.items.push(range)
      exported.current.ranges.expanded = true
    }, () => {
      exported.current.ranges.items.pop()
    })
  },
  toggleRanges() {
    exported.current.ranges.expanded = !exported.current.ranges.expanded
    refreshDom()
  }
}

export default exported