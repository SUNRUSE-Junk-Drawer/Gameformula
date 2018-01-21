import { h } from "picodom"
import pages from "./pages.js"
import ranges from "./ranges.js"

const byId = {
  pages: pages,
  ranges: ranges
}

export default {
  byId: byId,
  idsInOrder: ["pages", "ranges"]
}