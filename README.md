# react-conditionalRender
react实现条件渲染的组件
# If组件用法
```
import { If } from './lib'
<If when={a} DefaultComponent={Default2}>
  <span>aaa</span>
</If>
```
when是条件判断 当为true是渲染内部组件
DefaultComponent为默认组件可以传入组件或者jsx 当when为false时渲染


# For组件用法
data可以传入数组或者对象
当为对象时
```
import { For } from './lib'
<For data={data2} DefaultComponent={Default1}>
  {([key, val], index) => (<div key={index}>{key} -> {val}</div>)}
</For>
```
当为数组时
```
<For data={data1} DefaultComponent={Default1}>
  {(item, index) => (<div key={index}>{item}</div>)}
</For>
```
DefaultComponent为默认组件可以传入组件或者jsx 当data为空时渲染

