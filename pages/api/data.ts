import axios from 'axios';

let hosts = async (token) =>
  await axios
    .get(
      'https://gist.githubusercontent.com/ittp/10b49dd3ee046ac6c94e97e9b194b480/raw/b5448052c4f15149124a3bf0770917a834796c70/hosts.json',
      {
        headers: {
          //    Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response.data;
    });

console.log(hosts);
import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../interfaces';

// Fake users data
let N = hosts.length;
let a1 = Array.apply(null, { length: N }).map(Number.call, (i, k) => {
  console.log(i);

  return { id: i + 1 };
});

const users: User[] = a1;

// const rooms: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }]

// let rci = async (router, user, request) => {

//   let { username, password } = user
//   let { key } = router
//   await fetch('https://parfenovskaya.keenetic.pro/rci/', {
//     headers: {
//       accept: 'application/json, text/plain, */*',
//       //  'accept-language': 'ru,en;q=0.9,cy;q=0.8,mt;q=0.7',
//       //  'cache-control': 'no-cache',
//       'content-type': 'application/json;charset=UTF-8',
//       pragma: 'no-cache',
//       //'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Yandex";v="23"',
//       // 'sec-ch-ua-mobile': '?0',
//       // 'sec-ch-ua-platform': '"Windows"',
//       //'sec-fetch-dest': 'empty',
//       //'sec-fetch-mode': 'cors',
//       //'sec-fetch-site': 'same-origin',
//       cookie: 'KCPNALOZMNYLBKFS=POVLUKGMRDLMSSFC; sysmode=router',
//       Referer: 'https://parfenovskaya.keenetic.pro/',
//       //'Referrer-Policy': 'strict-origin-when-cross-origin',
//     },
//     body: '[{"whoami":{}},{"show":{"ip":{"hotspot":{}}}}]',
//     method: 'POST',
//   });
// };
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  let items = [];
  // Get data from your database
  let data = await hosts('b5448052c4f15149124a3bf0770917a834796c70');

  let dataItem = Object.values(data['zabbix_export']).map((item, key) => [
    key,
    ...item,
  ]);
  console.log(dataItem);

  res.status(200).json(dataItem);
}
