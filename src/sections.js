import { h } from "picodom"

const byId = {
  pages: {
    singular: "Page",
    plural: "Pages",
    focusable: true,
    create(id, name) {
      return {
        id: id,
        name: name
      }
    },
    view: () => <div></div>
  },
  ranges: {
    singular: "Range",
    plural: "Ranges",
    create(id, name) {
      return {
        id: id,
        name: name
      }
    },
    view: () => <div></div>
  }
}

export default {
  byId: byId,
  idsInOrder: ["pages", "ranges"]
}