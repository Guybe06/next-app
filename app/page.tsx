"use client"

import { getData, deleteData, createData, getDataById } from '@/core/Database/models/model';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '@/assets/css/app.module.css';
import { invoke } from '@tauri-apps/api/tauri'

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
    <div className={styles.page}>
      <h1>Liste des utilisateurs</h1>
      <AddUserForm />
      <Greet />
      <div>
        {data.map((user) => (
          <div key={user.id} className={styles.comp}>
            <div>
              <span>{user.name}</span>
            </div>
            <button onClick={() => handleDeleteUser(user.id)}>Supprimer</button>
          </div>
        ))}
      </div>
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


function Greet() {
  useEffect(() => {
    invoke<string>('greet', { name: 'Nextmlmllm.js' })
      .then(console.log)
      .catch(console.error)
  }, [])

  return <></>
}