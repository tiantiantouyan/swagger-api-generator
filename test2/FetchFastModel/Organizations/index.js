// {
//   key: model的key,
//   initialProps: 初始导入给组件的数据,
//   select: 请求成功后的数据筛选函数,
//   error: 错误数据筛选函数
// }

// 使用时将FFModel文件夹名称放入到页面的model下
// 本文件更新时间：09-06-2017 13:40

const FFModelCombine = [
	// ------鏈烘瀯涓殑瀹㈡埛淇℃伅-------
	{
		key: "GetOrganization",
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
	},
	// ------鏈烘瀯鎵€鏈夊鎴峰鎴戠殑鍏虫敞鎯呭喌-------
	{
		key: "GetOrganizationAttention",
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
	},
	// ------闃呰鏄庣粏-------
	{
		key: "GetOrganizationRead",
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
