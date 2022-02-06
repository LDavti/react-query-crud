import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { BlogContainer } from './containers/BlogContainer';
import { theme } from './theme';
import { ContainerWrapper } from './components';

const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
};
function App() {
  const queryClient = new QueryClient(queryClientConfig);
  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <ContainerWrapper>
            <BlogContainer />
          </ContainerWrapper>
        </StyledEngineProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
