import { h } from "picodom"
import file from "./file.js"

export default {
  singular: "Page",
  plural: "Pages",
  focusable: true,
  create(name) {
    return {
      name: name
    }
  },
  view: () => <div></div>
}