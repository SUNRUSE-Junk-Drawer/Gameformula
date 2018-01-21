import sections from "./sections"
import refreshDom from "./refreshDom.js"
import history from "./history"

const exported = {
  current: null,
  create: () => {
    const file = {
      name: "Untitled Sheet"
    }

    sections.idsInOrder.forEach(id => file[id] = {
      nextId: 1,
      expanded: true,
      items: {}
    })

    return file
  },
  createItem(sectionId) {
    let number = 1
    let name
    while (true) {
      name = `Untitled ${sections.byId[sectionId].singular} ${number}`
      let unique = true
      for (const key in exported.current[sectionId].items) {
        if (exported.current[sectionId].items[key].name != name) continue
        unique = false
        break
      }
      if (unique) break
      number++
    }

    const itemId = exported.current[sectionId].nextId
    const item = sections.byId[sectionId].create(name)
    exported.current[sectionId].nextId++

    history.add(() => {
      exported.current[sectionId].items[itemId] = item
      exported.current[sectionId].expanded = true
      if (sections.byId[sectionId].focusable) {
        exported.current.focusedSection = sectionId
        exported.current.focusedItem = itemId
      }
    }, () => {
      delete exported.current[sectionId].items[itemId]
      if (exported.current.focusedSection == sectionId && exported.current.focusedItem == itemId) {
        delete exported.current.focusedSection
        delete exported.current.focusedItem
      }
    })
  },
  focusItem(sectionId, itemId) {
    exported.current.focusedSection = sectionId
    exported.current.focusedItem = itemId
    refreshDom()
  },
  deleteItem(sectionId, itemId) {
    const item = exported.current[sectionId].items[itemId]
    history.add(() => {
      delete exported.current[sectionId].items[itemId]
      exported.current[sectionId].expanded = true
      if (exported.current.focusedSection == sectionId && exported.current.focusedItem == itemId) {
        delete exported.current.focusedSection
        delete exported.current.focusedItem
      }
    }, () => {
      exported.current[sectionId].items[itemId] = item
      exported.current[sectionId].expanded = true
      if (sections.byId[sectionId].focusable) {
        exported.current.focusedSection = sectionId
        exported.current.focusedItem = itemId
      }
    })
  },
  toggleSection(id) {
    exported.current[id].expanded = !exported.current[id].expanded
    refreshDom()
  }
}

export default exported