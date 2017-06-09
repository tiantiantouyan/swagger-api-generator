// {
//   key: model的key,
//   initialProps: 初始导入给组件的数据,
//   select: 请求成功后的数据筛选函数,
//   error: 错误数据筛选函数
// }

// 使用时将FFModel文件夹名称放入到页面的model下
// 本文件更新时间：09-06-2017 13:40

const FFModelCombine = [
	// ------鑾峰彇绛涢€夐」淇℃伅-------
	{
		key: "GetV1FilterItems",
		initialProps: {
			data: [
			]
		},
		select: function select(res) {
        return {
          data: []
        };
      },
		error: function error(err) {
        return err;
      }
	}
]

module.exports = FFModelCombine
