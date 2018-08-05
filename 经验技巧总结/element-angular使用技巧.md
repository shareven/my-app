##引入element-angular
1. 在app.modulle.ts中引入
```ts
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { ElModule } from 'element-angular';
```
2. 在/src/styles.scss中引入
```scss
    @import '~element-angular/theme/index.css';
```

##修改组件默认样式
1. 你可以通过 el-class 指令为组件添加className，如` [el-class]="'myClass'" `。先尝试在组件内scss文件内设置样式,如果无效，则定义到全局的/src/styles.scss里
    
```scss
    .myClass {
        text-align: left;
        li{
            color: #f29;
            background: #f29;
        }
    }
```