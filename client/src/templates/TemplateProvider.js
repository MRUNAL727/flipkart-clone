import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { createContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

const TemplateContext = createContext(null);

export default function TemplateProvider({children}){
    const theme = createTheme({
      overrides:{
          MuiDialog:{
              paperWidthSm:{
                 maxWidth: 'unset'
              }
          },
          MuiDialogContent:{
              root:{
                  padding:0,
                  '&:first-child':{
                      paddingTop: 0
                  }
              }
          }
      }
      });

      return(
         <TemplateContext.Provider>
             <ThemeProvider theme={theme}>
                <CssBaseline />
                  {children}
             </ThemeProvider>
         </TemplateContext.Provider>
      )
}