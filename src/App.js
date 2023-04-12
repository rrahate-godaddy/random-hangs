import MainApp from './mainapp';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles'; 



function App() {

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Courier New',
        textTransform: 'none',
        fontSize: 16,
      },
    },
  });

  const router = createBrowserRouter([
      {
        path: "/",
        element: <MainApp />,
      },
      {
        path: "/:id",
        element: <MainApp />,
      },
    ]
  );


  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
