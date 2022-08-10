import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

interface IListItemProps {
    title: string;
    description: string;
    count: number;
  }
  interface Employee {
    name: string;
    job: string;
    id: number;
    createdAt: string;
    updatedAt: string;
  }
  interface IUserData {
    data: IUser;
  }
  interface IUser {
    email: string;
    first_name: string;
    id: number;
    last_name: string;
    url_avatar: string;
  }
  
  interface Post {
    email: string;
    password: string;
  }

async function post() : Promise<Employee> {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'morpheus', job: 'leader' })
    };
    const response = await fetch('https://reqres.in/api/users', requestOptions);
    return await response.json();
  }
  
  async function postRS(this: any) : Promise<Post>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: "eve.holt@reqres.in", password: "pistol" })
    };
    const response = await fetch('https://reqres.in/api/register', requestOptions);
    return await response.json();
  }
  
  async function register(this: any) : Promise<Post>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: "eve.holt@reqres.in" })
    };
    const response = await fetch('https://reqres.in/api/register', requestOptions);
    return await response.json();
  }
  
  async function login(this: any) : Promise<Post>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: "eve.holt@reqres.in"})
    };
    const response = await fetch('https://reqres.in/api/login', requestOptions);
    return await response.json();
  }
  
  async function put() : Promise<Employee> {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'morpheus', job: 'zion resident' })
    };
    const response = await fetch('https://reqres.in/api/users/2', requestOptions);
    return await response.json();
  }
  
  export function Delete() {
    const [status, setStatus] = useState('');
  
    useEffect(() => {
        fetch('https://reqres.in/api/users/2', { method: 'DELETE' })
            .then(() => setStatus('Delete successful'));
  
    }, []);
  
    return (
      <div className="card text-center m-3">
          <div className="card-body">
              Status: {status}
          </div>
      </div>
  );
    }