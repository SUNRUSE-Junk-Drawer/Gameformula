import { patch } from "picodom"
import view from "./view"

let previousDom

function Refresh() {
  const nextDom = view()
  patch(previousDom, nextDom, document.body)
  previousDom = nextDom
}

addEventListener("load", Refresh)

export default Refresh