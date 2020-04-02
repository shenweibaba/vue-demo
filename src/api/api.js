//进行远程调用
import axios from 'axios'
//包装param参数
import qs from 'qs'
// 声明基础访问地址
axios.defaults.baseURL = 'http://192.168.50.142:8050/'

export default {
    queryInfo : (pageNum,pageSize) => {
      return axios.get(`http://192.168.50.142:8050/mytest` + `/projectInfo/queryProjectInfoListPaging`, {
        params: {
          token: "123",
          pageNum: pageNum,
          pageSize: pageSize,
        }
      }).then(resolve => {
        let data = resolve.data;
        if (data.success !== 1) {
          throw new Error(data.msg);
        } else {
          return data;
        }
      });
    }
}
