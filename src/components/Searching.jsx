import React from 'react';
import {
  SearchBox,
  Facet,
  Sorting,
  PagingInfo,
  ResultsPerPage,
} from '@elastic/react-search-ui';

/**
 * Sidebar - search + filters
 */
const Filtering = () => (
  <>
    <SearchBox autocompleteSuggestions={true} />
    <Facet field="year" label="Year" filterType="any" />
    <Facet field="platforms" label="Platform" filterType="any" />
    <Facet field="players" label="Players" />
    <Facet
      field="studio"
      label="Game Studio"
      isFilterable={true}
      filterType="any"
    />
  </>
);

/**
 * Results header - showing per page + sorting
 */
const Showing = () => (
  <>
    <PagingInfo />
    <ResultsPerPage options={[10, 25, 50]} />
    <Sorting
      label={'Sort by'}
      sortOptions={[
        {
          name: 'Relevance',
          value: '',
          direction: '',
        },
        {
          name: 'Title (A-Z)',
          value: 'title',
          direction: 'asc',
        },
        {
          name: 'Title (Z-A)',
          value: 'title',
          direction: 'desc',
        },
        {
          name: 'Year (oldest)',
          value: 'year',
          direction: 'asc',
        },
        {
          name: 'Year (newest)',
          value: 'year',
          direction: 'desc',
        },
      ]}
    />
  </>
);

export { Filtering, Showing };
