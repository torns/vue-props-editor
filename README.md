## vue组件props编辑器

vue + ts 的练手项目

# 运行test
```
npm run test
```

# 打包准备发布
```
npm run build
```

# 打包分析
```
npm run report
```

# 发布npm
```
npm publish
```

# 遇到最大的坑

webpack打包的ES6代码，import获取的值为空/undefined
https://segmentfault.com/q/1010000012933464?sort=created
有一个libraryTarget的属性，作用是定义模块运行的方式，将它的值设为umd，则问题解决！
