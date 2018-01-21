import { h } from "picodom"

export default {
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