import React from 'react';

import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';
import { SearchProvider, Results, Paging } from '@elastic/react-search-ui';
import { Layout } from '@elastic/react-search-ui-views';

import Header from '../components/Header';
import { Games, Game } from '../components/Games';
import { Filtering, Showing } from '../components/Searching';
import Footer from '../components/Footer';

import '../styles/style.scss';

const connector = new AppSearchAPIConnector({
  searchKey: 'search-iwy7kncizytudu9oc27tky7e',
  engineName: 'indie-games',
  hostIdentifier: 'host-9sbnnz',
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
      title: {
        // A snippet means that matching search terms will be highlighted via <em> tags.
        snippet: {
          size: 75, // Limit the snippet to 75 characters
          fallback: true, // Fallback to a "raw" result
        },
      },
      studio: { raw: {} },
      description: {
        snippet: {
          size: 1000,
          fallback: true,
        },
      },
      platforms: { raw: {} },
      players: { raw: {} },
      website: { raw: {} },
      logo: { raw: {} },
      logo_animated: { raw: {} },
      screenshots: { raw: {} },
      year: { raw: {} },
    },
    // 3. Facet by scores, genre, publisher, and platform, which we'll use to build filters later.
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
        values: [2018], // Show the latest year's games first
        type: 'any',
      },
    ],
  },
};

export default function App() {
  return (
    <SearchProvider config={configurationOptions}>
      <Header />
      <Layout
        bodyContent={<Results view={Games} renderResult={Game} />}
        sideContent={<Filtering />}
        bodyHeader={<Showing />}
        bodyFooter={<Paging />}
      />
      <Footer />
    </SearchProvider>
  );
}
