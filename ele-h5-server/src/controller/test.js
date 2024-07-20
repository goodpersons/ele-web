const test = require('../../data/test')

module.exports = (req, res, next) => {
    const testData = test()
    testData.desc = '我是自定义测试数据'
    res.stutss = 200
    res.success(testData)
    // res.fail('失败')
}
