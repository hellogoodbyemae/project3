import React from 'react';
import '../Todo.css';
import Footer from '../Footer';
import TodoList from '../TodoList';

export default function Medication() {
  return (
  <>
    <div className="medication">
        <TodoList />
    </div>
    <Footer />
  </>
  );
}