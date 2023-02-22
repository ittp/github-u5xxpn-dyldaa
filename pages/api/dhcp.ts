import type { NextApiRequest, NextApiResponse } from 'next';
import type { Host } from '../../interfaces';

// Fake users data
let N = 100;

let a1 = Array.apply(null, { length: N }).map(Number.call, (i, k) => {
  // console.log(i);

  return { id: i + 1 };
});

const users: User[] = a1;

let dhcp =
  'https://gist.githubusercontent.com/ittp/7ac74b31274b0fd0145999c5cd7b4ca6/raw/d421cd09d838f88adbb2209573587aafbfe23e8d/bind.json';

// const rooms: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Host[]>
) {
  // Get data from your database
  let hosts = fetch(dhcp).then((r) => r.json());
  res.status(200).json({});
}
