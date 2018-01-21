const byId = {
  sheets: {
    singular: "Sheet",
    plural: "Sheets",
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
  idsInOrder: ["sheets", "ranges"]
}