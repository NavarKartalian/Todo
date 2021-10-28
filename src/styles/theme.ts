import { extendTheme,ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { mode } from "@chakra-ui/theme-tools"

interface Props {
  props: any;
}

const breakpoints = createBreakpoints({
    sm: "35em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  })

  const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }

export const theme = extendTheme({
    breakpoints,
    fonts : {
        heading: 'Josefin Sans',
        body: 'Josefin Sans'
    },
    styles: {
        global: (props: Props) => ({
            body: {
                color: mode("hsl(236, 33%, 92%)", "hsl(236, 33%, 92%)")(props),
                bg: mode('hsl(0, 0%, 90%)', 'hsl(235, 21%, 11%)')(props),
            }
        })
    },
    config
})