import React, { useState, useEffect } from 'react';
import { 
  Table, 
  Button, 
  Space, 
  Modal, 
  Form, 
  Input, 
  message,
  Popconfirm,
  Typography,
  Tag
} from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined,
  UserOutlined 
} from '@ant-design/icons';
import { userService } from '../services';
import type { User, CreateUserDto, UpdateUserDto } from '../types';

const { Title } = Typography;

export const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [form] = Form.useForm();

  // Load users
  const loadUsers = async () => {
    setLoading(true);
    try {
      const response = await userService.getUsers();
      setUsers(response.data.data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      message.error('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // Handle create/update user
  const handleSubmit = async (values: CreateUserDto | UpdateUserDto) => {
    try {
      if (editingUser) {
        await userService.updateUser(editingUser.id, values);
        message.success('User updated successfully');
      } else {
        await userService.createUser(values as CreateUserDto);
        message.success('User created successfully');
      }
      setModalVisible(false);
      setEditingUser(null);
      form.resetFields();
      loadUsers();
    } catch (error) {
      message.error('Failed to save user');
    }
  };

  // Handle delete user
  const handleDelete = async (userId: string) => {
    try {
      await userService.deleteUser(userId);
      message.success('User deleted successfully');
      loadUsers();
    } catch (error) {
      message.error('Failed to delete user');
    }
  };

  // Handle edit user
  const handleEdit = (user: User) => {
    setEditingUser(user);
    form.setFieldsValue({
      name: user.name,
      email: user.email,
    });
    setModalVisible(true);
  };

  // Handle create new user
  const handleCreate = () => {
    setEditingUser(null);
    form.resetFields();
    setModalVisible(true);
  };

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar: string) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {avatar ? (
            <img 
              src={avatar} 
              alt="Avatar" 
              style={{ width: 32, height: 32, borderRadius: '50%' }}
            />
          ) : (
            <UserOutlined style={{ fontSize: 24 }} />
          )}
        </div>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      key: 'status',
      render: () => <Tag color="green">Active</Tag>,
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record: User) => (
        <Space size="middle">
          <Button 
            type="text" 
            icon={<EditOutlined />} 
            onClick={() => handleEdit(record)}
          />
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button 
              type="text" 
              icon={<DeleteOutlined />} 
              danger
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: 16
      }}>
        <Title level={2}>Users</Title>
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          onClick={handleCreate}
        >
          Add User
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={users}
        loading={loading}
        rowKey="id"
        pagination={{
          total: users.length,
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
      />

      <Modal
        title={editingUser ? 'Edit User' : 'Create User'}
        open={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          setEditingUser(null);
          form.resetFields();
        }}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input the email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input />
          </Form.Item>

          {!editingUser && (
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input the password!' }]}
            >
              <Input.Password />
            </Form.Item>
          )}

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                {editingUser ? 'Update' : 'Create'}
              </Button>
              <Button onClick={() => setModalVisible(false)}>
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
