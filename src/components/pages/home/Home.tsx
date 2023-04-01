import React from 'react';
import scss from './Home.module.scss';
import { cards, ICardHome } from '../../../utils/mockData';
import { Layout } from '../../ui/layout/Layout';
import Card from './card/Card';

function Home() {
  return (
    <Layout>
      <nav className={scss.wrapper} data-testid="home-page">
        {cards.map((t: ICardHome) => (
          <Card
            key={t.id}
            id={t.id}
            name={t.name}
            description={t.description}
            poster={t.poster}
            like={t.like}
            view={t.view}
          />
        ))}
      </nav>
    </Layout>
  );
}

export default Home;
