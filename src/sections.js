const byId = {
  sheets: {
    singular: "Sheet",
    plural: "Sheets",
    create(name) {
      return {
        name: name
      }
    }
  },
  ranges: {
    singular: "Range",
    plural: "Ranges",
    create(name) {
      return {
        name: name
      }
    }
  }
}

export default {
  byId: byId,
  idsInOrder: ["sheets", "ranges"]
}