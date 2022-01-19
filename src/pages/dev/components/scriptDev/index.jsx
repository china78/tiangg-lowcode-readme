import React from 'react';
import { Typography, Divider } from 'antd';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import scriptDev from '../../../../assets/imgs/scriptDev.png';
import scriptDev02 from '../../../../assets/imgs/scriptDev02.jpg';

const { Title } = Typography;

const ScriptDev = () => {

  const data1 = `return {
  mounted: function () {
    console.log('hello world')
  }
}`;
  const data2 = `/**
  * 
  * @param type: 字段类型，支持原生类型以及【tiangg内置输入类型】
  * 
  * tiangg内置输入类型: 
  * input    单行输入框
  * text     多行输入框
  * enum     列表单选    需提供选项字段defaultList， 支持数组、map结构
  * image    图片选择
  * audio    音频选择
  * video    视频选择
  * richtext 富文本 
  * number   数字
  * function 方法设置
  * data     json数据
  * date     时间选择
  * checkbox 多选框      同enum 不提供defaultList字段时，输入值为布尔类型
  * radio    单选框      同enum
  * 
 */
 
 return {
   props: {
     // 原生类型
     foo: {
       type: String
     },
     // 图片输入
     fooImage: {
       type: String,
       editor: {
         type: 'image'
       }
     },
     // 日期
     fooDate: {
       editor: {
         type: 'date'
       }
     },
     // json数据
     fooData: {
       type: String,
       editor: {
         type: 'data'
       }
     },
     // checkbox 多选
     fooCheckbox: {
       type: Array, // 此项必须为Array
       default: () => { // 且需提供初始值
         return [] // ['day', 'hour', 'min', 'sec']
       },
       editor: {
         label: '显示精度',
         type: 'checkbox',
         defaultList: [ // array 形式的选项
           'day',
           'hour',
           'min',
           'sec',
         ]
       }
     },
     // checkbox 布尔
     fooCheckboxBool: {
       type: Boolean, // 此项必须为Boolean
       editor: {
         type: 'checkbox'
       }
     },
     // enum 含选项
     fooEnum: {
       default: 'value1',
       type: String,
       editor: {
         label: '我是字段名', // 将字段名显示为可读性更强的文本，不提供此项时，显示字段名
         desc: '我是帮助文本', // 为字段提供提示信息，帮助理解字段的意义
         type: 'enum',
         defaultList: { // map结构的选项 key为值，value为显示文本
           'value1': '条件1',
           'value2': '条件2',
           'value3': '条件3',
         }
       }
     },
     // 条件属性
     ifFoo1: {
       type: [Number],
       default: 0,
       editor: {
         work: function () {
           return this.fooEnum == 'value1' // 只有当 fooEnum 字段取值为 'value1' 时才显示此项
         },
         label: '条件属性1',
         type: 'number',
       }
     },
     ifFoo2: {
       type: [Date, String],
       default: null,
       editor: {
         work: function () {
           return this.fooEnum == 'value2' // 只有当 fooEnum 字段取值为 'value2' 时才显示此项
         },
         label: '条件属性2',
         type: 'date',
       }
     },
   },
   mounted: function () {
     console.log('hello ' + this.foo)
     console.log('hello ' + this.fooImage)
     // ...
   }
 }`;
  const data3 = `return {
  editorMethods: {              // 此项配置自定义方法的在组件配置面板如何展示
    projectJump: {              // 方法名，对应于 'methods' 内的某方法
      label: '内部跳转',         // 自定义方法显示名
      params: [                 // 参数列表，对象数组  
        {                
          label: '跳转地址',     // 参数1的名称
          desc: '项目相对地址',  // 参数1的描述
          type: 'string',       // 参数1的类型，支持 'string|number|boolean|array|object'
          default: ''           // 参数1默认值
        },
        {
          label: '参数',
          desc: 'query形式参数',
          type: 'object',
          default: {}
        }
      ]
    }
  },
  methods:{
    projectJump:function(path,query){
      this.$router.push({
          path:path,
          query:query
      })
    }
  }
}
return node`;
  const data4 = `return {
  mounted () {
    var lib = this.$options.$lib
    console.log(lib)
  }
}`;
  const data5 = `return {
  mounted: {
    // datahub
    // 任意路径 任意值 读写空值不会报错
    // 全局可访问 注意避免无意覆盖
    this.dataHubSet('a.b', 123)
    this.dataHubSet('a.c.d', {k: 15454}) 
    this.dataHubGet('a') // {b: 123}
    this.dataHubGet('a.b') // 123
    this.dataHubGet('a.c.d') // {k: 15454}
    this.dataHubGet('a.c.d.k') // 15454
  }
}`;
  const data6 = `return {
  props: {
    foo: {
      type: String
    }
  },
  mounted: function {
    // 传入 foo 为 '我是示例1 \${a.b.c}'，同时dataHub a.b.c为 123
    this.scopeGet('foo') // '我是示例1 123'
    // 传入 foo 为 '我是列表项 \${$scope.x}'，列表项数据 为 {x: 456}
    this.scopeGet('foo') // '我是列表项 456'
    // 也可复合 但是不能嵌套，this.foo 为 '我是复合 \${a.b.c} \${$scope.x}'
    this.scopeGet('foo') // '我是复合 123 456'
  }
}`;
  const data7 = `
return {
  mounted: function () {
    var anotherComponentId = 'comxxx'
    // 获取包装容器 comxxx
    var anotherWrapComponent = this.$parent.getComponent(anotherComponentId)
    // 修改该节点的nodeInfo等信息
    anotherWrapComponent.nodeInfo.props.xxx = 'xxx'
    // 隐藏元素
    anotherWrapComponent.nodeInfo.visible = false

    // 修改当前节点传入的props值
    this.$praent.nodeInfo.props.xxx = 'xxx'

    // 获取 组件comxxx 对象
    var anotherWrapComponent = this.$parent.getComponent(anotherComponentId,true)
  }
}
`
  return (
    <div>
      <Title level={2}>脚本开发</Title>
      <div className="codeBox">
        <CodeMirror
          value={data1}
          options={{
            lineNumbers: true,
            mode: 'javascript',
            lineWiseCopyCut: true,
            lineWrapping: true,
            theme: 'material'
          }}
          onChange={(editor, data, value) => {
            console.log('editor: ', editor);
            console.log('data: ', data);
            console.log('value: ', value);
          }}
        />
      </div>
      <p>以上几行代码实现了一个超级简单的脚本！使用了此脚本的组件会在其 <code>mounted</code> 生命周期打印出 <code>hello world</code>。</p>
      <p>所以，如上所示，脚本就是一个 Vue 配置对象(option object)。是的，就是这么简单！</p>
      <p>除原生 Vue 配置属性外，我提供了自定义属性、自定义方法添加方案、以及 <code>vm.$options.$lib</code>、数据总线等服务。</p>
      <div id="dev-script-1" className="section">
        <Title level={3}>添加自定义属性</Title>
        <Divider />
        <p>使用脚本添加自定义属性，用户在配置面板配置属性后，脚本可通过组件实例访问到该属性设定值。</p>
        <p>支持自定义输入类型、条件属性等。</p>
        <p>可复制下文代码为任一组件添加脚本查看效果。</p>
        <div className="codeBox">
          <CodeMirror
            value={data2}
            options={{
              lineNumbers: true,
              mode: 'javascript',
              lineWiseCopyCut: true,
              lineWrapping: true,
              theme: 'material'
            }}
          />
        </div>
      </div>
      <div id="dev-script-2" className="section">
        <Title level={3}>添加自定义方法</Title>
        <Divider />
        <p>自定义方法常用于处理回调，响应事件等，添加自定义方法后，用户可在配置面板相应操作选项里选取这个方法，方法在适当时机被调用。</p>
        <p>自定义方法能接受传参，在配置面板内输入。</p>
        <p>一个典型的自定义方法如下，可在复制代码在tiangg编辑器中验证。</p>
        <div className="codeBox">
          <CodeMirror
            value={data3}
            options={{
              lineNumbers: true,
              mode: 'javascript',
              lineWiseCopyCut: true,
              lineWrapping: true,
              theme: 'material'
            }}
          />
        </div>
      </div>
      <div id="dev-script-3" className="section">
        <Title level={3}>组件实例的通用方法和属性</Title>
        <Divider />
        <p>我们在每个组件实例上提供了一些通用方法和属性，使得脚本对可以组件实现更高效、更精确、更全面的控制。</p>
        <p><code>vm.$options.$lib</code></p>
        <p>每个组件实例上添加了 $lib 服务，提供了一些工具方法。</p>
        <div className="codeBox">
          <CodeMirror
            value={data4}
            options={{
              lineNumbers: true,
              mode: 'javascript',
              lineWiseCopyCut: true,
              lineWrapping: true,
              theme: 'material'
            }}
          />
        </div>
        <div className="imgBox"><img style={{ width: '70%' }} src={scriptDev} alt="scriptDev" /></div>
        <p><b>•</b> <code>ESlog</code> 提供了 log 上报能力。<code>ESlog.pageview</code> 记录页面访问；<code>ESlog.track</code> 自定义事件的日志上报。 详细api可查看代码。</p>
        <p><b>•</b> <code>Server</code> 提供了异步请求能力。Server.fetch 使用方法同原生 <code>fetch</code>。</p>
        <p><b>•</b> <code>Util</code> 主要包含 <code>Util.loadJs</code> 异步加载js的能力。</p>
        <div className="section">
          <Title level={4}><code>DataHub</code>数据总线</Title>
          <div className="codeBox">
            <CodeMirror
              value={data5}
              options={{
                lineNumbers: true,
                mode: 'javascript',
                lineWiseCopyCut: true,
                lineWrapping: true,
                theme: 'material'
              }}
            />
          </div>
        </div>
        <div className="section">
          <Title level={4}>模板字符串编译</Title>
          <p>我提供了通过模板字符串快速访问数据的能力。</p>
          <p>对于用户的输入（通过某属性），当检测到形如 <code>${`{a.b.c}`}</code> 或者 <code>${`{$scope.x}`}</code>的片段，我们会对其进行编译替换。</p>
          <p>形如 <code>${`{a.b.c}`}</code> 从DataHub取值；形如<code>${`{$scope.x}`}</code>从上级组件传入该组件的数据中取值，如列表容器传给列表项的数据</p>
          <p>模板字符串甚至还支持过滤器，如 <code>${`{a.b.c | datatime}`}</code>。tiangg编辑器默认提供了一些过滤器，见过滤器。也可通过脚本编写自定义过滤器。</p>
          <p>编译过程内部调用的方法为 <code>vm.scopeGet</code>。</p>
          <div className="codeBox">
            <CodeMirror
              value={data6}
              options={{
                lineNumbers: true,
                mode: 'javascript',
                lineWiseCopyCut: true,
                lineWrapping: true,
                theme: 'material'
              }}
            />
          </div>
        </div>
        <div className="section">
          <Title level={4}>获取其他组件<code>getComponent</code></Title>
          <div className="imgBox"><img style={{ width: '70%' }} src={scriptDev02} alt="scriptDev02" /></div>
          <p>如上图所示整个页面都是一个个节点递归组成，每个节点都先有一个空的容器占位，我们叫他<code>包装容器</code>，组件配置的style属性都会在这个容器上，决定这容器的位置大小等信息。组件配置的props信息会透传到容器包裹的真正的<code>组件</code>里面提供给组件对应的属性值。这里我们要了解如下几个要点：</p>
          <p>1. 每个组件包括包装容器，真正的组件其实是在这个包装容器里面。</p>
          <p>2. 包装容器接受节点的style控制大小以及动画，组件节点接受props，script，进行组件功能的初始化和扩展</p>
          <p>3. 组件如果希望在逻辑中修改props传入的值只能通过获取该元素的包装容器，并通过包装容器里面的nodeInfo.props.xxx 进行修改</p>
          <p>4. 我们的逻辑都是在组件，或者在组件扩展的脚本里面。所以我们如果要在逻辑中获取包装容器可以通过 this.$parent 获取包装容器</p>
          <p>5. 我们可以通过 <code>this.$parent.getComponent('xxx')</code> 获取xxx的包装容器， 可以通过 <code>this.$parent.getComponent('xxx',true)</code> 获取包装容器里面的组件</p>
          <div className="codeBox">
            <CodeMirror
              value={data7}
              options={{
                lineNumbers: true,
                mode: 'javascript',
                lineWiseCopyCut: true,
                lineWrapping: true,
                theme: 'material'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScriptDev;