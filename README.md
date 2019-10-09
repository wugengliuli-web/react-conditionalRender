# react-conditionalRender
react实现条件渲染的组件
# If组件用法
```
import { If } from './lib'
<If when={a} DefaultComponent={Default2}>
  <span>aaa</span>
</If>
```
when是条件判断 当为true是渲染内部组件 必须传递
DefaultComponent为默认组件可以传入组件或者jsx 当when为false时渲染  可选传递


# For组件用法
data可以传入数组或者对象 必须传递
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
DefaultComponent为默认组件可以传入组件或者jsx 当data为空时渲染 可选传递

```
<For data={data1} DefaultComponent={Default1}>
  {(item, index) => (<div key={index}>{item}</div>)}
  <div>这个依然可以渲染出来</div>
</For>
```
# Switch Case组件用法
```
import { Switch, Case } from './lib'
function App() {
	const a = 4
	return (
		<div className="App">
			<Switch value={a} DefaultComponent={Default}>
				<Case when={1} component={Comp1}></Case>
				<Case when={2} component={Comp2}></Case>
				<Case when={3} component={Comp3}></Case>
			</Switch>
    		</div>
	);
}
```
component 可以传入组件或者jsx 
当value的值与when 全等时渲染component的组件(jsx) when 和 value 为必传值
DefaultComponent为默认组件 当没有匹配到时渲染 可以传递组件和jsx 可传值
