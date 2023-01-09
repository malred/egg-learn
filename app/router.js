/**
 * egg 路由配置
 * 
 * @param app 是eggjs应用实例
 */
module.exports = app => {
    const { router, controller } = app
    // 配置路由规则
    router.get('/', controller.home.index)
    router.get('/foo',controller.home.foo)
}