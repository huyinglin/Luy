// @flow
import { update } from './vdom'

export const Com = {
  CREATE: 0,
  MOUNT: 1,
  UPDATING: 2,
  UPDATED: 3
}

// 用户用来继承的 Component 类
class ReactClass {
  constructor(props, context) {
    this.props = props
    this.context = context
    this.state = this.state || {}

    this.nextState = null
    this._renderCallbacks = []
    this.lifeCycle = Com.CREATE
  }

  updateComponent() {
    const prevState = this.state
    const oldVnode = this.Vnode

    if (this.nextState !== prevState) {
      this.state = this.nextState;
    }

    this.nextState = null
    const newVnode = this.render()

    this.Vnode = update(oldVnode, newVnode, this.dom)//这个函数返回一个新的Vnode
  }
  setState(partialNewState, callback) {
    
    if (this.lifeCycle === Com.CREATE) {
      //组件挂载期

    } else { 
      //组件更新期

    this.nextState = Object.assign({}, this.state, partialNewState)
    this.updateComponent()
    }

  }

  shouldComponentUpdate() { }
  componentWillReceiveProps() { }
  componentWillUpdate() { }
  componentDidUpdate() { }
  componentWillMount() { }
  componentDidMount() { }
  componentWillUnmount() { }
  componentDidUnmount() { }


  render() { }
}

export {
  ReactClass,
}