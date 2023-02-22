import type { User } from '../interfaces';
import useSwr from 'swr';
import Link from 'next/link';

import {
  Row,
  Table,
  List,
  Space,
  DatePicker,
  Input,
  InputNumber,
  Form,
  Drawer,
} from 'antd';

import { parser, generator } from 'csv';

import Axios from 'axios';
import { useEffect } from 'react';
import {
  DataTable,
  SearchResponse,
  RowAction,
  SearchInfo,
} from 'antd-data-table';

const fetcher = (url: string) =>
  Axios.request({ url }).then((response) => {
    let { data, headers, status } = response;

    console.log(data, status);

    if (status == 200) {
    }

    let jsonData = JSON.stringify(data);

    return data;
  });

const fetcherF = (url: string) => fetch(url).then((res) => res.json());

let UsersLink = (data) =>
  data.map((user) => (
    <li key={user.id}>
      <Link href="/user/[id]" as={`/user/${user.id}`}>
        {user.name ?? `User ${user.id}`}
      </Link>
    </li>
  ));
let DataForm = (data: any) => {
  let Item = ({ key, name, label, value }) => (
    <Form.Item name={name} label={label} key={key}>
      <Input defaultValue={value} />
    </Form.Item>
  );

  let NumberItem = 'InputNumber';
};
export default function Index() {
  const { data, error, isLoading } = useSwr<User[]>('/api/users', fetcher);

  if (error) return <div>Failed to load users</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  let config: any = {
    drawer: { open: false, closable: true, width: '60vw' },
  };

  return (
    <>
      <Drawer {...config.drawer}>
        <Table
          bordered
          showHeader={true}
          dataSource={dataSource}
          columns={columns}
        />
        ;
      </Drawer>
      <Row></Row>
    </>
  );
}
