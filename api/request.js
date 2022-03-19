const baseUrl ='http://localhost:3000'
const request=(url='',data={},type='get')=>{
      return new Promise((resolve, reject)=>{
        uni.request({
          url:baseUrl+url,
          data:data,
          method:type
        }).then((response)=>{
          // const[err,data]=response
          resolve(response)
          })
        .catch((err)=>{reject(err)})
      })
}
export default request
