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
    <SearchBox
      autocompleteSuggestions={true}
      inputView={({ getAutocomplete, getInputProps, getButtonProps }) => (
        <>
          <div className="sui-search-box__wrapper">
            <input {...getInputProps({ placeholder: 'Search games' })} />
            {getAutocomplete()}
          </div>
          <button {...getButtonProps()}>
            <svg viewBox="0 0 250 250" width="20" height="20" role="img">
              <title>Search</title>
              <path d="M244.186 214.604l-54.379-54.378c-.289-.289-.628-.491-.93-.76 10.7-16.231 16.945-35.66 16.945-56.554C205.822 46.075 159.747 0 102.911 0S0 46.075 0 102.911c0 56.835 46.074 102.911 102.91 102.911 20.895 0 40.323-6.245 56.554-16.945.269.301.47.64.759.929l54.38 54.38c8.169 8.168 21.413 8.168 29.583 0 8.168-8.169 8.168-21.413 0-29.582zm-141.275-44.458c-37.134 0-67.236-30.102-67.236-67.235 0-37.134 30.103-67.236 67.236-67.236 37.132 0 67.235 30.103 67.235 67.236s-30.103 67.235-67.235 67.235z" />
            </svg>
          </button>
        </>
      )}
    />
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
