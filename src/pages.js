import { h } from "picodom"

export default {
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
}