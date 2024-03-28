import { extendTheme, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools"
const theme = extendTheme(
  {
    colors: {
      brand: {
        100: "#8AC919",
      },
    },
    fonts: {
      heading: "Montserrat",
      body: "Montserrat",
    },

    components:{
      Button:{
        variants: {
          primary:(props: Record<string, any>) => ({
            rounded:"none",
            _focus:{
              ring:2,
              ringColor:"#8AC919",
            },
            backgroundColor:mode("#8AC919","#b5e65a")(props),
              color:mode("#2a2a2a","#030303")(props),
              _hover:{
                backgroundColor:mode("#aeff16","#b5e65a")(props),
                color:mode("#2a2a2a","#030303")(props),

              }
          }),

        },
      },
        Input:{
            sizes:{
                md:{
                    field:{
                        borderRadius:"none"
                    }
                }
            }
        },
        Checkbox:{
          baseStyle:{
            control:{
              _focus: {
                ring:2,
                ringColor:" #8AC919"
              }
            }
          }
        }
        
    }
  },
  withDefaultColorScheme({
    colorScheme:"#8AC919"
  }),
  withDefaultVariant({
    variant:"filled",
    components:["Input","Select","Textarea"]
  })
 
);

export default theme;
