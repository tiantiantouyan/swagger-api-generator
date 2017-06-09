// {
//   key: model的key,
//   initialProps: 初始导入给组件的数据,
//   select: 请求成功后的数据筛选函数,
//   error: 错误数据筛选函数
// }

// 使用时将FFModel文件夹名称放入到页面的model下
// 本文件更新时间：09-06-2017 13:40

const FFModelCombine = [
	// ------鑾峰彇瀹㈡埛淇℃伅鍒楄〃-------
	{
		key: "GetV1Customers",
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
	// ------鑾峰彇鍗曚竴瀹㈡埛淇℃伅-------
	{
		key: "GetCustomer",
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
	// ------瀵规垜鐨勫叧娉ㄦ儏鍐�-------
	{
		key: "GetCustomerAttention",
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
		key: "GetCustomerRead",
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
