import sections from "./sections"
import refreshDom from "./refreshDom.js"
import history from "./history"

function NewFile() {
  const file = {
    name: "Untitled Sheet"
  }

  sections.idsInOrder.forEach(id => file[id] = {
    expanded: true,
    items: []
  })

  return file
}

const exported = {
  current: NewFile(),
  createItem(sectionId) {
    let number = 1
    let name
    while (true) {
      name = `Untitled ${sections.byId[sectionId].singular} ${number}`
      if (!exported.current[sectionId].items.some(item => item.name == name)) break
      number++
    }

    const item = sections.byId[sectionId].create(name)
    history.add(() => {
      exported.current[sectionId].items.push(item)
      exported.current[sectionId].expanded = true
    }, () => {
      exported.current[sectionId].items.pop()
    })
  },
  toggleSection(id) {
    exported.current[id].expanded = !exported.current[id].expanded
    refreshDom()
  }
}

export default exported