"use client"

import { getData, deleteData, createData, getDataById } from '@/core/Database/models/model';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

export default function Home() {
  const [data, setData] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, [data]);

  async function fetchData() {
    try {
      const result = await getData<User>('users');
      const user = await getDataById<User>('users');
      console.log(user)
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteData('users', id);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <AddUserForm />
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDeleteUser(user.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const AddUserForm = () => {
  const [name, setName] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createData('users', { name });
      setName('');
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de l'utilisateur"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};