const {
    override,
    addWebpackAlias,
    fixBabelImports, // 按需加载配置函数
    addBabelPlugins // babel插件配置函数
} = require('customize-cra')
const path = require('path')
module.exports = override(
    addBabelPlugins( // 支持装饰器 @
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true
            }
        ]
    ),
    addWebpackAlias({  // 定义别名
        ["@"]: path.resolve(__dirname, "src"),        
        ["pages"]: path.resolve(__dirname, "src/pages"),               
        ["components"]: path.resolve(__dirname, "src/components")   
    }),
    fixBabelImports('import', { // antd 按需加载
        libraryName: 'antd-mobile',
        style: 'css'
    })
)
