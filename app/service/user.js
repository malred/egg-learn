const Service = require('egg').Service
class UserService extends Service {
    getUserList() {
        // 操作数据库
        return [
            { name: '张三', age: 19 },
            { name: '李四', age: 20 },
        ]
    }
}
module.exports = UserService