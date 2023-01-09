const Controller = require('egg').Controller
class HomeController extends Controller {
    async index() {
        // 调用封装在helper里的公共工具方法
        console.log(this.ctx.helper.hello());
        console.log(this.app.foo);
        // 从service调用方法,获取数据
        const user = this.service.user.getUserList()
        // 渲染模板
        await this.ctx.render('index.tpl', {
            // 传递模板需要的数据
            message: 'world',
            user: user
        })
    }
    foo() {
        this.ctx.body = 'bar'
    }
}
module.exports = HomeController