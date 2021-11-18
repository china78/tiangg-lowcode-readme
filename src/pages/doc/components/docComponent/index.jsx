import React from 'react';
import { Typography, Divider } from 'antd';
import docComponent01 from '../../../../assets/imgs/docComponent01.png';
import docComponent02 from '../../../../assets/imgs/docComponent02.png';
import docComponent03 from '../../../../assets/imgs/docComponent03.png';
import docComponent04 from '../../../../assets/imgs/docComponent04.png';
import docComponent05 from '../../../../assets/imgs/docComponent05.png';
import docComponent06 from '../../../../assets/imgs/docComponent06.png';
import docComponent07 from '../../../../assets/imgs/docComponent07.png';
import docComponent08 from '../../../../assets/imgs/docComponent08.png';
import docComponent09 from '../../../../assets/imgs/docComponent09.png';
import docComponent10 from '../../../../assets/imgs/docComponent10.png';
import docComponent11 from '../../../../assets/imgs/docComponent11.png';
const { Title } = Typography;

const DocComponent = () => {
  return (
    <div>
      <Title level={2}>组件</Title>
      <div className="imgBox"><img style={{ width: '40%' }} src={docComponent01} alt="docComponent01" /></div>
      <p>组件是构成页面的基础元素，每个组件各自承担着特异的功能，比如图片组件可以呈现一张图片，文本组件可以展示一段文本。一系列组件按照一定的位置和样式排布在页面内，再加以一定的配置，最终就组成了页面。</p>
      <p>组件按照抽象的粒度以及功能可以划分为两类：基础组件、合成组件。</p>
      <p>在具体介绍各组件以前，先介绍一下组件相关的信息和操作。</p>
      <div id="doc-docComponent-1" className="section">
        <Title level={3}>组件信息</Title>
        <Divider />
        <p>直接点击组件上的文字即可在中间的页面操作区显示组件详情一栏专门展示组件的信息</p>
        <div className="imgBox"><img style={{ width: '70%' }} src={docComponent02} alt="docComponent02" /></div>
      </div>
      <div id="doc-docComponent-2" className="section">
        <Title level={3}>组件操作</Title>
        <Divider />
        <div className="imgBox"><img style={{ width: '30%' }} src={docComponent03} alt="docComponent03" /></div>
        <div className="imgBox"><img style={{ width: '30%' }} src={docComponent04} alt="docComponent04" /></div>
        <div className="section">
          <Title level={4}>添加</Title>
          <p>方法1. 直接点击组件。此操作会添加组件至当前激活(选中)组件的下一级。</p>
          <p>方法2. 按住组件拖动至页面操作区某组件上方。此操作会添加组件至前述某组件的下级。</p>
        </div>
        <div className="section">
          <Title level={4}>选中</Title>
          <p>方法1. 点击组件区下方的组件树某节点，节点高亮即该组件被选中</p>
          <p>方法2. 点击页面操作区某组件，周围出现操作点即该组件被选中</p>
          <p>方法3. 鼠标右键点击操作区某组件。同方法2的区别在于，此操作在选中组件的同时会打开右键菜单。</p>
        </div>
        <div className="section">
          <Title level={4}>缩放</Title>
          <p>选中组件，按住四面八方8个操作点拖动即可放大缩小，若同时按住 shift 键，可按比例放大缩小，至目标大小，松开鼠标。</p>
        </div>
        <div className="section">
          <Title level={4}>移动</Title>
          <p>选中组件，按住正中的操作点拖动，即可移动组件，至目标位置，松开鼠标。</p>
        </div>
        <div className="section">
          <Title level={4}>旋转</Title>
          <p>选中组件，按住顶部绿色操作点环向拖动，即可旋转组件，至目标角度，松开鼠标。</p>
        </div>
        <div className="section">
          <Title level={4}>删除</Title>
          <p>除上述操作外，组件属性和样式设置也是制作页面的重要一环</p>
          <p>各个组件的配置项下文会详述，样式设置见后文：样式。</p>
        </div>
        <div className="section">
          <Title level={4}>其他配置和样式</Title>
          <p>方法1. 鼠标移至组件树中待删除组件上方，出现一排操作按钮，点击垃圾桶状图标即可删除该组件及下级所有组件</p>
          <p>方法2. 在页面操作区，鼠标右击组件，出现右键菜单，点击“删除”即可删除该组件及下级所有组件</p>
        </div>
      </div>
      <div id="doc-docComponent-3" className="section">
        <Title level={3}>基础组件</Title>
        <Divider />
        <p>基础组件是最基本的页面元素，如按钮、图片、文本、富文本等。下文一一展开说明。</p>
        <div className="section">
          <Title level={4}>按钮</Title>
          <p>按钮主要用于触发点击事件。</p>
          <p>配置项：</p>
          <p><b>•</b>【按钮文字】输入显示文字</p>
          <p><b>•</b>【按钮type】根据使用场景，选择不同的按钮主题颜色</p>
          <p><b>•</b>【点击事件】点击时触发的操作，默认的 目标对象 为当前节点（也可点击下拉框选择其他按钮节点来配置点击事件），然后选择点击后对应的方法。</p>
          <p><b>•</b>【事件管理】可添加多种触发事件方式，如：click、dbclick、change、select、mousemove等。</p>
          <p><b>•</b> 注意：选择点击操作或配置事件方法时可能需要填写相应操作的参数</p>
        </div>
        <div className="section">
          <Title level={4}>图片</Title>
          <p>配置项：</p>
          <p><b>•</b>【图片】 输入 图片地址 或 上传 图片文件</p>
          <p><b>•</b>【点击操作】选择 点击时触发的操作，同按钮组件</p>
        </div>
        <div className="section">
          <Title level={4}>文字</Title>
          <p>配置项：</p>
          <p><b>•</b>【文字内容】 输入 文本内容，文本样式可至样式-文本样式设置</p>
          <p><b>•</b>【点击操作】选择 点击时触发的操作，同按钮组件</p>
        </div>
        <div className="section">
          <Title level={4}>富文本</Title>
          <p>配置项：</p>
          <p><b>•</b>【文字内容】 输入 文本内容，文本可使用富文本编辑器编辑</p>
        </div>
        <div className="section">
          <Title level={4}>音频</Title>
          <p>配置项：</p>
          <p><b>•</b>【音频】 输入 音频地址 或 上传 音频文件</p>
          <p><b>•</b>【音频图标】 输入 图片地址 或 上传 图片文件，用作音频组件的封面，音频播放状态下自动旋转</p>
          <p><b>•</b>【自动播放】 切换 是否允许音频自动开始播放，注意，暂时对iOS设备无效</p>
          <p><b>•</b>【显示默认播放按钮】 切换 是否显示默认播放控件</p>
          <p><b>•</b>【循环播放】 切换 是否需要循环播放</p>
        </div>
        <div className="section">
          <Title level={4}>输入框</Title>
          <p>配置项：</p>
          <p><b>•</b>【默认值】 输入 输入框内默认的内容</p>
          <p><b>•</b>【占位符】 输入 输入框内无内容时显示的文字</p>
          <p><b>•</b>【类型】 选择 输入框输入内容的类型（文本、数字、密码</p>
          <p><b>•</b>【只读】 切换 输入框是否能被编辑</p>
          <p><b>•</b>【最多】 输入 最多能输入多少个字符，-1为不限</p>
        </div>
      </div>
      <div id="doc-docComponent-4" className="section">
        <Title level={3}>组件封装</Title>
        <Divider />
        <div className="imgBox"><img style={{ width: '70%' }} src={docComponent05} alt="docComponent05" /></div>
        <div className="imgBox"><img style={{ width: '70%' }} src={docComponent06} alt="docComponent06" /></div>
        <div className="imgBox"><img style={{ width: '70%' }} src={docComponent07} alt="docComponent07" /></div>
        <div className="imgBox"><img style={{ width: '70%' }} src={docComponent08} alt="docComponent08" /></div>
        <p>上面演示了如何将组件进行封装，组件树中标有小箱子图标的组件就是封装过的组件。被封装的组件在组件树中不再暴露其子孙组件，在场景画布中也不能对子孙组件进行操作，从而形成一个整体。在对封装组件进行缩放操作的时候，子孙组件的大小被等比缩放、位置被线性变换。</p>
        <p>组件封装看似简单，带来的改变却是多重的。首先，通过对整个组件树不同功能块进行分别封装，页面结构变得简单清晰；功能块封装以后只暴露出顶层组件，可以有效减少运营人员的误操作，避免因为缺乏必要了解和敬畏之心而随便删改特定功能块的构成组件；功能块封装以后，用户配置参数可以集中在顶层组件（子孙组件使用数据总线获取配置），配置项不必且不能再四散到组件树各处。</p>
        <p>操作上，可以以图片中右键菜单的方式进行”解封“和"解除封装"，也可以使用双击组件树中目标组件的方式来”解封“和”解封“</p>
      </div>
      <div id="doc-docComponent-5" className="section">
        <Title level={3}>合成组件</Title>
        <Divider />
        <p>前面介绍了组件封装，封装后的组件仅限于当前页面复用（复制使用），那么有没有一种方法使封装组件变成普通组件一样，无限制的在其他页面使用呢？答案当然是有，合成组件就是专门干这个的。</p>
        <div className="section">
          <Title level={4}>如何生成合成组件</Title>
          <p>首先我们的页面都是由组件组成的，组件之间有上下级关系，也有同级关系。那么我们要想生成合成组件，可以直接选择一个层级的组件右键打开操作浮层，直接选择另存为合成组件即可，接下来我们就可以在左上角的合成组件tab栏来查看我们生成的合成组件，鼠标悬浮在合成组件上点击出现的使用按钮即可使用</p>
          <div className="imgBox"><img style={{ width: '70%' }} src={docComponent09} alt="docComponent09" /></div>
          <div className="imgBox"><img style={{ width: '70%' }} src={docComponent10} alt="docComponent10" /></div>
          <div className="imgBox"><img style={{ width: '50%' }} src={docComponent11} alt="docComponent11" /></div>
        </div>
        <div className="section">
          <Title level={4}>使用合成组件</Title>
          <p>切换到合成组件面板（通常在组件面板旁边），搜索你需要的组件，点击使用即可。</p>
          <p>实际上，合成组件就是一种封装组件，可以看到在选取使用了合成组件以后，在组件树中仅产生了一个标有小箱子图标的组件。</p>
        </div>
      </div>
    </div>
  )
}

export default DocComponent;