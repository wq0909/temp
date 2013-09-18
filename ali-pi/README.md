静态扫描：使用htmlHint、cssLint、jsHint对页面上的html、css、js进行扫描。

兼容性扫描：使用`compatibility-detector`检测网页中的兼容性问题。

前端自动化：在firefox扩展中调用PI提供的服务，在服务器上执行当前页面的自动化，并返回结果

多浏览器截图：在firefox扩展中xbrower服务，对比当前页面在各种浏览器下的截图，并返回最终的对比结果。

资源有效性检查：对`<a>、<img>`标签做有效性检查，失败标红，通过标绿，灰色为js。