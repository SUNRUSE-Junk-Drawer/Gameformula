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
    }
  },
  ranges: {
    singular: "Range",
    plural: "Ranges",
    create(id, name) {
      return {
        id: id,
        name: name
      }
    }
  }
}

export default {
  byId: byId,
  idsInOrder: ["pages", "ranges"]
}