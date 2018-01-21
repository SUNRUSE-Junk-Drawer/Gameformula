import { h } from "picodom"
import refreshDom from "./refreshDom"

const undone = []
const done = []

export default {
  add(perform, undo) {
    undone.length = 0
    done.push({
      perform: perform,
      undo: undo
    })
    perform()
    while (done.length > 20) done.shift()
    refreshDom()
  },
  canUndo: () => done.length,
  undo() {
    const step = done.pop()
    undone.push(step)
    step.undo()
    refreshDom()
  },
  canRedo: () => undone.length,
  redo() {
    const step = undone.pop()
    done.push(step)
    step.perform()
    refreshDom()
  }
}