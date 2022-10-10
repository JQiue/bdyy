import superagent from "superagent";

const index_url: string =
  "https://eplusm.linkingcloud.cn/Html/MicroOfficialSite/Public/7ae5a8e2-e718-4690-a9fc-7462f405b0b4.html";

// superagent
//   .get(index_url)
//   .set("Host", "www.114yygh.com")
//   .set(
//     "Referer",
//     "https://eplusm.linkingcloud.cn/Html/MicroOfficialSite/Public/7ae5a8e2-e718-4690-a9fc-7462f405b0b4.html"
//   )
//   .set(
//     "User-Agent",
//     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.63"
//   )
//   .end((err, res) => {
//     console.log(err);

//   });

superagent.get(index_url).end((err, res) => {
  console.log(res.statusCode);
  console.log(res.headers);
  console.log(res.body);
  superagent
    .post("https://fwcbj.linkingcloud.cn/GuaHao/OrderDeptResources")
    .set("Cookie", res.headers["set-cookie"])
    .end((err, res) => {
      console.log(res.statusCode);
      console.log(res.headers);
      console.log(res.body);
    });
});
