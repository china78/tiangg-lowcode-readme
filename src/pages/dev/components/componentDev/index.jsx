import React from 'react';
import { Typography, Divider, Tag } from 'antd';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import componentDev01 from '../../../../assets/imgs/componentDev01.png';
import componentDev02 from '../../../../assets/imgs/componentDev02.png';
import componentDev03 from '../../../../assets/imgs/componentDev03.png';
import componentDev04 from '../../../../assets/imgs/componentDev04.png';
import componentDev05 from '../../../../assets/imgs/componentDev05.png';
import componentDev06 from '../../../../assets/imgs/componentDev06.png';
import componentDev07 from '../../../../assets/imgs/componentDev07.png';
import componentDev08 from '../../../../assets/imgs/componentDev08.png';
import componentDev09 from '../../../../assets/imgs/componentDev09.png';
import componentDev10 from '../../../../assets/imgs/componentDev10.png';
// import componentDev11 from '../../../../assets/imgs/componentDev11.png';
// import componentAttr02 from '../../../../assets/imgs/componentAttr02.png';
// import componentAttr03 from '../../../../assets/imgs/componentAttr03.png';
// import componentAttr04 from '../../../../assets/imgs/componentAttr04.png';
const { Title } = Typography;

const ComponentDev = () => {
  const data1 = `npm install tiangg-cli -g`;
  const data2 = `# 设置为公司组件仓库 http://lowcode.zjrongxiang.com
tiangg-config registry http://lowcode.zjrongxiang.com

# 设置为自己的服务  www.xx.com 可以是域名，可以是ip （该配置配置好后会在publish组件的时候调用 https://www.xx.com/api 下面的接口。'注意这里的域名是你自己的部署好的的访问地址的域名'）
tiangg-config registry https://www.xx.com`;
  const data3 = `tiangg-config token DEcTjQRFbiYitFydhC2m5kd8JHieQrsztrbiPaz5DbHk68AWbmMBe7ShXw2ncwp5`;
  const data4 = `tiangg create my-component`;
  const data5 = `import when from 'when'`;
  const data6 = `// tiangg-lib 并非是一个真正的 npm 包，在构建时被 webpack 解析为外部依赖，实际访问的是 'window.$GP'对象
import { Util } from 'tiangg-lib'
export default {
  mounted: async function () {
    await Util.loadJs('https://cdn.bootcss.com/echarts/4.0.3/echarts.min.js')
  }
}`;
  const data7 = `<template>
<div class="component drumpad">
  // ...
</div>
</template>

<script>
import { VueExtend } from 'tiangg-lib'

export default {
  mixins: [VueExtend.mixin],
  name: 'drumpad',
  props: {
    // 为组件定义了三个配置属性
    rows: {
      type: [Number, String],
      editor: {
        label: '行数', // 属性中文名称
        type: 'number' // 使用编辑器预定义输入类型
      }
    },
    cols: {
      type: [Number, String],
      editor: {
        label: '列数', // 属性中文名称
        desc: "设置格子的列数", // 属性描述信息
        type: 'number' // 使用编辑器预定义输入类型
      }
    },
    pads: { // 所有格子的配置信息
      type: Array,
      editor: {
        ignore: true // 在 *属性配置组件* 中实现该属性的输入逻辑和样式
      }
    },
    // ...
  },
  methods: {
    // ...
  }
}`;
  const data8 = `// 属性配置面板配置 'pads' 属性，pads 是一个list，每一个元素对应一个格子的配置，并可以对这些元素进行增、删、复制操作
<template>
  <div class="component-editor">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>格子块</span>
        <el-button style="float: right; padding: 3px 0;" type="text" @click="addItem">
          添加一个
        </el-button>
        <el-button style="float: right; padding: 3px 0; margin-right:20px;"
          type="text" @click="copyItem"
          v-show="componentInfo.pads && componentInfo.pads.length >= 1">
          复制前一项
        </el-button>
      </div>
      <el-collapse v-show="componentInfo.pads && componentInfo.pads.length">
        <el-collapse-item :title="'格子' + (index + 1)"
          v-for="(item, index) in componentInfo.pads" :key="index">
          <el-form :model="item" label-width="100px" size="mini">
            <el-form-item label="未选中图片">
              <attr-resource type="image" :url.sync="item.deactiveImg"></attr-resource>
            </el-form-item>
            <el-form-item label="选中图片">
              <attr-resource type="image" :url.sync="item.activeImg"></attr-resource>
            </el-form-item>
            <el-form-item label="点击操作">
              <attr-function :content.sync="item.activeAction"></attr-function>
            </el-form-item>
            <el-form-item label="扩展数据">
              <el-input type='textarea' v-model="item.extra"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-button type="danger" size='medium'
                @click="deleteItem(item, index)">移除当前项</el-button>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'tiangg-editor',
    props: {
      componentInfo: Object
    },
    methods: {
      // 增加一个格子项
      addItem: function () {
        // 如果不存在 pads 属性，应主动添加响应式属性
        if (!this.componentInfo.pads) this.$set(this.componentInfo, 'pads', [])
        this.componentInfo.pads.push({
          deactiveImg: 'http://iph.href.lu/160x40?text=失活',
          activeImg: 'http://iph.href.lu/160x40?text=激活&fg=FF0000&bg=CCCCCC',
          activeAction: null,
          correlationId: '',
          href: '',
          extra: ''
        })
      },
      // 复制一个格子项
      copyItem () {
        var item = this.componentInfo.pads[this.componentInfo.pads.length - 1]
        if (!item || typeof item !== 'object') return this.addItem()
        this.componentInfo.pads.push(JSON.parse(JSON.stringify(item)))
      },
      // 移除一个格子项
      deleteItem (item, index) {
        this.componentInfo.pads.splice(index, 1)
      }
    }
  }
</script>`;
  const data9 = `# cd <component-dir>
tiangg-build`;
  const data10 = `# 设置为公司组件仓库 lowcode.zjrongxiang.com
  tiangg config registry http://lowcode.zjrongxiang.com/`;
  const data11 = `tiangg publish -t [access-token]`;
  return (
    <div>
      <Title level={2}>组件开发</Title>
      <p>组件是整个系统的基石, 重要中的重要。</p>
      <div id="dev-component-1" className="section">
        <Title level={3}>脚手架安装</Title>
        <Title level={3}><code>tiangg-cli</code></Title>
        <Divider />
        <p>tiangg-cli 是基于 nodejs 的命令行工具，提供了覆盖组件开发全流程的工具，我们一般通过该命令进行 配置信息，创建模板组件,构建发布组件</p>
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
          />
        </div>
        <div className="imgBox"><img style={{ width: '60%' }} src={componentDev01} alt="componentDev01" /></div>
      </div>
      <div id="dev-component-2" className="section">
        <Title level={3}>设置<code>registry</code></Title>
        <Divider />
        <p>tiangg-lowcode，可以私有部署，当然自己开发的组件也需要部署到你自己的私有服务，因此需要设置registry指明向哪个组件仓库来提交组件。</p>
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
      <div id="dev-component-3" className="section">
        <Title level={3}>设置<code>token</code></Title>
        <Divider />
        <p><code>token</code> 即用户凭据，可以在tiangg-lowcode后台（左侧菜单-用户设置-access）取得，用来确认开发者身份。如未提供 token 则组件不能发布成功。</p>
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
      <div id="dev-component-4" className="section">
        <Title level={3}>创建组件</Title>
        <Divider />
        <p>组件的丰富度，决定lowcode的意义。那么你需要自己开发组件。如何开始呢。就从下面通过脚手架创建组件模板开始。</p>
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
        <p>根据提示输入组件名、描述，选择组件分类</p>
        <div className="imgBox"><img style={{ width: '60%' }} src={componentDev02} alt="componentDev02" /></div>
        <p>项目文件结构如下</p>
        <div className="imgBox"><img style={{ width: '60%' }} src={componentDev03} alt="componentDev03" /></div>
        <p>可以看到，这是一个典型的 vue 工程。没错，tiangg组件本身与普通 vue 组件无异，只是在普通 vue 组件的基础上，我添加了一些约定字段，使组件能被tiangg编辑器识别、配置。</p>
        <p><code>/src/index.vue</code> 即为刚才创建的组件。组件开发的主要工作就是针对这个组件进行功能开发。</p>
        <p><code>/src/example.vue</code> 提供了一些简单的代码示例和说明。</p>
        <p><code>preview/</code> 目录下的文件是供开发预览使用的，最终发布的时候是不会打包此文件夹文件的，必要时可以按需修改其中的代码，比如测试组件传参（props）。</p>
        <p><code>icon.png</code> 将作为组件图标随组件发布至组件仓库，您应该将此文件替换为自己的组件图标。</p>
        <p><code>[README.md](http://readme.md)</code> 是组件的详细使用说明，支持 markdown，也会随组件发布上传至组件仓库，在tiangg编辑器中可以查看组件说明。</p>
        <p>不知道你有没有注意到创建组件时，最后一步是选择“是否创建属性配置组件“，所谓属性配置组件就是可以在编辑器中使用此自定义组件来对组件的属性进行配置，而不是使用编辑器默认提供的。<code>editor/</code> 文件夹下就是属性配置组件，事实上，无论你选择创建此组件与否，这个文件夹都存在，区别仅在于，选择“是“的时候，webpack entry 配置会包含<code>editor/index.vue</code> 文件，反之不包含，因此，当你发现自己需要一个自定义属性配置组件而此前未选择“是”的时候，在 <code>webpack.config.js</code> 中 <code>entry</code> 字段下添加 <code>editor: './editor/index.vue'</code> 即可。</p>
      </div>
      <div id="dev-component-5" className="section">
        <Title level={3}>组件开发</Title>
        <Divider />
        <p>tiangg组件基于 vue ，在对vue 框架有一定了解后就可以轻松开发tiangg组件了。</p>
        <div className="imgBox"><img style={{ width: '90%' }} src={componentDev04} alt="componentDev04" /></div>
        <p>上图中，安装了依赖并启动了项目，简单修改组件展示了“tab-component”</p>
        <p>下图中，绿色部分对应组件的开发模块，位置在<code>src/index</code>, 蓝色部分为编辑器部分，位置在<code>editor/index</code></p>
        <div className="imgBox"><img style={{ width: '100%' }} src={componentDev05} alt="componentDev05" /></div>
        <p>截止目前仍然还是一个普通vue组件的样子，接受几个参数 activeColor 和 color 和 tabs，如何让编辑器能识别它所需参数并提供合理的输入控件呢，接着看对它的改造</p>
        <div className="imgBox"><img style={{ width: '100%' }} src={componentDev06} alt="componentDev06" /></div>
        <p>可以看到，我们为<code>activeColor</code> 参数和 <code>color</code> 参数都添加了一个 <code>editor</code> 字段，并指定了 <code>editor.type</code> 和 <code>editor.label</code> ，<code>type</code>为 “String” 代表了编辑器应该为该参数提供一个文本输入器，<code>label</code> 为“文本”表示在编辑器中应将该参数显示为“文本”，更多的 <code>type</code> 输入类型请参考文档。</p>
        <p><code>/src/index.vue</code> 即为刚才创建的组件。组件开发的主要工作就是针对这个组件进行功能实现。</p>
        <p>若之前选择了“创建属性配置组件”，<code>/editor/index.vue</code> 即为属性配置组件。属性配置组件用于在编辑器中自定义组件配置面板。</p>
        <p>tiangg组件本身与普通 vue 组件无异，只是在普通 vue 组件的基础上，我们添加了一些约定字段，使组件能被tiangg编辑器识别、配置。这些约定字段其实已经在脚本开发部分介绍过了，见自定义属性、自定义方法</p>
        <p>除此以外，我还内置了一些工具函数/服务。</p>
        <p>如过滤器、Notice 弹框服务、模板字符串编译</p>
        <p>对于外部资源的引入，目前有两种方案，一种是通过 <code>npm</code> 包引入如</p>
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
        <p>此种方案使用起来比较方便，但是也有明显的缺点，引入的包会直接被编译到组件内部，可能会造成组件体积过于庞大。</p>
        <p>另外还有一种资源引入的方式，资源cdn路径，这种方式需要借助于 <code>tiangg-lib/Util</code> 的 <code>loadJs方法</code></p>
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
        <p>顺便提醒，css预编译默认支持<code>less</code> 和 <code>stylus</code>，如有其他需求，可自行安装相应 <code>loader</code>；媒体资源支持<code>mp3</code>、<code>mp4</code>、各类型图片、<code>iconfont</code>。</p>
      </div>
      <div id="dev-component-6" className="section">
        <Title level={3}>属性配置组件</Title>
        <Divider />
        <p>前面已经提到过属性配置组件，我们来看一个实现多行多列的格子块组件的例子</p>
        <p>组件代码片段如下</p>
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
        <p>属性配置组件代码片段</p>
        <div className="codeBox">
          <CodeMirror
            value={data8}
            options={{
              lineNumbers: true,
              mode: 'javascript',
              lineWiseCopyCut: true,
              lineWrapping: true,
              theme: 'material'
            }}
          />
        </div>
        <Tag color="cyan" style={{ padding: '10px 20px' }}>
          <p>TIP</p>
          <p>属性配置组件中可直接使用 element-ui 提供的组件，在组件开发环境已提前引入。</p>
        </Tag>
      </div>
      <div id="dev-component-7" className="section">
        <Title level={3}>构建组件</Title>
        <Divider />
        <p>构建组件是组件发布的前置操作，虽然发布操作会自动构建组件，我们还是提供了构建组件的命令供开发者验证自己的组件是否存在构建方面的问题</p>
        <div className="codeBox">
          <CodeMirror
            value={data9}
            options={{
              lineNumbers: true,
              mode: 'javascript',
              lineWiseCopyCut: true,
              lineWrapping: true,
              theme: 'material'
            }}
          />
        </div>
        <div className="imgBox"><img style={{ width: '60%' }} src={componentDev07} alt="componentDev07" /></div>
        <div className="imgBox"><img style={{ width: '60%' }} src={componentDev08} alt="componentDev08" /></div>
      </div>
      <div id="dev-component-8" className="section">
        <Title level={3}>发布组件</Title>
        <Divider />
        <p>组件发布前，有一些组件配置需要确认。大部分配置集中于工程根目录 package.json 文件中，</p>
        <p>package.json内 <code>version</code> 字段将作为组件版本号，发布组件时，如提示数据库中已有该版本记录，则可能需要修改此版本号, 推荐<code>npm verison patch</code>升级版本</p>
        <p>package.json内 <code>private</code> 字段指定了组件的可见性，为 <code>true</code> 时，仅自己可见，为 <code>false</code> 时公开可见。如未提供（为空），在发布组件时，会主动再次询问</p>
        <p>package.json内 <code>label</code> 字段将作为组件易读名称在编辑器内显示，如未提供，会使用 <code>name</code> 字段</p>
        <p>package.json内 <code>description</code> 字段将作为组件描述，简要说明组件用途</p>
        <p>package.json内 <code>style</code> 字段定义了组件外层包裹节点的默认样式，决定组件被添加到编辑器时，初始大小、位置等，可为空</p>
        <p>根目录 <code>icon.png</code> 将作为组件图标展示，请务必提供</p>
        <p>根目录 <code>README.md</code> 为一个 markdown 文件，将自动编译为 html ，作为组件详细说明文件展示</p>
        <p>合理配置上述字段和文件以后，执行发布</p>
        <p>如果此前没有设置过组件仓库，请先执行设置命令</p>
        <div className="codeBox">
          <CodeMirror
            value={data10}
            options={{
              lineNumbers: true,
              mode: 'javascript',
              lineWiseCopyCut: true,
              lineWrapping: true,
              theme: 'material'
            }}
          />
        </div>
        <p>执行发布（含自动构建）</p>
        <div className="codeBox">
          <CodeMirror
            value={data11}
            options={{
              lineNumbers: true,
              mode: 'javascript',
              lineWiseCopyCut: true,
              lineWrapping: true,
              theme: 'material'
            }}
          />
        </div>
        <p>其中 <code>access-token</code> 请在tiangg管理后台——用户设置获取。</p>
        <div className="imgBox"><img style={{ width: '60%' }} src={componentDev09} alt="componentAttr09" /></div>
        <div className="imgBox"><img style={{ width: '60%' }} src={componentDev10} alt="componentAttr10" /></div>
        <p>这就发布成功了，去编辑器的【组件列表】使用一下吧</p>
      </div>
    </div>
  )
}

export default ComponentDev;