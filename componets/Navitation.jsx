'use client';

import { useState } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const renderContent = () => {
    switch(activePage) {
      case 'dashboard':
        return <div className={styles.content}><h2>Dashboard</h2><p>Welcome to your dashboard. Here you can see an overview of your data.</p></div>;
      case 'budgets':
        return <div className={styles.content}><h2>Budgets</h2><p>Manage your budgets and financial planning here.</p></div>;
      case 'reports':
        return <div className={styles.content}><h2>Reports</h2><p>View and generate detailed reports.</p></div>;
      case 'help':
        return <div className={styles.content}><h2>Help Center</h2><p>Find answers to your questions and learn how to use the app.</p></div>;
      case 'settings':
        return <div className={styles.content}><h2>Settings</h2><p>Configure your application preferences.</p></div>;
      default:
        return <div className={styles.content}><h2>Dashboard</h2><p>Welcome to your dashboard.</p></div>;
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.sidebar}>
        <h1 className={styles.logo}>MyApp</h1>
        <ul className={styles.menu}>
          <li 
            className={activePage === 'dashboard' ? styles.active : ''}
            onClick={() => setActivePage('dashboard')}
          >
            Dashboard
          </li>
          <li 
            className={activePage === 'budgets' ? styles.active : ''}
            onClick={() => setActivePage('budgets')}
          >
            Budgets
          </li>
          <li 
            className={activePage === 'reports' ? styles.active : ''}
            onClick={() => setActivePage('reports')}
          >
            Reports
          </li>
          <li 
            className={activePage === 'help' ? styles.active : ''}
            onClick={() => setActivePage('help')}
          >
            Help
          </li>
          <li 
            className={activePage === 'settings' ? styles.active : ''}
            onClick={() => setActivePage('settings')}
          >
            Settings
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        {renderContent()}
      </main>
    </div>
  );
};

export default Navigation;