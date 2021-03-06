import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'assets/styles/theme';

import Students from 'views/Students/Students';
import Notes from 'views//Notes/Notes';
import Exams from 'views/Exams/Exams';

import GroupContextProvider from 'helpers/GroupContext';
import StudentsContextProvider from 'helpers/StudentsContext';
import ErrorContextProvider from '../../helpers/ErrorContext';

const queryClient = new QueryClient();

const Root = () => {
  return (
    <>
      <Router>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <GroupContextProvider>
              <StudentsContextProvider>
                <ErrorContextProvider>
                  <Routes>
                    <Route path="/students/:group" element={<Students />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/exams" element={<Exams />} />
                    <Route path="/" element={<Navigate to={'/students/A'} />} />
                  </Routes>
                </ErrorContextProvider>
              </StudentsContextProvider>
            </GroupContextProvider>
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Router>
    </>
  );
};

export default Root;
