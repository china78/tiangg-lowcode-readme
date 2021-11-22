export const menus = [
  {
    key: 'doc',
    name: '使用手册',
    children: [
      {
        key: 'manage',
        title: '项目管理',
        children: [
          {
            key: 'doc-manage-0',
            name: '简介',
          },
          {
            key: 'doc-manage-1',
            name: '入口',
          },
          {
            key: 'doc-manage-2',
            name: '概念',
          },
          {
            key: 'doc-manage-3',
            name: '新建项目',
          }
        ]
      },
      {
        key: 'workArea',
        title: '工作区概览',
        children: [
          {
            key: 'doc-workArea-0',
            name: '简介',
          },
          {
            key: 'doc-workArea-1',
            name: '组件',
          },
          {
            key: 'doc-workArea-2',
            name: '组件树',
          },
          {
            key: 'doc-workArea-3',
            name: '页面模版',
          },
          {
            key: 'doc-workArea-4',
            name: '页面操作',
          },
          {
            key: 'doc-workArea-5',
            name: '组件配置',
          }
        ]
      },
      {
        key: 'pageEdit',
        title: '页面操作',
        children: [
          {
            key: 'doc-pageEdit-0',
            name: '简介',
          },
          {
            key: 'doc-pageEdit-1',
            name: '组场景',
          },
          {
            key: 'doc-pageEdit-2',
            name: '组件详情',
          },
          {
            key: 'doc-pageEdit-3',
            name: '页面设置',
          }
        ]
      },
      {
        key: 'pageTemplate',
        title: '页面模版',
        children: [
          {
            key: 'doc-pageTemplate-0',
            name: '简介',
          },
          {
            key: 'doc-pageTemplate-1',
            name: '如何生成页面模版',
          }
        ]
      },
      {
        key: 'docComponent',
        title: '组件',
        children: [
          {
            key: 'doc-docComponent-0',
            name: '简介',
          },
          {
            key: 'doc-docComponent-1',
            name: '组件信息',
          },
          {
            key: 'doc-docComponent-2',
            name: '组件操作',
          },
          {
            key: 'doc-docComponent-3',
            name: '基础组件',
          },
          {
            key: 'doc-docComponent-4',
            name: '组件封装',
          },
          {
            key: 'doc-docComponent-5',
            name: '合成组件',
          }
        ]
      },
      {
        key: 'canvas',
        title: '画布',
        children: [
          {
            key: 'doc-canvas-0',
            name: '简介',
          },
          {
            key: 'doc-canvas-1',
            name: '移动端画布',
          },
          {
            key: 'doc-canvas-2',
            name: 'PC端画布',
          }
        ]
      },
      {
        key: 'componentTree',
        title: '组件树',
        children: [
          {
            key: 'doc-componentTree-0',
            name: '简介',
          },
          {
            key: 'doc-componentTree-1',
            name: '组件树相关的操作',
          }
        ]
      },
      {
        key: 'componentAttribute',
        title: '组件属性',
        children: [
          {
            key: 'doc-componentAttribute-0',
            name: '简介',
          },
          {
            key: 'doc-componentAttribute-1',
            name: '组件更新',
          },
          {
            key: 'doc-componentAttribute-2',
            name: '基础信息',
          },
          {
            key: 'doc-componentAttribute-3',
            name: '属性设置',
          },
          {
            key: 'doc-componentAttribute-4',
            name: '事件管理',
          },
        ]
      },
      {
        key: 'syles',
        title: '样式',
        children: [
          {
            key: 'doc-syles-0',
            name: '简介',
          },
          {
            key: 'doc-syles-1',
            name: '基础模式',
          },
          {
            key: 'doc-syles-2',
            name: '高级模式',
          },
          {
            key: 'doc-syles-3',
            name: '代码',
          }
        ]
      },
      {
        key: 'docScripts',
        title: '脚本',
        children: [
          {
            key: 'doc-docScripts-0',
            name: '简介',
          },
          {
            key: 'doc-docScripts-1',
            name: '使用',
          },
          {
            key: 'doc-docScripts-2',
            name: '脚本相关操作',
          },
          {
            key: 'doc-docScripts-3',
            name: '开发',
          },
          {
            key: 'doc-docScripts-4',
            name: '示例',
          }
        ]
      }
    ]
  },
  {
    key: 'dev',
    name: '开发',
    children: [
      {
        key: 'desc',
        title: '介绍'
      },
      {
        key: 'script',
        title: '脚本开发',
        children: [
          {
            key: 'dev-script-0',
            name: '简介',
          },
          {
            key: 'dev-script-1',
            name: '添加自定义属性',
          },
          {
            key: 'dev-script-2',
            name: '添加自定义方法',
          },
          {
            key: 'dev-script-3',
            name: '组件实例的通用方法和属性',
          }
        ]
      },
      {
        key: 'component',
        title: '脚本开发',
        children: [
          {
            key: 'dev-component-0',
            name: '简介',
          },
          {
            key: 'dev-component-1',
            name: '安装 tiangg-cli',
          },
          {
            key: 'dev-component-2',
            name: '设置 registry',
          },
          {
            key: 'dev-component-3',
            name: '设置 token',
          },
          {
            key: 'dev-component-4',
            name: '创建组件',
          },
          {
            key: 'dev-component-5',
            name: '组件开发',
          },
          {
            key: 'dev-component-6',
            name: '属性配置组件',
          },
          {
            key: 'dev-component-7',
            name: '构建组件',
          },
          {
            key: 'dev-component-8',
            name: '发布组件',
          }
        ]
      }
    ]
  },
  {
    key: 'think',
    name: '系统核心实现思路',
    children: [
      {
        key: 'desc',
        title: '系统核心实现思路'
      }
    ]
  }
]