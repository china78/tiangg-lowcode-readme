import React from 'react';
import img1 from '../../assets/imgs/img1.png';
import img2 from '../../assets/imgs/img2.png';
import img3 from '../../assets/imgs/img3.png';
import img4 from '../../assets/imgs/img4.png';
import img5 from '../../assets/imgs/img5.png';
import img6 from '../../assets/imgs/img6.png';
import img7 from '../../assets/imgs/img7.png';
import img8 from '../../assets/imgs/img8.png';
import { UnControlled as CodeMirror } from 'react-codemirror2';
const data1 = `
  {
    "id": "truck/button1l",
    "type": "truck/button",
    "label": "按钮1l",
    "version": "0.1.4",
    "visible": true,
    "style": {
        "position": "absolute",
        "width": "100px",
        "height": "40px"
    },
    "animate": [],
    "props": {
        "text": "输入文字",
        "type": "danger",
        "click": []
    },
    "path": "https://tgg.oss-cn-hangzhou.aliyuncs.com/truck/button/0.1.4/index.js",
    "script": "",
    "events": []
  }
`;
const data2 = `
  {
  "id": "node",
  "type": "node",
  "visible": true,
  "style": {
  },
  "props": {},
  "child": [
      {
          "id": "truck/image15j",
          "type": "truck/image",
          "label": "图片15j",
          "version": "0.1.4",
          "visible": true,
          "style": {
              "position": "absolute",
              "width": "320px"
          },
          "animate": [],
          "props": {
              "url": "https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/ymm-maliang/access/ymm_1533366999689.png",
              "click": []
          },
          "path": "https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/truck/image/0.1.4/index.js",
          "script": "",
          "events": [],
          "child": [
              {
                  "id": "truck/text3l",
                  "type": "truck/text",
                  "label": "文本3l",
                  "version": "0.1.4",
                  "visible": true,
                  "style": {
                      "position": "absolute"
                  },
                  "animate": [],
                  "props": {
                      "text": "文字内容1",
                      "click": []
                  },
                  "path": "https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/truck/text/0.1.4/index.js",
                  "script": "",
                  "events": []
              },
              {
                  "id": "truck/text3l5g",
                  "type": "truck/text",
                  "label": "文本3l",
                  "version": "0.1.4",
                  "visible": true,
                  "style": {
                      "position": "absolute",
                      "width": "114px"
                  },
                  "animate": [],
                  "props": {
                      "text": "文字内容2",
                      "click": []
                  },
                  "path": "https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/truck/text/0.1.4/index.js",
                  "script": "",
                  "events": []
              }
          ]
      },
      {
          "id": "truck/button1l",
          "type": "truck/button",
          "label": "按钮1l",
          "version": "0.1.4",
          "visible": true,
          "style": {
          },
          "animate": [],
          "props": {
              "text": "输入文字",
              "type": "danger",
              "click": []
          },
          "path": "https://ymm-maliang.oss-cn-hangzhou.aliyuncs.com/truck/button/0.1.4/index.js",
          "script": "",
          "events": []
      }
  ],
  "script": [],
  "animate": [],
  "version": "0.1.0",
  "events": []
}
`;
const data3 = `
 <div class="node" v-show="visible"  :style="nodeInfo.style">
    <component :is="nodeInfo.id" v-bind="nodeInfo.props" :ref="nodeInfo.id" :style="componentStyle"></component>
    <node v-if="nodeInfo.child" :info="item" v-for="item in nodeInfo.child " :key="item.id"></node>
  </div>
`;
const data4 = `
  // 通过加载到的组件脚本获得的全局对象创建vue对象 window['image_1.0.3'] load组件脚本运行后会生成的对象
  var component = Vue.extend( window['image_1.0.3']) 
  // 遍历所有加入的脚本混合组件对象中
  nodeInfo.script.forEach((value)=>{
      component =component.extent(value)
  })
  // 以节点id为key，注册最终组件对象
  Vue.component(nodeInfo.id,component)
  // 修改该节点的动态组件 :is 参数为 该节点id
  // done
`;
const data5 = `
  /**
 * 
 * @param type: 字段类型，支持原生类型以及【码良输入类型】
 * 
 * 码良输入类型: 
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
      editer: {
        type: 'image'
      }
    },
    // 日期
    fooDate: {
      editer: {
        type: 'date'
      }
    },
    // checkbox 多选
    fooCheckbox: {
      type: Array, // 此项必须为Array
      default: () => { // 且需提供初始值
        return [] // ['day', 'hour', 'min', 'sec']
      },
      editer: {
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
      editer: {
        type: 'checkbox'
      }
    },
    // enum 含选项
    fooEnum: {
      default: 'value1',
      type: String,
      editer: {
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
      editer: {
        work: function () {
          return this.fooEnum == 'value1'
        },
        label: '条件属性1',
        type: 'number',
      }
    },
    ifFoo2: {
      type: [Date, String],
      default: null,
      editer: {
        work: function () {
          return this.fooEnum == 'value2'
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
}

`;
const data6 = `
  {
        
    label: '我是字段名', // 将字段名显示为可读性更强的文本，不提供此项时，显示字段名
    desc: '我是帮助文本', // 为字段提供提示信息，帮助理解字段的意义
    type: 'enum',
    ignore: true,       // 不在编辑器显示
    work:function(){
        // 如果满足什么条件才会显示
    },
    defaultList: { // map结构的选项 key为值，value为显示文本
     'value1': '条件1',
     'value2': '条件2',
     'value3': '条件3',
   }
 }
`;
const data7 = `
  /**
   * 
   * @param type: 字段类型，支持原生类型以及【码良输入类型】
   * 
   * 码良输入类型: 
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
`;
const Think = () => {
  return (
    <div>
      <div style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>达摩的核心实现思路</div>
      <h2>核心设计</h2>
      <p style={{ marginTop: 20 }}>下面会分享下我们的核心设计，这次主要重点说明下面几方面内容</p>
      <div>
        <p>1. 我们会介绍整体的架构来了解一般的编辑产生页面的基本思路，基于数据编程。</p>
        <p>2. 我们会介绍核心的组件如何设计，确保可以自由扩展组件能力</p>
        <p>3. 我们会介绍如何设计编辑器达到可自定义属性的控制面板 备注（由于整体项目实现使用的VUE，所以后面有部分介绍具体技术实现的时候会以VUE的使用角度说明。用其他框架的自行脑补）</p>
      </div>
      <h2>整体架构</h2>
      <p>1. 整体架构 整体架构相对简单，核心就是定义一套标准的数据规范，提供一个编辑器去编辑这个数据，同时提供一个解析器去解析该数据，然后渲染出页面，流程如下。</p>
      <div style={{ width: '100%' }}>
        <img src={img1} alt="" style={{ width: '100%' }} />
      </div>
      <p>2. 数据结构 通过上面的图看到每个页面是由很多节点组成（node）,每个节点可以嵌套子节点。而每个节点包括的基本信息如下，备注文章后续提到的 nodeInfo 都是该节点对应的如下数据</p>
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
      <h3 style={{ marginTop: 20 }}>每个组件比较核心的元素由如下几部分组成</h3>
      <div>
        <p>1. id 元素的唯一编号。方便代码获取和操作</p>
        <p>2. type 组件的类型。会根据不同的类型加载不同的脚本资源，然后运行加载完的脚本会创建一个VUE Component，然后会把这个Component 挂载到VUE全局，由于每个组件节点都是一个 动态的 Component 组件。这时候只需要修改动态组件的 :is 数据进行内容替换就好了。</p>
        <p>3. label 组件别名。方便运营理解使用</p>
        <p>4. version 组件版本。 每个组件都是有自己的版本的。</p>
        <p>5. style 组件样式</p>
        <p>6. props 组件参数。每个组件都是有一些初始化参数的，这些参数都是营销人员在编辑器里面填写的。这些参数就存放在这里面，在扩展编辑器属性能力里面会详细说明</p>
        <p>7. script 扩展脚本。每个组件可以插入一些脚本代码扩展组件的功能。这些脚本创建的对象会 mixin 到该组件对象里面，在组件设计里面会详细介绍</p>
        <p>8. event 组件绑定事件。 每个组件可以绑定常见dom事件</p>
        <p>9. child 孩子节点</p>
        <p>10. path 脚本路径。 通过该路径加载脚本创建组件对象</p>
      </div>
      <p>上图的页面包括一个图片，图片下面两个文字，图片兄弟节点有个按钮元素。对应页面的详细数据结构如下，可以感受下完整结构。</p>
      <CodeMirror
        value={data2}
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
      <p style={{ marginTop: 20 }}>一句话小结：页面是由很多节点递归生成，每个节点包含布局，事件，脚本，参数，版本等信息，然后编辑器编辑这些信息，解析器解析这些信息。</p>
      <h2>组件设计</h2>
      <p>一个页面都是由一个个递归嵌套的组件组成，组件是整个项目的最核心的一部分，为了让组件具有扩展能力，我们对组件的功能使用了 mixin 方式，通过基础组件逻辑+自定义脚本的形式来生成组件。下面介绍下整体组件结构和初始化流程，方便理解我们是如何实现的。</p>
      <div style={{ width: '100%' }}>
        <img src={img2} alt="" style={{ width: '100%' }} />
      </div>
      <p>上图左部分可以看到整个页面都是由一个一个node节点组成，他们是一个树状结构，每个node节点下面包含着一个组件对象做功能展示，下面是node节点的dom结构，可以看到每个节点都是递归节点，每个节点内部都包含一个动态组件，每个动态组件的通过nodeinfo.id为key的组件进行渲染。</p>
      <CodeMirror
        value={data3}
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
      <p style={{ marginTop: 20 }}>一个节点的逻辑功能=组件逻辑+脚本1+脚本2+脚本3... 每个组件在根据自己的类型加载对应js脚本后，会对该组件 nodeInfo.script 里面的 逻辑进行mixin. 然后创建一个最终的组件注册到Vue.component 里面方便后续使用,核心代码如下</p>
      <CodeMirror
        value={data4}
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
      <p style={{ marginTop: 20 }}>一句话小结：通过不断的mixin新的自定义脚本进来扩展组件能力</p>
      <h2>组件属性编辑设计</h2>
      <div style={{ marginBottom: 20 }}>属性编辑主要目的是开发组件的人会暴露一些可配置的参数给运营人员在编辑器里面填写和修改。 比如选择一个组件后再右侧属性面板可以对这个组件进行一些属性设置.</div>
      <div style={{ width: '100%' }}>
        <img src={img3} alt="" style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: 20 }}>为了便于维护和扩展，我们觉得一个组件的可配置数据包括简单数据，复杂逻辑数据，对应可编辑属性的部分也分为两部分</div>
      <p style={{ marginTop: 20 }}>1. 编辑器提供基础属性编辑</p>
      <p>2. 编辑器能提供扩展编辑编辑能力，主要针对运营方便操作，特征性的开发组件属性的编辑功能，提供对运营友好的操作体验</p>
      <div>下面针对这两块比较核心的内容说明下我们如何做的</div>
      <h3 style={{ marginTop: 20 }}>编辑器基础属性编辑能力</h3>
      <p>
        对于一个组件的开发者来说，一是定义该组件那些参数需要暴露到编辑器让运营操作，二是定义该属性对应的值通过什么控件操作。 上文在整体架构数据结构中提到了每个node节点都有一个 props 属性，该属性就是存放着该组件可配置的参数所配置的最终值，在初始化组件的时候会把这个 props的数据传入组件进行初始化。而定义一个组件能接受那些参数则是在每个Vue组件的props 属性上定义， 而编辑器的作用就是通过编辑器去获取到每个对象定义的props，然后根据每个参数的类型提供不同的编辑控件，比如 boolean 我们会提供 切换按钮，image 我们会提供选择图片控件等等。扩展脚本同样可以扩展组件的可编辑属性，下面是一个扩展脚本的例子。主要说明支持的那些类型，可定义的格式。整体流程如下。
      </p>
      <div style={{ width: '100%' }}>
        <img src={img4} alt="" style={{ width: '100%' }} />
      </div>
      <p>下面我们先看一下每个组件可定义的props 例子。</p>
      <CodeMirror
        value={data5}
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
      <p style={{ marginTop: 20 }}>上面脚本扩展的组件对应的增加的可配置的属性如下图。</p>
      <div style={{ width: '100%' }}>
        <img src={img5} alt="" style={{ width: '100%' }} />
      </div>
      <p style={{ marginTop: 20 }}>这里面的的主要设计在于每个props属性里面添加了一个 editer字段进行该字段在编辑器环境下提供什么组件对该属性进行编辑。editer的字段主要包括如下。</p>
      <CodeMirror
        value={data6}
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
      <p style={{ marginTop: 20 }}>1. label 在编辑器显示的名称</p>
      <p>2. desc 该字段在编辑器详细描述</p>
      <p>3. type 编辑该属性的组件类型</p>
      <p>4. ignore 负略在编辑器显示，一般在该属性提供了高级编辑模式需要隐藏掉默认的模式。</p>
      <p>5. work 一个方法，该方法返回true 会在编辑器显示该属性，一遍用于联动隐藏和显示一些编辑属性</p>
      <p>6. defaultList 一些默认数据，一般提供单选，下拉等默认可选择的值。</p>
      <p>一句话小结：编辑器通过获取每个组件的props，遍历每一个属性，按类型提供不同的操作控件，编辑生成最终的数据放到 nodeInfo.props上。</p>
      <h3>扩展编辑属性能力</h3>
      <p>很多时候一个组件可配置的属性按我们的规划来说就下面几种类型。</p>
      <CodeMirror
        value={data7}
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
      <p style={{ marginTop: 20 }}>如果按每个类型提供一个基本的编辑组件就能完成90%的需求，不过在随着组件的复杂度增加，每个组件可配置的属性变得千奇百怪，各种需求都可能。比如一个简单的多选，原来的可选项只能写死，现在需要自己请求接口获取。但这些逻辑我们不能做到统一的编辑器里面，也不能做到组件里面，所以只能在做组件的时候提供一种机制让开发组件的同学开发组件的同时，还能对这个组件开发一个自定义的编辑器，并能整合到我们的属性编辑面板中。 整体架构如下，最终效果可以参考上图的自定义面板</p>
      <div style={{ width: '100%' }}>
        <img src={img6} alt="" style={{ width: '100%' }} />
      </div>
      <p>一个组件打包完一般会有两个必要的脚本，一个是组件对应的js。一个是该组件对应编辑器的脚本js。 整个平台对编辑器的功能扩展都是相通的，通过加载脚本，创建对象，注册到Vue，然后通过动态组件渲染。对编辑器属性的扩展也是一样。加载对应组件的编辑器脚本，然后按相同的方法进行植入。这里就不在细讲。这里简单分享下我们对一个组件的开发最终的结果。如下图</p>
      <p>1. 组件开发过程中的界面</p>
      <div style={{ width: '100%' }}>
        <img src={img7} alt="" style={{ width: '100%' }} />
      </div>
      <p style={{ marginTop: 20 }}>2. 组件发布后在码良编辑器里面的样子</p>
      <div style={{ width: '100%' }}>
        <img src={img8} alt="" style={{ width: '100%' }} />
      </div>
      <h3 style={{ marginTop: 20 }}>合成组件思考</h3>
      <p>合成组件就是选择已有的节点保存为一个通用的组件，方便下次直接使用</p>
      <p>1. 使用组合组件</p>
      <p>2. 导出组合组件</p>
      <h3>模板页面</h3>
      <p>页面模板的目的和组合组件类似，都是提供已经做好的内容，运营快速选择使用达到快速上线活动的目的,下面是简单演示</p>
      <h3>总结</h3>
      <p>为了提供一套对运营友好，并且高扩展的h5活动制作平台我们做了这个码良平台。现在码良的平台现在支撑着运满满每天新增5-10个的新活动页面的需求，已有活动模板的活动95% 可以营销人员通过模板创建，做些样式或图片的修改，然后发布到线上，整个过程就几分钟。活动的模板和组件模板也在不断沉淀，相信沉淀一段时间后随着模板越来越全，对营销活动的快速制作和可选择性都会更强。</p>
    </div>
  )
}

export default Think;