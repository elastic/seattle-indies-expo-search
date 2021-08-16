import React from 'react';

import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';
import { SearchProvider, Results, Paging } from '@elastic/react-search-ui';
import { Layout } from '@elastic/react-search-ui-views';

import Header from './components/Header';
import { Games, Game } from './components/Games';
import { Filtering, Showing } from './components/Searching';
import Footer from './components/Footer';
import { ModalProvider } from './components/Modal';

import './styles/style.scss';

const connector = new AppSearchAPIConnector({
  searchKey: 'search-jya52b2wxev1crdv36pwxmxt',
  engineName: 'search-ui-indie-games-demo',
  hostIdentifier: 'host-2376rb',
});

const configurationOptions = {
  apiConnector: connector,
  autocompleteQuery: {
    suggestions: {
      types: {
        documents: {
          fields: ['title', 'studio'], // Which fields to search for suggestions.
        },
      },
      size: 5, // How many suggestions appear.
    },
  },
  searchQuery: {
    search_fields: {
      title: {},
      studio: {},
    },
    result_fields: {
      title: { raw: {} },
      studio: { raw: {} },
      description: { raw: {} },
      platforms: { raw: {} },
      players: { raw: {} },
      website: { raw: {} },
      logo: { raw: {} },
      logo_animated: { raw: {} },
      screenshots: { raw: {} },
      video: { raw: {} },
      year: { raw: {} },
      modal: { raw: {} },
    },
    // 3. Facet by scores, genre, publisher, and platform (used by Filters)
    facets: {
      year: { type: 'value', size: 5 },
      platforms: { type: 'value', size: 100 },
      players: { type: 'value', size: 25 },
      studio: { type: 'value', size: 100 },
    },
    disjunctiveFacets: ['year', 'platforms', 'studio'],
  },
  initialState: {
    resultsPerPage: 25,
    filters: [
      {
        field: 'year',
        values: [2018], // Show the most recent year's games first
        type: 'any',
      },
    ],
  },
};

const App = () => (
  <SearchProvider config={configurationOptions}>
    <ModalProvider>
      <Header />
      <Layout
        bodyContent={<Results view={Games} renderResult={Game} />}
        sideContent={<Filtering />}
        bodyHeader={<Showing />}
        bodyFooter={<Paging />}
      />
      <Footer />
    </ModalProvider>
  </SearchProvider>
);

export default App;
